// L-TASK:

// Shunday function yozing, u string qabul qilsin va string ichidagi hamma sozlarni chappasiga yozib va sozlar ketma-ketligini buzmasdan stringni qaytarsin.
// MASALAN: reverseSentence("we like coding!") return "ew ekil gnidoc";

// @MITASK

const reverseSentence = (str: string): string =>
  str.split("").reverse().join("").split(" ").reverse().join(" ");

console.log(reverseSentence("we like coding!"));
