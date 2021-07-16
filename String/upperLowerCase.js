let example = "i love playing tennis";

const upperLower = (str) => {
  let sentenceArray = str.split(" ");
  let counter = 0;
  for (let i = 0; i < sentenceArray.length; i++) {
    let stringResult = "";
    for (let j = 0; j < sentenceArray[i].length; j++) {
      if (counter % 2 === 0) {
        stringResult += sentenceArray[i][j];
      } else {
        stringResult += sentenceArray[i][j].toUpperCase();
      }
      counter++;
    }
    sentenceArray[i] = stringResult;
  }

  return sentenceArray.join(" ");
};

console.log(upperLower(example));

//WITH FOREACH:
// const cadena = "hola que tal";
// const partes = cadena.split(" ");
// let counter = 0;
// partes.forEach((element, i) => {
//   let nueva = "";
//   for (let j = 0; j < element.length; j++) {
//     nueva += counter % 2 === 0 ? element[j] : element[j].toUpperCase();
//     counter++;
//   }
//   partes[i] = nueva;
// });

// console.log(partes.join(" "));

//WITH REDUCE
// const cadena = "hola que tal";

// const nueva = cadena.split("").reduce(
//   (acc, curr) => {
//     acc.cadena += acc.contador % 2 === 0 ? curr : curr.toUpperCase();

//     if (curr !== " ") acc.contador++;

//     return acc;
//   },
//   { cadena: "", contador: 0 }
// ).cadena;

// console.log(nueva);
