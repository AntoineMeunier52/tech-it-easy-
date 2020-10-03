

//SLIDERS
window.addEventListener("scroll", function() {
    const distance = window.scrollY
    document.querySelector("header").style.transform = `translateY(${distance *0.8}px)`
    setTimeout(() => {
      document.querySelector("main")
    }, 400)
  })