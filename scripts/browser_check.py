"""Browser checks. Run against a Vite server at http://127.0.0.1:5173.

Requires the optional Python Playwright package and Chromium.
Screenshots are written to the approved temporary directory, not the app.
"""
from pathlib import Path
from playwright.sync_api import sync_playwright, expect

OUTPUT = Path('C:/Users/gilbe/AppData/Local/Temp/opencode')

with sync_playwright() as p:
    browser = p.chromium.launch(headless=True)
    page = browser.new_page(viewport={'width': 1440, 'height': 1000}, device_scale_factor=1)
    errors = []
    failed_local_requests = []
    page.on('pageerror', lambda error: errors.append(str(error)))
    page.on('response', lambda response: failed_local_requests.append(response.url) if response.status >= 400 and '127.0.0.1' in response.url else None)
    page.goto('http://127.0.0.1:5173', wait_until='networkidle')
    expect(page).to_have_title('Felinaria: El Último Presagio — Un mundo por descubrir')
    expect(page.locator('h1')).to_have_count(1)
    page.screenshot(path=str(OUTPUT / 'felinaria-desktop-top.png'))

    # All appearances work; the missing white art is explicitly identified.
    page.locator('#personajes').scroll_into_view_if_needed()
    for name, filename in [('gris', 'gris.webp'), ('oscuro', 'oscuro.webp'), ('blanco (imagen pendiente)', 'pendiente.svg'), ('crema', 'crema.webp')]:
        button = page.get_by_role('button', name=f'Pelaje {name}', exact=True)
        button.click()
        expect(button).to_have_attribute('aria-pressed', 'true')
        assert page.locator('.protagonist-art img').get_attribute('src').endswith(filename)
    assert page.locator('.protagonist-art img').bounding_box()['height'] <= page.locator('.protagonist-art').bounding_box()['height'] + 1

    # Filtering changes the set navigated by the lightbox.
    page.get_by_role('button', name='Personajes', exact=True).click()
    expect(page.locator('.gallery-item')).to_have_count(3)
    opener = page.get_by_role('button', name='Ampliar: El protagonista · Crema', exact=True)
    opener.click()
    expect(page.get_by_role('dialog')).to_be_visible()
    expect(page.locator('#lightbox-title')).to_have_text('El protagonista · Crema')
    page.keyboard.press('ArrowRight')
    expect(page.locator('#lightbox-title')).to_have_text('El protagonista · Gris')
    page.get_by_role('button', name='Imagen anterior').click()
    expect(page.locator('#lightbox-title')).to_have_text('El protagonista · Crema')
    page.keyboard.press('ArrowLeft')
    expect(page.locator('#lightbox-title')).to_have_text('El protagonista · Oscuro')
    for _ in range(6):
        page.keyboard.press('Tab')
        assert page.evaluate("document.querySelector('dialog').contains(document.activeElement)")
    page.wait_for_function("document.querySelector('dialog img').complete")
    assert page.get_by_role('button', name='Cerrar galería').bounding_box()['y'] >= 0
    page.screenshot(path=str(OUTPUT / 'felinaria-lightbox.png'))
    page.keyboard.press('Escape')
    expect(page.get_by_role('dialog')).to_have_count(0)
    expect(opener).to_be_focused()
    assert page.evaluate('document.body.style.overflow') != 'hidden'
    page.get_by_role('button', name='Arte de portada', exact=True).click()
    expect(page.locator('.gallery-item')).to_have_count(1)
    page.get_by_role('button', name='Ampliar: Un primer vistazo a Felinaria').click()
    page.get_by_role('button', name='Imagen siguiente').click()
    expect(page.locator('#lightbox-title')).to_have_text('Un primer vistazo a Felinaria')
    page.get_by_role('button', name='Cerrar galería').click()
    page.get_by_role('button', name='Todo', exact=True).click()
    expect(page.locator('.gallery-item')).to_have_count(4)

    # Reveal all sections and ensure lazy-loaded resources are healthy.
    page.emulate_media(reduced_motion='reduce')
    for section in page.locator('main section').all():
        section.scroll_into_view_if_needed()
    page.wait_for_function("Array.from(document.images).every(img => img.complete && img.naturalWidth > 0)")
    page.evaluate('window.scrollTo(0, 0)')
    page.screenshot(path=str(OUTPUT / 'felinaria-desktop-full.png'), full_page=True)

    for width in [1440, 1024, 768, 390, 320]:
        page.set_viewport_size({'width': width, 'height': 900})
        assert page.evaluate('document.documentElement.scrollWidth <= window.innerWidth'), f'Horizontal overflow at {width}px'
        if width <= 900:
            page.evaluate('window.scrollTo(0, 0)')
            page.get_by_role('button', name='Abrir menú').click()
            expect(page.get_by_role('navigation', name='Navegación principal')).to_be_visible()
            page.get_by_role('navigation', name='Navegación principal').get_by_role('link', name='Mundo', exact=True).click()
            expect(page.get_by_role('button', name='Abrir menú')).to_have_attribute('aria-expanded', 'false')
            assert page.url.endswith('#mundo')
            page.get_by_role('button', name='Abrir menú').click()
            page.keyboard.press('Escape')
            expect(page.get_by_role('button', name='Abrir menú')).to_be_focused()
        if width == 768:
            page.evaluate('window.scrollTo(0, 0)')
            page.screenshot(path=str(OUTPUT / 'felinaria-tablet-top.png'))

    page.set_viewport_size({'width': 390, 'height': 844})
    page.evaluate('window.scrollTo(0, 0)')
    page.screenshot(path=str(OUTPUT / 'felinaria-mobile-top.png'))
    page.screenshot(path=str(OUTPUT / 'felinaria-mobile-full.png'), full_page=True)
    page.get_by_role('button', name='Ampliar: El protagonista · Gris', exact=True).click()
    expect(page.get_by_role('dialog')).to_be_visible()
    assert page.locator('dialog').evaluate('(el) => el.scrollWidth <= el.clientWidth')
    page.get_by_role('button', name='Cerrar galería').click()

    assert not errors, f'JavaScript errors: {errors}'
    assert not failed_local_requests, f'Failed resources: {failed_local_requests}'
    print('PASS: skins, filters, lightbox, keyboard, focus, mobile menu, image routes, reduced motion, 5 responsive widths, and no JavaScript errors.')
    print(f'Screenshots: {OUTPUT}')
    browser.close()
