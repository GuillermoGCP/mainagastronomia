function toggleMenu() {
    const navMenu = document.querySelector('.nav-menu')
    navMenu.style.display = navMenu.style.display === 'flex' ? 'none' : 'flex'
}

// Ajusta la visibilidad del menú en función del tamaño de la pantalla
window.addEventListener('resize', () => {
    const navMenu = document.querySelector('.nav-menu')
    if (window.innerWidth >= 768) {
        navMenu.style.display = 'flex' // Mostrar el menú en pantallas medianas y grandes
    } else {
        navMenu.style.display = 'none' // Ocultar el menú en pantallas pequeñas
    }
})
