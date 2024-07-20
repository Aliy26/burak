// X-TASK:

//  Shunday function yozing, uni object va string parapetrlari bolsin. Function string parametri object ichida necha marotaba takrorlanganligini qaytarsin (nested object bolsa ham sanasin)
//  MASALAN: countOccurrences({model: 'Bugatti', steer: {model: 'HANKOOK', size: 30}}, 'model') return 2

function countOccurrences(obj: {}, str: string): number {
  let vacant: any = [];
  let vacant2: any = [];
  let count = 0;
  const arr1 = Object.keys(obj);
  const arr2 = Object.values(obj);

  for (let value of arr2) {
    if (typeof value === "object") vacant.push(value);
    else if (typeof value === "string") arr1.push(value);
  }
  vacant2 = Object.entries(vacant[0]);

  const arr3 = arr1.concat(vacant2).flat();
  for (let value of arr3) {
    if (value === str) count++;
  }
  console.log(arr3);

  return count;
}

console.log(
  countOccurrences(
    {
      model: "Bugatti",
      steer: { model: "HANKOOK", size: 30 },
    },
    "model"
  )
);
