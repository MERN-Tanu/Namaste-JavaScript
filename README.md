# Namaste-JavaScript

**The call and apply Methods**

**Example: 1**

```JS
const indigo = {
  airline: "Indigo",
  code: "Ind",
  bookings: [],
  // book: function() {}
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.code} with filght number ${flightNum}`
    );
    this.bookings.push({ flight: `${this.code}${flightNum}`, name });
  },
};

indigo.book(239, "tanu");
indigo.book(635, "tanuaa");

const akasha = {
  airline: "Akasha",
  code: "AKA",
  bookings: [],
};

const book = indigo.book;

// Does NOT work
// book(23, "Sarah Williams");

// // Call method
// book.call(akasha, 238, "Surjeet");
// console.log(akasha);

// book.call(indigo, 239, "Mary Cooper");
// console.log(indigo);

const AirIndia = {
  airline: "Air India",
  code: "Air",
  bookings: [],
};

//   book.call(AirIndia, 583, 'Mary Cooper');

//   // Apply method
//   const flightData = [583, 'George Cooper'];
//   book.apply(AirIndia, flightData);
// book.apply(AirIndia, [583, "George Cooper"]);

//   book.call(AirIndia, ...flightData);

///////////////////////////////////////
// The bind Method
// book.call(AirIndia, 23, 'Sarah Williams');
// const x=function(){
//     //
// }
const bookIndigo = book.bind(indigo);
const bookAkasha = book.bind(akasha);
const bookAirIndia = book.bind(AirIndia);

bookIndigo(456, "dipika");
bookAkasha(457, "dipu");
bookAirIndia(836, "pk");
```

#Example:2

```JS

const student = {
  sworkshop: "ethical hacking",
  srollno: 78,
  branch: [],
  enrollment(enrollmentno, name, branch) {
    console.log(
      `${enrollmentno} ${name} is enrolled for ${this.sworkshop} and their rollno is ${this.srollno}`
    );
    this.branch.push({
      stu: `${this.sworkshop} ${name}`,
      branch,
      enrollmentno,
    });
  },
};

// student.enrollment(125425243, "Priya", "Computer Science");

const newstudent = {
  sworkshop: "Machine Learning",
  srollno: 12,
  branch: [],
};

const selectedstudent = {
  sworkshop: "blockchain",
  srollno: 90,
  branch: [],
};

const enrollment = student.enrollment;

// call function

enrollment.call(newstudent, 3546477, "Kajal", "Information Technology");
console.log(newstudent);
enrollment.call(student, 1247487, "Priya", "Mechnical");
console.log(student);
enrollment.call(selectedstudent, 12453657, "Rishi", "Civil");
console.log(selectedstudent);

// apply function

enrollment.apply(newstudent, [2435368, "Jake", "Information technology"]);
console.log(newstudent);
enrollment.apply(student, [1254674, "Richeal", "Cs"]);
console.log(student);
enrollment.apply(selectedstudent, [5467748, "Patel", "ME"]);
console.log(selectedstudent);

//  Bind function

const enrollnewstudent = enrollment.bind(newstudent);
const enrollstudent = enrollment.bind(student);
const enrollselectedstudent = enrollment.bind(selectedstudent);

enrollnewstudent(3647467, "Olga", "IT");
enrollstudent(4758859, "Shradha", "CS");
enrollselectedstudent(567889, "Shreya", "CS");


```

```js
// Currying function in Js

/*
let multiply = function (x, y) {
  console.log(x * y);
};

let multiplyByTwo = function (y) {
  let x = 2;
  console.log(2 * y);
};

let multiplyByten = multiply.bind(this, 10);
multiplyByten(5);
console.log(multiplyByten);

let multiplybySix = multiply.bind(this, 6);
multiplybySix(5);
console.log(multiplybySix);
*/
// ---------------------- Currying with Closures --------

let multiply = function (x) {
  return function (y) {
    console.log(x * y);
  };
};

/*
It won't work,won't use bind with multiply

let multiplybySix = multiply.bind(this, 6);
multiplybySix(4);

console.log(multiplybySix);

let multiplyByten = multiply.bind(this, 10);
multiplyByten(3);
console.log(multiplyByten);
*/

let multiplybySix = multiply(6);
multiplybySix(7);

let multiplyByten = multiply(10);
multiplyByten(6);
```

------------------------------------------------------------------------------------------------------------------------------------------------




In JavaScript, the call, apply, and bind functions are used to manipulate the context (this value) of a function during its execution.
Let's break down each of them:

***1. call Function:**
The call function is used to invoke a function immediately and change the context of this during the function execution. Here is the syntax:


```javascript
func.call(thisObj, args1, args2, ...);
```

**func:** The function to be invoked.

**thisObj:** The object or value to replace the this keyword inside the function.

**args1, args2, ...:** Arguments to be passed to the invoking function with the changed this object.

Example:


```javascript
function Car(type, fuelType){
	this.type = type;
	this.fuelType = fuelType;
}

function setBrand(brand){
	Car.call(this, "convertible", "petrol");
	this.brand = brand;
	console.log(`Car details = `, this);
}

const newBrand = new setBrand('Brand1');
```


2. **apply Function:**
   
  The apply function is similar to call, but it allows you to pass an array as the argument list. Here is the syntax:


```javascript
func.apply(thisObj, argumentsArray);
```
**func:** The function to be invoked.

**thisObj:** The object or value to replace the this keyword inside the function.

**argumentsArray:** An array of arguments to be passed to the invoking function.

Example:

```javascript
   function setBrand(brand){
	Car.apply(this, ["convertible", "petrol"]);
	this.brand = brand;
	console.log(`Car details = `, this);
}

const newBrand = new setBrand('Brand1');
```

**3. bind Function:**

The bind function creates a new function with a specified this value and optional arguments.
It does not invoke the function immediately but returns a new function that can be executed later. Here is the syntax:

```javascript
const newFunc = func.bind(thisObj, arg1, arg2, ..., argN);
```
**func:** The function for which you want to set the this context.

**thisObj:** The object or value to replace the this keyword inside the function.

**arg1, arg2, ..., argN:** Optional arguments to be pre-set for the function.

Example:

```javascript
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 1
    };
    this.handleCode = this.handleCode.bind(this); // bind this function
  }

  handleCode() {
    console.log("HANDLE CODE THIS = ", this.state);
  }

}
```

**Creating Your Own map Function:**
An example was provided for creating a custom map function using call. It walks through each element of an array and applies the provided function,
creating a new array with the results.

```javascript
function newMap(func) {
  let destArr = [];
  const srcArrLen = this.length;
  for(let i = 0; i < srcArrLen; i++){
    destArr.push(func.call(this, this[i]));
  }
  return destArr;
} 

Object.defineProperty(Array.prototype, 'newMap', {
  value: newMap
});

const arr = [1,2,3];
const newArr = arr.newMap(item => item + 1);
console.log(newArr);
```

In summary, these functions (call, apply, bind) are powerful tools in JavaScript, 
especially in scenarios like React class components where managing the context of this is crucial.
They provide flexibility and control over how functions are invoked and with what context.
