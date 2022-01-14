const hour = document.querySelector(".hourArm");
const minute = document.querySelector(".minuteArm");
const second = document.querySelector(".secondArm");

function time(){
  const date = new Date();
  const sec = date.getSeconds();
  const secDegree = ((sec/60) * 360);
  second.style.transform = `rotate(${secDegree}deg)`;
  

  const min = date.getMinutes();
  const minDegree = ((min/60) * 360);
  minute.style.transform = `rotate(${minDegree}deg)`;

  const hr = date.getHours();
  const hourDegree = ((hr/12) * 360);
  hour.style.transform = `rotate(${hourDegree}deg)`;

}

setInterval(time, 1000);

