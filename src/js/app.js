feather.replace();
$(".js-tilt").tilt({
  perspective: 20000,

});

document.addEventListener("DOMContentLoaded", () => {
  let tl = new gsap.timeline();
  tl.to(".bgLoad", 1, {
    width: "0%",
    delay: 1,
  })
    .fromTo(
      ".bgVideo",
      { width: "0%", opacity: 0 },
      { width: "100%", opacity: 1 }
    )
    .fromTo(".menuPrincipal", { y: -50, opacity: 0 }, { y: 0, opacity: 1 })
    .fromTo(".imgWakanda", { y: 50, opacity: 0 }, { y: 0, opacity: 1 })
    .fromTo(".textWakanda", { y: 50, opacity: 0 }, { y: 0, opacity: 1 }, "-=0.1")
    .fromTo(".groupoBtns", { y: 50, opacity: 0 }, { y: 0, opacity: 1 })
    .fromTo(".container-area-2", { x: 50, opacity: 0 }, { x: 0, opacity: 1 })
    .fromTo(".redeSociais", { x: "10%", opacity: 0,}, { x: 0, opacity: 1});
});
