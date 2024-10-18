const date = document.getElementById("date");
const day = document.getElementById("day");
const month = document.getElementById("month");
const year = document.getElementById("year");

const today = new Date();

const weeksDays = ["Sunday","Monday","Tuesday","Wedensday","Thursday","Friday","Saturday"];
const MonthName = ["January","February","March","April","May","June","July","August","September","October","November","December"]

date.innerHTML = (today.getDate() < 10? "0":"") + today.getDate();
day.innerHTML =  weeksDays[today.getDay()];
month.innerHTML = MonthName[ today.getMonth()];
year.innerHTML = today.getFullYear();