from pathlib import Path
import sys
try:
    import pypdf
except Exception:
    import subprocess
    subprocess.check_call([sys.executable, '-m', 'pip', 'install', 'pypdf'])
    import pypdf
for path in Path('.docs').glob('*.pdf'):
    print('\n=== ' + path.name + ' ===')
    try:
        reader = pypdf.PdfReader(path)
        text = []
        for i, page in enumerate(reader.pages[:5]):
            page_text = page.extract_text()
            if page_text:
                text.extend(page_text.splitlines())
        for line in text[:80]:
            print(line)
    except Exception as e:
        print('ERROR', e)
