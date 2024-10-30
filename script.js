function toggleMenu() {
    const navMenu = document.querySelector('.nav-menu')
    navMenu.classList.toggle('active')

    if (navMenu.classList.contains('active')) {
        navMenu.style.display = 'flex' // Muestra el menú
    } else {
        navMenu.style.display = 'none' // Oculta el menú
    }
}

document.addEventListener('click', (event) => {
    const navMenu = document.querySelector('.nav-menu')
    const menuIcon = document.querySelector('.menu-icon')

    if (window.innerWidth < 768) {
        if (
            !navMenu.contains(event.target) &&
            !menuIcon.contains(event.target)
        ) {
            navMenu.classList.remove('active')
            navMenu.style.display = 'none'
        }
    }
})

window.addEventListener('resize', () => {
    const navMenu = document.querySelector('.nav-menu')
    if (window.innerWidth >= 768) {
        navMenu.style.display = 'flex'
        navMenu.classList.remove('active')
    } else {
        navMenu.style.display = 'none'
        navMenu.classList.remove('active')
    }
})

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth',
    })
}

window.addEventListener('scroll', () => {
    const scrollButton = document.querySelector('.scroll-to-top')
    if (
        document.body.scrollTop > 100 ||
        document.documentElement.scrollTop > 100
    ) {
        scrollButton.classList.add('visible')
    } else {
        scrollButton.classList.remove('visible')
    }
})
