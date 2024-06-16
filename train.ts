// I-TASK:

// Shunday function yozing, u parametridagi array ichida eng kop takrorlangan raqamni topib qaytarsin.
// MASALAN: majorityElement([1,2,3,4,5,4,3,4]) return 4

// @MITASK

let maxCount: number = 1;
let currentCount: number = 1;

function majorityElement(arr: number[]): number {
  arr.sort();

  let mostFrequent = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] === arr[i - 1]) {
      currentCount++;
    } else {
      currentCount = 1;
    }

    if (currentCount > maxCount) {
      maxCount = currentCount;
      mostFrequent = arr[i];
    }
  }
  return mostFrequent;
}

console.log(majorityElement([1, 2, 3, 4, 5, 4, 3, 4]));
