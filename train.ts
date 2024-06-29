// O-TASK:

// Shunday function yozing, u har xil valuelardan iborat array qabul qilsin va array ichidagi sonlar yigindisini hisoblab chiqqan javobni qaytarsin.
// MASALAN: calculateSumOfNumbers([10, "10", {son: 10}, true, 35]) return 45

function calclulateSumofNumbers(arr: any[]): number {
  let count: number = 0;

  arr.map((value) => {
    typeof value === "number" ? (count += value) : null;
  });

  return count;
}

console.log(calclulateSumofNumbers([10, "10", { son: 10 }, true, 35]));
