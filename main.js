let secondhand = document.getElementById("seconds");
let minuteshand = document.getElementById("minute");
let hourhand = document.getElementById("hour");

setInterval(() => {
  let time = new Date();
  hour = time.getHours();
  minutes = time.getMinutes();
  second = time.getSeconds();
  let hr = hour * 30 + minutes / 2;
  let min = minutes * 6;
  let sec = second * 6;
  hourhand.style.transformOrigin = "bottom";
  minuteshand.style.transformOrigin = "bottom";
  secondhand.style.transformOrigin = "bottom";
  hourhand.style.transform = `rotate(${hr}deg)`;
  minuteshand.style.transform = `rotate(${min}deg)`;
  secondhand.style.transform = `rotate(${sec}deg)`;
}, 1000);
