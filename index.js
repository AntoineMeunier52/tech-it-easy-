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


var textWrapper = document.querySelector('.text-header .letters');
textWrapper.innerHTML = textWrapper.textContent.replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>");

anime.timeline({loop: false})
  .add({
    targets: '.text-header .letters',
    translateY: ["1.1em", 0],
    translateX: ["0.55em", 0],
    translateZ: 0,
    rotateZ: [180, 0],
    duration: 750,
    easing: "easeOutExpo",
    delay: function(el, i) {
      return 9000 + 50 * i;
    }
  });
