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