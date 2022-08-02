const openMenu = document.getElementById('open');
const closeMenu = document.getElementById('close');
const container = document.querySelector('.container');
const content = document.querySelector('.content');

openMenu.addEventListener('click', () => {
    container.classList.add('show-nav');   
});

closeMenu.addEventListener('click', () => {
    container.classList.remove('show-nav');
});

content.addEventListener('click', () =>{
    if (container.classList.contains('show-nav')) {
        container.classList.remove('show-nav');
    }
})
