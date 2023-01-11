function sentenceMaker(noun,adjective,verb,adverb){
    let result = "The" + adjective + noun + verb + adverb;
    return result; 
}
console.log(sentenceMaker(" fahad "," sheikh "," ran "," quickly "))
console.log("\n")
var global=10;
function check_1(){
    const oop=5;//by writing let,var,const before oop it becomes local to this function
    //when there is no var let const here oop become global
}
function check_2(){
    if(typeof oop!="undefined"){
    var output=global+oop
    console.log(output)
}
}
check_1()
check_2()
console.log("\n")
var n=78;
function check_3(){
    var n=89;
    return n;
}
console.log(check_3())
console.log(n)
console.log("\n")
function check_4(array,item){
    array.push(item)
    return array;
}
var arr=[1,2,3,4]
console.log(check_4(arr,5));
console.log("\n")
function check_5(array){
    array.pop()
    return array;
}
var arr=[1,2,3,4]
console.log(check_5(arr));
