const renderGame = () => {
  hero.keyMotion();
  setBackground();

  bulletCommonProps.bullets.forEach((bullet) => bullet.moveBullet());
  window.requestAnimationFrame(renderGame);
};

const setBackground = () => {
  let parallaxValue = Math.min(0, (hero.moveX - gameProps.screenW / 3) * -1);
  background.box.style.transform = `translateX(${parallaxValue}px)`;
};

const loadImage = () => {
  const preLoadImages = [
    "../images/ninja/ninja_run.png",
    "../images/ninja/ninja_attack.png",
  ];
  preLoadImages.forEach((image) => {
    const img = new Image();
    img.src = image;
  });
};

const keyEvents = () => {
  window.addEventListener("keydown", (e) => {
    if (!Object.keys(keyValues).includes(e.code)) return;
    keyDown[keyValues[e.code]] = true;
  });

  window.addEventListener("keyup", (e) => {
    if (!Object.keys(keyValues).includes(e.code)) return;
    keyDown[keyValues[e.code]] = false;
  });
};

const resize = () => {
  window.addEventListener("resize", (e) => {
    gameProps.screenW = window.innerWidth;
    gameProps.screenH = window.innerHeight;
  });
};

let hero;
const init = () => {
  hero = new Hero(".hero");
  loadImage();
  keyEvents();
  resize();
  renderGame();
};

window.onload = () => {
  init();
};
