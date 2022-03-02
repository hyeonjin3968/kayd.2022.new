const toggleBtn = document.querySelector('.navbar__toggleBtn');
const menu = document.querySelector('.navbar__items');

toggleBtn.addEventListener('click', () => {
    menu.classList.toggle('active');
})