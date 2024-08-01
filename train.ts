// ZD-TASK:

// Shunday function yozing, uni number, array va number parametrlari bolsin va berilgan 1-parametr numberga teng indexni array ichidan topib 3-parametrdagi raqam bilan almashtirib yangilangan arrayni qaytarsin
// MASALAN: changeNumberInArray(1, [1,3,7,2], 2) return [1,2,7,2]

function changeNumberInArray(num1: number, arr: number[], num2: number) {
  arr.splice(num1, num1, num2);
  return arr;
}

console.log(changeNumberInArray(1, [1, 3, 7, 2], 2));
