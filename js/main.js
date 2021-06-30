// CONSTS
const CollectionParagraph = document.getElementsByClassName('overlay');
const showMore = document.getElementById('showMore');
const menu = document.getElementById('menu')
const asideNav = document.getElementById('asideNav')

// VARS
var paragraph = [...CollectionParagraph];

for (let i = 0; i < paragraph.length; i++) {
    
    paragraph[i].style.display = 'none';
}

// EVENTS

// ShowMore functionality
showMore.addEventListener('click', () => {
    // Mostrar u ocultar parrafo
    for (let i = 0; i < paragraph.length; i++) {
        
        if (paragraph[i].style.display === 'none') {
            paragraph[i].style.display = 'block';
        } 
        else {
            paragraph[i].style.display = 'none';
        }
    }
    
    // Toggle del icono
    if (showMore.classList.contains('fa-chevron-down')) {
        
        showMore.classList.remove('fa-chevron-down');
        showMore.classList.add('fa-chevron-up');
        return;
    }

    if (showMore.classList.contains('fa-chevron-up')) {
        showMore.classList.remove('fa-chevron-up');
        showMore.classList.add('fa-chevron-down');

    }
})

// Show aside Nav
menu.addEventListener('click', () => {
    asideNav.classList.toggle('spread');
})

window.addEventListener('click', (e) => {
    if (asideNav.classList.contains('spread') && e.target != menu && e.target != asideNav) {
        asideNav.classList.remove('spread');
    }
})
