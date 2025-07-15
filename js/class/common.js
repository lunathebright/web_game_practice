class Position {
  constructor() {}

  position() {
    return {
      left: this.el.getBoundingClientRect().left,
      right: this.el.getBoundingClientRect().right,
      top: gameProps.screenH - this.el.getBoundingClientRect().top,
      bottom:
        gameProps.screenH -
        this.el.getBoundingClientRect().top -
        this.el.getBoundingClientRect().height,
    };
  }
}
