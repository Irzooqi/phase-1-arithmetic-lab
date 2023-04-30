// declaration of variables.
let num1 = 31;
let num2 = 2;
let num3 = 34;
let num4 = 10;
let num5 = 20;
let random = 0;
let remainder = 0;

// multiply variable
let multiply = num1 * num2;


// #Q2 Creating random number greater than 0
random = Math.floor(Math.random() * Number.MAX_SAFE_INTEGER) + 1;

// Q2 DIDN'T WORK:
/* function randomNum(){ 
    return Math.floor(Math.random() * 40) + 1;
}
let arr = [];
for (i=0; i<4; i++){
    arr[i] = randomNum();
}
 */

// storing values in variables from the method Math.random()
/* num1 = 31;
num2 = 2;
let multiply = num1 * num2;
num3 = arr[2];
num4 = arr[3];

let result = 1;
 */

// #Q3 MODULU OF NUM3 AND NUM4 it should be equal to 4 
let mod = num3 % num4;


// #Q4 MAX THING RETURN
let max = Math.max(1, 2, 3, 4, num5); 
console.log(max);

// #Q3 MODULU OF NUM3 AND NUM4 it should be equal to 4 (DIDN'T WORK IDK WHY)
/* while (remainder != 4){
    num3 = Math.floor(Math.random() * 200) + 1;
    num4 = Math.floor(Math.random() * 200) + 1;
    remainder = num3 % num4;
    console.log(remainder);
}

let mod = remainder; */