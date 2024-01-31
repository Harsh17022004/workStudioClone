function loader() {
  var tl = gsap.timeline();

  tl.to("#loader .yellow", {
    top: "-100%",
    delay: 0.2,
    ease: "expo.out",
    duration: 0.5,
  });

  tl.to("#loader video", {
    opacity: 0,
    delay: 0.8,
    ease: "expo.out",
    top: "-100%",
  });

  tl.to("#loader", {
    top: "-100%",
    ease: "expo.out",
    duration: 2,
    delay: -0.7,
  });
  tl.to("#loader", {
    display: "none",
  });
}
loader();

function bgChange() {
  const elems = document.querySelectorAll(".page2 .elem");
  const page2 = document.querySelectorAll(".page2");
  elems.forEach((el) => {
    el.addEventListener("mouseenter", () => {
      const imgUrl = el.getAttribute("data-image");
      page2[0].style.backgroundImage = `url(${imgUrl})`;
    });
  });
}
bgChange();

function loco() {
  const scroll = new LocomotiveScroll({
    el: document.querySelector("[data-scroll-container]"),
    smooth: true,
  });
  document.querySelector("#footer p").addEventListener("click", () => {
    scroll.scrollTo(0);
  });
}
loco();
