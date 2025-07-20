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
    this.defaultHpValue = hp;
    this.hpValue = hp;
    this.hpProgress = 0;
    this.hpBar = document.createElement("div");
    this.positionX = positionX;
    this.moveX = 0;
    this.speed = 10;
    this.crashDamage = 100;

    this.init();
  }
  init() {
    this.hpEl.appendChild(this.hpBar);
    this.monsterBoxEl.appendChild(this.hpEl);
    this.monsterBoxEl.appendChild(this.el);
    this.gameEl.appendChild(this.monsterBoxEl);
    this.monsterBoxEl.style.left = this.positionX + "px";
  }

  updateHp(idx) {
    this.hpValue = Math.max(0, this.hpValue - hero.attackDamage);
    this.hpProgress = (this.hpValue / this.defaultHpValue) * 100;
    this.hpBar.style.width = `${this.hpProgress}%`;
    if (this.hpValue === 0) this.dead(idx);
  }

  dead(idx) {
    this.monsterBoxEl.classList.add("dead");
    setTimeout(() => this.monsterBoxEl.remove(), 250);
    monsterCommonProps.monsters.splice(idx, 1);
  }

  move() {
    const monsterRightEdge =
      this.moveX + this.positionX + this.monsterBoxEl.offsetWidth;
    const heroOffset = hero.position().left - hero.moveX;

    const isMonsterReachedLeft = monsterRightEdge + heroOffset <= 0;
    if (isMonsterReachedLeft) {
      this.moveX =
        hero.moveX - this.positionX + gameProps.screenW - hero.position().left;
    } else {
      this.moveX -= this.speed;
    }
    this.monsterBoxEl.style.transform = `translateX(${this.moveX}px)`;
    this.crash();
  }

  crash() {
    let diff = 70;
    if (
      hero.position().right - diff > this.position().left &&
      hero.position().left + diff < this.position().right
    ) {
      hero.updateHp(this.crashDamage);
    }
  }
}
