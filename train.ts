// Z-TASK:

// Shunday function yozing, uni sonlardan tashkil topgan array qabul qilsin. Function arraydagi juft sonlarni yigindisini qaytarsin
// MASALAN: sumEvens([1,2,3]) return 2

function sumEvens(arr: number[]): number | number[] {
  let vacant: number[] = [];
  for (let number of arr) {
    if (number % 2 === 0) vacant.push(number);
  }
  return vacant.length > 1 ? vacant : Number(vacant);
}

console.log(sumEvens([1, 2, 3]));
console.log(sumEvens([1, 2, 3, 4]));
