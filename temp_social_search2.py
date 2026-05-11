from pathlib import Path
root = Path('e:/CRCSI')
paths = ['.docs/MAPA TOURS - Portafolio de experiencias. (1).pdf', '.docs/PORTAFOLIO ONNE COLOSO...-1-1.pdf', '.docs/Portafolio SUNSET TRAVEL COLOMBIA SUCRE.pdf']
for rel in paths:
    p = root / rel
    print('FILE', p)
    if not p.exists():
        print('MISSING')
        continue
    data = p.read_bytes()
    text = data.decode('latin-1', errors='ignore')
    tokens = ['http', 'www.', 'instagram', 'facebook', 'twitter', 'youtube', 'tiktok', 'linkedin', 'wa.me', 'whatsapp']
    found = [kw for kw in tokens if kw in text.lower()]
    print('FOUND', found)
    for kw in found:
        idx = text.lower().find(kw)
        print('SNIP', text[max(0, idx-100):idx+220].replace('\n',' '))
