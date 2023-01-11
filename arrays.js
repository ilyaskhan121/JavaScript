var array=[1,2,3,4,5]
for (let index = 0; index < array.length; index++) {
    const element = array[index];
    console.log(element)
}
console.log("\n")
array.push(6,7)//add element to arrays
for (let index = 0; index < array.length; index++) {
    const element = array[index];
    console.log(element)
}
console.log("\n")
array.pop()//remove last element in array
for (let index = 0; index < array.length; index++) {
    const element = array[index];
    console.log(element)
}
console.log("\n")
array.shift()//remove first element in array
for (let index = 0; index < array.length; index++) {
    const element = array[index];
    console.log(element)
}
console.log("\n")
array.unshift("Start")//add first element in array
for (let index = 0; index < array.length; index++) {
    const element = array[index];
    console.log(element)
}