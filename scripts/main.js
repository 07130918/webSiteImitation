document.addEventListener("DOMContentLoaded", function () {
  const hero = new HeroSlider(".swiper-container");
  hero.start();

  const cb = function (el, isIntersecting) {
    if (isIntersecting) {
      const ta = new TextAnimation(el);
      ta.animate();
    }
  };
  const so = new ScrollObserver(".animate-title", cb, { once: false });
});
