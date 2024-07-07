// S-TASK:

// Shunday function yozing, u numberlardan tashkil topgan array qabul qilsin va osha numberlar orasidagi tushib qolgan sonni topib uni return qilsin
// MASALAN: missingNumber([3, 0, 1]) return 2

function missingNumber(arr: number[]): any {
  let vacant: number[] = [];
  const sorted = arr.sort();
  const min = sorted[0];
  const max = sorted[sorted.length - 1];
  for (let i = min; i <= max; i++) {
    if (!arr.includes(i)) vacant.push(i);
  }
  if (vacant.length > 1) return vacant;
  else return Number(vacant.join(""));
}

console.log(missingNumber([3, 0, 1]));
console.log(missingNumber([4, 0, 1]));
