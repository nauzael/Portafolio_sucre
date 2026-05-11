from pathlib import Path
import sys
try:
    import fitz
except Exception:
    import subprocess
    subprocess.check_call([sys.executable, '-m', 'pip', 'install', 'PyMuPDF'])
    import fitz
for pdf_path in Path('.docs').glob('*.pdf'):
    print('PDF:', pdf_path.name)
    doc = fitz.open(pdf_path)
    for i in range(len(doc)):
        page = doc[i]
        image_list = page.get_images(full=True)
        print(' page', i, 'images', len(image_list))
        for img_index, img in enumerate(image_list):
            xref = img[0]
            base_image = doc.extract_image(xref)
            image_bytes = base_image['image']
            ext = base_image['ext']
            out_path = Path('sucre-turismo/public/brochures') / f'{pdf_path.stem}-page{i}-img{img_index}.{ext}'
            out_path.parent.mkdir(parents=True, exist_ok=True)
            out_path.write_bytes(image_bytes)
            print('  saved', out_path)
