// ZG-TASK:

// Shunday function yozing, u berilgan string parametrni snake casega otkazib qaytarsin.
// MASALAN: capitalizeWords('name should be a string') return 'name_should_be_a_string'

const capitalizeWords = (str: string): string =>
  (str = str.split(" ").join("_"));

console.log(capitalizeWords("name should be a string"));
