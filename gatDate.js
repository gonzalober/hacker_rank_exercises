const dayName = (dateString) => {
  var days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  var d = new Date(dateString);
  var dayName = days[d.getDay()];
  return dayName;
};

// function Name() {
//   this.name = "Juan";
// }
// const u = new Name();
// u.name // Juan
// Name();
// name // Juan
// Alberto Miguel Pose22:45
// class Name {
//   constructor() {
//     this.name = "juan"
//   }
// }
// A callback is a plain JavaScript function passed
// to some method as an argument or option. It is a function that is to be executed after another function has finished executing, hence the name ‘call back‘.
// Alberto Miguel Pose22:51
// Closures are created whenever a variable that is defined outside
// the current scope is accessed from within some inner scope.
// It gives you access to an outer function’s scope from an inner function.
// In JavaScript, closures are created every time a function is created.
// To use a closure, simply define a function inside another function and expose it.
