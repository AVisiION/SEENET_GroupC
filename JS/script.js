const sidebar = document.getElementById('sidebar');
const overlay = document.getElementById('overlay');
const openButton = document.querySelector('.menu-toggle');
const closeButton = document.querySelector('.close-toggle');
const body = document.body;

function updateScrollState() {
    body.classList.toggle('scrolled', window.scrollY > 0);
}

function openSidebar() {
    sidebar.classList.add('open');
    overlay.classList.add('show');
    openButton.setAttribute('aria-expanded', 'true');
    sidebar.setAttribute('aria-hidden', 'false');
}

function closeSidebar() {
    sidebar.classList.remove('open');
    overlay.classList.remove('show');
    openButton.setAttribute('aria-expanded', 'false');
    sidebar.setAttribute('aria-hidden', 'true');
}

openButton.addEventListener('click', openSidebar);
closeButton.addEventListener('click', closeSidebar);
overlay.addEventListener('click', closeSidebar);
updateScrollState();
window.addEventListener('scroll', updateScrollState, { passive: true });
window.setInterval(updateScrollState, 100);
