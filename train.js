/*F-TASK: 

Shunday findDoublers function tuzing, unga faqat bitta string argument pass bolib, agar stringda bir hil harf qatnashgan bolsa true, qatnashmasa false qaytarishi kerak.
MASALAN: getReverse("hello") return true return qiladi

@MITASK
*/

let highest = 0;
function getHighestIndex(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > highest) highest = arr[i];
  }
  return arr.indexOf(highest);
}

console.log(getHighestIndex([5, 21, 12, 21, 8]));
