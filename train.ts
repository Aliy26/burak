// N-TASK:

// Shunday function yozing, u string qabul qilsin va string palindrom yani togri oqilganda ham, orqasidan oqilganda ham bir hil oqiladigan soz ekanligini aniqlab boolean qiymat qaytarsin.
// MASALAN: palindromCheck("dad") return true;  palindromCheck("son") return false;

// @MITASK

const palindromCheck = (str: string): boolean =>
  str === str.split("").reverse().join("") ? true : false;

console.log(palindromCheck("dad"));
console.log(palindromCheck("son"));
