"""Requires the optional Python playwright package and a local Chrome install."""
import json
import os
from pathlib import Path
from playwright.sync_api import sync_playwright, expect

root = Path(__file__).resolve().parents[1]
review = root / '.impeccable/review'
review.mkdir(parents=True, exist_ok=True)
with sync_playwright() as p:
    browser = p.chromium.launch(channel='chrome', headless=True, args=['--disable-gpu'])
    page = browser.new_page(viewport={'width':1440, 'height':1000}, device_scale_factor=1)
    errors = []
    page.on('pageerror', lambda error: errors.append(str(error)))
    page.on('console', lambda msg: print('CONSOLE', msg.text) if msg.type == 'error' else None)
    page.on('requestfailed', lambda request: print('REQUEST FAILED', request.url, request.failure))
    page.goto(os.environ.get('VERITAS_TEST_URL', 'http://127.0.0.1:3100'), wait_until='networkidle')
    page.evaluate('document.fonts.ready')
    page.screenshot(path=str(review / 'desktop-preview.png'), full_page=True)
    assert page.locator('h1').count() == 1
    assert page.title().startswith('Veritas Lava Jato')
    assert page.locator('html').get_attribute('lang') == 'pt-BR'
    for link in page.locator('a[href^="#"]').all():
        target = link.get_attribute('href')
        assert target != '#' and page.locator(target).count() == 1, target
    for link in page.locator('a[target="_blank"]').all():
        assert 'noopener' in link.get_attribute('rel')
    assert page.locator('.gallery-item').count() == 6
    page.get_by_role('button', name='Ver mais trabalhos').click()
    expect(page.locator('.gallery-item')).to_have_count(12)
    for name in ['Carros', 'Motos', 'Detalhes', 'Todos']:
        page.get_by_role('button', name=name, exact=True).click()
        expect(page.get_by_role('button', name=name, exact=True)).to_have_attribute('aria-pressed', 'true')
        assert page.locator('.gallery-item').count() > 0
    photo = page.locator('.gallery-image-button').first
    photo.click()
    assert page.locator('dialog').is_visible()
    assert page.evaluate('document.body.style.overflow') == 'hidden'
    before = page.locator('#lightbox-caption').inner_text()
    page.keyboard.press('ArrowRight')
    assert page.locator('#lightbox-caption').inner_text() != before
    page.keyboard.press('ArrowLeft')
    assert page.locator('#lightbox-caption').inner_text() == before
    page.locator('.lightbox-next').click()
    for _ in range(8):
        page.keyboard.press('Tab')
        assert page.evaluate('document.querySelector("dialog").contains(document.activeElement)')
    page.keyboard.press('Escape')
    assert not page.locator('dialog').is_visible()
    page.wait_for_function('document.body.style.overflow !== "hidden"')
    expect(photo).to_be_focused()
    photo.click()
    page.get_by_role('button', name='Fechar foto', exact=True).click()
    assert not page.locator('dialog').is_visible()
    while page.get_by_role('button', name='Ver mais trabalhos').count():
        page.get_by_role('button', name='Ver mais trabalhos').click()
    for video in page.locator('video').all():
        assert video.get_attribute('preload') == 'none'
        assert video.get_attribute('autoplay') is None
        assert video.get_attribute('playsinline') is not None
    first_video = page.locator('video').first
    first_video.scroll_into_view_if_needed()
    first_video.evaluate('(video) => video.load()')
    page.wait_for_function('document.querySelector("video").readyState >= 1')
    assert first_video.evaluate('(video) => video.videoWidth > 0 && !video.error')
    page.get_by_role('button', name='Todos', exact=True).click()
    for width, height, filename in [(1440,1000,'desktop'),(390,844,'mobile'),(768,1024,'tablet'),(320,740,'small-mobile')]:
        page.set_viewport_size({'width':width,'height':height})
        page.emulate_media(reduced_motion='reduce')
        page.evaluate('window.scrollTo(0,0)')
        # Trigger lazy photos once, then capture the settled page from its top.
        for y in range(0, page.evaluate('document.body.scrollHeight'), 650):
            page.evaluate('(y) => window.scrollTo(0,y)', y)
            page.wait_for_timeout(80)
        page.evaluate('window.scrollTo(0,0)')
        page.wait_for_timeout(800)
        page.locator('img').evaluate_all('(images) => Promise.all(images.map(img => img.decode().catch(() => {})))')
        assert page.locator('img').evaluate_all('(images) => images.every(img => img.complete && img.naturalWidth > 0)')
        assert page.evaluate('document.documentElement.scrollWidth <= window.innerWidth'), f'Overflow at {width}'
        assert page.locator('.hero-visual img').evaluate('(img) => img.complete && img.naturalWidth > 0')
        if width <= 800:
            toggle = page.locator('.menu-toggle')
            toggle.click()
            expect(toggle).to_have_attribute('aria-expanded', 'true')
            page.keyboard.press('Escape')
            expect(toggle).to_have_attribute('aria-expanded', 'false')
            toggle.click()
            page.locator('#main-navigation a[href="#servicos"]').click()
            expect(toggle).to_have_attribute('aria-expanded', 'false')
            page.evaluate('window.scrollTo(0,0)')
        page.wait_for_function('window.scrollY === 0')
        page.wait_for_timeout(500)
        page.screenshot(path=str(review / (filename+'.png')), full_page=True, animations='disabled', style='.site-header { position: relative !important; } .floating-whatsapp { position: absolute !important; top: calc(100vh - 68px); bottom: auto !important; }')
    assert not errors, errors
    result = {'status':'passed','viewports':[1440,390,768,320], 'checks':['menu','anchors','links','filters','show more','modal','keyboard','focus trap','focus restoration','scroll lock','video metadata','no horizontal overflow','no JS errors']}
    (review / 'browser-results.json').write_text(json.dumps(result, indent=2), encoding='utf-8')
    print(json.dumps(result))
    browser.close()
