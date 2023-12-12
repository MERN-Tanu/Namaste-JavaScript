# Namaste-JavaScript

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
