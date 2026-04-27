/*var numbers = [3, 56, 2, 48, 5];
function double(x) {
  return x * 2;
}
const new_nums = numbers.map(double);
console.log(new_nums);
//Map -Create a new array by doing something with each item in an array.
const new_numbers = numbers.map(function (x) {
  return x * 2;
});
console.log(new_numbers);
//Filter - Create a new array by keeping the items that return true.
const filt = numbers.filter(function (num) {
  return num > 10;
});
console.log(filt);
//Reduce - Accumulate a value by doing something to each item in an array.
const red = numbers.reduce(function (accumulator, currentNumber) {
  return accumulator + currentNumber;
});
console.log(red);
//Find - find the first item that matches from an array.
const find = numbers.find(function (num) {
  return num > 10;
});
console.log(find);
//FindIndex - find the index of the first item that matches.
const findI = numbers.findIndex(function (num) {
  return num > 10;
});
console.log(findI);
*/
import emojipedia from "./emojipedia";
const text = emojipedia.map(function (emojiT) {
  return emojiT.meaning.substring(0, 100);
});
console.log(text);
/*const sent = text.toString();
sent.substring(0, 100);
console.log(sent);*/
