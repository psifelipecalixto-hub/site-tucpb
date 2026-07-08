import urllib.request
import re
import json
import sys

url = "https://drive.google.com/file/d/1UjjoYlEP40VrvXP2DUhgWvbHoMWBWAAm/view?usp=sharing"
# extract ID
match = re.search(r'/d/([a-zA-Z0-9_-]+)', url)
if not match:
    print("No ID found")
    sys.exit(1)
id = match.group(1)
download_url = f"https://drive.google.com/uc?export=download&id={id}"

try:
    urllib.request.urlretrieve(download_url, "temp.pdf")
    import pypdf
    reader = pypdf.PdfReader("temp.pdf")
    text = ""
    for page in reader.pages:
        text += page.extract_text() + "\n"
    print(text)
except Exception as e:
    print("Error:", e)
