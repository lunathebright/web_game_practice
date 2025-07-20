class Hero extends Position {
  constructor(el) {
    super();

    this.el = document.querySelector(el);
    this.moveX = 0;
    this.speed = 16;
    this.direction = "right";
    this.attackDamage = 1000;
    this.hpProgress = 0;
    this.hpValue = 10000;
    this.hpDefaultHpValue = this.hpValue;
  }

  keyMotion() {
    if (keyDown.left) {
      this.direction = "left";
      this.el.classList.add("run", "flip");

      !(this.moveX <= 0) && (this.moveX = this.moveX - this.speed);
    } else if (keyDown.right) {
      this.direction = "right";
      this.el.classList.add("run");
      this.el.classList.remove("flip");

      this.moveX = this.moveX + this.speed;
    }

    if (!keyDown.left && !keyDown.right) {
      this.el.classList.remove("run");
    }

    if (keyDown.attack) {
      if (!bulletCommonProps.launch) {
        this.el.classList.add("attack");
        bulletCommonProps.bullets.push(new Bullet());
        bulletCommonProps.launch = true;
      }
    }
    if (!keyDown.attack) {
      this.el.classList.remove("attack");
      bulletCommonProps.launch = false;
    }

    this.el.parentNode.style.transform = `translateX(${this.moveX}px)`;
  }

  size() {
    return {
      width: this.el.offsetWidth,
      height: this.el.offsetHeight,
    };
  }

  updateHp(monsterDamage) {
    this.hpValue = Math.max(0, this.hpValue - monsterDamage);
    this.hpProgress = (this.hpValue / this.hpDefaultHpValue) * 100;

    const heroHpBox = document.querySelector(
      ".game_info .hero_state .state_box .hero_hp div"
    );
    heroHpBox.style.width = `${this.hpProgress}%`;
  }
}
