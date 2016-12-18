const setTime = (secondHand, minuteHand, hourHand) => {
  var root = document.documentElement;
  const now = new Date();

  const seconds = now.getSeconds();
  const secondsDegree = ((seconds / 60) * 360) + 90;
  root.style.setProperty('--secondsDegree', secondsDegree);

  const minutes = now.getMinutes();
  const minutesDegree = ((minutes / 60) * 360) + 90;
  root.style.setProperty('--minutesDegree', minutesDegree);

  const hours = now.getHours();
  const hoursDegree = ((hours / 12) * 360) + 90;
  root.style.setProperty('--hoursDegree', hoursDegree);
}

const secondHand = document.querySelector('.second-hand');
const minuteHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');
setInterval(setTime.bind(null, secondHand, minuteHand, hourHand), 1000);
