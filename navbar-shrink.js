document.addEventListener('DOMContentLoaded', function() {

    //NAVBAR SHRINK

    var prevScroll = window.pageYOffset;
    const navBar = document.querySelector('.navbar');

    window.onscroll = function() {

        var currentScroll = window.pageYOffset;

        if (prevScroll > currentScroll) {
            navBar.style.height = '';
            navBar.style.overflow = '';
        }
        else {
            navBar.style.height = '69px';
            navBar.style.overflow = 'hidden';
        }

        prevScroll = currentScroll;
    }

})