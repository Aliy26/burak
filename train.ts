// V-TASK:

// Shunday function yozing, uni string parametri bolsin va stringdagi harf va u harf necha marta takrorlangani sonidan tashkil topgan object qaytarsin.
// MASALAN: countChars("hello") return {h: 1, e: 1, l: 2, o: 1}

function countChars(str: string): {} {
  let obj: any = {};
  let vacant: string[] = [];
  for (let i = 0; i < str.length; i++) {
    if (str.indexOf(str[i]) === str.lastIndexOf(str[i])) {
      obj[str[i]] = 1;
    } else {
      vacant.push(str[i]);
      obj[str[i]] = vacant.length;
    }
  }
  return obj;
}

console.log(countChars("helllo"));
console.log(countChars("mit"));
