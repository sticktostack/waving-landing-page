let buttondiv = document.querySelector(".btn")
let button = document.querySelector(".btn button").addEventListener("click",()=>{
    button.style.backgroundColor = "blue"
})

Shery.imageEffect(".back", {
  style: 5,
  config: {
    a: { value: 0.69, range: [0, 30] },
    b: { value: -0.89, range: [-1, 1] },
    zindex: { value: -9996999, range: [-9999999, 9999999] },
    aspect: { value: 2.18678800288047 },
    ignoreShapeAspect: { value: true },
    shapePosition: { value: { x: 0, y: 0 } },
    shapeScale: { value: { x: 0.5, y: 0.5 } },
    shapeEdgeSoftness: { value: 0, range: [0, 0.5] },
    shapeRadius: { value: 0, range: [0, 2] },
    currentScroll: { value: 0 },
    scrollLerp: { value: 0.07 },
    gooey: { value: true },
    infiniteGooey: { value: true },
    growSize: { value: 4, range: [1, 15] },
    durationOut: { value: 0.55, range: [0.1, 5] },
    durationIn: { value: 0.55, range: [0.1, 5] },
    displaceAmount: { value: 0.5 },
    masker: { value: false },
    maskVal: { value: 1, range: [1, 5] },
    scrollType: { value: 0 },
    geoVertex: { range: [1, 64], value: 1 },
    noEffectGooey: { value: false },
    onMouse: { value: 1 },
    noise_speed: { value: 0.2, range: [0, 10] },
    metaball: { value: 0.14, range: [0, 2] },
    discard_threshold: { value: 0.54, range: [0, 1] },
    antialias_threshold: { value: 0, range: [0, 0.1] },
    noise_height: { value: 0.5, range: [0, 2] },
    noise_scale: { value: 14.5, range: [0, 100] },
  },
  gooey: true,
});

let elems = document.querySelectorAll(".elem");

elems.forEach(function (elem) {
  let h1s = elem.querySelectorAll("h1");
  let idx = 0;
  let animating = false
  document.querySelector("#main").addEventListener("click", () => {
    if(!animating){
        animating = true;
        gsap.to(h1s[idx], {
            top: "-=100%",
            ease: Expo.easeInOut,
            duration: 0.8,
            onComplete: function () {
              gsap.set(this._targets[0], { top: "100%" });
              animating = false;
            },
          });
          idx === h1s.length - 1 ? idx === 0 : idx++;
      
          gsap.to(h1s[idx], {
            top: "-=100%",
            ease: Expo.easeInOut,
            duration: 0.8,
          });
    }
  });
});

