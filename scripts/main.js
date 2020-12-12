document.addEventListener("DOMContentLoaded", function () {
  const hero = new HeroSlider(".swiper-container");
  hero.start();

  const cb = function (el, inview) {
    if (inview) {
      const ta = new TweenTextAnimation(el);
      ta.animate();
    }
  };

  const _inviewAnimation = function (el, inview) {
    if (inview) {
      el.classList.add("inview");
    } else {
      el.classList.remove("inview");
    }
  };

  const so = new ScrollObserver(".tween-animate-title", cb);

  const so2 = new ScrollObserver(".cover-slide", _inviewAnimation);

  const header = document.querySelector(".header");
  const _navAnimation = function (el, inview) {
    if (inview) {
      header.classList.remove("triggered");
    } else {
      header.classList.add("triggered");
    }
  };

  // 何回スクロールしてもトリガーが外れないように{once: false}
  const so3 = new ScrollObserver(".nav-trigger", _navAnimation, {once: false});
});
