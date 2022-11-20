// function arrayFromRange(min, max) {
//   for (i = 0; i < max; i++) {
//     console.log(i);
//   }
// }
// arrayFromRange(1, 10);
// function arrayFromRange(min, max) {
//   const array = [];
//   for (let i = min; i < max; i++) array.push(i);
//   return array;
// }
// console.log(arrayFromRange(1, 10));
// const numbers = [1, 2, 3, 4, 5, 6, 7];

// function include(array, element) {
//   let a = numbers.includes(element);
//   return a;
// }
// console.log(include(numbers, 2));
// const a = [1, 2, 1, 3, 4, 5];
// function e(array, exclude) {
//   var b = [];
//   for (i of a) {
//     if (i == exclude) {
//       b.push(exclude);
//     }
//   }
// }
// console.log(b);
// e(a, 1);

// const n = [1, 2, 3, 4, 5];
// function move(array, index, offset) {
//   for (let i in n) {
//     if (i == index) {
//       var e = index - 1;
//       var c = n[e];
//       var d = n[offset + e];
//       var a = n.splice(c, 1);
//       var b = n.splice(d, 0, a);
//     }
//   }
//   console.log(n);
// }
// move(n, 1, -1);
const n = [1, 2, 3, 3, 3, 4, 3, 3, 5];
function cc(array, element) {
  n.reduce((a, c) => {
    if (c === element) {
      a += c;
    }
    return a;
  }, 0);
}
cc(n, 3);
