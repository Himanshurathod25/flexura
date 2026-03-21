import os
import re

directory = r'C:\Users\Himan\Downloads\flexura\flexura\src'
new_url = 'https://wa.me/918009613543?text=Hi%20Flexura%2C%20I%20found%20your%20website%20and%20would%20like%20to%20know%20more%20about%20your%20services.'

# regex to find href="https://wa.me/..." or href={'https://wa.me/...'}
href_regex = re.compile(r'href=(["\']|{\s*["\'])https://wa\.me/[^"\']}*(["\']|\s*})')

def fix_links(filepath):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    original_content = content
    
    # 1. Update the URL first
    content = re.sub(
        r'(href=(?:["\']|{\s*["\']))https://wa\.me/[0-9]+((?:["\']|\s*}))',
        r'\1' + new_url + r'\2',
        content
    )

    # 2. Add target="_blank" and rel="noopener noreferrer" if it's an anchor tag.
    # We look for <a ...> or <Button component as="a"
    # Actually, let's just use regex to find `<a ... href="https://wa.me/...` 
    # and make sure it has target="_blank" rel="noopener noreferrer"
    # A generic approach: find elements with the new URL
    
    def add_attrs(match):
        tag_content = match.group(0)
        if 'target=' not in tag_content:
            # add target="_blank" before href
            tag_content = tag_content.replace('href=', 'target="_blank" rel="noopener noreferrer" href=')
        elif 'rel=' not in tag_content:
            # if target exists but not rel (rare, but possible)
            tag_content = tag_content.replace('target="_blank"', 'target="_blank" rel="noopener noreferrer"')
        return tag_content

    # Match `<a ... href="https://wa.me/..." ... >` or `<Button ... href="..." ... >`
    # Note: HTML tags can span multiple lines in TSX, making regex tricky.
    # Let's write a simple loop over the file, or use a more robust regex for the tags.
    content = re.sub(r'<[a-zA-Z][^>]*href=[^>]*wa\.me[^>]*>', add_attrs, content, flags=re.DOTALL)

    if content != original_content:
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(content)
        print(f'Updated {filepath}')

for root, _, files in os.walk(directory):
    for f in files:
        if f.endswith(('.tsx', '.ts', '.jsx', '.js', '.html')):
            fix_links(os.path.join(root, f))
