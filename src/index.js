/**
 * const, let
 */
// var val1 = "var";
// console.log(val1);

// val1 = "varを更新";
// console.log(val1);

// var val1 = "varを再宣言";
// console.log(val1);

// let val2 = "let";
// console.log(val2);

// val2 = "letを更新";
// console.log(val2);

// let val2 = "letを再宣言";

// const val3 = "const";
// console.log(val3);

// val3 = "constを更新";

// const val3 = "constを再宣言";

// const val4 = {
//   name: "name",
//   age: "28"
// };
// val4.name = "name更新";
// val4.addres = "長野";
// console.log(val4);

// const val5 = ["dog", "cat"];
// val5[0] = "bird";
// val5.push("monkey");
// console.log(val5);

/**
 * テンプレート文字列
 */
// const name = "naoya";
// const age = "100";

// // 従来
// const message1 = "私の名前は" + name + "です。年齢は" + age + "です。";
// console.log(message1);

// // テンプレート文字列
// const message2 = `私の名前は${name}です。年齢は${age}です。`;
// console.log(message2);

/**
 * arrow関数
 */

// 従来
// function func1(str) {
//   return str;
// }
// const func1 = function (str) {
//   return str;
// };
// console.log(func1("func1"));

// // arrow
// const func2 = (str) => str;
// console.log(func2("func2"));

// const func3 = (num1, num2) => num1 + num2;
// console.log(func3(10, 20));

/**
 * 分割代入
 */
// const myProfile = {
//   name: "naoya",
//   age: 100
// };
// const message1 = `私の名前は${myProfile.name}です。年齢は${myProfile.age}です。`;
// console.log(message1);

// const { name, age } = myProfile;
// const message2 = `私の名前は${name}です。年齢は${age}です。`;
// console.log(message1);

// const myProfile = ["naoya", 100];
// const message3 = `私の名前は${myProfile[0]}です。年齢は${myProfile[1]}です。`;
// console.log(message3);

// const [name, age] = myProfile;
// const message4 = `私の名前は${name}です。年齢は${age}です。`;
// console.log(message4);

/**
 * デフォルト値
 */
// const sayHello = (name = "ゲスト") => console.log(`こんにちは!${name}さん!`);
// sayHello("naoya");
// sayHello();

/**
 * スプレッド構文
 */
// const arr1 = [1, 2];
// // console.log(arr1);
// // console.log(...arr1);

// const sumFunc = (num1, num2) => console.log(num1 + num2);
// sumFunc(arr1[0], arr1[1]);
// sumFunc(...arr1);

// const arr2 = [1, 2, 3, 4, 5];
// const[num1, num2, ...arr3] = arr2;
// console.log(num1);
// console.log(num2);
// console.log(arr3);

// const arr4 = [10, 20];
// const arr5 = [30, 40];
// const arr6 = [...arr4];
// arr6[0] = 100;
// console.log(arr6);
// console.log(arr4);
// const arr7 = [...arr4, ...arr5];
// console.log(arr7);
// const arr8 = arr4;
// arr8[0] = 100;
// console.log(arr8);
// console.log(arr4);

/**
 * map, filter
 */
// const nameArr = ["田中", "山田", "naoya"];
// for(let index = 0; index < nameArr.length; index++){
//   console.log(`${index + 1}番目は${nameArr[index]}です。`);
// }
// const nameArr2 = nameArr.map((name)=>{
//   return name;
// })
// console.log(nameArr2);
// nameArr.map((name, index) => console.log(`${index + 1}番目は${name}です。`));

// const numArr = [1, 2, 3, 4, 5];
// const newNumArr = numArr.filter((num) => {
//   return num % 2 === 1;
// });
// console.log(newNumArr);

// const newNameArr = nameArr.map((name) => {
//   if (name === "naoya") {
//     return name;
//   } else {
//     return `${name}さん`;
//   }
// });
// console.log(newNameArr);

/**
 * 三項演算子
 */
// const val1 = 1 > 0 ? "trueです" : "falseです";
// console.log(val1);
// const num = "1300";
// console.log(num.toLocaleString());

// const formattedNum =
//   typeof num === "number" ? num.toLocaleString() : "数値を入力してください";
// console.log(formattedNum);

// const checkSum = (num1, num2) => {
//   return num1 + num2 > 100 ? "100を超えています" : "許容範囲内です";
// };
// console.log(checkSum(50, 40));

/**
 * 論理演算子
 */
// const flag1 = true;
// const flag2 = false;
// if (flag1 || flag2) {
//   console.log("1か2はtrue");
// }
// if (flag1 && flag2) {
//   console.log("1も2もtrue");
// }

// const num = 100;
// const fee = num1 || "金額未設定です";
// console.log(fee);

// const num2 = null;
// const fee2 = num2 && "何か設定されました";
// console.log(fee2);
