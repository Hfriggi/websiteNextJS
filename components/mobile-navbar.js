const btnMobile = document.getElementById('burgerBtn');

function toggleMenu(){
    const navList = document.getElementById('navList');
    navList.classList.toggle('active');
}

btnMobile.addEventListener('click', toggleMenu);