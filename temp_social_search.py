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
    lows = text.lower()
    keywords = ['instagram','facebook','twitter','youtube','tiktok','wa.me','whatsapp','linkedin']
    found = [kw for kw in keywords if kw in lows]
    print('FOUND', found)
    for kw in found:
        idx = lows.find(kw)
        snippet = text[max(0,idx-80):idx+200].replace('\n',' ')
        print('SNIPPET', snippet)
