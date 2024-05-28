window.onscroll = function() {myFunction()};

function myFunction() {
    var navbar = document.getElementById("myNavbar");
    var navbarItems = document.querySelectorAll('.w3-bar .w3-bar-item');
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        navbar.classList.add('scrolled');
        navbarItems.forEach(item => {
            item.classList.add('scrolled');
        });
    } else {
        navbar.classList.remove('scrolled');
        navbarItems.forEach(item => {
            item.classList.remove('scrolled');
        });
    }
}
