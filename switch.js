// function vowels_check(alphabet){
//     switch(alphabet){
//         case 'a':
//             return true;
//             break;
//         case 'e':
//             return true;
//             break;
//         case 'i':
//             return true;
//             break;
//         case 'o':
//             return true;
//             break;
//         case 'u':
//             return true;
//             break;
//         default:
//             return false;
//             break;
//         }
// }
// console.log(vowels_check('g'));
// console.log(vowels_check('a'));
function vowels_check2(alphabet) {
  switch (alphabet) {
  case "a":
  case "e":
  case "i":
  case "o":
  case "u":
    return true
  default:
    return false
  }
}
console.log(vowels_check2("g"))
console.log(vowels_check2("a"))
