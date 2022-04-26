const btnMobile = document.getElementById('btnMobile');

function toggleMenu(){
    const menu = document.getElementById('menu');
    menu.classList.toggle('active');
}

btnMobile.addEventListener('click', toggleMenu);