
function navigateTo(pageId) {
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => page.classList.add('hidden'));
    document.getElementById(pageId).classList.remove('hidden');
}

function hoverEffect(element) {
    element.style.transform = "scale(1.05)";
}

function resetEffect(element) {
    element.style.transform = "scale(1)";
}
