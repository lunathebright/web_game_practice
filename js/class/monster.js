class Monster extends Position {
  constructor(positionX, hp) {
    super();

    this.gameEl = document.querySelector(".game");
    this.monsterBoxEl = document.createElement("div");
    this.monsterBoxEl.className = "monster_box";
    this.el = document.createElement("div");
    this.el.className = "monster";
    this.hpEl = document.createElement("div");
    this.hpEl.className = "hp";
    this.hpValue = hp;
    this.hpText = document.createTextNode(this.hpValue);
    this.positionX = positionX;

    this.init();
  }
  init() {
    this.hpEl.appendChild(this.hpText);
    this.monsterBoxEl.appendChild(this.hpEl);
    this.monsterBoxEl.appendChild(this.el);
    this.gameEl.appendChild(this.monsterBoxEl);
    this.monsterBoxEl.style.left = this.positionX + "px";
  }

  updateHp() {
    this.hpValue = Math.max(0, this.hpValue - hero.attackDamage);
    this.monsterBoxEl.children[0].innerText = this.hpValue;
  }
}
