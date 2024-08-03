// ZE-TASK:

// Shunday function yozing, uni  string parametri bolsin. String ichida takrorlangan harflarni olib tashlab qolganini qaytarsin
// MASALAN: removeDuplicate('stringg') return 'string'

function removeDuplilcate(str: string): string {
  let vacant: string[] = [];
  for (let letters of str) {
    if (!vacant.includes(letters)) vacant.push(letters);
  }
  return vacant.join("");
}

console.log(removeDuplilcate("stringg"));
