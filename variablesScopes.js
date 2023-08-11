// var variable scope and redeclaration
var number = 50 //global variable
const square = (number) => {
  var s = number * number //local variable
  return s
}
console.log(square(number))
// console.log(s);
// reassignment of var variables
var number = 50
console.log(number) // 50
number = 100
console.log(number) // 100
number = 200
console.log(number) // 200
//
//
//let variable
let numb = 50 //global
function print() {
  let square = numb * numb

  if (numb < 60) {
    var largerNumber = 80 //local to function
    //let anotherLargerNumber = 100//block to if body

    return square
  }

  //console.log(largerNumber)
  //console.log(anotherLargerNumber)//error
}
console.log(print())
//let variables can be reassigned but cannot be redeclare
let g = 100
g = 900
//let g=900;//error
console.log(g)
//const variables cannot be reasigned and redecalared and scope is just like let variables
const f = 100
//f=900;//error
// const f=10000;//error
console.log(f)
