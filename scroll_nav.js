// Toggle the .pa-fixed-header class when the user 
// scroll 100px 

window.onscroll = () => { scrollNavbar() };


scrollNavbar = () => {
    // Target elements
    const navBar = document.getElementById("navbar");
    const links = document.querySelectorAll('.nav-link-scroll');
    const bookBtn = document.getElementById("book-btn");
    const signBtn = document.getElementById("sign-btn");
    const togglerIcon = document.getElementById('toggler-icon')
    const navBrand = document.getElementById('navbar-brand')
    var logoImage = document.querySelector('.navbar-brand img');

    if (document.documentElement.scrollTop > 50) {
        navBar.classList.add("navbar-scroll-bg");
        links.forEach(link => link.classList.add('font-nav-link-scroll'))
        bookBtn.classList.add('book-btn-css-scroll')
        signBtn.classList.add('sign-btn-css-scroll')
        togglerIcon.classList.add('toggler-icon-css-scroll')
        navBrand.classList.add('navbar-logo-css-scroll')
        logoImage.src = 'Images/Logo-SuperSide.svg';
    } else {
        navBar.classList.remove("navbar-scroll-bg");
        links.forEach(link => link.classList.remove('font-nav-link-scroll'))
        bookBtn.classList.remove('book-btn-css-scroll')
        signBtn.classList.remove('sign-btn-css-scroll')
        togglerIcon.classList.remove('toggler-icon-css-scroll')
        navBrand.classList.remove('navbar-logo-css-scroll')
        logoImage.src = 'Images/SuperSide-Logo-White.png';
    }
}