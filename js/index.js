// let f = "efr";
// let s = " ejfjnr";
// console.log(f.concat(s));
// function sum(arguments) {
//   if (arguments == Array) {
//     console.log("arry");
//   }
// }
// sum([1, 2, 3, 4, 5, 6]);
// let area = {
//   radius: 10,
//   get a() {
//     return 3.14 * this.radius * this.radius;
//   },
// };

// console.log(area.a);

// function Circle(r) {
//   this.r = r;
// }
// Circle.prototype.draw = function () {
//   console.log("draw");
// };

// function Shape() {}
// Shape.prototype.duplicate = function () {
//   console.log("duplicate");
// };

// const s = new Shape();
// const c = new Circle(1);
// Circle.prototype = Object.create(Shape.prototype);

// function Person(name, age, phno, email) {
//   this.name = name;
//   this.age = age;
//   this.phno = phno;
//   this.email = email;
//   this.details = function () {
//     console.log("Getting details of a person");
//   };
// }

// let person1 = new Person("xyz", 12, 965478123, "xyz@gmail.com");
// let person2 = new Person("abc", 15, 954878123, "abc@gmail.com");
// let person3 = new Person("def", 13, 902154123, "def@gmail.com");
// let person4 = new Person("ghi", 18, 993601453, "ghi@gmail.com");

// //person1.details();
// person1.age = 20;
// console.log(person1);

// function str(a) {
//   let b = "";
//   for (i = a.length - 1; i >= 0; i--) {
//     b = b + a[i];
//   }
//   console.log(b);
// }

// console.log(str("I love Javascript"));
// function duplicate(arguments) {
//   console.log(...arguments, ...arguments);
// }
// duplicate([1, 2, 3, 4]);
// let addFive = createBase(5);
// function createBase(x) {
//   return addFive(a);

//   return addFive(b);
//   c = b + x;
// }

// console.log(b);
// console.log(c);

// function anagram(a, b) {
//   let i = a.length;
//   let j = b.length;
//   if (i != j) {
//     console.log("Invalid character length");
//   }
//   u = a.toLowerCase();
//   v = b.toLowerCase();
//   let x = u.split("").sort().join("");
//   let y = v.split("").sort().join("");
//   if (x == y) {
//     console.log("Yes");
//   } else {
//     console.log("No");
//   }
// }

// console.log(anagram("Harry", "ahryr"));
// https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js
// function miss() {
//   a = [];
//   for (i = 1; i <= 50; i++) {
//     a.push(i);
//   }
// }

// miss();
// console.log(a);
