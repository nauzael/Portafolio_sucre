from pathlib import Path
import pdfplumber
root=Path("e:/CRCSI")
paths=[".docs/MAPA TOURS - Portafolio de experiencias. (1).pdf", ".docs/PORTAFOLIO ONNE COLOSO...-1-1.pdf", ".docs/Portafolio SUNSET TRAVEL COLOMBIA SUCRE.pdf"]
for rel in paths:
    p=root/rel
    print("FILE", p)
    if not p.exists():
        print("MISSING")
        continue
    with pdfplumber.open(str(p)) as pdf:
        text = ""
        for page in pdf.pages:
            text += page.extract_text() or ""
    lows=text.lower()
    tokens=["instagram","facebook","twitter","youtube","tiktok","wa.me","whatsapp","linkedin","http","www."]
    found=[kw for kw in tokens if kw in lows]
    print("FOUND", found)
    for kw in found:
        idx=lows.find(kw)
        print("SNIP", text[max(0,idx-100):idx+220].replace("\n"," "))

