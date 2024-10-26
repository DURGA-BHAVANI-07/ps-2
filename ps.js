// function countWords(words) {
//   return words.reduce((countMap, word) => {
//     countMap[word] = (countMap[word] || 0) + 1;
//     return countMap;
//   }, {});
// }
// const words = ["apple", "banana", "apple", "orange", "banana", "apple"];
// const wordCounts = countWords(words);
// console.log(wordCounts);


// function countVowelsInWords(words) {
//   const vowels = new Set(['a', 'e', 'i', 'o', 'u']);
  
//   return words.map(word => {
//     let vowelCount = 0;
//     for (const char of word.toLowerCase()) {
//       if (vowels.has(char)) {
//         vowelCount++;
//       }
//     }
//     return { word, vowelCount };
//   });
// }
// const words = ["apple", "banana", "orange", "grape"];
// const vowelCounts = countVowelsInWords(words);
// console.log(vowelCounts);


function countConsonantsInWords(words) {
  const vowels = new Set(["a", "e", "i", "o", "u"]);

  return words.map((word) => {
    let consonantCount = 0;
    for (const char of word.toLowerCase()) {
      if (/[a-z]/.test(char) && !vowels.has(char)) {
        consonantCount++;
      }
    }
    return { word, consonantCount };
  });
}
const words = ["apple", "banana", "orange", "grape"];
const consonantCounts = countConsonantsInWords(words);
console.log(consonantCounts);

