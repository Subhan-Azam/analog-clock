setInterval(() => {
  let d = new Date();
  let hTime = d.getHours();
  let minTime = d.getMinutes();
  let secTime = d.getSeconds();

  let hRotation = 30 * hTime + minTime / 2;
  let minRotation = 6 * minTime;
  let secRotation = 6 * secTime;

  document.getElementById(
    "hourArrow"
  ).style.transform = `rotate(${hRotation}deg)`;
  document.getElementById(
    "minArrow"
  ).style.transform = `rotate(${minRotation}deg)`;
  document.getElementById(
    "secArrow"
  ).style.transform = `rotate(${secRotation}deg)`;
}, 1000);
