// T-TASK:

// Shunday function yozing, u sonlardan tashkil topgan 2 ta array qabul qilsin va ikkala arraydagi sonlarni tartiblab bir arrayda qaytarsin
// MASALAN: mergeSortedArrays([0,3,4,31], [4,6,30]); return [0,3,4,4,6,30,31]

function mergeSortedArrays(arr: number[], arr2: number[]) {
  const arr3 = arr.concat(arr2);
  return arr3.sort((a, b) => {
    return a - b;
  });
}

console.log(mergeSortedArrays([0, 3, 4, 31], [4, 6, 30]));
