from pathlib import Path
import pdfplumber
root = Path('e:/CRCSI')
paths = ['.docs/MAPA TOURS - Portafolio de experiencias. (1).pdf', '.docs/PORTAFOLIO ONNE COLOSO...-1-1.pdf', '.docs/Portafolio SUNSET TRAVEL COLOMBIA SUCRE.pdf']
tokens = ['instagram', 'facebook', 'twitter', 'youtube', 'tiktok', 'whatsapp', 'linkedin', 'http', 'www']
for rel in paths:
    p = root / rel
    print('FILE', p)
    if not p.exists():
        print('MISSING')
        continue
    with pdfplumber.open(str(p)) as pdf:
        found = set()
        for i, page in enumerate(pdf.pages[:5]):
            words = page.extract_words()
            for w in words:
                text = w.get('text','').lower()
                for token in tokens:
                    if token in text:
                        found.add(text)
            if found:
                print('PAGE', i, 'FOUND', found)
                break
        if not found:
            print('NO TOKEN WORDS')
