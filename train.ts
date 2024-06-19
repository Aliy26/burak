// J-TASK:

// Shunday function yozing, u string qabul qilsin va string ichidagi eng uzun sozni qaytarsin.
// MASALAN: findLongestWord("I come from Uzbekistan") return "Uzbekistan"

// @MITASK
let empty: string = "";
let longestWord: number = 0;
function findLongestWord(str: string): string {
  let toArr = str.split(" ");
  for (let i = 0; i < toArr.length; i++) {
    if (toArr[i].length > longestWord)
      (longestWord = toArr[i].length), (empty = toArr[i]);
  }
  return empty;
}

console.log(
  findLongestWord("I am not from United-States I come from Uzbekistan")
);
