const keyValues = {
  ArrowLeft: "left",
  ArrowRight: "right",
  KeyX: "attack",
};

const keyDown = Object.values(keyValues).reduce(
  (acc, crr) => ({ ...acc, [crr]: false }),
  {}
);

const bulletCommonProps = {
  launch: false,
  bullets: [],
};

const monsterCommonProps = {
  monsters: [],
};

const background = {
  box: document.querySelector(".game"),
};

const gameProps = {
  screenW: window.innerWidth,
  screenH: window.innerHeight,
};
