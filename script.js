var scroll = function(elem){
    elem.scrollIntoView({ behavior: 'smooth', inline: 'center'})
};

var toggleMenu = function(){
    if (window.getComputedStyle(mobileMenu).display === "none") {
        mobileMenu.setAttribute('style', 'display: flex;');
    }else{
        mobileMenu.setAttribute('style', 'display: none;');
    } 
}

var home        = document.getElementById('home');
var about       = document.getElementById('about');
var projects    = document.getElementById('portfolio');
var contact     = document.getElementById('contact');
var menu        = document.getElementById('menu');
var mobileMenu  = document.getElementById('mobile-menu-links');

//menu nav listeners
document.getElementById('m1').addEventListener("click", function(){toggleMenu();scroll(home), false});
document.getElementById('m2').addEventListener("click", function(){scroll(about), false});
document.getElementById('m3').addEventListener("click", function(){scroll(projects), false});
document.getElementById('m4').addEventListener("click", function(){scroll(contact), false});
document.getElementById('m5').addEventListener("click", function(){toggleMenu()});

document.getElementById('m6').addEventListener("click", function(){scroll(home), false});
document.getElementById('m7').addEventListener("click", function(){scroll(about), false});
document.getElementById('m8').addEventListener("click", function(){scroll(projects), false});
document.getElementById('m9').addEventListener("click", function(){scroll(contact), false});

document.getElementById('m10').addEventListener("click", function(){toggleMenu(); scroll(home), false});
document.getElementById('m11').addEventListener("click", function(){toggleMenu(); scroll(about), false});
document.getElementById('m12').addEventListener("click", function(){toggleMenu(); scroll(projects), false});
document.getElementById('m13').addEventListener("click", function(){toggleMenu(); scroll(contact), false});

//button nav listeners
document.getElementById('b1').addEventListener("click", function(){scroll(projects), false});
document.getElementById('b2').addEventListener("click", function(){scroll(contact), false});
document.getElementById('b3').addEventListener("click", function(){scroll(contact), false});
document.getElementById('b4').addEventListener("click", function(){scroll(home), false});

//link listeners
document.getElementById('l1').addEventListener("click", function(){window.location = "https://github.com/LeoGuagenti/url-shortener", false});
document.getElementById('l2').addEventListener("click", function(){window.location = "https://github.com/LeoGuagenti/web-crawler-v2", false});
document.getElementById('l3').addEventListener("click", function(){window.location = "https://github.com/LeoGuagenti/Natural-Selection-Simulation", false});
document.getElementById('l4').addEventListener("click", function(){window.location = "https://github.com/LeoGuagenti", false});
document.getElementById('l5').addEventListener("click", function(){window.location = "https://github.com/LeoGuagenti", false});
document.getElementById('l6').addEventListener("click", function(){window.location = "https://stackoverflow.com/users/10243971/leo-guagenti"});
document.getElementById('l7').addEventListener("click", function(){window.location = "https://www.linkedin.com/in/leonardo-g-a98878115/"});
document.getElementById('l8').addEventListener("click", function(){window.location = "mailto:lg424117@ohio.edu"});
