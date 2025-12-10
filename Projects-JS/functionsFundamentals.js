function reverseString(str) {
    str = str.split("").reverse().join("");
    return str
}
let test1 = reverseString("hello");
let test2 = reverseString("Good morning.");
let test3 = reverseString("odor");

console.log(test1);
console.log(test2);
console.log(test3);


function countDown(num) {
   if (num === 0) {
    console.log('Cannot countdown from zero.')
    return;
   } 
   
   while (num >= 0) {
    console.log(num);
    num--;
   }
}

countDown(8);
countDown(4);
countDown(0);
countDown(10);



function sumUpTo(num) {
    let total = 0
    let i = 1
    if (num === 0) {
        console.log('Nothing to add.');
        return 0;
    } while (i <= num) {
        total += i;
        i++;
    }
    
    return total;
}

let sum1 = sumUpTo(5);
let sum2 = sumUpTo(8);
let sum3 = sumUpTo(2);
let sum4 = sumUpTo(0);
let sum5 = sumUpTo(10); 

console.log(sum1);
console.log(sum2);
console.log(sum3);
console.log(sum4);
console.log(sum5);


