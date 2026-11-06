#!/usr/bin/env python3
"""Generate the website's skill catalog from the repository README."""
import json
import re
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
README = (ROOT / 'README.md').read_text()
CATEGORIES = {
    'Foundation': {'brand-context'},
    'Strategy': {'brand-strategy', 'brand-naming', 'brand-positioning', 'brand-audit', 'target-audience', 'competitor-branding', 'brand-architecture', 'brand-measurement', 'personal-brand', 'brand-partnerships'},
    'Expression': {'brand-identity', 'brand-voice', 'brand-story', 'brand-messaging', 'brand-guidelines', 'brand-manifesto', 'brand-packaging'},
    'Growth': {'brand-launch', 'rebranding', 'd2c-marketing', 'b2b-brand-marketing', 'ugc-strategy', 'aso', 'whatsapp-marketing', 'email-marketing', 'influencer-marketing', 'meta-ads', 'google-ads'},
}
PATTERN = re.compile(r'^\| \[([a-z0-9-]+)\]\(skills/\1/\) \| (.+?) \|$', re.M)
skills = []
for name, description in PATTERN.findall(README):
    if not (ROOT / 'skills' / name / 'SKILL.md').is_file():
        raise SystemExit(f'Missing skill source: {name}')
    category = next((label for label, names in CATEGORIES.items() if name in names), None)
    if category is None:
        raise SystemExit(f'Uncategorized skill: {name}')
    skills.append({'name': name, 'description': description.replace('`', ''), 'category': category})

actual = {p.parent.name for p in (ROOT / 'skills').glob('*/SKILL.md')}
if {skill['name'] for skill in skills} != actual:
    raise SystemExit('README skill table and skills directory are out of sync')
(ROOT / 'docs' / 'skills-data.js').write_text('window.SKILLS = ' + json.dumps(skills, ensure_ascii=False, indent=2) + ';\n')
print(f'Generated {len(skills)} skills in docs/skills-data.js')
