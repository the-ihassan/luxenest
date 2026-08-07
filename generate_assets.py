from pathlib import Path
from PIL import Image, ImageOps

root = Path('d:/luxenest')
source = root / 'Copilot_20260806_232653.png'
out = root / 'public'
out.mkdir(exist_ok=True)

img = Image.open(source).convert('RGBA')

# Main logo
img.save(out / 'logo.png')

# App icons
img.resize((192, 192), Image.Resampling.LANCZOS).save(out / 'icon-192.png')
img.resize((512, 512), Image.Resampling.LANCZOS).save(out / 'icon-512.png')
img.resize((32, 32), Image.Resampling.LANCZOS).save(out / 'icon-32.png')
img.resize((16, 16), Image.Resampling.LANCZOS).save(out / 'icon-16.png')

# Apple touch icon
ImageOps.pad(img.resize((180, 180), Image.Resampling.LANCZOS), (180, 180), color=(255, 255, 255, 0)).save(out / 'apple-touch-icon.png')

# Favicon
favicon = img.resize((32, 32), Image.Resampling.LANCZOS)
favicon.save(out / 'favicon.ico', format='ICO')

# Open Graph image
og = Image.new('RGBA', (1200, 630), (251, 248, 242, 255))
logo = img.resize((360, 360), Image.Resampling.LANCZOS)
logo_bg = Image.new('RGBA', logo.size, (255, 255, 255, 255))
logo = Image.alpha_composite(logo_bg, logo)

# Place logo centered slightly left with title text area
og.paste(logo, (90, 135), logo)
from PIL import ImageDraw, ImageFont

draw = ImageDraw.Draw(og)
font_title = ImageFont.load_default()
font_title_bold = ImageFont.load_default()
# simple text placement
text = 'LuxeNest'
text_w = draw.textlength(text, font=font_title_bold)
draw.text((520, 250), text, fill=(11, 11, 12, 255), font=font_title_bold)
draw.text((520, 285), 'Premium style, fashion, beauty and home guides', fill=(96, 96, 96, 255), font=font_title)
og.convert('RGB').save(out / 'og-image.jpg')
print('assets generated')
