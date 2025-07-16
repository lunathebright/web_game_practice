class Monster {
  constructor() {
    this.gameEl = document.querySelector(".game");
    this.monsterBoxEl = document.createElement("div");
    this.monsterBoxEl.className = "monster_box";
    this.monsterEl = document.createElement("div");
    this.monsterEl.className = "monster";

    this.init();
  }
  init() {
    this.monsterBoxEl.appendChild(this.monsterEl);
    this.gameEl.appendChild(this.monsterBoxEl);
  }
}
