// U-TASK:

// Shunday function yozing, uni number parametri bolsin va 0 dan berilgan parametrgacha bolgan oraliqdagi faqat toq sonlar nechtaligini return qilsin
// MASALAN: sumOdds(9) return 4; sumOdds(11) return 5;

function sumOdds(num: number): number {
  const vacant: number[] = [];
  for (let i = 0; i < num; i++) {
    if (i % 2 === 1) vacant.push(i);
  }
  return vacant.length;
}

console.log(sumOdds(9));
console.log(sumOdds(11));
console.log(sumOdds(1));
