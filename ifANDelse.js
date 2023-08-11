const time = 11
if (time < 12) {
  console.log("Good Morning")
} else console.log("Good Evening")
let a = 10,
  b = 5,
  c = 4
if (a > b) {
  if (a > c) {
    console.log("A is the greatest")
  } else {
    console.log("C is the greatest")
  }
} else {
  if (b > c) {
    console.log("B is the greatest")
  } else {
    console.log("C is the greatest")
  }
}
const grade = "A"
switch (grade) {
case "A":
  console.log("pass")
  break
default:
  console.log("fail")
}
