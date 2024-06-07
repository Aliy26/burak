import validator from "validator";

// H2-TASK:

// Shunday function tuzing, unga string argument pass bolsin. Function ushbu agrumentdagi digitlarni yangi stringda return qilsin
// MASALAN: getDigits("m14i1t") return qiladi "141"

let empty: string[] = [];

function getDigits(str: string): string {
  for (let value of str) {
    if (validator.isInt(value)) empty.push(value);
  }
  return empty.join("");
}

console.log(getDigits("m13i1t"));
