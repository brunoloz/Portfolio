document.addEventListener('DOMContentLoaded', () => {
  const year = document.getElementById('year');

  if (year) {
    year.textContent = new Date().getFullYear();
  }

  loadLanguageStats();
});

async function loadLanguageStats() {
  const chart = document.getElementById('language-stats');

  if (!chart) {
    return;
  }

  const languages = [
    { name: 'C++', level: 88 },
    { name: 'C', level: 74.75 },
    { name: 'Java', level: 72.45 },
    { name: 'JavaScript', level: 59.8 },
    { name: 'VHDL', level: 40.48 },
    { name: 'Python', level: 37.95 },
  ];
  chart.replaceChildren();

  languages.forEach(({ name: language, level }) => {
    const item = document.createElement('li');
    const label = document.createElement('div');
    const name = document.createElement('span');
    const track = document.createElement('div');
    const fill = document.createElement('span');

    label.className = 'language-stat-label';
    name.textContent = language;
    track.className = 'language-stat-track';
    track.setAttribute('aria-hidden', 'true');
    fill.className = 'language-stat-fill';
    fill.style.width = `${level}%`;

    label.append(name);
    track.append(fill);
    item.append(label, track);
    chart.append(item);
  });
}
