const themeToggleBtn = document.getElementById('theme-toggle');

themeToggleBtn.addEventListener('click', () => {
  const newTheme = document.documentElement.getAttribute('data-theme') === 'light' ? 'dark' : 'light';

  fetch(`/theme/${newTheme}`, { method: 'GET', timeout: 5000 })
    .then(
      response => {
        if (response.status === 200) {
          window.location.reload();
        }
      }
    )
    .catch(error => {
      console.error('Error:', error);
    });
});