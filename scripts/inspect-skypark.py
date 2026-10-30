from pathlib import Path
from playwright.sync_api import sync_playwright
import json

url='https://land-book.com/websites/11744-reczna-myjnia-samochodowa-auto-detailing-pranie-i-czyszczenie-tapicerki-woskowanie-korekta-i-zabezpieczenie-lakieru-powloka-ceramiczna-gdansk-oliwa-skypark'
with sync_playwright() as p:
    browser=p.chromium.launch(channel='chrome',headless=True,args=['--disable-gpu'])
    page=browser.new_page(viewport={'width':1440,'height':1000})
    page.goto(url,wait_until='domcontentloaded',timeout=30000)
    page.wait_for_timeout(2500)
    records=page.locator('img').evaluate_all('(images)=>images.map(i=>({alt:i.alt,src:i.currentSrc||i.src,width:i.naturalWidth,height:i.naturalHeight}))')
    print(json.dumps(records[:8]))
    for record in records:
        if 'skypark' in record['alt'].lower() and record['width']>500:
            response=page.request.get(record['src'])
            if response.ok:
                Path('.impeccable/references/skypark-archive.webp').write_bytes(response.body())
                print('Saved original archived project image')
                break
    page.screenshot(path='.impeccable/references/skypark-gallery.png')
    browser.close()
