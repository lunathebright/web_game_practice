const windowEvent = () => {
  console.log("hello world");
};

const init = () => {
  windowEvent();
};

window.onload = () => {
  init();
};
