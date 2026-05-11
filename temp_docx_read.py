from pathlib import Path
from docx import Document
root = Path('e:/CRCSI')
paths=['.docs/Informacion oferta turistica para evento CRCI.docx']
for rel in paths:
    p=root/rel
    print('FILE', p)
    if not p.exists():
        print('MISSING')
        continue
    doc = Document(str(p))
    text = '\n'.join(p.text for p in doc.paragraphs)
    print(text[:2000])
