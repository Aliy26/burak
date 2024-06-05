// H-TASK:

// shunday function tuzing, u integerlardan iborat arrayni argument sifatida qabul qilib, faqat positive qiymatlarni olib string holatda return qilsin
// MASALAN: getPositive([1, -4, 2]) return qiladi "12"

// @MITASK

let vacant: number[] = [];

function getPositive(arr: number[]): string {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] >= 0) vacant.push(arr[i]);
  }
  return vacant.join("");
}

console.log(getPositive([1, -4, 2]));
