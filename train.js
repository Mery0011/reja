//TASK-D
class Shop {
  constructor(non, lagmon, cola) {
    this.non = non;
    this.lagmon = lagmon;
    this.cola = cola;
  }

  time() {
    let d = new Date();
    return d.getHours() + ":" + d.getMinutes();
  }

  qoldiq() {
    return `Hozir ${this.time()}da ${this.non}ta non, ${this.lagmon}ta lagmon va ${this.cola}ta cola mavjud!`;
  }

  sotish(nomi, soni) {
    this[nomi] -= soni;
    console.log(`${this.time()}da ${soni}ta ${nomi} sotildi`);
  }

  qabul(nomi, soni) {
    this[nomi] += soni;
    console.log(`${this.time()}da ${soni}ta ${nomi} qabul qilindi`);
  }
}

// TEST
const shop = new Shop(4, 5, 2);

console.log(shop.qoldiq());

shop.sotish('non', 3);
shop.qabul('cola', 4);

console.log(shop.qoldiq());



//TASK-C

/*function checkContent(str1, str2) {
    if (str1.length !== str2.length) return false;

    return str1.split('').sort().join('') ===
           str2.split('').sort().join('');
}

// test
console.log(checkContent("listen", "silent"));// true
console.log(checkContent("hello", "world")); // false
*/

//TASK-B 

/*function countNum(word) {
  let count = 0;
  for (let letter of word) {
    if (letter >= 0) {
      count++;
    }
  }
  console.log(`Ushbu string ichidan ${count} ta raqam topildi`);
}
countNum("ad2a54y79wet0sfgb9");
*/

//TASK-A

/*function countLetter(letter, word) {
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
*/


//console.log("Jack Ma maslahatlari");

/*const list = [
  "yaxshi talaba boling", // 0-20
  "togri boshliq tanlang va koproq hato qiling", // 20-30
  "uzingizga ishlashingizni boshlang", // 30-40
  "siz kuchli bolgan narsalarni qiling", // 40-50
  "yoshlarga investitsiya qiling", // 50-60
  "endi dam oling, foydasi yoq endi", // 60
];
*/

//CALLBACK function
/*function maslahatBering(a, callback) {
  if (typeof a !== "number") callback("insert a number", null);
  else if (a <= 20) callback(null, list[0]);
  else if (a > 20 && a <= 30) callback(null, list[1]);
  else if (a > 30 && a <= 40) callback(null, list[2]);
  else if (a > 40 && a <= 50) callback(null, list[3]);
  else if (a > 50 && a <= 60) callback(null, list[4]);
  else {
  setTimeout(function () {
  callback(null, list[5]);
    }, 5000);
   }
}
console.log("passed here 0");
maslahatBering(65, (err, data) => {
if (err) console.log("ERROR:", err);
else {
  console.log("javob:", data);
  }
});
console.log("passed here 1");
*/

//ASYNC function 
/*async function maslahatBering(a) {
  if (typeof a !== "number") throw new Error("insert a number");
  else if (a <= 20) return list[0];
  else if (a > 20 && a <= 30) return list[1];
  else if (a > 30 && a <= 40) return list[2];
  else if (a > 40 && a <= 50) return list[3];
  else if (a > 50 && a <= 60) return list[4];
  else {
    return new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(list[5]);
   }, 5000);
  });
 }
}
 */

//call via then/catch
/*console.log("passed here 0");
maslahatBering(25)
  .then((data) => {
    console.log("javob:", data);
  })
  .catch((err) => {
    console.log("ERROR:", err);
  });
console.log("passed here 1");
*/

// call via async/await
/*async function run() {
  let javob = await maslahatBering(20);
  console.log(javob);
  javob = await maslahatBering(31);
  console.log(javob);
  javob = await maslahatBering(41);
  console.log(javob);
}
run();
*/

