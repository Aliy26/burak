// M-TASK:

// Shunday function yozing, u raqamlardan tashkil topgan array qabul qilsin va array ichidagi har bir raqam uchun raqamni ozi va hamda osha raqamni kvadratidan tashkil topgan object hosil qilib, hosil bolgan objectlarni array ichida qaytarsin.
// MASALAN: getSquareNumbers([1, 2, 3]) return [{number: 1, square: 1}, {number: 2, square: 4}, {number: 3, square: 9}];

// @MITASK

function getSquareNumbers(arr: number[]): {}[] {
  const newArr = arr.map((value) => {
    return { number: value, square: value ** 2 };
  });
  return newArr;
}

console.log(getSquareNumbers([1, 2, 3]));
