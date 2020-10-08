window.onbeforeunload = function () {
  window.scrollTo(0,0);
};


if (window.matchMedia("(min-width: 1200px)").matches){

    TweenMax.to(".text-load", 2, {
    delay: 4.3,
  top: "-103%",
  ease: Expo.easeInOut
});

  TweenMax.to("#logo", 2.2, {
    delay: 4.2,
    top: "-103%",
    ease: Expo.easeInOut
  });


  TweenMax.from(".background-image", 1.8, {
    delay: 4.3,
    translateY: "100vh",
    ease: Expo.easeInOut
  });
  TweenMax.from(".right-form", 1.1, {
    delay: 6,
    x: 1000,
    ease: Power4. easeOut,
  });


  TweenMax.from(".left-form", 1, {
    delay: 6,
    x: -300,
    ease: Power4. easeOut,
  });

  TweenMax.from(".text-header", 1, {
    delay: 6.5,
    opacity: 0,
    y: 20,
    ease: Expo.easeInOut
  });

  TweenMax.from(".master-title-h1", 2.2, {
    delay: 4.3,
    opacity: 0,
    translateY: "100vh",
    ease: Expo.easeInOut
  });
}

else{
}



const navbar = document.querySelector(".navbar-mobile")
const ham = document.querySelector(".ham")

function toggleHamburger(){
  navbar.classList.toggle("showNav")
  ham.classList.toggle("showClose")
}

ham.addEventListener("click", toggleHamburger)


var menuLinks = document.querySelectorAll(".menuLink")
menuLinks.forEach( 
  function(menuLink) { 
    menuLink.addEventListener("click", toggleHamburger) 
  }
);


