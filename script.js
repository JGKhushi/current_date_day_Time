const dateToday = new Date();
const weekDay = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

let day = weekDay[dateToday.getDay()];
let hr = dateToday.getHours() % 12 || 12;
let min = dateToday.getMinutes();
let sec = dateToday.getSeconds();

document.getElementById("date").innerHTML = "Today is: " + day;

let amPm;
if (dateToday.getHours() >= 12) {
  amPm = "PM";
} else {
  amPm = "AM";
}

document.getElementById("time").innerHTML = "Current time is: " + hr + ":" + min + ":" + sec + " " + amPm;


