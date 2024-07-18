// W-TASK:

// Shunday function yozing, uni array va number parametrlari bolsin. Function arrayni numberda berilgan uzunlikda kesib bolaklarga ajratilgan array holatida qaytarsin
// MASALAN: chunkArray([1,2,3,4,5,6,7,8,9,10], 3) return [[1,2,3], [4,5,6], [7,8,9], [10]]

// @MITASK

function chunkArray(arr: number[], num: number): number[] {
  const vacant: number[] = [];

  for (let i = 0; i < arr.length; i += num) {
    const chunk: any = arr.slice(i, i + num);

    vacant.push(chunk);
  }

  return vacant;
}

console.log(chunkArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 3));
