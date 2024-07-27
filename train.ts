// ZA-TASK:
// Shunday function yozing, u array ichidagi objectlarni “age” qiymati boyicha sortlab bersin.
// MASALAN: sortByAge([{age:23}, {age:21}, {age:13}]) return [{age:13}, {age:21}, {age:23}]

function sortByAge(arr: any[]): number[] {
  let vacant: any = [];
  for (let num of arr) vacant.push(num.age);
  vacant.sort((a: number, b: number) => {
    return a - b;
  });

  arr.map((value, index) => {
    return (value.age = vacant[index]);
  });

  return arr;
}

console.log(
  "TASK-ZA =>",
  sortByAge([{ age: 111 }, { age: 23 }, { age: 21 }, { age: 13 }])
);

// ZB-TASK:

// Shunday function yozing, uni 2 ta number parametri bolsin va berilgan sonlar orasidan random raqam return qilsin
// MASALAN: randomBetween(30, 50) return 45

function randomBetween(from: number, until: number): number {
  return Math.floor(Math.random() * (until - from)) + from;
}
console.log("\n");
console.log("TASK-ZB =>", randomBetween(30, 50));
