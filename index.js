TweenMax.to(".text-load", 2, {
  delay: 4.3,
  top: "-100%",
  ease: Expo.easeInOut
});

TweenMax.to("#logo", 2.2, {
  delay: 4.2,
  top: "-100%",
  ease: Expo.easeInOut
});

TweenMax.from(".background-image", 2, {
  delay: 4.3,
  translateY: "100vh",
  ease: Expo.easeInOut
});

TweenMax.from(".right-form", 1.1, {
  delay: 6,
  x: 1000,
  ease: Expo.easeInOut
});

TweenMax.from(".left-form", 1, {
  delay: 6,
  x: -300,
  ease: Expo.easeInOut
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

/*ScrollReveal().reveal('.element-secondary-title1', {
  delay: 1,
  duration: 600,
  distance: '30px', 
  easing: 'ease-in',
  origin: 'bottom',
  scale: 0.5,
  reset: true,
});

ScrollReveal().reveal('.paragraphe1', {
  delay: 1,
  duration: 600,
  distance: '60px', 
  easing: 'ease-in',
  origin: 'left',
  scale: 0.5,
  reset: true,
});

ScrollReveal().reveal('.picture1', {
  delay: 1,
  duration: 600,
  distance: '100px', 
  easing: 'ease-in',
  origin: 'right',
  scale: 0.7,
  reset: true,
  rotate: {
    x: 20,
    z: 20
}
});*/