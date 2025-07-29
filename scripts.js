
// Theme Toggling
const toggleCheckbox = document.getElementById('theme-toggle');
const savedTheme = localStorage.getItem('theme') || 'light';
const isDark = savedTheme === 'dark';
document.body.classList.toggle('dark-mode', isDark);
toggleCheckbox.checked = !isDark;

toggleCheckbox.addEventListener('change', () => {
    const dark = !toggleCheckbox.checked;
    document.body.classList.toggle('dark-mode', dark);
    localStorage.setItem('theme', dark ? 'dark' : 'light');
});

// Website Fade In
window.addEventListener('load', () => {
    document.body.classList.add('fade-in');
});

// Smooth Scroll to Section
function scrollToSection(sectionId) {
    var section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
};

// Back to Top Button
(function () {
    const btn = document.getElementById('backToTop');
    const SHOW_AFTER = 200; // px scrolled down before showing

    // toggle visibility on scroll
    window.addEventListener('scroll', () => {
        if (window.scrollY > SHOW_AFTER) {
            btn.classList.add('visible');
        } else {
            btn.classList.remove('visible');
        }
    });

    // smooth scroll to top on click
    btn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
})();