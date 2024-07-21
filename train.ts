// Y-TASK:

//  Shunday function yozing, uni 2 ta array parapetri bolsin. Function ikkala arrayda ham ishtirok etgan qiymatlarni bir arrayda qaytarsin
//  MASALAN: findIntersection([1,2,3], [3,2,0]) return [2,3]

function findIntersection(arr: number[], arr2: number[]): number[] {
  let vacant: number[] = [];
  for (let value of arr) {
    if (arr2.includes(value)) vacant.push(value);
  }
  return vacant.sort();
}

console.log(findIntersection([1, 2, 3], [3, 2, 0]));
