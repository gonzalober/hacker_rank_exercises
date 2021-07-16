const repeatedString = (s, n) => {
  // Write your code here
  const numberOfAs = s.split("").filter((c) => c === "a").length;
  const times = parseInt(n / s.length); //how many times enter strlength into n

  const rest = n % s.length; //remainder char
  const totalAs =
    times * numberOfAs +
    s
      .slice(0, rest)
      .split("")
      .filter((c) => c === "a").length;

  return totalAs;
};
