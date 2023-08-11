const doubleEqual = (num) => {
  if (num == 12) {
    // also true for '12'. type casting
    return true
  } else return false
}
const n = 10
console.log(doubleEqual(n))
console.log("\n")
console.log(doubleEqual("12"))

function tripleEqual(num) {
  if (num === 12) {
    //  false for '12'. strictly equal
    return true
  } else return false
}
console.log(tripleEqual(n))
console.log("\n")
console.log(tripleEqual("12"))
function notEqual_1(num) {
  if (num != 12) {
    // type casting
    return "not equal"
  } else return "equal"
}
console.log(notEqual_1(12))
console.log("\n")
console.log(notEqual_1("12"))
function notEqual_2(num) {
  if (num !== 12) {
    // not type casting
    return "not equal"
  } else return "equal"
}
console.log(notEqual_2(12))
console.log("\n")
console.log(notEqual_2("12"))
