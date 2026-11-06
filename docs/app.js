(() => {
  const repo = 'https://github.com/arnabbagxd/Brand-building-skills/tree/main/skills/';
  const stageData = {
    context: {
      label: 'THE FOUNDATION',
      heading: 'Start with what the brand already knows.',
      body: 'The brand-context skill collects Daybreak’s audience, category, values, competitors, and current perception in one reusable brief. Every following skill can build from the same starting point.',
      chips: ['Audience: busy, curious city dwellers', 'Category: specialty coffee', 'Ambition: an everyday ritual'],
      skill: 'brand-context'
    },
    positioning: {
      label: 'THE STRATEGIC CHOICE',
      heading: 'Coffee worth caring about, without making it a ceremony.',
      body: 'The brand-positioning skill asks where Daybreak can be distinct and relevant. This sample direction makes the tension clear: thoughtful sourcing with an easy daily habit. A real project would test it against competitors and customer evidence.',
      chips: ['Territory: everyday discovery', 'Difference: approachable expertise', 'Proof needed: sourcing and experience'],
      skill: 'brand-positioning'
    },
    voice: {
      label: 'THE EXPRESSION',
      heading: '“A better morning, no homework required.”',
      body: 'The brand-voice skill turns the strategic direction into writing guidance: warm, curious, specific, and free of coffee jargon. The line above is a sample, showing how a positioning choice can shape everyday copy.',
      chips: ['Warm over precious', 'Plain words over jargon', 'Specific over generic'],
      skill: 'brand-voice'
    }
  };

  const stageContainer = document.querySelector('#stage-content');
  const stageLink = document.querySelector('#stage-skill-link');
  function renderStage(stage) {
    const item = stageData[stage];
    if (!item) return;
    stageContainer.replaceChildren();
    const overline = document.createElement('p'); overline.className = 'stage-overline'; overline.textContent = item.label;
    const heading = document.createElement('h3'); heading.textContent = item.heading;
    const body = document.createElement('p'); body.textContent = item.body;
    const chips = document.createElement('div'); chips.className = 'stage-chips';
    item.chips.forEach(value => { const chip = document.createElement('span'); chip.textContent = value; chips.append(chip); });
    stageContainer.append(overline, heading, body, chips);
    stageLink.href = repo + item.skill;
    stageLink.textContent = item.skill + ' ↗';
    document.querySelectorAll('[data-stage]').forEach(button => { const active = button.dataset.stage === stage; button.classList.toggle('active', active); button.setAttribute('aria-selected', String(active)); });
  }
  document.querySelectorAll('[data-stage]').forEach(button => button.addEventListener('click', () => renderStage(button.dataset.stage)));
  renderStage('context');

  const skills = Array.isArray(window.SKILLS) ? window.SKILLS : [];
  const grid = document.querySelector('#skill-grid');
  const search = document.querySelector('#skill-search');
  const count = document.querySelector('#skill-count');
  const noResults = document.querySelector('#no-results');
  let currentFilter = 'All';
  function renderSkills() {
    const query = search.value.trim().toLowerCase();
    const matches = skills.filter(skill => (currentFilter === 'All' || skill.category === currentFilter) && (skill.name + ' ' + skill.description).toLowerCase().includes(query));
    grid.replaceChildren();
    matches.forEach(skill => {
      const card = document.createElement('a'); card.className = 'skill-card'; card.href = repo + skill.name; card.target = '_blank'; card.rel = 'noopener noreferrer';
      const top = document.createElement('div'); top.className = 'skill-card-top';
      const category = document.createElement('span'); category.textContent = skill.category.toUpperCase();
      const arrow = document.createElement('b'); arrow.setAttribute('aria-hidden', 'true'); arrow.textContent = '↗';
      const title = document.createElement('h3'); title.textContent = skill.name;
      const description = document.createElement('p'); description.textContent = skill.description;
      top.append(category, arrow); card.append(top, title, description); grid.append(card);
    });
    count.textContent = `${matches.length} ${matches.length === 1 ? 'skill' : 'skills'}`;
    noResults.hidden = matches.length !== 0;
  }
  search.addEventListener('input', renderSkills);
  document.querySelectorAll('[data-filter]').forEach(button => button.addEventListener('click', () => {
    currentFilter = button.dataset.filter;
    document.querySelectorAll('[data-filter]').forEach(other => other.classList.toggle('active', other === button));
    renderSkills();
  }));
  renderSkills();

  document.querySelectorAll('[data-copy]').forEach(button => button.addEventListener('click', async () => {
    const original = button.textContent;
    try { await navigator.clipboard.writeText(button.dataset.copy); button.textContent = 'Copied ✓'; }
    catch { button.textContent = 'Select command above'; }
    window.setTimeout(() => { button.textContent = original; }, 1800);
  }));
  const menu = document.querySelector('.menu-toggle');
  const mobile = document.querySelector('#mobile-nav');
  menu.addEventListener('click', () => { const open = menu.getAttribute('aria-expanded') !== 'true'; menu.setAttribute('aria-expanded', String(open)); menu.setAttribute('aria-label', open ? 'Close menu' : 'Open menu'); mobile.hidden = !open; });
  mobile.querySelectorAll('a').forEach(link => link.addEventListener('click', () => { mobile.hidden = true; menu.setAttribute('aria-expanded', 'false'); menu.setAttribute('aria-label', 'Open menu'); }));
})();
