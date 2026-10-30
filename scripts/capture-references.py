"""Capture external design references for a local, documented comparison."""
import json
import re
import sys
from pathlib import Path
from playwright.sync_api import sync_playwright

target = Path('.impeccable/references')
target.mkdir(parents=True, exist_ok=True)
references = [
    ('skypark', 'https://ekomyjniaskypark.pl/'),
    ('polestar', 'https://www.polestar.com/de/'),
    ('under', 'https://under.no/'),
]
if len(sys.argv)>1:
    references=[entry for entry in references if entry[0] in sys.argv[1:]]
results = []
with sync_playwright() as p:
    browser = p.chromium.launch(channel='chrome', headless=True, args=['--disable-gpu'])
    for name, url in references:
        page = browser.new_page(viewport={'width':1440,'height':1000})
        try:
            response = page.goto(url, wait_until='domcontentloaded', timeout=25000)
            page.wait_for_timeout(2500)
            if name == 'polestar':
                reject = page.get_by_role('button', name=re.compile('Rejeitar|Reject all|Alle ablehnen', re.I))
                if reject.count():
                    reject.first.click()
                    page.wait_for_timeout(1000)
            page.screenshot(path=str(target / (name+'.png')))
            results.append({'name':name,'url':page.url,'status':response.status if response else None,'title':page.title()})
        except Exception as error:
            results.append({'name':name,'url':url,'error':str(error)[:300]})
        page.close()
    browser.close()
(target/'results.json').write_text(json.dumps(results,indent=2),encoding='utf-8')
print(json.dumps(results))
