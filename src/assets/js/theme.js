// Utility module to manage theme (light/dark) using localStorage and data-theme attribute
export function getStoredTheme() {
  try {
    const stored = localStorage.getItem('theme');
    return stored === 'dark' ? 'dark' : 'light';
  } catch {
    return 'light';
  }
}

export function saveTheme(theme) {
  try {
    localStorage.setItem('theme', theme);
  } catch {
    // ignore
  }
  document.documentElement.setAttribute('data-theme', theme);
}

export function initTheme() {
  const t = getStoredTheme();
  document.documentElement.setAttribute('data-theme', t);
  return t;
}

export function toggleTheme(current) {
  const next = current === 'light' ? 'dark' : 'light';
  saveTheme(next);
  return next;
}
