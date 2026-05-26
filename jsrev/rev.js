// console.log("Hello World");

// let var const 

// let jo hota hai na wo block scope hota hai, matlab ki uska scope us block ke andar hi hota hai jaha pe wo declare kiya gaya hai.
// or agar tum bhar declare karte to wo global scope ban jata hai , to tum usse inside bhi accesss kar sakte or outside bhi 
//let ke variable ko redeclare nahi kar sakte, but reassign kar sakte hai , per variable ke name ko vchange karna padega .
// agar let me block ke andar declare karke bhar dhundhoge to wo reference error dega , kyuki let ke variable ko uske block ke andar hi access kiya ja sakta hai, aur agar tum usse block ke bahar access karne ki koshish karoge to wo reference error dega.

// if (true){
//     let a=10;
//     console.log(a);
// 10
//     let a =30;
//     console.log(a); // 30
// }

// let  a = 10;
// {
 // console.log(a); // 10
//     let a = 30;
//     console.log(a); // 30
// }

// console.log(a); // 10
// Haan, let me dono alag variables hote hain.

// let a = 10;

// {
//     let a = 30;
//     console.log(a);
// }

// console.log(a);

// Yahan:

// Bahar wala a → 10
// Andar wala a → 30

// Dono ka alag memory space hota hai because let is block-scoped.

// Isliye output:

// 30
// 10

// Visual samjho:

/// Global scope
// a = 10

// {
// Block scope
//    a = 30
// }

// Block ke andar wala a, bahar wale a ko affect nahi karta.

// Lekin var me aisa nahi hota because var block scope follow nahi karta. var me mostly same variable reuse hota hai.

// var block scope nhi hota hai, matlab ki uska scope us block ke andar nahi hota hai jaha pe wo declare kiya gaya hai, var ke variable ko tum uske block ke bahar bhi access kar sakte ho or bhar bhii access kar sakte ho re declare bhii kar sakte ho
// var ke name se bana hua variable ko tum baar baar use kar sakte ho




// var a
// a=10
// {
//     console.log(a); // 10
//     // pahle too ye hoisted value lega  
//     var a = 30;
//     console.log(a); // 30
// }
// yaha pe a ki value update ho gayi hai isliye  hume 30 mil raha hai dekhne ko agar a ki vaalue update ho jaye to usse agar block ke bhar bhii access karoge to wo updated value dega, kyuki var block scope follow nahi karta hai, var ke variable ko tum uske block ke bahar bhi access kar sakte ho or bhar bhii access kar sakte ho re declare bhii kar sakte ho.
    // console.log(a); // 30


//string concatination

// let j = "Hello";
// let b = "World";
// let c = j + " " + b;
// console.log(c); // Hello World

//operators
// let m = null;
// console.log(typeof m); // object


// Nan
// let  a = "hello";
// let  b= parseInt(a);
// console.log(b); // 5

// == vs ===
// let a = 5;
// let b = "5";
// console.log (a == b); // true
//  == checks only the value not its data type 
// console.log (a === b); // false
// === checks both value and data type

// !== or !=
// let a = 20;
// let b = "20";
// console.log(a != b); // false
// != checks only the value not its data type 
// console.log(a !== b); // true
// !== checks both value and data type
// Increment and Decrement operators
// let a = 5;
// let b = ++a;
// console.log(a); // 6
// console.log(b); // 6

// ++a means pre-increment, pehle a ki value ko increment karega aur fir usse b me assign karega, isliye a bhi 6 ho jayega aur b bhi 6 ho jayega.

// let a =5;
// let b = a++;
// console.log(a); // 6
// console.log(b); // 5

// a++ means post-increment, pehle a ki value ko b me assign karega aur fir a ki value ko increment karega, isliye a 6 ho jayega lekin b 5 hi rahega.

// Ternary operator
// let  b =5;
// let a = (b> 0)?"Positive":"Negative";
// console.log(a); // Positive

// Ternary operator me pehle condition check hoti hai, agar condition true hoti hai to pehla value return hota hai, aur agar condition false hoti hai to dusra value return hota hai. Yahan pe b>0 condition true hai isliye a me "Positive" value assign ho gayi hai, agar b ki value negative hoti to a me "Negative" value assign ho jati.

// Nested ternary operator
// let a = 40;
// let b= 30;
// let c = 30;
// let r =  (a >b)?(a>c?a:c):(b == c?b:c);
// console.log(r); // 40

// Nested ternary operator me pehle condition check hoti hai, agar pehli condition true hoti hai to dusri condition check hoti hai, aur agar pehli condition false hoti hai to teesri condition check hoti hai. Yahan pe a > b condition false hai isliye b > c condition check hoti hai, aur b > c condition bhi false hai isliye c ki value return hoti hai, isliye r me 30 value assign ho gayi hai.


// let a ="hello";
// let b="";
// let c = (a && b)? "Both are truthy":"At least one is falsy";
// console.log(c); // At least one is falsy

// Logical AND operator me dono operands ko check kiya jata hai, agar dono operands truthy hote hai to pehla operand return hota hai, aur agar dono operands me se koi bhi operand falsy hota hai to dusra operand return hota hai. Yahan pe a ki value "hello" hai jo ki truthy hai, lekin b ki value " " hai jo ki falsy hai, isliye c me "At least one is falsy" value assign ho gayi hai.

// let username =prompt("Enter your username");
// let pass = Number(prompt("Enter your password"));
// let username1 = "admin";
// let pass1 = 1234;
// let login = (username  === username1 && pass === pass1)? "wclm":"invalid credentials";
// console.log(login); // Both are required

//short circuiting
// console.log(null || "2" || undefined || "jio");
// console.log("hello" && "jio" && 2 && "world");
// ye short circuiting hai, logical OR operator me agar pehla operand truthy hota hai to wo operand return hota hai, aur agar pehla operand falsy hota hai to dusra operand return hota hai. Yahan pe null falsy hai isliye "2" return hota hai, aur "hello" truthy hai isliye "world" return hota hai.

//Nullish coalescing operator

// let a = null;
// let b = a ?? "Default value";
// console.log(b); // Default value

// Nullish coalescing operator me agar pehla operand null ya undefined hota hai to dusra operand return hota hai, aur agar pehla operand null ya undefined nahi hota hai to pehla operand return hota hai. Yahan pe a ki value null hai isliye b me "Default value" assign ho gayi hai, agar a ki value null ya undefined nahi hoti to b me a ki value assign ho jati.

//loops

// let a =22;
// let hasidcard = true;
// if (a >=20){
//     if (hasidcard){
//         console.log("You can enter the club");
//     } else {
//         console.log("You need an ID card to enter the club");
//     }
// }


//conditionals
//for loop
// for (var i=0;i<=5; i++){
//     console.log(i);
// }

// for of loop
// let name = "Hello";
// for (let char of name ){
//  console.log(char);
// }

// for in loop
// let a = "Hello";
// for (let k in a){
//     console.log(k);
// }
// let a = "hello";
// let conss=0;
// let vols = 0;
// for (let char of a){
//     if (char === "a" || char === "e" || char === "i" || char === "o" || char === "u"){
//         vols++;
//     } else {
//         conss++;
//     }
// }

// console.log("Vowels:", vols);
// console.log("Consonants:", conss);



//functions

// function all(a,b){
//     console.log(a,b);
// }
// all(5,10); // 5 10
// console.log(a); // [Function: all]

// function add (a=0,b){
//     return a+b;
// }
// console.log(add(5,4)); // 9
//  arguments ki value to priority milegi default ke case me or haan parameter ek block scope hota hai, uski value ko bhar access nhii kar sakte ho


// function expression
// let add = function (a,b){
//     return a+b;
// }
// console.log(add(5,4)); // 9


// const a =()=>{
//     return "Hello World";
// }
// let b = a();
// console.log(b); // Hello World
// agar hum arrow function me return statement nahi likhte hai to wo automatically undefined return karta hai, isliye agar hum arrow function me return statement nahi likhte hai to b ki value undefined ho jayegi, lekin agar hum arrow function me return statement likhte hai to wo us value ko return karega, isliye b ki value "Hello World" ho jayegi.



// strings
// let a =  "abdulahad";
// let c =  "andleab" + a +" "+ "fatima";
// console.log(c); // andleababdulahadfatima


// let b =  "fatima";
// let c = `meri ladli jaan ${b} hai`;
// console.log(c); // meri ladli jaan fatima hai

// let a =  "hello world";
// a[1]= "a";
// console.log(a); // hello world
// strings are immutable in JavaScript, which means that once a string is created, it cannot be changed. When you try to change a character in a string, it does not modify the original string but instead creates a new string with the desired changes. In this case, when you try to change the character at index 1 of the string "hello world" to "a", it does not modify the original string but instead creates a new string "hallo world". However, since you are not assigning this new string to any variable, it is not stored and the original string remains unchanged. Therefore, when you log the original string "hello world", it is still "hello world".


// let str1 = "Hello";
// let str2 = "";
// for (let char of str1){
//     str2 =  str2 + char + " ";
//     console.log(str2);
// }
// console.log(str2); // H e l l o


// let a =  "hello";
// let b =  a.toUpperCase();
// aise nhii hoga aap direct changes nhii kar sakte ho copy bana hoga uska tabhi aap change kar sajkte ho 
// console.log(b); // HELLO
// string immutable hoti hai, matlab ki uske characters ko directly change nahi kar sakte, lekin string ke methods use karke hum string ke characters ko change kar sakte hai, jaise ki toUpperCase() method use karke hum string ke characters ko uppercase me convert kar sakte hai, aur toLowerCase() method use karke hum string ke characters ko lowercase me convert kar sakte hai. Yahan pe a ki value "hello" hai, aur jab hum a.toUpperCase() method use karte hai to wo "HELLO" return karta hai, lekin a ki value "hello" hi raheti hai kyuki string immutable hoti hai, isliye b me "HELLO" assign ho jata hai, aur a ki value "hello" hi raheti hai.


// let a = "hello world";
// let b = "jio";
// let d = "maamu"
// let c = a.concat(b,d);
// console.log(c); // hello world jio

// let a = "how are you";
// let b = a.includes("lol");
// console.log(b); // false

// let jio= "jio is a great company";
// let c  = jio.replace("jio","JIO")
// console.log(c); // JIO is a great company

// let a = "hello a ksof a afworld";
// let b = a.split("a");
// console.log(b); // [ 'hello', 'world' ]


// let str = prompt("Enter a string");
// let char = prompt("Enter the character ");
// let count  = 0;
// for (let c of str){
//     if (c  === char){
//     count ++;
// }
// }
// console.log("Length of the string:", count); // Length of the string: 11

// let jio = "jio is a great company";
// let c= jio.trim();
// console.log(c); // jio is a great company
// trim() method removes whitespace from both ends of a string, but it does not remove whitespace from the middle of the string. In this case, since there is no whitespace at the beginning or end of the string "jio is a great company", the trim() method does not make any changes to the string and returns the original string "jio is a great company". Therefore, when you log the variable c, it outputs "jio is a great company".


//array methods

// let a =[];
// console.log(typeof a); // object


// let a = "hello";
// let b = parseInt(a);
// console.log(b); // NaN

// parseInt() function is used to convert a string into an integer. If the string cannot be converted into a valid integer, it returns NaN (Not a Number). In this case, since the string "hello" cannot be converted into a valid integer, the parseInt() function returns NaN. Therefore, when you log the variable b, it outputs NaN.

// let ai = [ 1,2,3,4,5];
// let bi  = ai.push(6);
// console.log(ai ,bi); // [ 1, 2, 3, 4, 5, 6 ] 6
// push() method adds one or more elements to the end of an array and returns the new length of the array. In this case, when you call ai.push(6), it adds the element 6 to the end of the array ai, and returns the new length of the array, which is 6. Therefore, when you log the variable ai, it outputs [1, 2, 3, 4, 5, 6], and when you log ai.length, it outputs 6.

// let a =[1,2,3,4,5];
// let b  = a.pop();
// console.log(a,b);

// let arr = ["hello", "world", "jio", "is", "a", "great", "company "];
// let b = arr.tostring();
// console.log(b); // hello,world,jio,is,a,great,company
// toString() method converts an array into a string, where each element of the array is separated by a comma. In this case, when you call arr.toString(), it converts the array arr into a string "hello,world,jio,is,a,great,company". Therefore, when you log the variable b, it outputs "hello,world,jio,is,a,great,company".


// let arr = ["hello", "world", "jio", "is", "a", "great", "company "];
// let b = arr.find((item)=>{
//     return item == "world";
// })
// console.log(b); // world
// find() method is used to find the first element in an array that satisfies a given condition. It takes a callback function as an argument, which is executed for each element in the array until it finds an element that returns true for the condition specified in the callback function. In this case, when you call arr.find((item) => item == "world"), it checks each element of the array arr to see if it is equal to "world". When it finds the element "world", it returns that element and assigns it to the variable b. Therefore, when you log the variable b, it outputs "world".

// let arr = [1, 2, 3, 4, 5];
// let b = arr.map((item,index)=>{
//     return item;
// })
// console.log(b); // [1, 2, 3, 4, 5]


// objects

// let obj = {
//     name: "Abdulahad",
//     age: 22,
//     city: "Mumbai",
//     address:{
//         street: "123 Main St",
//         zip: "400001"
//     }
// }

// obj.name = "Abdulahad Ansari";
// console.log(obj.name); // Abdulahad Ansari
// let key = "name";
// obj[key] = "Abdulahad Ansari";
// console.log(obj[key]); // Abdulahad Ansari

// function printName ({name ,age ,city}){
//     return `My name is ${name}, I am ${age} years old and I live in ${city}.`;

// }
// let result = printName(obj);
// console.log(result); // My name is Abdulahad, I am 22 years old and I live in Mumbai.

// let {name, age ,city,address:{street,zip}}=obj;
// console.log(name); // Abdulahad
// console.log(age); // 22
// console.log(city); // Mumbai
// console.log(street); // 123 Main St
// console.log(zip); // 400001

// callbacks

//Async JS

//promises

//async await

//session storage

//local storage


//closure


//cookies

//hoisting

//this keyword
//call apply bind
//prototypes

//debouncing

//throttling

//bubbling and capturing

//event delegation

//event propagation




















//event loop
//call stack
//web APIs
//callback queue
//microtask queue
//event loop
//Modules