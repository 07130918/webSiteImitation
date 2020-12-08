class ScrollObserver {
  constructor(els, cb, options) {
    this.els = document.querySelectorAll(els);
    const defaultOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0,
      once: true,
    };
    this.cb = cb;
    // defaultOptionsとoptionsをmerge
    this.options = Object.assign(defaultOptions, options);
    this.once = this.options.once;
    this._init();
  }
  _init() {
    const callback = function (entries, observer) {
      entries.forEach((entry) => {
        //監視しているDOMが画面に入ればtrue
        if (entry.isIntersecting) {
          console.log("inview");
          this.cb(entry.target, true);
          if (this.once) {
            observer.unobserve(entry.target);
          }
        } else {
          console.log("outview");
          this.cb(entry.target, false);
        }
      });
    };
    this.io = new IntersectionObserver(callback.bind(this), this.options);
    this.io.POLL_INTERVAL = 100;
    //監視対象のDOMを引数に入れる
    this.els.forEach((el) => this.io.observe(el));
  }
  destory() {
    this.io.disconnect();
  }
}