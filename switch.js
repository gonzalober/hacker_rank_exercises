//input adfgt output A
//set {a,e,i,o,u}="A"; {b,c,d,f,g}="B"

function getLetter(s) {
  let letter;
  // Write your code here
  let char = s[0];
  switch (char) {
    case "a":
    case "e":
    case "i":
    case "o":
    case "u":
      letter = "A";
      break;
    case "b":
    case "c":
    case "d":
    case "f":
    case "g":
      letter = "B";
      break;
    case "h":
    case "j":
    case "k":
    case "l":
    case "m":
      letter = "C";
      break;
    default:
      letter = "D";
  }
  return letter;
}
