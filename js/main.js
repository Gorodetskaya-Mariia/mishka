document.addEventListener("DOMContentLoaded", function() {
    var navMain = document.querySelector('.main-nav__wrapper');
    var navToggle = document.querySelector('.main-nav__toggle');
    var map = document.querySelector('.map__picture');
    var lang;
    
    navMain.classList.remove('main-nav--nojs');
    
    navToggle.addEventListener('click', function() {
        if (navMain.classList.contains('opened')) {
            navMain.classList.remove('opened');
        } else {
            navMain.classList.add('opened');
        }
    });
    
    setTimeout(function(){
            lang = document.querySelector('#currlanglink').innerHTML;
            if(lang === "English"){
                map.setAttribute('src', "https://www.google.com/maps/d/embed?mid=1N1F1DEeN9OghGTzAkcA93_wL6H3x91Re&hl=en");
            } else if (lang === "Русский"){
                map.setAttribute('src', "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1998.603787253323!2d30.32085871572347!3d59.93871648187622!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4696310fca145cc1%3A0x42b32648d8238007!2sBolshaya+Konyushennaya+Street%2C+19%2F8%2C+Sankt-Peterburg%2C+191186!5e0!3m2!1sen!2sru!4v1534187712363");
            }
            }
        , 1000);
});


