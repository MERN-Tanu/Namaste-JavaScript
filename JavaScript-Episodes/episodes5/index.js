var a = 10;
function b() {
  var x = 10;
}

console.log(window.a); // 10
console.log(a); // 10
console.log(x); // x is not defined

//  this points to the window objects

/*

10 - line number 6
10 - line number 7
index.js:8 Uncaught ReferenceError: x is not defined
    at index.js: 8:13

*/
