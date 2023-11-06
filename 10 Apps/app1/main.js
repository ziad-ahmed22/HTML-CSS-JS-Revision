let circle = document.querySelector(".circle");
let value = document.querySelector(".value");

let startValue = 0;
let endValue = 100;
let speed = 15;

let progress = setInterval(() => {
  startValue++;

  value.textContent = `${startValue}%`;

  circle.style.background = `conic-gradient(teal ${
    startValue * 3.6
  }deg, #eee 0deg)`;

  if (startValue === endValue) clearInterval(progress);
}, speed);
