var menu = document.querySelector("#nav i");
var cross = document.querySelector("#full i");
var tl = gsap.timeline();

tl.to("#full", {
  right: "0",
  delay: 0.2,
  duration: 0.6,
});
tl.from("#full h4", {
  x: 150,
  duration: 0.6,
  stagger: 0.2,
  opacity: 0,
});
tl.from("#full i", {
  opacity: 0,
});

tl.pause();

menu.addEventListener("click", function () {
  tl.play();
  menu.style.opacity = 0;
});

cross.addEventListener("click", function () {
    tl.reverse();
   menu.style.opacity = 1;
});
