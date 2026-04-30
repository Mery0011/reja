//TASK-A

function countLetter(letter, word) {
  let count = 0;
  for (let i = 0; i < word.length; i++) {
    if (word[i] === letter) {
      count++;
    }
  }
 return count;
}
// Test
console.log(countLetter("m", "muminova")); //2


//TASK-B 

function countNum(word) {
  let count = 0;
  for (let letter of word) {
    if (letter >= 0) {
      count++;
    }
  }
  console.log(`Ushbu string ichidan ${count} ta raqam topildi`);
}
countNum("ad2a54y79wet0sfgb9");

//TASK-C

function checkContent(str1, str2) {
    if (str1.length !== str2.length) return false;

    return str1.split('').sort().join('') ===
           str2.split('').sort().join('');
}

// test
console.log(checkContent("listen", "silent"));// true
console.log(checkContent("hello", "world")); // false