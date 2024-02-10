document.addEventListener('DOMContentLoaded', function () {
    const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const darkModeToggle = document.getElementById('darkModeToggle');

    if (prefersDarkScheme) {
        document.body.classList.add('dark-mode');
    }

    darkModeToggle.addEventListener('click', function () {
        document.body.classList.toggle('dark-mode');
    });
});
