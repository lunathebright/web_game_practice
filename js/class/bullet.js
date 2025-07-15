class Bullet extends Position {
  constructor() {
    super();

    this.parentNode = document.querySelector(".game");
    this.el = document.createElement("div");
    this.parentNode.appendChild(this.el);
    this.el.className = "hero_bullet";
    this.x = 0;
    this.y = 0;
    this.speed = 30;
    this.distance = 0;
    this.direction = "right";

    this.init();
  }

  init() {
    this.direction = hero.direction === "left" ? "left" : "right";
    this.x =
      this.direction === "right"
        ? hero.moveX + hero.size().width / 2
        : hero.moveX - hero.size().width / 2;

    this.y = hero.position().bottom - hero.size().height * 0.42;
    this.distance = this.x;
    this.el.style.transform = `translate(${this.x}px, ${this.y}px)`;
  }

  moveBullet() {
    let setRotate = "rotate(0deg)";
    if (this.direction === "left") {
      this.distance -= this.speed;
      setRotate = "rotate(180deg)";
    } else {
      this.distance += this.speed;
      setRotate = "rotate(0deg)";
    }
    this.el.style.transform = `translate(${this.distance}px, ${this.y}px) ${setRotate}`;
    this.crashBullet();
  }

  crashBullet() {
    if (this.position().left > gameProps.screenW || this.position().right < 0) {
      this.el.remove();
    }
  }
}
