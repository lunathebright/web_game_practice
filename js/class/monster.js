class Monster extends Position {
  constructor() {
    super();

    this.gameEl = document.querySelector(".game");
    this.monsterBoxEl = document.createElement("div");
    this.monsterBoxEl.className = "monster_box";
    this.el = document.createElement("div");
    this.el.className = "monster";

    this.init();
  }
  init() {
    this.monsterBoxEl.appendChild(this.el);
    this.gameEl.appendChild(this.monsterBoxEl);
  }
}
