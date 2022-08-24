//*13. Roman to Integer

/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
  let sum = 0;
  let reducer = 0;

  if (s.includes("IV")) {
    sum += 4;
    reducer += 6;
  }
  if (s.includes("IX")) {
    sum += 9;
    reducer += 11;
  }
  if (s.includes("XL")) {
    sum += 40;
    reducer += 60;
  }
  if (s.includes("XC")) {
    sum += 90;
    reducer += 110;
  }
  if (s.includes("CD")) {
    sum += 400;
    reducer += 600;
  }
  if (s.includes("CM")) {
    sum += 900;
    reducer += 1100;
  }

  s.split("").forEach((value) => {
    switch (value) {
      case "I":
        sum += 1;
        break;
      case "V":
        sum += 5;
        break;
      case "X":
        sum += 10;
        break;
      case "L":
        sum += 50;
        break;
      case "C":
        sum += 100;
        break;
      case "D":
        sum += 500;
        break;
      case "M":
        sum += 1000;
        break;
    }
  });
  return sum - reducer;
};
