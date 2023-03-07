document.addEventListener('DOMContentLoaded', function() {
    //BUTTONS
    const button = document.querySelectorAll('.main-button');

    button.forEach(function(button) {
        button.addEventListener('mouseover', function() {
            button.classList.add('hover-button');
        })
    
        button.addEventListener('mouseout', function() {
            button.classList.remove('hover-button');
        })
    })

    const smallButton = document.querySelectorAll('.small-button');

    smallButton.forEach(function(smallButton) {
        smallButton.addEventListener('mouseover', function() {
            smallButton.classList.add('hover-button');
        })
    
        smallButton.addEventListener('mouseout', function() {
            smallButton.classList.remove('hover-button');
        })
    })

    //NAV LINKS

    const navLink = document.querySelectorAll('.nav-option');

    navLink.forEach(function(navLink) {
        navLink.addEventListener('mouseover', function() {
            navLink.classList.add('hover-link');
        })
    
        navLink.addEventListener('mouseout', function() {
            navLink.classList.remove('hover-link');
        })
    })

    const brand = document.querySelectorAll('.brand');

    brand.forEach(function(brand) {
        brand.addEventListener('mouseover', function() {
            brand.classList.add('hover-brand');
        })
    
        brand.addEventListener('mouseout', function() {
            brand.classList.remove('hover-brand');
        })
    })

    const icon = document.querySelectorAll('.icon');

    icon.forEach(function(icon) {
        icon.addEventListener('mouseover', function() {
            icon.classList.add('hover-icon');
        })
    
        icon.addEventListener('mouseout', function() {
            icon.classList.remove('hover-icon');
        })
    })

    //SCROLL TRIGGER
    function scrollTrigger(selector, options = {}){
        let els = document.querySelectorAll(selector)
        els = Array.from(els)
        els.forEach(el => {
            addObserver(el, options)
        })
    }
    
    function addObserver(el, options){
        if(!('IntersectionObserver' in window)){
            if(options.cb){
                options.cb(el)
            }else{
                entry.target.classList.add('active')
            }
            return
        }
        let observer = new IntersectionObserver((entries, observer) => { //this takes a callback function which receives two arguments: the elemts list and the observer instance
            entries.forEach(entry => {
                if(entry.isIntersecting){
                    if(options.cb){
                        options.cb(el)
                    }else{
                        entry.target.classList.add('active')
                    }
                    observer.unobserve(entry.target)
                }
            })
        }, options)
        observer.observe(el)
    }


    scrollTrigger('.scroll-reveal', {
        rootMargin: '400px',
    })

    scrollTrigger('.come-from-left', {
        rootMargin: '200px',
    })

    scrollTrigger('.come-from-right', {
        rootMargin: '200px',
    })

    scrollTrigger('.scale', {
        rootMargin: '-200px',
    })
})