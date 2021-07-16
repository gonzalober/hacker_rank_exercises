let str = "07:05:45PM";

const timeConversion = (s) => {
  let ampm = s.slice(-2);

  let timeArray = s.slice(0, -2).split(":");

  if (ampm === "AM" && timeArray[0] === "12") {
    timeArray[0] = "00";
  } else if (ampm === "PM") {
    console.log(timeArray[0] % 12);
    timeArray[0] = (timeArray[0] % 12) + 12;
  }
  return timeArray.join(":");
};

console.log(timeConversion(str));
