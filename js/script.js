document.addEventListener('DOMContentLoaded', () => {
  const year = document.getElementById('year');

  if (year) {
    year.textContent = new Date().getFullYear();
  }

  renderBars('programming-stats', [
    { name: 'C++', level: 88 },
    { name: 'C', level: 74.75 },
    { name: 'Java', level: 72.45 },
    { name: 'JavaScript', level: 59.8 },
    { name: 'VHDL', level: 40.48 },
    { name: 'Python', level: 37.95 },
  ]);

  renderBars('technical-skills', [
    { name: 'Desarrollo de software', level: 80 },
    { name: 'Desarrollo web', level: 70 },
    { name: 'Programación de bajo nivel', level: 55 },
    { name: 'Hardware y sistemas embebidos', level: 40 },
    
    
  ]);

  renderBars('spoken-languages', [
    { name: 'Español', level: 100 },
    { name: 'Inglés', level: 70 },
  ]);
});

function renderBars(chartId, values) {
  const chart = document.getElementById(chartId);

  if (!chart) {
    return;
  }

  chart.replaceChildren();

  values.forEach(({ name, level }) => {
    const item = document.createElement('li');
    const label = document.createElement('div');
    const language = document.createElement('span');
    const track = document.createElement('div');
    const fill = document.createElement('span');

    label.className = 'language-stat-label';
    language.textContent = name;
    track.className = 'language-stat-track';
    track.setAttribute('role', 'progressbar');
    track.setAttribute('aria-label', name);
    track.setAttribute('aria-valuemin', '0');
    track.setAttribute('aria-valuemax', '100');
    track.setAttribute('aria-valuenow', String(level));
    fill.className = 'language-stat-fill';
    fill.style.width = `${level}%`;

    label.append(language);
    track.append(fill);
    item.append(label, track);
    chart.append(item);
  });
}
