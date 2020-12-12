class MobileMenu {
  constructor() {
      this.DOM = {};
      this.DOM.btn = document.querySelector('.mobile-menu__btn');
      this.DOM.cover = document.querySelector('.mobile-menu__cover');
      this.DOM.container = document.querySelector('#global-container');
      this.eventType = this._getEventType();
      this._addEvent();
      console.log(this)
      console.log(this.DOM)
  }

  _getEventType() {
    // スマホかPCかを判別,スマホにはtouchstartというイベントがある
    //三項演算子
      return window.ontouchstart ? 'touchstart' : 'click';
  }

  _toggle() {
      this.DOM.container.classList.toggle('menu-open');
  }

  _addEvent() {
      this.DOM.btn.addEventListener(this.eventType, this._toggle.bind(this));
      this.DOM.cover.addEventListener(this.eventType, this._toggle.bind(this));
  }
}