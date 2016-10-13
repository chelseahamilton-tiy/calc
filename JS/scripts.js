// function showResponse(){
//   document.querySelector(.answerBox).innterHTML= calculate}

var arr = [];

function userInput (value) {
  arr.push(value);
  console.log(arr);
}

function add  (a, b) {
  return a + b;
}

function subtract  (a, b) {
  //console.log(a - b);
  return a - b;
}

function multiply  (a, b) {
  //console.log(a * b);
  return a * b;
}

function divide (a, b) {
  //console.log(a / b);
  return a / b;
}

function remainder (a, b) {
  //console.log(a % b);
  return a % b;
}

function calculate (a, b, cb) {
  let result = cb(a,b);
  console.log (result);
  return result;
 }
// calculate (5,4,multiply)

function input (x) {
  var x = prompt("put in a number");
  console.log(x);
}

var currentCalc = [2, multiply, 21];
  calculate (currentCalc[0],currentCalc[2],currentCalc[1]);

function prepCalculate () {
  let a = parseInt(arr[0]);
  let b = parseInt(arr[2]);

  if (arr[1] == "+"){
    calculate(a, b, add);
    console.log(calculate(a, b, add));
  }
  if (arr[1] == "-"){
    calculate(a, b, subtract);
    console.log(calculate(a, b, subtract));
  }
  if (arr[1] == "/"){
    calculate(a, b, divide);
    console.log(calculate(a, b, divide));
  }
  if (arr[1] == "*"){
    calculate(a, b, multiply);
    console.log(calculate(a, b, multiply));
  }
}

// TODO: 1make all buttons work on calculate
// make an output on html
// delete decimal button
