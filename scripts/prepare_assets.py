"""Generate web-sized copies of the supplied art; never alter public/imgs originals.

Optional tooling: python -m pip install Pillow
Run from the repository root: python scripts/prepare_assets.py
"""
from pathlib import Path
from PIL import Image

ROOT = Path(__file__).resolve().parents[1]
SOURCE = ROOT / 'public' / 'imgs'
OUTPUT = ROOT / 'public' / 'images'


def export(source, destination, size, quality=88, crop=None):
    with Image.open(SOURCE / source) as image:
        if crop:
            image = image.crop(crop)
        image.thumbnail(size, Image.Resampling.LANCZOS)
        target = OUTPUT / destination
        target.parent.mkdir(parents=True, exist_ok=True)
        image.save(target, 'WEBP', quality=quality, method=6)
        print(f'{destination}: {image.width} x {image.height}, {target.stat().st_size // 1024} KB')


export('portada.png', 'hero/portada.webp', (1672, 941), 90)
export('portada.png', 'hero/portada-small.webp', (960, 540))
export('portada.png', 'hero/portada-mobile.webp', (780, 941), crop=(0, 0, 780, 941))
export('portada.png', 'gallery/portada.webp', (960, 540))
for source, name in [('prota2.png', 'crema'), ('prota3.png', 'oscuro'), ('prota4.png', 'gris')]:
    export(source, f'characters/protagonista-{name}.webp', (600, 800))
    export(source, f'gallery/protagonista-{name}.webp', (360, 480))
