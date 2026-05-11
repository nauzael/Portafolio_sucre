from pathlib import Path
root = Path('e:/CRCSI')
files = ['.docs/MAPA TOURS - Portafolio de experiencias. (1).pdf', '.docs/PORTAFOLIO ONNE COLOSO...-1-1.pdf', '.docs/Portafolio SUNSET TRAVEL COLOMBIA SUCRE.pdf']
for f in files:
    p = root / f
    print('FILE', p)
    if p.exists():
        print('SIZE', p.stat().st_size)
        try:
            from pypdf import PdfReader
            reader = PdfReader(str(p))
            text = ''
            for page in reader.pages:
                page_text = page.extract_text()
                if page_text:
                    text += page_text
            text_low = text.lower()
            for kw in ['instagram','facebook','twitter','whatsapp','.com','@']:
                if kw in text_low:
                    print('FOUND', kw)
            print('TEXTSNIPPET', text[:1200].replace('\n',' '))
        except Exception as e:
            print('ERR PDF', e)
    else:
        print('MISSING')
