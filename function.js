function sentenceMaker(noun, adjective, verb, adverb) {
  let result = "The" + adjective + noun + verb + adverb
  return result
}
console.log(sentenceMaker(" fahad ", " sheikh ", " ran ", " quickly "))
console.log("\n")
const global = 10
function check_1() {
  // const oop = 5;
  //by writing let,const,const before oop it becomes local to this function
  //when there is no const let const here oop become global
}
function check_2() {
  const oop = 5 //by writing let,const,const before oop it becomes local to this function

  if (typeof oop != "undefined") {
    const output = global + oop
    console.log(output)
  }
}
check_1()
check_2()
console.log("\n")
const n = 78
function check_3() {
  const n = 89
  return n
}
console.log(check_3())
console.log(n)
console.log("\n")
function check_4(array, item) {
  array.push(item)
  return array
}
const arry = [1, 2, 3, 4]
console.log(check_4(arr, 5))
console.log("\n")
function check_5(array) {
  array.pop()
  return array
}
console.log(check_5(arry))
const cum_sum = (array) => {
  let output = 0
  for (let i = 0; i < array.length; i++) {
    output = output + array[i]
  }
  return output
}
const arr = [1, 2, 3, 4, 5, 6]
console.log(cum_sum(arr))
const ar = [1, 2, 3, 4, 5, Infinity, undefined]
console.log(ar.filter((item) => isFinite(item)).map((item) => item * 2))
const isEven = (n) => {
  if (n % 2 === 0) {
    return true
  } else {
    return false
  }
}
console.log(isEven(9))
const array = [1, 2, 3, 4, 5, null, undefined, false]
const isNumberArray = (array) => {
  let key = true
  for (let i = 0; i < array.length; i++) {
    if (isNaN(array[i])) {
      key = false
    }
  }
  return key
}
console.log(isNumberArray(array))
const random_number = () => {
  const num = Math.floor(Math.random() * 20)
  return num
}
console.log(random_number())
const randomnumber_range = (myMax, myMin) => {
  return Math.floor(Math.random() * (myMax - myMin + 1)) + myMin
}
console.log(randomnumber_range(19, 10))
