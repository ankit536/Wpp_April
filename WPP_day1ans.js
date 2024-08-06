const currentDate = new Date();
// Get Day
const currentDay = currentDate.getDay();
function getDay(currentDay) {
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  return days[currentDay];
}

//Get Time
function getTime() {
  return currentDate.toLocaleTimeString("en-IN", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: "true",
  });
}
console.log(`Today is: ${getDay(currentDay)}`);
console.log(`Current Time is: ${getTime()}`);
