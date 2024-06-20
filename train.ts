// K-TASK:

// Shunday function yozing, u string qabul qilsin va string ichidagi unli harflar sonini qaytarsin.
// MASALAN: countVowels("string") return 1;

// @MITASK

const vowels: string[] = ["a", "e", "i", "o", "u", "y"];

function countVoweles(str: string) {
  let count: number = 0;
  for (let vowel of str) {
    if (vowels.includes(vowel)) count++;
  }
  return count;
}

console.log(countVoweles("string"));
