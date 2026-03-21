import os
import re

directory = r'C:\Users\Himan\Downloads\flexura\flexura\src'

def fix_icons_in_file(filepath):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    original = content

    # Find lucide-react imports
    lucide_imports = re.search(r'import\s+\{([^}]+)\}\s+from\s+["\']lucide-react["\']', content)
    if lucide_imports:
        icons = [i.strip() for i in lucide_imports.group(1).split(',')]
        icons = [i for i in icons if i]
        
        for icon in icons:
            # Add aria-hidden="true" to <IconName ...> if it doesn't have aria- attributes.
            # We match `<IconName ` or `<IconName>` or `<IconName\n`
            
            pattern = r'<(' + re.escape(icon) + r')\b([^>]*?)>'
            
            def repl(match):
                tag_name = match.group(1)
                attrs = match.group(2)
                
                if 'aria-hidden' in attrs or 'aria-label' in attrs:
                    return match.group(0) # Already has accessibility
                
                # Add aria-hidden="true"
                if attrs.endswith('/'):
                    return f'<{tag_name} aria-hidden="true" {attrs[:-1]}/>'
                else:
                    return f'<{tag_name} aria-hidden="true" {attrs}>'
            
            content = re.sub(pattern, repl, content)

    # Also fix <svg ...> tags
    def repl_svg(match):
        attrs = match.group(1)
        if 'aria-hidden' in attrs or 'aria-label' in attrs:
            return match.group(0)
        
        if attrs.endswith('/'):
            return f'<svg aria-hidden="true" {attrs[:-1]}/>'
        else:
            return f'<svg aria-hidden="true" {attrs}>'

    content = re.sub(r'<svg\b([^>]*?)>', repl_svg, content)

    if content != original:
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(content)
        print(f"Updated {filepath}")

for root, dirs, files in os.walk(directory):
    for f in files:
        if f.endswith(('.tsx', '.jsx', '.ts', '.js')):
            fix_icons_in_file(os.path.join(root, f))
