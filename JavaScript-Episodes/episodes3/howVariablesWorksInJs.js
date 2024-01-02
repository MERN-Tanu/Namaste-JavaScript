getName();
console.log(x);

var x = 7;

// function getName() {
//   console.log("Namaste JavaScript");
// }

var getName = () => {
  console.log("Namaste JavaSCript");
};

/*
 Output : 
 
howVariablesWorksInJs.js:1 Uncaught TypeError: getName is not a function
at howVariablesWorksInJs.js:1:1


*/
