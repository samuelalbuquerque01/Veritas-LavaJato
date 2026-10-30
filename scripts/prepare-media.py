"""One-time local import. Originals are read only; web derivatives go to public."""
import sys, json, subprocess
from pathlib import Path
from PIL import Image, ImageOps, ImageDraw
import pillow_heif
import imageio_ffmpeg

pillow_heif.register_heif_opener()
root = Path(__file__).resolve().parents[1]
source = Path(sys.argv[1])
out = root / 'public/images/works'
out.mkdir(parents=True, exist_ok=True)
tiles, manifest = [], []
for file in sorted(source.iterdir()):
    if file.suffix.lower() not in ('.heic', '.jpg', '.jpeg', '.png'):
        continue
    with Image.open(file) as original:
        photo = ImageOps.exif_transpose(original).convert('RGB')
        photo.thumbnail((1800, 1800))
        name = file.stem.lower()
        photo.save(out / (name + '.webp'), quality=84)
        manifest.append({'id': name, 'width': photo.width, 'height': photo.height, 'original': file.name})
        tile = ImageOps.contain(photo, (175, 160))
        canvas = Image.new('RGB', (190, 190), '#202020')
        canvas.paste(tile, ((190-tile.width)//2, 0))
        ImageDraw.Draw(canvas).text((8, 168), name, fill='white')
        tiles.append(canvas)
sheet = Image.new('RGB', (190*7, 190*((len(tiles)+6)//7)), '#101010')
for i, tile in enumerate(tiles): sheet.paste(tile, ((i%7)*190, (i//7)*190))
sheet.save(root / '.impeccable/contact-sheet.jpg')
(root / '.impeccable/media-manifest.json').write_text(json.dumps(manifest, indent=2), encoding='utf-8')
print(f'Converted {len(tiles)} photographs; originals preserved.')

downloads = source.parents[1]
posters = root / 'public/images/posters'
posters.mkdir(parents=True, exist_ok=True)
for src, dest in [('WhatsApp Image 2026-10-29 at 16.34.35 (1).jpeg','services'),('WhatsApp Image 2026-10-29 at 16.34.35.jpeg','delivery'),('WhatsApp Image 2026-10-29 at 16.34.34.jpeg','promotion')]:
    with Image.open(downloads / src) as image:
        image.save(posters / (dest+'.jpg'), quality=92)
        if dest == 'delivery':
            # Extract the supplied brand only, without redrawing or stretching it.
            image.crop((264, 62, 851, 279)).save(root / 'public/images/logo.png')

ffmpeg = imageio_ffmpeg.get_ffmpeg_exe()
videos = root / 'public/videos'
videos.mkdir(parents=True, exist_ok=True)
video_manifest = []
for file in sorted(source.glob('*.MOV')):
    name = file.stem.lower()
    dest = videos / (name+'.mp4')
    command = [ffmpeg, '-y', '-i', str(file), '-vf', 'scale=720:1280:force_original_aspect_ratio=decrease,scale=trunc(iw/2)*2:trunc(ih/2)*2', '-c:v', 'libx264', '-crf', '25', '-preset', 'fast', '-pix_fmt', 'yuv420p', '-an', '-movflags', '+faststart', str(dest)]
    result = subprocess.run(command, capture_output=True)
    if result.returncode:
        print('VIDEO FAILED', file.name, result.stderr.decode(errors='replace')[-300:])
        continue
    subprocess.run([ffmpeg, '-y', '-ss', '0.3', '-i', str(dest), '-frames:v', '1', str(videos / (name+'.jpg'))], capture_output=True, check=True)
    video_manifest.append(name)
(root / '.impeccable/video-manifest.json').write_text(json.dumps(video_manifest), encoding='utf-8')
print(f'Converted {len(video_manifest)} videos to H.264 MP4 without audio; originals preserved.')
