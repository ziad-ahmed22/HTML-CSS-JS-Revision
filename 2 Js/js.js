// =============================================================
// =============================================================
// =============================================================
// console
// Directive %c
// Template literals
//    console.log(`Hello ${myName}`);
// Data Types
//    string
//    number
//    object [] => Array
//    object {}
//    boolean
//    undefined
// Var Let Const
// Scape \, New Line \n
// Template literals

// ==================================

// Arithmetic Operators
//   (+) => Addition
//   (-) => Subtraction
//   (*) => Multiplication
//   (/) => Division
//   (**) => Exponentiation (ES7)
//   (%)  => Modulus (Division Remainder)
//   (++) => Increment [ Post / Pre ]
//   (--) => Decrement [ Post / Pre ]

// ==================================

// Unary Plus Negation
//   (+) => Unary Plus [Return Number If Its Not Number]
//   (-) => Unary Negation [Return Number If Its Not Number + Negates It]

// ==================================

// Type Coercion (Type Casting)
//   +a
//   Number(a)

// ==================================

// Number
//   1_000_000 => 1000000 Syntactic Sugar "_"
// Number Methods
//   toString()
//   toFixed(2)
//   Number("100")
//   parseInt("")
//   parseFloat("")
//   Number.isInteger("100")
//   Number.isNaN("Osama")

// ==================================

// Math
//   Math.round(n)
//   Math.ceil(n)
//   Math.floor(n)
//   Math.min(n)
//   Math.max(n)
//   Math.pow(n, n)
//   Math.random()
//   Math.trunc(n)

// ==================================

// String
//   length
//   str[0]
//   charAt(0)
//   trim()
//   toUpperCase()
//   toLowerCase()
//   indexOf()
//   lastIndexOf()
//   slice()
//   split()
//   substring()
//   substr()
//   includes()
//   startsWith()
//   endsWith()

// ==================================

// Logical Operators
//     !
//     &&
//     ||

// Control Flow
//     if

// Conditional (Ternary) Operator
//     Condition ? If True : If False

// Logical Or ||
//     print value after || if null, undefined, falsy value

// Nullish Coalescing Operator ??
//     print value after ?? if null, undefined only

// Switch

// ==================================

// Array
//   arr[]
//   arr[] = 2
//   arr.length
//   arr.length = 2
// Arrays Methods
//   arr.unshift("", "")
//   arr.push("", "")
//   arr.shift()
//   arr.pop()
//   arr.indexOf("")
//   arr.lastIndexOf("")
//   arr.includes("")
//   arr.sort()
//   arr.reverse()
//   arr.slice()
//   arr.splice(1, 2) // index 1, remove 2
//   arr.splice(1, 0, "Samer") // inex 1, no remove, add samer
//   arr.splice(0, 2, "Ziad", "Zain") // index 0, remove 2, add Ziad Zain
//   arr.concat(new arr)
//   arr.join("|")

// ==================================

// Loops
//   for >> break, continue, label
//   While
//   Do While

// ==================================

// Function
//   Default Parameters p ="p"
//   Rest Parameters ...p
//   Anonymous Function
//   Arrow Function
//   Global And Local Scope

// ==================================

// Higher Order Functions
//   map(callBackFunction(Element, Index, Array) { }, thisArg)
//   filter(callBackFunction(Element, Index, Array) { }, thisArg)
//   reduce(callBackFunc(Accumulator, Current, Index, Array) { }, initialValue)
//   forEach(callBackFunction(Element, Index, Array) { }, thisArg)
//   find(callbackFunction(element, index, array) { }, thisArg)
//   flat() flat(1) flat(Infinity)

// ==================================

// Object
//   let user1 = {}
//   let user2 = new Object({})
//   let user3 = Object.create({}) // Create Object & Copy Object & Change on it
//   let user4 = Object.assign({}) // Create Object & Copy Objects to target obj

// hasOwnProperty
//   obj.hasOwnProperty('name') // true
//   arr.hasOwnProperty(2) // true

// in
//   'name' in obj // true

// Object.keys(obj)
// Object.values(obj)
// Object.entries(obj) // return array of a given object's [key, value]
// Object.keys(arr)
// Object.values(arr)

// ==================================

// Distructuring
// Array
//   let[one, , three = "he"] = arr
//   [one, , three = "he"] = arr
// Swap
//   [vedio, book] = [book, vedio]
// Object
//   let{name, age, city} = obj
//   ({name, age, city} = obj)
// function
//   function info({username:n ="zoz"}){}
//   info(obj)

// ==================================

// Set Data Type
//     new Set()
//     new Set(Iterable)
//     [...mySet] => Array
//     size
//     add(4)
//     delete(5)
//     has(1)
//     clear()
// Set vs WeakSet
//     myWeakSet = new WeakSet()

// ==================================

// Map Data Type vs Object
//     Syntax: new Map(Iterable With Key/Value)
// Map Methods
//     Syntax: new Map(Iterable With Key/Value)
//     myMap = new Map([ [ , ""], ["", ""] ]);
//     size
//     set("", "")
//     get()
//     delete()
//     has()
//     clear()
// Map vs WeakMap
//     myWeakMap = new WeakMap()

// ==================================

// Array.from Method
//     Array.from(Iterable, MapFunc, This)
// Array.copyWithin Method
//     arr.copyWithin(Target, Start [Opt], End [Opt])
// Array.some Method
//     arr.some(CallbackFunc(Element, Index, Array), This)
// Array.every Method
//     arr.every(CallbackFunc(Element, Index, Array), This)

// ==================================


// =============================================================
// =============================================================
// =============================================================


// =============================================================
// =============================================================
// ========================== Console ==========================
// =============================================================
// =============================================================

// console.log("Log");
// console.error("Error");
// console.table(["Osama", "Ahmed", "Sayed"]);

// // Directive %c
// console.log("Hello From %cJS %cFile", "color: red; font-size: 40px", "color: blue; font-size: 40px");



// =============================================================
// =============================================================
// ====================== Template literals ====================
// =============================================================
// =============================================================

// // Es6
// var myName = "Osama";
// console.log("Hello " + myName);
// console.log(`Hello ${myName}`);



// =============================================================
// =============================================================
// ========================= Data Types ========================
// =============================================================
// =============================================================

// // string
// console.log(typeof "Osama Mohamed");
// // number
// console.log(typeof 5000);
// console.log(typeof 5000.99);
// // object >>> Array
// console.log(typeof [10, 15, 17]);
// // object
// console.log(typeof { name: "Osama", age: 17, country: "Eg" });
// // boolean
// console.log(typeof true);
// console.log(typeof false);
// // undefined
// console.log(typeof undefined);
// // object
// console.log(typeof null);



// =============================================================
// =============================================================
// ======================== Var Let Const ======================
// =============================================================
// =============================================================

// Var
// - Redeclare (Yes)
// - Access Before Declare (Undefined)
// - Variable Scope Drama [Added To Window] ()
// - Block Or Scope Function

// Let
// - Redeclare (No => Error)
// - Access Before Declare (Error)
// - Variable Scope Drama ()
// - Block Or Scope Function

// Const
// - Redeclare (No => Error)
// - Access Before Declare (Error)
// - Variable Scope Drama ()
// - Block Or Scope Function



// =============================================================
// =============================================================
// ======================== Scape, New Line ====================
// =============================================================
// =============================================================

// console.log('Elzero \\ Web \'School\'');
// // Elzero \ Web 'School'

// console.log("Elzero \
// Web \
// School");
// // Elzero Web School (line continue)

// console.log("Elzero\nWeb\nSchool");
// // Elzero
// // Web
// // School



// =============================================================
// =============================================================
// ====================== Template literals ====================
// =============================================================
// =============================================================

// // First Example
// let a = "We Love";
// let b = "JavaScript";
// let c = "And";
// let d = "Programming";

// console.log(`${a} "" '' \\ ${b} ${c} ${d}`);
// // We Love "" '' \ JavaScript And Programming

// console.log(`${a} "" '' \\ ${b}
// ${c} ${d}`);
// // We Love "" '' \ JavaScript
// // And Programming

// // Second Example
// let title = "Elzero";
// let desc = "Elzero Web School";

// let markup = `
//   <div class="card">
//     <div class="child">
//       <h2>${title}</h2>
//       <p>${desc}</p>
//     </div>
//   </div>
// `;

// document.write(markup);



// =============================================================
// =============================================================
// ============ Variables And Concatenation Challenge ==========
// =============================================================
// =============================================================

// // [1] Create 3 Variables [Title, Desctiption, Date]
// // -- All In One Statement
// // -- Variable Name Must Be Two Words
// // -- Title Content Is "Elzero"
// // -- Description Content Is "Elzero Web School"
// // -- Date Content Is "25/10"
// // [2] Create Variable Contains Div And This Div Contains
// // -- H3 For Title
// // -- P For Paragraph
// // -- Span For Time
// // [3] Add This Card To Page 4 Times
// // [4] Use Template Literals For Concatenate

// // Extra
// // - Use ES6 Repeat
// var title = "Elzero", desc = "Elzero Web School", date = "25/10";
// var card =`
//     <div class="card">
//         <h3>Hello ${title}</h3>
//         <p>${desc}</p>
//         <span>${date}</span>
//     </div>
// `;

// document.write(card.repeat(4))



// =============================================================
// =============================================================
// =================== Arithmetic Operators ====================
// =============================================================
// =============================================================

// // + Addition
// // - Subtraction
// // * Multiplication
// // / Division
// // ** Exponentiation (ES7)
// // % Modulus (Division Remainder)
// // ++ Increment [ Post / Pre ]
// // -- Decrement [ Post / Pre ]

// console.log(10 + "Osama"); // 10osama

// console.log(10 - "Osama"); // NaN
// console.log(typeof NaN); // number

// console.log(2 ** 2); // 4
// console.log(11 % 2); //  1



// =============================================================
// =============================================================
// ==================== Unary Plus Negation ====================
// =============================================================
// =============================================================

// // - + Unary Plus [Return Number If Its Not Number]
// // - - Unary Negation [Return Number If Its Not Number + Negates It]

// console.log(+100); // 100
// console.log(+"100"); // 100
// console.log(+"-100"); // -100
// console.log(+"Osama"); // NaN
// console.log(typeof +"Osama"); // number
// console.log(+"15.5"); // 15.5
// console.log(+0xff); // 255
// console.log(+null); // 0
// console.log(+false); // 0
// console.log(+true); // 1

// console.log("=".repeat(20));

// console.log(-100); // -100
// console.log(-"100"); // -100
// console.log(-"-100"); // 100
// console.log(-"Osama"); // NaN
// console.log(typeof -"Osama"); // number
// console.log(-"15.5"); // -15.5
// console.log(-0xff); // -255
// console.log(-null); // -0
// console.log(-false); // -0
// console.log(-true); // -1

// console.log(Number("100")); // 100



// =============================================================
// =============================================================
// =============== Type Coercion (Type Casting) ================
// =============================================================
// =============================================================

// let a = "10";
// let b = 20;
// let c = true;

// console.log(a + b); // 1020
// console.log(+a + b); // 30
// console.log(Number(a) + b); // 30

// console.log(a - b); // -10
// console.log(a - "osama"); // NaN
// console.log(+a - "osama"); // NaN

// console.log(+undefined); // NaN
// console.log(+null); // 0

// console.log(+""); // 0
// console.log("" - 2); // -2
// console.log(false - true); // -1
// console.log(+false - +true); // -1
// console.log(+false - -true); // 1

// console.log(a + c); // 10true
// console.log(a + +c); // 101
// console.log(+a + c); // 11
// console.log(a + b + c); // 1020true
// console.log(+a + b + c); // 31



// =============================================================
// =============================================================
// ========================== Chalenge =========================
// =============================================================
// =============================================================

// let a = 10;
// let b = "20";
// let c = 80;

// // console.log(a++) // 10
// // console.log(a) // 11
// // console.log(++a) // 12
// // console.log(a) // 12

// // console.log('='.repeat(10))

// console.log(++a + +b++ + +c++ - +a++); // 100
// // 11 + 20 + 80 - 11 = 101
// // a = 12, b = 21, c = 81

// console.log(++a + -b + +c++ - -a++ + +a); // 100
// // 13 + -21 + 81 - -13 + 14 = 100
// // a = 14, b = -21, c = 82

// console.log(--c + +b + --a * +b++ - +b * a + --a - +true); // 100

// console.log('='.repeat(10))



// var fName = "Elzero";
// document.write(`
//     <h1 id="el">${fName}</h1>
// `)
// var n = document.getElementById('el');
// n.style.color = 'blue'
// n.style.fontSize =  '80px'
// n.style.fontWeight = 'bold'
// n.style.textAlign = 'center'
// n.style.fontFamily = 'arial'



// var fName = "Elzero";
// document.write(`
//     <h1 class="el">${fName}</h1>
// `)
// // in css file
// // <style>
// //.el{
// //    color: blue;
// //    font-size: 80px;
// //    font-weight: bold;
// //    text-align: center;
// //    font-family: Arial
// // }
// // </style>



// // directive %c
// console.log("%cElzero %cWeb %cSchool","font-size:40px;color:red;","font-size:40px;color:green;font-weight:bold","font-size:40px;color-white;background-color:blue")
// console.table(["Ziad","Ahmed","Mahmoud","Mohamed"])



// var numOne = 10;
// var numTwo = 20;
// console.log(numOne+ "" +numTwo); // 1020
// console.log(typeof(numOne+ "" +numTwo)); // string
// console.log(`${numOne}${numTwo}`); // 1020
// console.log(typeof(`${numOne}${numTwo}`)); // string
// console.log(numTwo+"\n"+numOne); // 20 // 10
// console.log(`${numOne}\n${numTwo}`); // 10 // 20



// // <div id="el">object</div>
// console.log(el.innerHTML); // object
// console.log(el.textContent); // object
// console.log(typeof el); // object

// console.log(el); // <div id="el">object</div>
// console.log(document.getElementById('el')); // <div id="el">object</div>



// let a = 21;
// let b = 20;

// console.log(("_")+(a+"_"+b).repeat(4)+("_"));
// // _21_2021_2021_2021_20_



// let num = 3;
// console.log(num+num); // 6
// console.log(num*num-num); // 6
// console.log(num**num % 7); // 6
// console.log(true*num+num); // 6
// console.log(num+true+true+true); // 6
// console.log(num**(true+true)-num); // 6

// let num = "10";
// console.log(+num + +num); // 20 string



// =============================================================
// =============================================================
// ========================== Number ===========================
// =============================================================
// =============================================================

// console.log(1000000); // 1000000
// console.log(1_000_000); // 1000000 Syntactic Sugar "_"
// console.log(1e6); // 1000000
// console.log(10 ** 6); // 1000000
// console.log(10 * 10 * 10 * 10 * 10 * 10); // 1000000
// console.log(1000000.0); // 1000000

// console.log(Number.MIN_SAFE_INTEGER); // -9007199254740991
// console.log(Number.MAX_SAFE_INTEGER); // 9007199254740991
// console.log(Number.MIN_VALUE); // 1.7976931348623157e+308
// console.log(Number.MAX_VALUE); // 1.7976931348623157e+308
// console.log(Number.MAX_VALUE + 23434343434); // 1.7976931348623157e+308

// =============================================================

// // Number Methods
// console.log((100).toString()); // 100
// console.log(100..toString()); // 100
// console.log(100.0.toString()); // 100
// console.log(100.10.toString()); // 100.1

// console.log(100.5555655.toFixed(2)); // 100.56 string

// console.log(Number("100")); // 100
// console.log(Number("100 Osama")); // NaN
// console.log(+"100 Osama"); // NaN

// console.log(parseInt("100")); // 100
// console.log(parseInt("100.55")); // 100
// console.log(parseInt("100.500 Osama")); // 100

// console.log(Number("100 Osama")); // NaN
// console.log(Number("Osama 100 Osama")); // NaN
// console.log(parseInt("100 Osama")); // 100
// console.log(parseInt("Osama 100 Osama")); // NaN

// console.log(parseFloat("100")); // 100
// console.log(parseFloat("100.500 Osama")); // 100.5

// console.log(Number.isInteger("100")); // false
// console.log(Number.isInteger(100.500)); // false
// console.log(Number.isInteger(100)); // true

// console.log(Number.isNaN("Osama")); // false
// console.log(Number.isNaN("Osama" / 20)); // true



// =============================================================
// =============================================================
// ============================ Math ===========================
// =============================================================
// =============================================================

// console.log(100.5555655.toFixed(2)); // 100.56 string

// console.log(Math.round(99.2)); // 99
// console.log(Math.round(99.5)); // 100

// console.log(Math.ceil(99.2)); // 100
// console.log(Math.ceil(99.6)); // 100

// console.log(Math.floor(99.9)); // 99
// console.log(Math.floor(99.2)); // 99

// console.log(Math.min(10, 20, 100, -100, 90)); // -100
// console.log(Math.max(10, 20, 100, -100, 90)); // 100

// console.log(Math.pow(3, 2)); // 9
// console.log(3**2); // 9

// console.log(Math.random()); // from 0 to 1

// console.log(Math.trunc(99.56)); // 99
// console.log(Math.trunc(99.23)); // 99



// =============================================================
// =============================================================
// ================== Number, Math Chalenge ====================
// =============================================================
// =============================================================

// let a = 100; // 100
// let b = 2_00.5; // 200.5
// let c = 1e2; // 100
// let d = 2.4; // 2.4

// // Find Smallest Number In All Variables And Return Integer
// console.log(parseInt(Math.min(a,b,c,d))); // 2

// // Use Variables a + d One Time To Get The Needed Output
// console.log(a**parseInt(d)); // 10000
// console.log(Math.pow(a,parseInt(d))); // 10000

// // Get Integer "2" From d Variable With 4 Methods
// console.log(parseInt(d)); // 2 integer
// console.log(Math.trunc(d)); // 2 integer
// console.log(Math.floor(d)); // 2 integer
// console.log(Number(d.toFixed(0))); // 2 integer



// // Examples
// console.log(100_000); // 100000
// console.log(100000); // 100000
// console.log(5e4 + 5e4); // 100000

// let x = "100.56789 Views";
// console.log(parseInt(x)); // 100 number
// console.log(parseFloat(x)); // 100.56789 number
// console.log(parseFloat(x).toFixed(2)); // 100.57 string
// console.log(Number(parseFloat(x).toFixed(2))); // 100.57 number
// console.log(parseFloat(parseFloat(x).toFixed(2))); // 100.57 number

// let num = 10;
// console.log(Number.isInteger(num)); // true
// console.log(Number.isInteger(num) + Number.isInteger(num)); // 2
// console.log(Number.isInteger(num) * 2); // 2

// let x = 10.4;
// console.log(Math.trunc(x)); // 10 number
// console.log(parseInt(x)); // 10 number
// console.log(x.toFixed(0)); // 10 string
// console.log(Number(x.toFixed(0))); // 10 number
// console.log(parseInt(x.toFixed(0))); // 10 number

// console.log(Math.random()); // 0 to 1
// console.log(Math.random()*10) // 0 - 9.99999
// console.log(Math.trunc(Math.random()*10)) // 0 - 9
// console.log(Math.trunc(Math.random()*10)+1) // 1 - 10



// =============================================================
// =============================================================
// =========================== String ==========================
// =============================================================
// =============================================================

// let theName = "  Ahmed  ";

// console.log(theName); //  Ahmed
// console.log(theName[0]); //
// console.log(theName[5]); //e

// console.log(theName.charAt(0)); //
// console.log(theName.charAt(5)); //e

// console.log(theName.length); //9
// console.log(theName.trim()); //Ahmed

// console.log(theName.toUpperCase()); //  AHMED
// console.log(theName.toLowerCase()); //  ahmed

// console.log(theName.trim().charAt(2).toUpperCase()); // M >> Chain Methods

// =============================================================

// let a = "Elzero Web School";

// console.log(a.indexOf("Web"));
// // 7 >> from [0] to end
// console.log(a.indexOf("Web", 8));
// // -1 >> not found >> from [8] to end

// console.log(a.indexOf("h"));
// // 13 >> from [0] to end
// console.log(a.lastIndexOf("h"));
// // 13 >> serch from end >> index from [0]
// console.log(a.lastIndexOf("o"));
// // 15 >> serch from end >> index from [0]
// console.log(a.lastIndexOf("w",12));
// // -1 >> not found >> from [12] to end

// console.log(a.slice(2, 6));
// // zero >> from [2] to [6] >> end not include
// console.log(a.slice(-5));
// // chool >> from end >> count 5 >> 1,2,3,4,5 >>> c to end
// console.log(a.slice(-5, -3));
// // ch >> from end >>

// console.log(a.split(""));
// // array ["E", "l",...]
// console.log(a.split(" "));
// // array ["Elzero", "Web", "School"]
// console.log(a.split("", 6));
// // array >> length 6 >> ["E", "l", "z", "e", "r", "o"]

// console.log(a.repeat(2));

// =============================================================

// let a = "Elzero Web School";

// console.log(a.length); // 17

// console.log(a.substring(2, 6));
// // zero >> from [2] to [6] >> end not include
// console.log(a.substring(6, 2));
// // zero >> (2,6)
// console.log(a.substring(-10, 6));
// // elzero >> (0,6)
// console.log(a.substring(a.length - 5, a.length - 3));
// // ch >> (12, 14)

// console.log(a.substr(0, 6));
// // elzero
// console.log(a.substr(-3));
// // ool >> from end >> -1,-2,-3
// console.log(a.substr(-5, 2));
// // ch >> from end -1,-2,-3,-4,-5 c >> to 2 >> ch >> end not in

// console.log(a.includes("Web")); // true
// console.log(a.includes("Web", 8)); // flase >> start [8]

// console.log(a.startsWith("E")); // true
// console.log(a.startsWith("E", 2)); // false >> start [2]
// console.log(a.startsWith("zero", 2)); // true >> start [2]

// console.log(a.endsWith("l")); // true
// console.log(a.endsWith("l", 2)); // true >> el >> length



// =============================================================
// =============================================================
// =========================== Challenge =======================
// =============================================================
// =============================================================

// // String Challenge
// // All Solutions Must Be In One Chain
// // You Can Use Concatenate

// let a = "Elzero Web School";

// // Include This Method In Your Solution [slice, charAt]
// console.log(a.slice(2).charAt(0).toLocaleUpperCase() + a.slice(3,6)); // Zero

// // 8 H
// console.log(a.slice(-4,-3).toUpperCase().repeat(8)); // HHHHHHHH
// console.log(a.slice(13,14).toUpperCase().repeat(8)); // HHHHHHHH
// console.log(a.substr(13,1).toUpperCase().repeat(8)); // HHHHHHHH

// // Return Array
// console.log(a.split(" ",1)); // ["Elzero"]

// // Use Only "substr" Method + Template Literals In Your Solution
// console.log(`${a.substr(0,6)} ${a.substr(11)}`); // Elzero School


// let x = "Elzero Web SchoolE";

// // Solution Must Be Dynamic Because String May Changes
// console.log(x[0].toLowerCase()); // e
// console.log(x[x.length-1].toLowerCase()); // e
// console.log(x.slice(1,x.length-1).toUpperCase()); // LZERO WEB SCHOOL

// console.log(x[0].toLowerCase()+""+x.slice(1,x.length-1).toUpperCase()+""+x[x.length-1].toLowerCase()); // eLZERO WEB SCHOOLe
// console.log(`${x[0].toLowerCase()}${x.slice(1,x.length-1).toUpperCase()}${x[x.length-1].toLowerCase()}`); // eLZERO WEB SCHOOLe


// let a = "Elzero";
// console.log(a.slice(3,4)); // e >> index index
// console.log(a.substr(3,1)); // e >> index length
// console.log(a.substring(3,4)); // e >> index index
// console.log(a[3]); // e
// console.log(a.split("")[3]); // e
// console.log(a.split("")[3].repeat(3)); // eee


// let word = "Elzero";
// let letterZ = "z";
// let letterE = "e";
// let letterO = "O";

// console.log(word.includes(letterZ)); // True
// console.log(word.startsWith(letterE.toUpperCase())); // True
// console.log(word.endsWith(letterO.toLowerCase())); // True



// =============================================================
// =============================================================
// ==================== Comparison Operators ===================
// =============================================================
// =============================================================

// // (== , !=) >>> equal, not wqual >>> value only
// console.log(10 == "10"); // true
// console.log(-100 == "-100"); // true
// console.log(10 != "10"); // false

// // (=== , !==) >>> identical, not identical >>> value and data type
// console.log(10 === "10"); // false
// console.log(10 !== "10"); // true
// console.log(10 !== 10); // false

// console.log(10 > 20); // false
// console.log(10 > 10); // false
// console.log(10 >= 10); // true

// console.log(10 < 20); // true
// console.log(10 < 10); // false
// console.log(10 <= 10); // true

// console.log(typeof "Osama" === typeof "Ahmed"); // true



// =============================================================
// =============================================================
// ===================== Logical Operators =====================
// =============================================================
// =============================================================

// console.log(!true); // false

// console.log(10 == "10"); // true
// console.log(!(10 == "10")); // false

// console.log(10 == "10" && 10 > 8 && 10 > 50); // false

// console.log(10 == "10" || 10 > 80 || 10 > 50); // true



// =============================================================
// =============================================================
// ======================== Control Flow =======================
// =============================================================
// =============================================================

// let price = 100;
// let discount = true;
// let discountAmount = 30;
// let country = "KSA";

// if (discount === true) {
//    price -= discountAmount;
// }
// else if (country === "Egypt") {
//    price -= 40;
// }
// else if (country === "Syria") {
//    price -= 50;
// }
// else {
//    price -= 10;
// }

// console.log(price); // 70

// =============================================================

// let price = 100;
// let discount = false;
// let discountAmount = 30;
// let country = "Egypt";
// let student = true;

// if (discount === true) {
//     price -= discountAmount;
// }
// else if (country === "Egypt") {
//     if (student === true) {
//         price -= discountAmount + 30;
//     }
//     else {
//         price -= discountAmount + 10;
//     }
// }
// else {
//     price -= 10;
// }

// console.log(price); // 40



// =============================================================
// =============================================================
// ============= Conditional (Ternary) Operator ================
// =============================================================
// =============================================================

// let theName = "Mona";
// let theGender = "Female";
// let theAge = 30;

// if (theGender === "Male") {
//   console.log("Mr");
// } else {
//   console.log("Mrs");
// }

// // Condition ? If True : If False
// theGender === "Male" ? console.log("Mr") : console.log("Mrs");

// // variable = Condition ? If True : If False
// let result = theGender === "Male" ? "Mr" : "Mrs";
// document.write(result);

// console.log(theGender === "Male" ? "Mr" : "Mrs");
// console.log(`${theGender === "Male" ? "Mr" : "Mrs"} ${theName}`);

// theAge < 20
//   ? console.log("less than 20")
//   : theAge > 20 && theAge < 60
//   ? console.log("20 To 60")
//   : theAge > 60
//   ? console.log("Larger Than 60")
//   : console.log("Unknown");



// =============================================================
// =============================================================
// ====== Logical Or || ,, Nullish Coalescing Operator ?? ======
// =============================================================
// =============================================================

// console.log(Boolean(100)); // true
// console.log(Boolean(-100)); // true
// console.log(Boolean(" ")); // true
// console.log(Boolean("0")); // true
// console.log(Boolean(0)); // false
// console.log(Boolean("")); // false
// console.log(Boolean(null)); // false
// console.log(Boolean(undefined)); // false

// let price = null;

// // ||
// // print value after || if null, undefined, falsy value
// console.log(`${price || 200}`); // 200

// // ??
// // print value after ?? if null, undefined only
// console.log(`${price ?? 200}`); // 200



// =============================================================
// =============================================================
// ======================== challenge ==========================
// =============================================================
// =============================================================

// // Write Condition With Ternary If Syntax
// let a = 10;

// if (a < 10) {
//     console.log("less than 10");
// }
// else if (a >= 10 && a <= 40) {
//     console.log("10 To 40");
// }
// else if (a > 40) {
//     console.log("> 40");
// }
// else {
//     console.log("Unknown");
// }

// a < 10
//     ? console.log("less than 10")
//     : a >= 10 && a <= 40
//     ? console.log("10 To 40")
//     : a > 40
//     ? console.log("> 40")
//     : console.log("Unknown")

// =============================================================

// let st = "Elzero Web School";

// // W Position May Change
// // console.log(st.indexOf("W")) // 7
// // console.log(st.charAt(st.indexOf("W"))) // W
// // console.log(st.charAt(st.indexOf("W")).toLowerCase()) // w

// if (st.charAt(st.indexOf("W")).toLowerCase() === "w") {
//     console.log("Good");
// }

// // console.log(`${st.indexOf("e")}${st.indexOf("r")}`) // 34
// if ((`${st.indexOf("e")}${st.indexOf("r")}`) === "34") {
//     console.log("Good");
//   }

// if (st !== "string") {
// console.log("Good");
// }

// if ((typeof(st.indexOf("e"))) === "number") {
//   console.log("Good");
// }

// // console.log(st.slice(0,6).repeat(2)) // ElzeroElzero
// if ((st.slice(0,6).repeat(2)) === "ElzeroElzero") {
//   console.log("Good");
// }



// =============================================================
// =============================================================
// ========================== Switch ===========================
// =============================================================
// =============================================================

// let day = 2;

// switch (day) {
//   default:
//     console.log("Unknown Day");
//     break;
//   case 0:
//     console.log("Saturday");
//     break;
//   case 1:
//     console.log("Sunday");
//     break;
//   case 2:
//   case 3:
//     console.log("Monday");
//     break;
// }



// =============================================================
// =============================================================
// ========================= Challenge =========================
// =============================================================
// =============================================================

// let job = "Manager";
// let salary = 0;

// // if (job === "Manager") {
// //     salary = 8000;
// //     console.log(salary)
// // }
// // else if (job === "IT" || job === "Support") {
// //     salary = 6000;
// //     console.log(salary)
// // }
// // else if (job === "Developer" || job === "Designer") {
// //     salary = 7000;
// //     console.log(salary)
// // }
// // else {
// //     salary = 4000;
// //     console.log(salary)
// // }

// switch (job){
//     case "Manager":
//         console.log(salary+8000);
//         break;
//     case "IT":
//     case "Support":
//         console.log(salary+6000);
//         break;
//     case "Developer":
//     case "Designer":
//         console.log(salary+7000);
//         break;
//     default:
//         console.log(salary+4000);
// }

// ============================================================

// let holidays = 0;
// let money = 0;

// switch (holidays) {
//   case 0:
//     money = 5000;
//     console.log(money);
//     break;
//   case 1:
//   case 2:
//     money = 3000;
//     console.log(money);
//     break;
//   case 3:
//     money = 2000;
//     console.log(money);
//     break;
//   case 4:
//     money = 0;
//     console.log(money);
//     break;
//   default:
//     money = 0;
//     console.log(money);
// }

// if(holidays === 0){
//     maoey = 5000;
//     console.log(money);
// }
// else if(holidays === 1 || holidays === 2){
//     money = 3000;
//     console.log(money);
// }
// else if(holidays === 3){
//     maoey = 2000;
//     console.log(money);
// }
// else if(holidays === 4){
//     maoey = 0;
//     console.log(money);
// }
// else{
//     money = 0;
//     console.log(money);
// }



// =============================================================
// =============================================================
// =========================== Arrays ==========================
// =============================================================
// =============================================================

// let myFriends = ["Ahmed", "Mohamed", "Sayed", ["Marwan", "Ali"]];

// console.log(`Hello ${myFriends[0]}`); // Ahmed
// console.log(`Hello ${myFriends[2]}`); // Sayed
// console.log(`${myFriends[1][2]}`); // h >> Mohamed
// console.log(`Hello ${myFriends[3][1]}`); // Ali
// console.log(`${myFriends[3][1][2]}`); // i >>> Ali

// console.log(myFriends);

// myFriends[1] = "Gamal";
// myFriends[3] = "Medo";
// console.log(myFriends); // ["Ahmed", "Gamal", "Sayed", "Medo"]

// myFriends[3] = ["Sameh", "Ameer"];
// console.log(myFriends);

// console.log(Array.isArray(myFriends)); // true

// ============================================================

// // Array Methods
// let myFriends = ["Ahmed", "Mohamed", "Sayed"];

// console.log(myFriends.length); // 3

// // add to end
// myFriends[myFriends.length] = "Gamal"; // myFriends[3]
// console.log(myFriends); // ["Ahmed", "Mohamed", "Sayed", "Gamal"]

// // replace the end index (gamal >>> ali)
// myFriends[myFriends.length-1] = "ALi"; // myFriends[2]
// console.log(myFriends); // ["Ahmed", "Mohamed", "Sayed", "ALi"]

// myFriends.length = 2;
// console.log(myFriends); // ["Ahmed", "Mohamed"]

// ============================================================

// // Arrays Methods [Adding And Removing]
// let myFriends = ["Ahmed", "Mohamed", "Sayed"];
// console.log(myFriends);

// // unshift("", "") Add To First
// myFriends.unshift("Osama", "Nabil");
// console.log(myFriends);
// // ["Osama", "Nabil", "Ahmed", "Mohamed", "Sayed"]

// // push("", "") Add To End
// myFriends.push("Eman");
// console.log(myFriends);
// // ["Osama", "Nabil", "Ahmed", "Mohamed", "Sayed", "Eman"]

// // shift() Remove First and return value
// let first = myFriends.shift();
// console.log(myFriends);
// // ["Nabil", "Ahmed", "Mohamed", "Sayed", "Eman"]
// console.log(first); // Osama

// // pop() Remove End and return value
// let last = myFriends.pop()
// console.log(myFriends);
// // ["Nabil", "Ahmed", "Mohamed", "Sayed"]
// console.log(last); // Eman

// ============================================================

// // Arrays Methods [Search]
// //  lastIndexOf(Search Element, From Index [Opt])
// //- includes(valueToFind, fromIndex [Opt]) [ES7]

// let myFriends = ["Ahmed", "Mohamed", "Sayed", "Alaa", "Ahmed"];
// console.log(myFriends);

// console.log(myFriends.indexOf("ziad")); // -1 >> not found

// console.log(myFriends.indexOf("Ahmed")); // 0
// console.log(myFriends.indexOf("Ahmed", 2)); // 4 >> index

// console.log(myFriends.lastIndexOf("Ahmed")); // 4
// console.log(myFriends.lastIndexOf("Ahmed", -2)); // 0

// console.log(myFriends.includes("Sayed")); // true
// console.log(myFriends.includes("Sayed", 3));
// // false >> ["Alaa", "Ahmed"] >> index

// if (myFriends.lastIndexOf("Osama") === -1) {
//   console.log("Not Found");
// }
// console.log(myFriends.indexOf("Osama")); // -1
// console.log(myFriends.lastIndexOf("Osama")); // -1

// ============================================================

// // Arrays Methods [Sort] [reverse]
// let myFriends = [10, "Sayed", "Mohamed", "90", 9000, 100, 20, "10", -20, -10];
// console.log(myFriends);

// // console.log(myFriends.sort());
// // // [-10, -20, 10, "10", 100, 20, "90", 9000, "Mohamed", "Sayed"]

// // console.log(myFriends.reverse());
// // // [-10, -20, "10", 20, 100, 9000, "90", "Mohamed", "Sayed", 10]

// // // change in arr
// // console.log(myFriends.sort());
// // console.log(myFriends.reverse());
// // // ["Sayed", "Mohamed", 9000, "90", 20, 100, "10", 10, -20, -10]

// // console.log(myFriends.sort().reverse());
// // // ["Sayed", "Mohamed", 9000, "90", 20, 100, "10", 10, -20, -10]

// ============================================================

// // Arrays Methods [Slicing]
// //  slice(Start [Opt], End [Opt] Not Including End)
// //  Return New Array

// let myFriends = ["Ahmed", "Sayed", "Ali", "Osama", "Amer"];
// console.log(myFriends);

// console.log(myFriends.slice());
// // ["Ahmed", "Sayed", "Ali", "Osama", "Amer"]
// console.log(myFriends.slice(1));
// // ["Sayed", "Ali", "Osama", "Amer"]
// console.log(myFriends.slice(1, 3));
// // ["Sayed", "Ali"]

// console.log(myFriends.slice(-3));
// // ["Ali", "Osama", "Amer"]
// console.log(myFriends.slice(1, -2));
// // ["Sayed", "Ali"]
// console.log(myFriends.slice(-4, -2));
// // ["Sayed", "Ali"]

// console.log(myFriends);
// // ["Ahmed", "Sayed", "Ali", "Osama", "Amer"]

// ============================================================

// // Arrays Methods [Splicing]
// //  splice(Start [Mand], DeleteCount [Opt] [0 No Remove], The Items To Add [Opt])
// let myFriends = ["Ahmed", "Sayed", "Ali", "Osama", "Amer"];
// console.log(myFriends);

// myFriends.splice(1, 0, "Samer", "Smara");
// console.log(myFriends); // inex 1, no remove, add samer smara
// // ["Ahmed", "Samer", "Smara", "Sayed", "Ali", "Osama", "Amer"]

// myFriends.splice(0, 2, "Ziad", "Zain");
// console.log(myFriends); // index 0, remove 2, add Ziad Zain
// // ["Ziad", "Zain", "Smara", "Sayed", "Ali", "Osama", "Amer"]

// ============================================================

// // Arrays Methods [Joining]
// let myFriends = ["Ahmed", "Sayed", "Ali", "Osama", "Gamal", "Ameer"];
// let myNewFriends = ["Samar", "Sameh"];
// let schoolFriends = ["Haytham", "Shady"];

// // concat(array, array) => Return A New Array
// let allFriends = myFriends.concat(myNewFriends);
// console.log(allFriends);
// let allFriends1 = myFriends.concat(myNewFriends, schoolFriends);
// console.log(allFriends1);
// let allFriends2 = myFriends.concat(myNewFriends, "Gameel", [1, 2]);
// console.log(allFriends2);

// // join(Separator) >> return string
// console.log(allFriends.join()); // Ahmed,Sayed,Ali....
// console.log(allFriends.join("")); // AhmedSayedAli....
// console.log(allFriends.join(" @ ")); // Ahmed@Sayed@Ali....
// console.log(allFriends.join("|").toUpperCase());



// =============================================================
// =============================================================
// ========================= Challenge =========================
// =============================================================
// =============================================================

// let zero = 0;
// let counter = 3;
// let my = ["Ahmed", "Mazero", "Elham", "Osama", "Gamal", "Ameer"];

// // Write Code Here
// my = my.slice(zero,my.indexOf("Gamal")).reverse()

// console.log(my); // ["Osama", "Elham", "Mazero", "Ahmed"];

// console.log(my.slice(my.indexOf("Elham"),counter)); // ["Elham", "Mazero"]

// console.log("El"+""+my.slice(my.indexOf("Mazero"),counter).join().slice(my.indexOf("Mazero"))); // "Elzero"

// console.log(
//     my.slice(my.indexOf("Mazero"),counter)
//     .join().slice(my.indexOf("Mazero")).slice(2,3)
//     +""+
//     my.slice(my.indexOf("Mazero"),counter)
//     .join().slice(my.indexOf("Mazero")).slice(3).toUpperCase()
// ); // "rO"

// ============================================================

// console.log(100 == "100"); // true
// console.log(100 != 1000); // true
// console.log(100 !== 1000); // true
// console.log(110 > 100 > 10 < 20); // true
// console.log(-10 == "-10"); // true
// console.log(-10 !== "-10"); // true
// console.log(typeof -50 === typeof +"-40"); // true
// console.log(typeof -50 == typeof +"-40"); // true
// console.log(typeof 10 == typeof -"-40"); // true
// console.log(typeof 10 === typeof -"-40"); // true
// console.log(typeof "10" != typeof 10); // true
// console.log(typeof "10" !== typeof 10); // true
// console.log(typeof 20 != false); // true
// console.log(+20 != false); // true

// ============================================================

// let day = "  friday  ".trim();
// let d = day[0].toUpperCase() + day.slice(1)

// switch(d){
//     case "Friday":
//     case "Saturday":
//     case "Sunday":
//         console.log("Friday, Saturday, Sunday");
//         break;
//     case "Monday":
//     case "Thursday":
//         console.log("Monday, Thursday");
//         break;
//     case "Tuesday":
//         console.log("Tuesday");
//         break;
//     case "Wednesday":
//         console.log("Wednesday");
//         break;
//     default:
//         console.log("Its Not A Valid Day");
// }

// ============================================================

// let myFriends = ["Ahmed", "Elham", "Osama", "Gamal"];
// let num = 3;

// console.log(myFriends.slice(0, num));
// // ["Ahmed", "Elham", "Osama"];
// console.log(myFriends.slice(0, myFriends.length-1));
// // ["Ahmed", "Elham", "Osama"];

// ============================================================

// let friends = ["Ahmed", "Eman", "Osama", "Gamal"];
// friends.shift();
// friends.pop();
// console.log(friends); // ["Eman", "Osama"]

// ============================================================

// let arrOne = ["C", "D", "X"];
// let arrTwo = ["A", "B", "Z"];
// let finalArr = [];

// // finalArr = finalArr.concat(arrOne,arrTwo).sort().reverse()
// // console.log(finalArr); // ["Z", "X", "D", "C", "B", "A"]

// // finalArr.push(...arrOne,...arrTwo)
// // console.log(finalArr.sort().reverse()); // ["Z", "X", "D", "C", "B", "A"]

// ============================================================

// let website = "Go";
// let words = [`${website}ogle`, "Facebook", ["Elzero", "Web", "School"]];

// console.log(words[2][0][2]); // z
// console.log(words[2][0].slice(2).toUpperCase()); // ZERO
// console.log(words[website.length][0].slice(website.length).toUpperCase()); // ZERO
// console.log(words[website.length][website.indexOf("G")].slice(website.length).toUpperCase()); // ZERO

// ============================================================

// let needle = "JS";
// let haystack = ["PHP", "JS", "Python"];

// console.log(haystack.indexOf(needle))

// if(haystack.indexOf(needle) !== -1)
//     console.log("Found")

// if(haystack.lastIndexOf(needle) !== -1)
//     console.log("Found")

// if(haystack.indexOf(needle) >= 0)
//     console.log("Found")

// ============================================================

// let arr1 = ["A", "C", "X"];
// let arr2 = ["D", "E", "F", "Y"];
// let allArrs = [];

// allArrs =
//     allArrs
//     .concat(arr1,arr2)
//     .sort()
//     .slice(arr2.length)
//     .join("")
//     .toLowerCase()

// console.log(allArrs); // fxy



// =============================================================
// =============================================================
// =========================== Loops ===========================
// =============================================================
// =============================================================

// // for
// for (let i = 0; i < 10; i++) {
//     console.log(i); // 0 1 2 3 4 5 6 7 8 9
// }

// ============================================================

// let myFriends = [1, 2, "Osama", "Ahmed", 3, 4, "Sayed", 5, "Ali"];
// let onlyNames = [];
// let onlyNumbers = [];

// for (let i = 0; i < myFriends.length; i++) {
//     console.log(myFriends[i]); // 1 2 osama ahmed 3 4 sayed 6 ali
// }

// for (let i = 0; i < myFriends.length; i++) {
//     if (typeof myFriends[i] === "string") {
//       onlyNames.push(myFriends[i]);
//     }
// }
// console.log(onlyNames); // ["Osama", "Ahmed", "Sayed", "Ali"]

// for (let i = 0; i < myFriends.length; i++) {
//     if (typeof myFriends[i] === "number") {
//         onlyNumbers.push(myFriends[i]);
//     }
// }
// console.log(onlyNumbers); // [1, 2, 3, 4, 5]

// ============================================================

// let products = ["Keyboard", "Mouse", "Pen", "Pad", "Monitor"];
// let colors = ["Red", "Green", "Black"];
// let models = [2020, 2021];

// for (let i = 0; i < products.length; i++) {
//     console.log(`${products[i]}:`);
//     console.log("--- Colors: ");

//     for (let j = 0; j < colors.length; j++) {
//         console.log(`-------- ${colors[j]}`);
//     }

//     console.log("--- Models: ");
//     for (let k = 0; k < models.length; k++) {
//         console.log(`-------- ${models[k]}`);
//     }
// }
// // Keyboard:
// // --- Colors:
// // -------- Red
// // -------- Green
// // -------- Black
// // --- Models:
// // -------- 2020
// // -------- 2021

// ============================================================

// // [break] [continue] [label]
// let products = ["Keyboard", "Mouse", "Pen", "Monitor"];
// let colors = ["Red", "Green", "Black"];

// // for (let i = 0; i < products.length; i++) {
// //   if(products[i] === "Pen") break;
// //   console.log(products[i]);
// // }
// // // Keyboard Mouse

// // for (let i = 0; i < products.length; i++) {
// //     if(products[i] === "Pen") continue;
// //     console.log(products[i]);
// // }
// // // Keyboard Mouse Monitor

// // mainLoop:
// // for (let i = 0; i < products.length; i++) {
// //     console.log(products[i]);

// //     nestedLoop:
// //     for (let j = 0; j < colors.length; j++) {
// //         console.log(`- ${colors[j]}`);

// //         if (colors[j] === "Green") {
// //             break mainLoop;
// //         }
// //   }
// // }
// // // Keyboard
// // //  - Red
// // //  - Green

// ============================================================

// let products = ["Keyboard", "Mouse", "Pen", "Pad", "Monitor"];
// let i = 0;

// for (;;) {
//     console.log(products[i]);
//     i++;
//     if (i === products.length) break;
// }
// // Keyboard Mouse Pen Pad Monitor

// console.log(i) // 5

// ============================================================

// let products = ["Keyboard", "Mouse", "Pen", "Pad", "Monitor"];
// let colors = ["Red", "Green", "Blue"];
// let showCount = 3;

// document.write(`<h1>Show ${showCount} Products</h1>`);
// for (let i = 0; i < showCount; i++) {
//     document.write(`<div>`);
//     document.write(`<h3>[${i + 1}] ${products[i]}</h3>`);

//     for (let j = 0; j < colors.length; j++) {
//         document.write(`<p>${colors[j]}</p>`);
//     }

//     // document.write(`<p>${colors.join(" | ")}</p>`);
//     document.write(`</div>`);
// }

// ============================================================

// // While
// let products = ["Keyboard", "Mouse", "Pen", "Pad", "Monitor", "iPhone"];
// let index = 0;

// while (index < products.length) {
//   console.log(products[index]);
//   index += 1;
// }

// ============================================================

// // Do While
// let products = ["Keyboard", "Mouse", "Pen", "Pad", "Monitor", "iPhone"];
// let i = 0;

// do {
//   console.log(products[i]);
//   i++;
// } while (i < products.length);



// =============================================================
// =============================================================
// ========================= Challenge =========================
// =============================================================
// =============================================================

// let admins = ["Ahmed", "Osama", "Sayed", "Stop", "Samera"];
// let employees = ["Amgad", "Samah", "Ameer", "Omar", "Othman", "Amany", "Samia"];

// for(let i = 0; i < admins.length; i++){
//     if(admins[i] === "Stop")
//         document.write(`<div>We Have <b>${i}</b> Admins</div>`);
// }

// for(let i = 0; i < admins.length; i++){
//     if(admins[i] === "Stop") break;

//     document.write(`<hr>`)
//     document.write(`<div>`)
//     document.write(`The Admin for team <b>${i+1}</b> is ${admins[i]}`)

//     let countEmployess = 1;
//     for(let j = 0; j < employees.length; j++){

//         document.write(`<p>`)
//         if(admins[i][0] === employees[j][0]){
//             document.write(`${countEmployess}- ${employees[j]}`)
//             countEmployess++;
//         }
//         document.write(`</p>`)
//     }
//     document.write(`</div>`)
// }

// ============================================================

// let start = 10;
// let end = 100;
// let exclude = 40;

// for(let i = start; i <= end; i+=start){
//     if(i === exclude) continue
//     console.log(i)
// }
// // 10 20 30 50 60 70 80 90

// ============================================================

// let start = 10;
// let end = 0;
// let stop = 3;

// for(let i = start; i >= end; i--){
//     if(i < start)
//         console.log(`0${i}`)
//     else
//         console.log(i)

//     if(i === stop) break
// }
// // 10 09 08 07 06 05 04 03

// ============================================================

// let start = 1;
// let end = 6;
// let breaker = 2;

// for(; start <= end; start++){
//     console.log(start)
//     for(let i = breaker; i < end; i+=breaker){
//         console.log(`-- ${i}`)
//     }
// }
// // 1
// // -- 2
// // -- 4
// // 2
// // -- 2
// // -- 4

// ============================================================

// let index = 10;
// let jump = 2;
// let end = 0;

// for (;;) {
//   console.log(index);
//   index-=jump;
//   if(index === jump) break
// }
// // 10 8 6 4

// ============================================================

// let friends = ["Ahmed", "Sayed", "Eman", "Mahmoud", "Ameer", "Osama", "Sameh"];
// let letter = "a";

// for(let i = 0 ; i < friends.length ;i++){
//     if(friends[i][0] === letter.toUpperCase())
//         continue
//     console.log(`${i+1} => ${friends[i]}`)
// }
// // "1 => Sayed"
// // "2 => Eman" ......

// ============================================================

// let mix = [1, 2, 3, "A", "B", "C", 4];

// for(let i = 0; i< mix.length; i++){
//     if(i === 0) continue
//     if(typeof mix[i] === "number")
//         console.log(mix[i])
// }
// // 2 3 4

// ============================================================

// let friends = ["Ahmed", "Sayed", "Ali", 1, 2, "Mahmoud", "Amany"];
// let index = 0;
// let counter = 0;

// while(index < friends.length){
//     if(typeof friends[index] === "string" && friends[index][0] !== "A")
//         console.log(friends[index])
//     index++
// }
// // "1 => Sayed"
// // "2 => Mahmoud"



// =============================================================
// =============================================================
// ======================== Function 1 =========================
// =============================================================
// =============================================================

// function sayHello(userName) {
//     console.log(`Hi ${userName}`);
//   }

//   sayHello("Osama");
//   sayHello("Sayed");
//   sayHello("Ali");

// =============================================================

// function sayHello(userName, age) {
//     if (age < 20)
//         console.log(`App is Not Suitable For You`);
//     else
//         console.log(`Hello ${userName} Your Age is ${age}`);
// }

// sayHello("Osama", 38);
// sayHello("Sayed", 40);
// sayHello("Ali", 18);

// =============================================================

// function generateYears(start, end, exclude) {
//     for (let i = start; i <= end; i++) {
//         if (i === exclude)
//             continue;
//         console.log(i);
//     }
// }
// generateYears(10, 20, 11);

// =============================================================

// function generate(start, end) {
//     for (let i = start; i <= end; i++) {
//         if (i === 15) {
//             return `Interrupting`;
//             // break;
//         }
//         console.log(i);
//     }
// }
// generate(10, 20); // 10 11 12 13 14
// // console.log(generate(10, 20)) // 10 11 12 13 14 Interupting

// =============================================================

// // Default Function Parameters
// function sayHello(username = "Unknown", age = "Unknown") {
//     // if (age === undefined) {
//     //   age = "Unknown";
//     // }

//     // age = age || "Unknown";

//     return `Hello ${username} Your Age Is ${age}`;
// }
// console.log(sayHello());

// =============================================================

// //- Rest Parameters >>>> array >> type object
// //- Only One Allowed
// //- Must Be Last Element
// function calc(...numbers) {
//     // console.log(Array.isArray(numbers)); // true
//     // console.log(typeof numbers) // object

//     let result = 0;
//     for (let i = 0; i < numbers.length; i++) {
//         result += numbers[i];
//     }
//     return `Final Result Is ${result}`;
// }
// console.log(calc(10, 20, 10, 30, 50, 30));

// =============================================================

// function showInfo(us = "Un", ag = "Un", rt = 0, show = "Yes", ...sk) {
//     document.write(`<div>`);
//     document.write(`<h2>Welcome, ${us}</h2>`);
//     document.write(`<p>Age: ${ag}</p>`);
//     document.write(`<p>Hour Rate: $${rt}</p>`);

//     if (show === "Yes") {
//         if (sk.length > 0) {
//             document.write(`<p>Skills: ${sk.join(" | ")}</p>`);
//         } else {
//             document.write(`<p>Skills: No Skills</p>`);
//         }
//     } else {
//       document.write(`<p>Skills Is Hidden</p>`);
//     }
// }
// showInfo("Osama", 38, 20, "Yes", "Html", "CSS");



// =============================================================
// =============================================================
// ========================== Challenge ========================
// =============================================================
// =============================================================

// // Function - Random Argument Challenge
// //     Create Function showDetails
// //     Function Accept 3 Parameters [a, b, c]
// //     Data Types For Info Is
// //        - String => Name
// //        - Number => Age
// //        - Boolean => Status
// //     Argument Is Random
// //     Data Is Not Sorted Output Depend On Data Types
// //   - Use Ternary Conditional Operator

// function showDetails(a, b, c){
//     let info = [a, b, c]
//     let name, age, available, sentance

//     for(let i = 0; i < info.length; i++){
//         if(typeof info[i] === "string")
//             name = info[i]
//         else if(typeof info[i] === "number")
//             age = info[i]
//         else if(typeof info[i] === "boolean")
//             available = info[i]
//         else
//             "Uncorrect Data Type"
//     }
//     available
//     ? (sentance = "You are avaliable For Hire")
//     : (sentance = "You are 'not' avaliable For Hire");

//   console.log(`Hello ${name}, Your age Is ${age} , ${sentance}`);
// }

// showDetails("Osama", -3, true);
// // Hello Osama, Your Age Is 38, You Are Available For Hire
// showDetails(38, "Osama", true);
// // Hello Osama, Your Age Is 38, You Are Available For Hire
// showDetails(true, 38, "Osama");
// // Hello Osama, Your Age Is 38, You Are Available For Hire
// showDetails("Osama", 38, false);
// // Hello Osama, Your Age Is 38, You Are 'Not' Available For Hire
// showDetails(38, "Osama", false);
// // Hello Osama, Your Age Is 38, You Are 'Not' Available For Hire
// showDetails(false, 38, "Osama");
// // Hello Osama, Your Age Is 38, You Are 'Not' Available For Hire



// =============================================================
// =============================================================
// ======================== Function 2 =========================
// =============================================================
// =============================================================

//- Anonymous Function

// let calculator = function (num1, num2) {
//     return num1 + num2;
// }
// console.log(calculator(10, 20));

// setTimeout(function () {
//     console.log("Good");
// }, 1000);


// // <button id="show">show</button>

// document.getElementById("show").onclick = function () {
//     console.log("Hello Osama");
// }

// function sayHello() {
//     console.log("Hello Osama");
// }
// document.getElementById("show").onclick = sayHello;

// =============================================================

// // Example 1
// function sayMessage(fName, lName) {
//     let message = `Hello`;

//     function concatMsg() {
//       message = `${message} ${fName} ${lName}`;
//     }
//     concatMsg();

//     return message;
// }
// console.log(sayMessage("Osama", "Mohamed"));


// // Example 2
// function sayMessage(fName, lName) {
//     let message = `Hello`;

//     function concatMsg() {
//       return `${message} ${fName} ${lName}`;
//     }

//     return concatMsg();
// }
// console.log(sayMessage("Osama", "Mohamed"));


// // Example 3
// function sayMessage(fName, lName) {
//     let message = `Hello`;

//     function concatMsg() {

//         function getFullName() {
//             return `${fName} ${lName}`;
//         }

//         return `${message} ${getFullName()}`;
//     }

//     return concatMsg();
// }
// console.log(sayMessage("Osama", "Mohamed"));

// =============================================================

//- Arrow Function
// let print = function () {
//     return 10;
// }
// console.log(print());

// let print = () => 10;
// console.log(print());


// let print = function (num) {
//     return num;
// }
// console.log(print(50))

// let print = num => num;
// console.log(print(50))


// let print = function (num1, num2) {
//     return num1 + num2;
// }
// console.log(print(10, 20))

// let print = (num1, num2) => num1 + num2;
// console.log(print(10, 20))

// =============================================================

//- Global And Local Scope
// var a = 1;
// let b = 2;

// function showText() {
//     var a = 10;
//     let b = 20;
//     console.log(`Function - From Local ${a}`); // 10
//     console.log(`Function - From Local ${b}`); // 20
// }
// showText();

// console.log(`From Global ${a}`); // 1
// console.log(`From Global ${b}`); // 2

// =============================================================

// //- Block Scope [If, Switch, For]
// // var is local variable مهما كان جوة اي اسكوب
// var x = 10;
// if (true) {
//     let x = 50;
//     console.log(`From If Block ${x}`); // 50
// }
// console.log(`From Global ${x}`); // 10

// =============================================================

// // - Lexical Scope
// function parent() {
//     let a = 10;

//     function child() {
//         console.log(a); // 10
//         // console.log(`From Child ${b}`);

//         function grand() {
//             let b = 100;
//             console.log(`From Grand ${a}`); // 10
//             console.log(`From Grand ${b}`); // 100
//         }
//         grand();
//     }
//     child();
// }
// parent();



// =============================================================
// =============================================================
// ========================== Challenge ========================
// =============================================================
// =============================================================

// [1] One Statement In Function
// [2] Convert To Arrow Function
// [3] Print The Output [Arguments May Change]

// let names = function (...names) {
//     return `String [${names.join("], [")}] => Done !`
// }
// console.log(names("Osama", "Mohamed", "Ali", "Ibrahim"))
// // String [Osama], [Mohamed], [Ali], [Ibrahim] => Done !


// let names = (...names) => `String [${names.join("], [")}] => Done !`
// console.log(names("Osama", "Mohamed", "Ali", "Ibrahim"))
// // String [Osama], [Mohamed], [Ali], [Ibrahim] => Done !

// ============================================================

// [1] Replace ??? In Return Statement To Get The Output
// [2] Create The Same Function With Regular Syntax
// [3] Use Array Inside The Arguments To Get The Output

// let myNumbers = [20, 50, 10, 60];
// let calc = (one, two, ...nums) => `${one + two + parseInt(nums.join("+"))}`
// console.log(calc(10, myNumbers[2], myNumbers[3])); // 80

// let myNumbers = [20, 50, 10, 60];
// let calc = function(one, two, ...nums){
//     return `${one + two + parseInt(nums.join("+"))}`
// }
// console.log(calc(10, myNumbers[2], myNumbers[3])); // 80

// ============================================================

// function sayHello(myName, myGender) {
//     let gender

//     myGender === "Male"
//     ? gender = "Mr "
//     : myGender === "Female"
//     ? gender = "Miss "
//     : gender = ""

//     console.log(`Hello ${gender}${myName}`)
// }
// sayHello("Osama", "Male"); // "Hello Mr Osama"
// sayHello("Eman", "Female"); // "Hello Miss Eman"
// sayHello("Sameh"); // "Hello Sameh"

// ============================================================

// function calculate(num1, num2, operation) {
//     if(num2 === undefined || typeof num2 !== "number"){
//         console.log("Second Number Not Found")
//     }
//     if (typeof num1 === "number" && typeof num2 === "number"){
//         if (operation === "+" || operation === undefined)
//             console.log(num1+num2)
//         else if (operation === "-")
//             console.log(num1-num2)
//         else if (operation === "*")
//             console.log(num1*num2)
//     }
// }
// calculate(20); // Second Number Not Found
// calculate(20,'+'); // Second Number Not Found
// calculate(20, 30); // 50
// calculate(20, 30, '+'); // 50
// calculate(20, 30, '-'); // -10
// calculate(20, 30, '*'); // 600

// ============================================================

// function ageInTime(age) {
//     if(age < 10 || age > 100){
//         console.log("Age Out Of Range")
//     }
//     else{
//         let months = age*12
//         let weeks = months*4
//         let days = weeks*7
//         let hours = days*24
//         let minutes = hours*60
//         let Seconds = minutes*60
//         console.log(`Your age is => ${age}`)
//         console.log(`Months => ${months}`)
//         console.log(`Weeks => ${weeks}`)
//         console.log(`Days => ${days}`)
//         console.log(`Hours => ${hours}`)
//         console.log(`Minutes => ${minutes}`)
//         console.log(`Seconds => ${Seconds}`)
//     }
// }
// ageInTime(9); // Age Out Of Range
// ageInTime(110); // Age Out Of Range
// ageInTime(22);
// // Your age is => 22
// // Months => 264
// // Weeks => 1056
// // Days => 7392
// // Hours => 177408
// // Minutes => 10644480
// // Seconds => 638668800

// ============================================================

// function checkStatus(a, b, c) {
//     let info = [a, b, c]
//     let name, age, status, statement

//     for(let i = 0; i < info.length; i++){
//         if(typeof info[i] === 'string')
//             name = info[i]
//         else if(typeof info[i] === 'number')
//             age = info[i]
//         else if(typeof info[i] === 'boolean')
//             status = info[i]
//         else
//             console.log("Wrong Information")
//     }
//     status
//     ? statement = "You Are Available For Hire"
//     : statement = "You Are 'NOT' Available For Hire"

//     console.log(`Hello ${name}, Your age is ${age}, ${statement}`)
// }

// // Needed Output
// checkStatus("Osama", 38, true);
// // "Hello Osama, Your Age Is 38, You Are Available For Hire"
// checkStatus(38, "Osama", true);
// // "Hello Osama, Your Age Is 38, You Are Available For Hire"
// checkStatus(true, 38, "Osama");
// // "Hello Osama, Your Age Is 38, You Are Available For Hire"
// checkStatus(false, "Osama", 38);
// // "Hello Osama, Your Age Is 38, You Are Not Available For Hire"

// ============================================================

// function checkStatus(a, b, c) {
//     let info = [a, b, c]
//     let name = info.find((el) => typeof el === 'string')
//     let age = info.find((el) => typeof el === 'number')
//     let status = info.find((el) => typeof el === 'boolean')

//     status
//     ? statement = 'You Are Available For Hire'
//     : statement = 'You Are "NOT" Available For Hire'

//     console.log(`Hello ${name}, Your age is ${age}, ${statement}`)
// }

// // Needed Output
// checkStatus("Osama", 38, true);
// // "Hello Osama, Your Age Is 38, You Are Available For Hire"
// checkStatus(38, "Osama", true);
// // "Hello Osama, Your Age Is 38, You Are Available For Hire"
// checkStatus(true, 38, "Osama");
// // "Hello Osama, Your Age Is 38, You Are Available For Hire"
// checkStatus(false, "Osama", 38);
// // "Hello Osama, Your Age Is 38, You Are Not Available For Hire"

// ============================================================

// function createSelectBox(startYear, endYear) {
//     document.write(`<select>`)
//         for(let i = startYear; i <= endYear; i++){
//             document.write(`<option>`)
//             document.write(`${i}`)
//             document.write(`</option>`)
//         }
//     document.write(`</select>`)
// }
// createSelectBox(2000, 2021);

// ============================================================

// function multiply(...numbers){
//     let result = 1;
//     for(let i = 0; i < numbers.length; i++){
//         if(typeof numbers[i] === 'number')
//             result = result * parseInt(numbers[i])
//     }
//     console.log(result)
// }

// multiply(10, 20); // 200
// multiply("A", 10, 30); // 300
// multiply(100.5, 10, "B"); // 1000

// ============================================================

// function getDetails(zName, zAge, zCountry) {
//     function namePattern(zName) {
//         return `${zName.split(' ')[0]} ${zName.split(' ')[1][0].toUpperCase()}`
//     }
//     function ageWithMessage(zAge) {
//         return `Your Age Is ${parseInt(zAge)}`
//     }
//     function countryTwoLetters(zCountry) {
//         return `You Live In ${zCountry.slice(0,2).toUpperCase()}`
//     }
//     function fullDetails() {
//         return `Hello ${namePattern(zName)}, ${ageWithMessage(zAge)}, ${countryTwoLetters(zCountry)}.`
//     }
//     return fullDetails(); // Do Not Edit This
// }

// console.log(getDetails("Osama Mohamed", "38 Is My Age", "Egypt"));
// // Hello Osama M, Your Age Is 38, You Live In EG.

// console.log(getDetails("Ahmed ali", "32 Is The Age", "Syria"));
// // Hello Ahmed A, Your Age Is 32, You Live In SY.

// ============================================================

// function itsMe() {
//     return `Iam A Normal Function`
// }
// console.log(itsMe()); // Iam A Normal Function

// let itsMe = () => `Iam An Arrow Function`
// console.log(itsMe()); // Iam An Arrow Function

// function urlCreate(protocol, web, tld) {
//     return `${protocol}://www.${web}.${tld}`;
// }
// console.log(urlCreate("https", "elzero", "org"));
// // https://www.elzero.org

// let urlCreate = (protocol, web, tld) => `${protocol}://www.${web}.${tld}`
// console.log(urlCreate("https", "elzero", "org"));
// // https://www.elzero.org

// ============================================================

// function checker(zName) {
//     return function (status) {
//       return function (salary) {
//         return status === "Available" ? `${zName}, My Salary Is ${salary}` : `Iam Not Avaialble`;
//       };
//     };
// }
// console.log(checker("Osama")("Available")(4000)); // My Salary Is 4000
// console.log(checker("Ahmed")("Not Available")()); // Iam Not Avaialble

// let checker =
//     (zName) =>
//     (status) =>
//     (salary) =>
//     status === "Available" ? `${zName}, My Salary Is ${salary}` : `Iam Not Avaialble`;

// console.log(checker("Osama")("Available")(4000)); // My Salary Is 4000
// console.log(checker("Ahmed")("Not Available")()); // Iam Not Avaialble

// let checker =
//     (zName, status, salary) =>
//     status === "Available" ? `${zName}, My Salary Is ${salary}` : `Iam Not Avaialble`;

// console.log(checker("Osama", "Available", 4000)); // My Salary Is 4000
// console.log(checker("Ahmed", "Not Available", '')); // Iam Not Avaialble

// ============================================================

// isNaN(parseInt("9Test")) >> false
// isNaN(parseInt("Test")) >> true


// =============================================================
// =============================================================
// ================ Higher Order Functions (Map) ===============
// =============================================================
// =============================================================

// Higher Order Functions
// ---> is a function that accepts functions as parameters and/or returns a function.

//- Map
// --- method creates a new array
// --- populated with the results of calling a provided function on every element
// --- in the calling array.

// Syntax map(callBackFunction(Element, Index, Array) { }, thisArg)
// - Element => The current element being processed in the array.
// - Index => The index of the current element being processed in the array.
// - Array => The Current Array

// Notes
// - Map Return A New Array

// Examples
// - Anonymous Function
// - Named Function

// =============================================================

// Inline callback function
// map(function(element) { ... })
// map(function(element, index) { ... })
// map(function(element, index, array){ ... })
// map(function(element, index, array) { ... }, thisArg)

// Callback function
// map(callbackFn)
// map(callbackFn, thisArg)

// Arrow function
// map((element) => { ... })
// map((element, index) => { ... })
// map((element, index, array) => { ... })

// =============================================================

// let myNums = [1, 2, 3, 4, 5, 6];
// let newArray = [];
// for (let i = 0; i < myNums.length; i++) {
//   newArray.push(myNums[i] * 2);
// }
// console.log(newArray); // [2, 4, 6, 8, 10, 12]


// // Same Idea With Map
// let myNums = [1, 2, 3, 4, 5, 6];
// let addSelf = myNums.map(function (element, index, arr) {
// //   console.log(`Current Element => ${element}`); // 1 2 3 4 5 6
// //   console.log(`Current Index => ${index}`); // 0 1 2 3 4 5
// //   console.log(`Array => ${arr}`); // 1,2,3,4,5,6
// //   console.log(`This => ${this}`); // 10
//   return element + element;
// }, 10);
// console.log(addSelf); // [2, 4, 6, 8, 10, 12]


// let myNums = [1, 2, 3, 4, 5, 6];
// let addSelf = myNums.map((el) => el + el);
// console.log(addSelf); // [2, 4, 6, 8, 10, 12]


// let myNums = [1, 2, 3, 4, 5, 6];
// function addition(ele) {
//     return ele + ele;
// }
// let add = myNums.map(addition);
// console.log(add);

// =============================================================

// let swappingCases = "elZERo";
// let sw = swappingCases.split("").map(function (ele) {
//     return ele === ele.toUpperCase() ? ele.toLowerCase() : ele.toUpperCase();
// }).join("");
// console.log(sw); // ELzerO


// let swappingCases = "elZERo";
// let sw = swappingCases.split("").map((a) => (a === a.toUpperCase() ? a.toLowerCase() : a.toUpperCase())).join("");
// console.log(sw); // ELzerO

// =============================================================

// let invertedNumbers = [1, -10, -20, 15, 100, -30];
// let inv = invertedNumbers.map(function (ele) {
//   return -ele;
// });
// console.log(inv); // [-1, 10, 20, -15, -100, 30]

// =============================================================

// let ignoreNumbers = "Elz123er4o";
// let ign = ignoreNumbers.split("").map(function (ele) {
//     return isNaN(parseInt(ele)) ? ele : ""
// }).join("")
// console.log(ign); // Elzero


// =============================================================
// =============================================================
// =============== Higher Order Functions (Filter) =============
// =============================================================
// =============================================================

// - Filter
// --- method creates a new array
// --- with all elements that pass the test implemented by the provided function.

// Syntax filter(callBackFunction(Element, Index, Array) { }, thisArg)
// - Element => The current element being processed in the array.
// - Index => The index of the current element being processed in the array.
// - Array => The Current Array

// =============================================================

// let friends = ["Ahmed", "Sameh", "Sayed", "Asmaa", "Amgad", "Israa"];
// let filterdFriends = friends.filter(function (el) {
//   return el.startsWith("A")
// });
// console.log(filterdFriends); // ["Ahmed", "Asmaa", "Amgad"]

// =============================================================

// let numbers = [11, 20, 2, 5, 17, 10];
// let evenNumbers = numbers.filter(function (el) {
//   return el % 2 === 0;
// });
// console.log(evenNumbers); // [20, 2, 10]

// =============================================================

// // Test Map vs Filter

// let numbers = [11, 20, 2, 5, 17, 10];

// let addMap = numbers.map(function (el) {
//   return el + el;
// });
// console.log(addMap); // [22, 40, 4, 10, 34, 20]

// let addFilter = numbers.filter(function (el) {
//   return el + el; // true
// });
// console.log(addFilter); // [11, 20, 2, 5, 17, 10]

// =============================================================

// // Filter Words More Than 4 Characters
// let sentence = "I Love Foood Code Too Playing Much";

// let smallWords = sentence.split(" ").filter(function (ele) {
//     return ele.length <= 4;
// }).join(" ");

// console.log(smallWords); // I Love Code Too Much

// =============================================================

// Ignore Numbers

// // Map
// let ignoreNumbers = "Elz123er4o";

// let ign = ignoreNumbers.split("").map(function (ele) {
//     return isNaN(parseInt(ele)) ? ele : ""
// }).join("");

// console.log(ign); // Elzero


// // Filter
// let ignoreNumbers = "Elz123er4o";

// let ign = ignoreNumbers.split("").filter(function (ele) {
//     return isNaN(parseInt(ele))
// }).join("");

// console.log(ign); // Elzero

// =============================================================

// let mix = "A13BS2ZX";

// let mixedContent = mix.split("")
//     .filter(el => !isNaN(parseInt(el)))
//     .map(el => el * el)

// console.log(mixedContent); // [1, 9, 4]



// =============================================================
// =============================================================
// =============== Higher Order Functions (Reduce) =============
// =============================================================
// =============================================================

// - Reduce
// --- method executes a reducer function on each element of the array,
// --- resulting in a single output value.

// Syntax
// reduce(callBackFunc(Accumulator, Current Val, Current Index, Source Array) { }, initialValue)
// - Accumulator => the accumulated value previously returned in the last invocation
// - Current Val => The current element being processed in the array
// - Index => The index of the current element being processed in the array.
// ---------- Starts from index 0 if an initialValue is provided.
// ---------- Otherwise, it starts from index 1.
// - Array => The Current Array

// =============================================================

// let nums = [10, 20, 15, 30];

// let add = nums.reduce(function (acc, current, index, arr) {
//   console.log(`Acc => ${acc}`); // 10 30 45
//   console.log(`Current Element => ${current}`); // 20 15 30
//   console.log(`Current Element Index => ${index}`); // 1 2 3
//   console.log(`Array => ${arr}`); // 10,20,15,30
//   console.log(acc + current); // 30 45 75
//   return acc + current; // 57
// });

// console.log(add);

// =============================================================

// let nums = [10, 20, 15, 30];

// let add = nums.reduce(function (acc, current, index, arr) {
//   console.log(`Acc => ${acc}`); // 0 10 30 45
//   console.log(`Current Element => ${current}`); // 10 20 15 30
//   console.log(`Current Element Index => ${index}`); // 0 1 2 3
//   console.log(`Array => ${arr}`); // 10,20,15,30
//   console.log(acc + current); // 10 30 45 75
//   return acc + current; // 75
// }, 0);

// console.log(add);

// =============================================================

// // Longest Word
// let theBiggest = ["Bla", "Bl", "Propaganda", "Other", "AAA", "Battery", "Test"];

// let check = theBiggest.reduce(function (acc, current) {
//   return acc.length > current.length ? acc : current;
// });

// console.log(check); // Propaganda

// =============================================================

// //  Remove Characters + Use Reduce
// let removeChars = ["E", "@", "@", "L", "Z", "@", "@", "E", "R", "@", "O"];

// let finalString = removeChars
//     .filter(el => el !== "@")
//     .reduce((acc, curr) => `${acc}${curr}`)

// console.log(finalString); // ELZERO

// =============================================================

// // Filter Strings + Multiply
// let mix = "A13BS2ZX";

// let mixedContent = mix.split("")
//     .filter(el => !isNaN(parseInt(el)))
//     .reduce((acc, curr) => acc * curr)

// console.log(mixedContent); // 6



// =============================================================
// =============================================================
// ============== Higher Order Functions (forEach) =============
// =============================================================
// =============================================================

// - forEach
// --- method executes a provided function once for each array element.

// Syntax forEach(callBackFunction(Element, Index, Array) { }, thisArg)
// - Element => The current element being processed in the array.
// - Index => The index of the current element being processed in the array.
// - Array - The Current Array

// Note
// - Doesn't Return Anything [Undefined]
// - Break Will Not Break The Loop

// =============================================================

// // ARRAY >>>  forEach(callBackFunction(Element, Index, Array) { }, thisArg)
// let arr = ["a", "b", , "d"]

// for(let i = 0; i < arr.length; i++){
//     console.log(`${i} -> ${arr[i]}`)
// }
//     // 0 -> a
//     // 1 -> b
//     // 2 -> undefined
//     // 3 -> d

// arr.forEach(function(el, index){
//     console.log(`${index} -> ${el}`)
// })
//     // 0 -> a
//     // 1 -> b
//     // 3 -> d

// =============================================================

// // SET >>> forEach(callBackFunction(Element) { }, thisArg)
// let mySet = new Set(["a", "b", "b", "c", "d"])

// mySet.forEach(function(el){
//     console.log(`${el}`)
// })
//     // a    b    c    d

// =============================================================

// // MAP >>> forEach(callBackFunction(val, key) { }, thisArg)
// let myMap = new Map([ ["A", 1], ["B", 2], ["C", 3], ["D", 4] ])

// myMap.forEach(function(el, index){
//     console.log(`${index} -> ${el}`)
// })
//     // A -> 1     B -> 2     C -> 3     D -> 4

// =============================================================

// <ul>
//     <li class="active">One</li>
//     <li>Two</li>
//     <li>Three</li>
// </ul>
//     <div class="content">
//     <div>Div One</div>
//     <div>Div Two</div>
//     <div>Div Three</div>
// </div>


// let allLis = document.querySelectorAll("ul li");
// let allDivs = document.querySelectorAll(".content div");

// allLis.forEach(function (ele) {
//     ele.onclick = function () {

//         allLis.forEach(function (ele) {
//             ele.classList.remove("active");
//         });

//         this.classList.add("active");

//         allDivs.forEach(function (ele) {
//             ele.style.display = "none";
//         });
//     };
// });



// =============================================================
// =============================================================
// ============================ Find ===========================
// =============================================================
// =============================================================

// // find(callbackFunction(element) { ... })
// // find(callbackFunction(element, index) { ... })
// // find(callbackFunction(element, index, array){ ... })
// // find(callbackFunction(element, index, array) { ... }, thisArg)

// let arr = [5, 12, 8, 130, 44];

// let found = arr.find(function(el){
//     return el > 10
// })

// // let found = arr.find((el) => el > 10)

// console.log(found);

// =============================================================

// const inventory = [
//     {name: 'apples', quantity: 2},
//     {name: 'bananas', quantity: 0},
//     {name: 'cherries', quantity: 5}
// ];

// let result = inventory.find((el) => el.name === 'cherries')

// console.log(result); // { name: 'cherries', quantity: 5 }
// console.log(result.name); // cherries



// =============================================================
// =============================================================
// ============================ Flat ===========================
// =============================================================
// =============================================================

// // array.flat()
// let arr1 = [0, 1, 2, [3, 4]];
// console.log(arr1.flat()); // [0, 1, 2, 3, 4]
// console.log(arr1.flat(1)); // [0, 1, 2, 3, 4]

// let arr2 = [0, 1, 2, [[[3, 4]]]];
// console.log(arr2.flat()); // [0, 1, 2, [[3, 4]]]
// console.log(arr2.flat(1)); // [0, 1, 2, [[3, 4]]]
// console.log(arr2.flat(2)); // [0, 1, 2, [3, 4]]
// console.log(arr2.flat(3)); // [0, 1, 2, 3, 4]

// let arr3 = [1, 2, [3, 4, [5, 6, [7, 8, [9, 10]]]]];
// console.log(arr3.flat()) // [1, 2, 3, 4, [5, 6, [7, 8, [9, 10]]]]
// console.log(arr3.flat(1)) // [1, 2, 3, 4, [5, 6, [7, 8, [9, 10]]]]
// console.log(arr3.flat(2)) // [1, 2, 3, 4, 5, 6, [7, 8, [9, 10]]]
// console.log(arr3.flat(3)) // [1, 2, 3, 4, 5, 6, 7, 8, [9, 10]]
// console.log(arr3.flat(4)) // [[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// console.log(arr3.flat(Infinity)) // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const arr4 = [1, 2, , 4, 5];
// console.log(arr4.flat()) // [1, 2, 4, 5]



// =============================================================
// =============================================================
// ========================= Challenges ========================
// =============================================================
// =============================================================

// let myString = "1,2,3,EE,l,z,e,r,o,_,W,e,b,_,S,c,h,o,o,l,2,0,Z";

// let solution = myString.split(",").filter(function(el){
//     return isNaN(parseInt(el))
//     // ["EE", "l", "z", "e", "r", "o", "_", "W", "e", "b", "_", "S", "c", "h", "o", "o", "l", "Z"]
// }).map(function(el){
//     return el.slice(0,1)
//     // ["E", "l", "z", "e", "r", "o", "_", "W", "e", "b", "_", "S", "c", "h", "o", "o", "l", "Z"]
// }).slice(0,-1)
//     // ["E", "l", "z", "e", "r", "o", "_", "W", "e", "b", "_", "S", "c", "h", "o", "o", "l"]
// .join("").split("_")
//     // Elzero_Web_School
//     // ["Elzero", "Web", "School"]
// .reduce(function(acc, curr){
//     return `${acc} ${curr}`
// })

// console.log(solution); // Elzero Web School

// ==========

// // arrow function
// let myString = "1,2,3,EE,l,z,e,r,o,_,W,e,b,_,S,c,h,o,o,l,2,0,Z";

// let solution = myString.split(",")
//     .filter((el) => isNaN(parseInt(el)))
//     .map((el) => el.slice(0,1)).slice(0,-1).join("").split("_")
//     .reduce((acc, curr) => `${acc} ${curr}`)

// console.log(solution); // Elzero Web School

// ==========

// let myString = "1,2,3,EE,l,z,e,r,o,_,W,e,b,_,S,c,h,o,o,l,2,0,Z";
// let solution = myString
//    .split(",")
//    .join("")
//    .slice(4,21)
//    .split("_")
//    .join(" ")

// console.log(solution); // Elzero Web School

// ==========

// let myString = "1,2,3,EE,l,z,e,r,o,_,W,e,b,_,S,c,h,o,o,l,2,0,Z";
// let solution = myString
//     .split(",")
//     .filter((el) => isNaN(parseInt(el)))
//     .join("")
//     .slice(1,18)
//     .split("_")
//     .join(" ")

// console.log(solution); // Elzero Web School

// =============================================================

// let mix = [1, 2, 3, "E", 4, "l", "z", "e", "r", 5, "o"];

// let result = mix.filter(el => isNaN(parseInt(el))).join("")

// console.log(result) // Elzero

// ==========

// let mix = [1, 2, 3, "E", 4, "l", "z", "e", "r", 5, "o"];

// let result = mix
//     .map(el => isNaN(parseInt(el)) ? el : "")
//     .reduce((acc, curr) => acc + curr)

// console.log(result) // Elzero

// ==========

// let mix = [1, 2, 3, "E", 4, "l", "z", "e", "r", 5, "o"];

// let result = mix
//     .filter(el => isNaN(parseInt(el)))
//     .reduce((acc, curr) => acc + curr)

// console.log(result) // Elzero

// =============================================================

// let myArray = ["E", "l", "z", ["e", "r"], "o"];

// // let result = myArray.flat().reduce((acc, curr) => acc + curr)
// let result = myArray.flat().join("")

// console.log(result) // Elzero

// =============================================================

// let numsAndStrings = [1, 10, -10, -20, 5, "A", 3, "B", "C"];

// let result = numsAndStrings
//     .filter(el => typeof el === 'number')
//     .map(el => -el)

// console.log(result) // [-1, -10, 10, 20, -5, -3]



// =============================================================
// =============================================================
// =========================== Object ==========================
// =============================================================
// =============================================================

// let user = {
//     // Properties
//     theName: "Osama",
//     theAge: 38,
//     // Methods
//     sayHello: function () {
//       return `Hello`;
//     },
//   };

//   console.log(user)
//   console.log(user.theName)
//   console.log(user["theAge"])
//   console.log(user.sayHello)
//   console.log(user.sayHello())

// =============================================================

// // - Dot Notation vs Bracket Notation
// let myVar = "country"

// let user = {
//   theName: "Osama",
//   country: "Egypt",
//   "the age": 38
// };

// console.log(user)
// console.log(user.theName)
// console.log(user["country"])

// console.log(user["the age"])

// console.log(user.myVar)  // undefined
// console.log(user[myVar]) // Egypt

// =============================================================

// let available = true;
// let user = {
//    name: "Osama",
//    age: 38,
//    skills: ["HTML", "CSS", "JS"],
//    available: false,
//    addresses: {
//       ksa: "Riyadh",
//       egypt: {
//          one: "Cairo",
//          two: "Giza",
//       },
//    },
//    checkAv: function () {
//       if (user.available === true) {
//          return `Free For Work`;
//       } else {
//          return `Not Free`;
//       }
//    },
// };

// console.log(user.skills); // ["HTML", "CSS", "JS"]
// console.log(user.skills.join(" | ")); // HTML | CSS | JS
// console.log(user.skills[2]); // JS

// console.log(user.addresses.ksa);
// console.log(user.addresses.egypt.one);
// console.log(user["addresses"].egypt.one);
// console.log(user["addresses"]["egypt"]);
// console.log(user["addresses"]["egypt"]["one"]);

// console.log(user.checkAv()); // Not Free

// =============================================================

// // Create With New Keyword new Object();

// // let user = new Object({});

// let user = new Object({
//    age: 20,
// });

// user.age = 38;

// user["country"] = "Egypt";

// user.sayHello = function () {
//   return `Hello`;
// };

// console.log(user); // {age: 38, country: "Egypt", sayHello: ƒ}
// console.log(user.age);
// console.log(user.country);
// console.log(user.sayHello());

// =============================================================

// console.log(this); // Window {window: Window, location: Location,...}
// console.log(window); // Window {window: Window, location: Location,...}
// console.log(this === window); // true
// console.log(this === "window"); // false

// myVar = 100;
// console.log(window.myVar); // 100
// console.log(this.myVar); // 100

// var myVar = 100;
// console.log(window.myVar); // 100
// console.log(this.myVar); // 100

// let myVar = 100;
// console.log(window.myVar); // undefined
// console.log(this.myVar); // undefined

// function sayHello() {
//   console.log(this); // window
//   return this; // window
// }
// sayHello();
// console.log(sayHello() === window); // true

// // <button id="cl">Click</button>
// document.getElementById("cl").onclick = function () {
//   console.log(this); // <button id="cl">Click</button>
// };

// let user = {
//   age: 22,
//   ageInDays: function () {
//     console.log(this); // {age: 22, ageInDays: ƒ}
//     return this.age * 2; // 44
//   },
// };
// console.log(user.age); // 22
// console.log(user.ageInDays()); // {age: 22, ageInDays: ƒ}  // 44

// =============================================================

// // Create Object With assign Method
// let user = {
//    age: 20,
//    doubleAge: function () {
//       return this.age * 2;
//    },
// };
// console.log(user); // {age: 20, doubleAge: ƒ}
// console.log(user.age); // 20
// console.log(user.doubleAge()); // 40

// let obj = Object.create({});
// obj.a = 100;
// console.log(obj); // {a: 100}

// // copy object
// // if values changes in user will change in copyobj
// // you can update your values
// let copyObj = Object.create(user);

// console.log(copyObj); // {}
// console.log(copyObj.age); // 20
// console.log(copyObj.doubleAge()); // 40

// copyObj.age = 50;
// console.log(copyObj); // {age: 50}
// console.log(copyObj.age); // 50
// console.log(copyObj.doubleAge()); // 100

// =============================================================

// // Create Object With assign Method
// let obj1 = {
//    prop1: 1,
//    meth1: function () {
//       return this.prop1;
//    },
// };
// let obj2 = {
//    prop2: 2,
//    meth2: function () {
//       return this.prop2;
//    },
// };
// let targetObject = {
//    prop1: 100,
// };

// let finalObject = Object.assign(targetObject, obj1, obj2);
// console.log(finalObject); // {prop1: 1, prop2: 2, meth1: ƒ, meth2: ƒ}

// finalObject.prop1 = 200;
// finalObject.prop4 = 4;
// console.log(finalObject); // {prop1: 200, prop2: 2, prop4: 4, meth1: ƒ, meth2: ƒ}

// let newObject = Object.assign({}, obj1, { prop5: 5, prop6: 6 });
// console.log(newObject); // {prop1: 1, prop5: 5, prop6: 6, meth1: ƒ}

// =============================================================

// // Create Object
// let user1 = {}

// let user1 = {}
// user1.age = 100

// let user1 = {name:"red",}

// ======================

// // Create Object
// let user2 = new Object({})

// let user2 = new Object({})
// user2.age = 100

// let user2 = new Object({age: 22, obj1})

// ======================

// // Create Object & Copy Object
// let user3 = Object.create({})

// let user3 = Object.create({})
// user3.age = 100

// let user3 = Object.create({age: 22})

// // copy
// let user3 = Object.create(obj1) // copy

// ======================

// // Create Object & Copy Objects
// let user4 = Object.assign({});

// let user4 = Object.assign({});
// user4.age = 100

// let user4 = Object.assign(obj1, obj2, obj3);

// let user4 = Object.assign({}, obj1, {age: 22});

// =============================================================

// // hasOwnProperty

// let user = {
//     userName: "Ziad",
//     age: 22
// };

// console.log(user.hasOwnProperty('userName')); // true
// console.log('userName' in user); // true

// let fruits = ['Apple', 'Banana', 'Orange'];
// console.log(fruits.hasOwnProperty(2))   // true ('Orange')
// console.log(fruits.hasOwnProperty(3))   // false - not defined

// =============================================================

// // in

// let user = {
//     userName: "Ziad",
//     age: 22
// }

// console.log(user.hasOwnProperty('age')) // true
// console.log('age' in user) // true
// =============================================================

// // Object.keys()

// let user = {
//   userName: "Ziad",
//   age: 22
// };

// console.log(Object.keys(user)) // ['userName', 'age']
// for (let val of Object.keys(user)) {
//   console.log(val) // userName     age
// }
// let arr = ['a', 'b', 'c'];
// console.log(Object.keys(arr)); // ['0', '1', '2']

// =============================================================

// // Object.values()

// let user = {
//     userName: "Ziad",
//     age: 22
// };

// console.log(Object.values(user)) // ['Ziad', 22]
// for (let val of Object.values(user)) {
//     console.log(val) // Ziad     22
// }

// let arr = ['a', 'b', 'c'];
// console.log(Object.values(arr)); // ['a', 'b', 'c']

// =============================================================

// // length

// let user = {
//     userName: "Ziad",
//     age: 22
// };

// console.log(Object.keys(user).length) // 2
// console.log(Object.values(user).length) // 2

// =============================================================

// // Object.entries()
// //  return array of a given object's [key, value]

// let user = {
//     userName: "Ziad",
//     age: 22
// };

// console.log(Object.entries(user)) // [ ["userName","Ziad"], ["age",22] ]

// for (let [key, value] of Object.entries(user)) {
//     console.log(`${key}: ${value}`);
// }
// // userName: Ziad     age: 22



// =============================================================
// =============================================================
// ======================== Challenge ==========================
// =============================================================
// =============================================================

// let member = {
//    name: "Elzero",
//    age: 38,
//    country: "Egypt",
//    fullDetails: function(){
//       return `Name: ${this.name} \nAge: ${this.age} \nCountry: ${this.country} `
//    }
// }

// console.log(member.name); // Elzero
// console.log(member.age); // 38
// console.log(member.country); // Egypt
// console.log(member.fullDetails()); // Name: Elzero   Age: 38   Country: Egypt

// =============================================================

// // Method One
// let obj = {
//    name: "Ziad"
// }
// console.log(obj.name);

// // Method Two
// let obj = new Object({name: "Ziad"})
// console.log(obj.name);

// // Method Three
// let obj = Object.create({name: "Ziad"})
// console.log(obj.name);

// // Method Four
// let obj = Object.assign({name: "Ziad"})
// console.log(obj.name);

// =============================================================

// let a = 1;

// let threeNums = {
//   b: 2,
//   c: 3,
//   d: 4,
// };

// let twoNums = {
//   e: 5,
//   f: 6,
// };

// let finalObject1 = Object.assign({a, threeNums, twoNums})
// console.log(finalObject1); // {a: 1, {b: 2, c: 3, d: 4}, {e: 5, f: 6}}

// let finalObject2 = Object.assign({a, ...threeNums, ...twoNums})
// console.log(finalObject2); // {a: 1, b: 2, c: 3, d: 4, e: 5, f: 6}

// =============================================================

// let myFavGames = {
//    "Trinity Universe": {
//       publisher: "NIS America",
//       price: 40,
//    },
//    "Titan Quest": {
//       publisher: "THQ",
//       bestThree: {
//          one: "Immortal Throne",
//          two: "Ragnarök",
//          three: "Atlantis",
//       },
//       price: 50,
//    },
//    YS: {
//       publisher: "Falcom",
//       bestThree: {
//          one: "Oath in Felghana",
//          two: "Ark Of Napishtim",
//          three: "origin",
//       },
//       price: 40,
//    },
// };

// for(let val of Object.keys(myFavGames)){
//   console.log(`The Game Name Is ${val}`)
//   console.log(`The Publisher Is ${myFavGames[val]["publisher"]}`)
//   console.log(`The Price Is ${myFavGames[val]["price"]}`)
//   // console.log(myFavGames[val].hasOwnProperty('bestThree'))
//   // console.log('bestThree' in myFavGames[val])
//   if('bestThree' in myFavGames[val]){
//     console.log("- Game Has Releases")
//     console.log(`First => ${myFavGames[val]["bestThree"]["one"]}`)
//     console.log(`Second => ${myFavGames[val]["bestThree"]["two"]}`)
//     console.log(`Third => ${myFavGames[val]["bestThree"]["three"]}`)
//   }
//   console.log("#".repeat(20))
// }

// // "The Game Name Is Trinity Universe"
// // "The Publisher Is NIS America"
// // "The Price Is 40"
// // "####################"
// // "The Game Name Is Titan Quest"
// // "The Publisher Is THQ"
// // "The Price Is 50"
// // "- Game Has Releases"
// // "First => Immortal Throne"
// // "Second => Ragnarök"
// // "Third => Atlantis"
// // "####################"
// // "The Game Name Is YS"
// // "The Publisher Is Falcom"
// // "The Price Is 40"
// // "- Game Has Releases"
// // "First => Oath in Felghana"
// // "Second => Ark Of Napishtim"
// // "Third => origin"
// // "####################"



// =============================================================
// =============================================================
// =================== Distructuring (Array) ===================
// =============================================================
// =============================================================

// const food = ["Burger", "Pizza", "Chicken"]

// const [one = "Bu", two, three, four = 'Meat'] = food

// console.log(`Foods: ${one}, ${two}, ${three}`)
// // Foods: Burger, Pizza, Chicken

// console.log(`Foods: ${one}, ${two}, ${three}, ${four}`)
// // Foods: Burger, Pizza, Chicken, Meat

// =============================================================

// let food = ["Burger", "Pizza", "Chicken", "Meat"]

// let [one, , three] = food

// console.log(`Foods: ${one}, ${three}`)
// // Foods: Burger, Chicken

// =============================================================

// let one = 1
// let two = 2
// let three = 3

// let food = ["Burger", "Pizza", "Chicken", "Meat"];

// [one, , three] = food

// console.log(`Foods: ${one}, ${three}`)
// // Foods: Burger, Chicken

// =============================================================

// const food = ["Burger", "Pizza", "Chicken", ["Appel", "Banana"]]

// const [one, two, three, [fr1, fr2, fr3 = 'orange']] = food

// console.log(`Foods: ${one}, ${three}.. Fruits: ${fr1}, ${fr2}`)
// // Foods: Burger, Chicken.. Fruits: Appel, Banana

// console.log(`Foods: ${one}, ${three}.. Fruits: ${fr1}, ${fr2}, ${fr3}`)
// // Foods: Burger, Chicken.. Fruits: Appel, Banana, orange

// =============================================================

// const food = ["Burger", "Pizza", ["Appel", ["Banana Eg", "Banana KSA"]]]

// const [ , , [fr1, [banana1, banana2]]] = food

// console.log(`Fruits: ${fr1}, ${banana1}, ${banana2}`)
// // Fruits: Appel, Banana Eg, Banana KSA

// =============================================================

// const food = ["Burger", "Pizza", "Rice", "Meat", "Appel", "Banana"]

// const [one, , , ...other] = food

// console.log(`Foods: ${one}, ${other}`)
// // Foods: Burger, Meat,Appel,Banana

// =============================================================
// =============================================================

// // Swap
// let vedio = "book";
// let book = "vedio";

// // // old way
// // let temp = book;
// // book = vedio;
// // vedio = temp;

// // new way
// [vedio, book] = [book, vedio]

// console.log(`Vedio >> ${vedio} ||<><><>|| Book >> ${book}`)
// // Vedio >> book ||<><><>|| Book >> vedio



// =============================================================
// =============================================================
// =================== Distructuring (Object) ==================
// =============================================================
// =============================================================

// //// old way ////
// const user = {
//     name: "Ziad",
//     gender: "Male",
//     age: 22,
//     city: "Sohag"
// }

// let n = user.name,
//     a = user.age,
//     g = user.gender;

// console.log(`Name: ${n}, Age: ${a}, Gender: ${g}`)
// // Name: Ziad, Age: 22, Gender: Male

// //// new way ////
// let user = {
//     name: "Ziad",
//     gender: "Male",
//     age: 22,
//     city: "Sohag"
// }

// let {name, age, city} = user

// console.log(`Name: ${name}, Age: ${age}, City: ${city}`)
// // Name: Ziad, Age: 22, Gender: Male

// //// new way ////
// let name = "ali"
// let age = 16
// let city = "Assiut"

// let user = {
//     name: "Ziad",
//     gender: "Male",
//     age: 22,
//     city: "Sohag"
// };

// ({name, age, city} = user)

// console.log(`Name: ${name}, Age: ${age}, City: ${city}`)
// // Name: Ziad, Age: 22, Gender: Male

// =============================================================

// const user = {
//     name: "Ziad",
//     gender: "Male",
//     age: 22,
//     city: "Sohag"
// }

// const {
//   name: theName,
//   age,
//   gender: gen = 'Male',
//   color: cl = 'red'
// } = user

// console.log(`Name: ${theName}, Age: ${age}, Gender: ${gen}, Color: ${cl}`)
// // Name: Ziad, Age: 22, Gender: Male, Color: red

// =============================================================

// const user = {
//     name: "Ziad",
//     age: 22,
//     langs: {
//         html: '90',
//         css: '80',
//         js: '70'
//     }
// }

// // const {name, age, langs} = user
// // console.log(`Name: ${name}, Age: ${age}, Langs: ${langs}`)
// // // Name: Ziad, Age: 22, Langs: [object Object]
// // console.log(`Name: ${name}, Age: ${age}, HTML: ${langs.html}`)
// // // Name: Ziad, Age: 22, HTML: 90

// // const {
// //   name,
// //   age,
// //   langs: {html, css, python = '50'}
// // } = user
// // console.log(`Name: ${name}, Age: ${age}, HTML: ${html}, Python: ${python}`)
// // // Name: Ziad, Age: 22, HTML: 90, Python: 50

// // const {html:h = "80", css} = user.langs
// // console.log(`HTML: ${h}, Css: ${css}`)
// // // HTML: 90, Css: 80

// =============================================================

// const user = {
//     username: "Ziad",
//     city: "Sohag",
//     skills: {
//         html: "80",
//         css: "70",
//         js: ["ReactJs", "AngularJs", "VueJs"]
//     }
// };

// // old way
// function info(user){
//     console.log(`Name: ${user.username}, City: ${user.city}`)
//     // Name: Ziad, City: Sohag
//     console.log(`Skills: HTML ${user.skills.html}, CSS ${user.skills.css}`)
//     // Skills: HTML 80, CSS 70
//     console.log(`JS: ${user.skills.js[0]}, ${user.skills.js[1]}, ${user.skills.js[2]}`)
//     // JS: ReactJs, AngularJs, VueJs
// }
// info(user)

// // new way
// function info({username:n ="zoz", skills: {html, js: [three]}}){
//     console.log(`Name: ${n}`)
//     // Name: Ziad
//     /console.log(`Skills: HTML ${html}`)
//     // Skills: HTML 80
//     /console.log(`JS: ${three}`)
//     // JS: VueJs
// }
// info(user)

// =============================================================

// const user = {
//     username: "Ziad",
//     city: "Sohag",
//     skills: {
//         html: "80",
//         css: "70",
//         js: ["ReactJs", "AngularJs", "VueJs"]
//     }
// };

// const {
//   username:n,
//   skills: {
//     html:h ="90",
//     js: [ , , three = "vu"]
//   }
// } = user

// console.log(`Name: ${n}`) // Name: Ziad
// console.log(`HTML ${h}`) // HTML 80
// console.log(`JS: ${three}`) // JS: VueJs

// =============================================================

// // old way
// const username = "Ziad", age = 22;

// const user = {
//     username: username,
//     age: age,
//     fun: function(p){
//         return `Hello ${p}`;
//     }
// }

// console.log(user) // {username: "Ziad", age: 22, fun: ƒ}
// console.log(user.username) // Ziad
// console.log(user.age) // 22
// console.log(user.fun("Ziad")) // Hello Ziad


// // new way
// const username = "Ziad", age = 22;

// const user = {
//     username,
//     age,
//     fun(p){
//         return `Hello ${p}`;
//     }
// }

// console.log(user) // {username: "Ziad", age: 22, fun: ƒ}
// console.log(user.username) // Ziad
// console.log(user.age) // 22
// console.log(user.fun("Ziad")) // Hello Ziad



// =============================================================
// =============================================================
// ========================= Challenge =========================
// =============================================================
// =============================================================

// let chosen = 1; // 1 , 2 , 3 , 0 , 5

// let myFriends = [
//   { title: "Osama", age: 39, available: true, skills: ["HTML", "CSS"] },
//   { title: "Ahmed", age: 25, available: false, skills: ["Python", "Django"] },
//   { title: "Sayed", age: 33, available: true, skills: ["PHP", "Laravel"] },
// ];

// function fun(ch){
//   let { title:t, age:ag, available:av, skills: [ , two] } = myFriends[ch]
//   av ? av = "Available" : av = "Not Available"
//   console.log(`${t} - ${ag} - ${av} - ${two}`)
// }

// if(chosen === 1) {fun(0)}
// else if(chosen ===2) {fun(1)}
// else if(chosen ===3) {fun(2)}
// else{console.log("Error")}

// // // 1
// // Osama    39    available    css
// // // 2
// // Ahmed    25    Not available    Django
// // // 3
// // Sayed    33    available    Laravel



// =============================================================
// =============================================================
// ============================ Set ============================
// =============================================================
// =============================================================

// // Set
// //     => Syntax => new Set(Iterable)
// //     => Object To Store Unique Values
// //     => Cannot Access Elements By Index

// // Properties
// //     => size

// // Methods
// //     => add()
// //     => delete()
// //     => clear()
// //     => has()


// let mySet = new Set([1,2,3,2,1]);
// console.log(typeof mySet); // object
// console.log(mySet); // {1, 2, 3}

// =============================================================

// myArr = [1,2,3,2,1];
// console.log(myArr) // [1, 2, 3, 2, 1]
// console.log(...myArr) // 1 2 3 2 1
// console.log([...myArr]) // [1, 2, 3, 2, 1]

// let mySet = new Set(myArr);
// console.log(mySet); // {1, 2, 3}
// console.log(...mySet); // 1, 2, 3
// console.log([...mySet]); // [1, 2, 3] >>> array

// =============================================================

// // شيل العناصر المكررة في الأراي
// myArr = [1,2,3,2,1];
// let mySet = new Set(myArr);
// console.log([...mySet]); // [1, 2, 3] >>> array

// =============================================================

// let mySet = new Set();
// mySet.add(1).add(2).add(3).add(2).add(1);

// // let mySet = new Set().add(1).add(2).add(3).add(2).add(1);

// console.log(mySet); // {1, 2, 3}

// mySet.add(4)
// console.log(mySet); // {1, 2, 3, 4}

// mySet.add(5)
// mySet.delete(5)
// console.log(mySet); // {1, 2, 3, 4}

// console.log(mySet.has(1)) // true

// mySet.clear()
// console.log(mySet) // {}

// =============================================================

// // let mySet = new Set().add("one").add("two");
// let mySet = new Set(["one", "two"]);
// console.log(mySet); // {'one', 'two'}

// mySet.add("three")
// console.log(mySet); // {'one', 'two', 'three'}

// mySet.add("four")
// mySet.delete("four")
// console.log(mySet); // {'one', 'two', 'three'}

// console.log(mySet.has("two")) // true
// console.log(mySet.has("Two")) // false
// console.log(mySet.has("Two".toLowerCase())) // true

// mySet.clear()
// console.log(mySet) // {}



// =============================================================
// =============================================================
// ====================== [Set | WeakSet] ======================
// =============================================================
// =============================================================

// // Set vs WeakSet
// //   => The WeakSet is weak,
// //   => meaning references to objects in a WeakSet are held weakly.
// //   => If no other references to an object stored in the WeakSet exist, those objects can be garbage collected.
// //   => Usage => Store objects and removes them once they become inaccessible

// ======================

// //   Set     => Can Store Any Data Values
// //   WeakSet => Collection Of Objects Only

// let mySet = new Set([1, 1, 1, 2, 3, "A", "A"]);
// console.log(mySet);

// let myws = new WeakSet([{ A: 1, B: 2 }]);
// console.log(myws);

// ======================

// //   Set     => Have Size Property
// //   WeakSet => Does Not Have Size Property

// let mySet = new Set([1, 1, 1, 2, 3, "A", "A"]);
// console.log(mySet.size);

// ======================

// //   Set     => Have Keys, Values, Entries // Keys [Alias For Values]
// //   WeakSet => Does Not Have clear, Keys, Values And Entries

// let mySet = new Set([1, 1, 1, 2, 3, "A", "A"]);
// let iterator = mySet.keys();

// console.log(iterator.next().value);
// console.log(iterator.next().value);
// console.log(iterator.next().value);
// console.log(iterator.next().value);
// console.log(iterator.next());

// ======================

// //   Set     => Can Use forEach
// //   WeakSet => Cannot Use forEach

// let mySet = new Set([1, 1, 1, 2, 3, "A", "A"]);
// mySet.forEach((el) => console.log(el));

// ======================



// =============================================================
// =============================================================
// ================== Map Data Type vs Object ==================
// =============================================================
// =============================================================

// // Map Data Type
// //   => Syntax: new Map(Iterable With Key/Value)

// // Map vs Object
// //-- Map => Does Not Contain Key By Default
// //-- Object => Has Default Keys

// //-- Map => Key Can Be Anything [Function, Object, Any Primitive Data Types]
// //-- Object => String Or Symbol

// //-- Map => Ordered By Insertion
// //-- Object => Not 100% Till Now

// //-- Map => Get Items By Size
// //-- Object => Need To Do Manually

// //-- Map => Can Be Directly Iterated
// //-- Object => Not Directly And Need To Use Object.keys() And So On

// //-- Map => Better Performance When Add Or Remove Data
// //-- Object => Low Performance When Comparing To Map


// let myObject = {};
// let myEmptyObject = Object.create(null);
// let myMap = new Map();

// console.log(myObject);
// console.log(myEmptyObject);
// console.log(myMap);

// ==================================

// // Object
// let myNewObject = {
//     10: "Number",
//     "10": "String",
// };
// console.log(myNewObject); // {10: 'String'}
// console.log(myNewObject[10]); // String


// // Map
// // let myNewMap = new Map([
// //     [10, "Number"],
// //     ["10", "String"]
// // ]);
// let myNewMap = new Map();
// myNewMap.set(10, "Number");
// myNewMap.set("10", "String");
// // myNewMap.set(true, "Boolean");
// // myNewMap.set({a: 1, b: 2}, "Object");
// // myNewMap.set(function doSomething() {}, "Function");

// console.log(myNewMap); // {10 => 'Number', '10' => 'String'}
// console.log(myNewMap.get(10)); // Number
// console.log(myNewMap.get("10")); // String



// =============================================================
// =============================================================
// ======================== Map Methods ========================
// =============================================================
// =============================================================

// // Map
// //  Methods
// //    => set()
// //    => get()
// //    => delete()
// //    => clear()
// //    => has()
// //  Properties
// //    => size


// let myMap = new Map([
//     [10, "Number"],
//     ["10", "String"],
// ]);
// myMap.set(false, "Boolean");

// console.log(myMap); // {10 => 'Number', '10' => 'String', false => 'Boolean'}

// console.log(myMap.get(10)); // Number
// console.log(myMap.get("10")); // String
// console.log(myMap.get(false)); // Boolean

// console.log(myMap.has(10)); // true

// console.log(myMap.size); // 3

// console.log(myMap.delete("Name")); // false

// myMap.clear();

// console.log(myMap.size); // 0

// =============================================================

// let myInfoObj = {
//     username: "Osama",
//     role: "Admin",
//     country: "Egypt",
// };
// console.log(myInfoObj) // {username: 'Osama', role: 'Admin', country: 'Egypt'}
// console.log(Object.keys(myInfoObj)) // ['username', 'role', 'country']
// console.log(Object.values(myInfoObj)) // ['Osama', 'Admin', 'Egypt']
// console.log(Object.entries(myInfoObj))
// // [['username', 'Osama'], ['role', 'Admin'], ['country', 'Egypt']]
// console.log(Object.entries(myInfoObj)[0]) // ['username', 'Osama']
// console.log(Object.entries(myInfoObj)[0][0]) // username
// console.log(Object.entries(myInfoObj)[0][1]) // Osama

// =============================================================

// let myInfoObj = {
//     username: "Osama",
//     role: "Admin",
//     country: "Egypt",
// };
// let myInfoMap = new Map();

// // for(let i = 0; i < Object.keys(myInfoObj).length; i++){
// //     // console.log(Object.keys(myInfoObj)[i]) // username
// //     // console.log(Object.values(myInfoObj)[i]) // Osama
// //     myInfoMap.set(Object.keys(myInfoObj)[i], Object.values(myInfoObj)[i])
// // }

// for(let i = 0; i < Object.entries(myInfoObj).length; i++){
//     // console.log(Object.entries(myInfoObj)[i]) // ['username', 'Osama']
//     // console.log(...Object.entries(myInfoObj)[i]) // 'username', 'Osama'
//     myInfoMap.set(...Object.entries(myInfoObj)[i])
// }

// console.log(myInfoMap)
// // Map(3) {'username' => 'Osama', 'role' => 'Admin', 'country' => 'Egypt'}
// console.log(myInfoMap.size) // 3
// console.log(myInfoMap.has('role')) // true



// =============================================================
// =============================================================
// ====================== [Map | WeakMap] ======================
// =============================================================
// =============================================================

// // Map vs WeakMap
// //   => WeakMap Allows Garbage Collector To Do Its Task But Not Map.
// //   Map     => Key Can Be Anything
// //   WeakMap => Key Can Be Object Only


// let mapUser = { theName: "Elzero" };

// let myMap = new Map();

// myMap.set(mapUser, "Object Value");

// mapUser = null; // Override The Reference

// console.log(myMap);

// console.log("#".repeat(20));

// let wMapUser = { theName: "Elzero" };

// let myWeakMap = new WeakMap();

// myWeakMap.set(wMapUser, "Object Value");

// wMapUser = null; // Override The Reference

// console.log(myWeakMap);



// =============================================================
// =============================================================
// ========================= Array.from ========================
// =============================================================
// =============================================================

// // Array.from(Iterable, MapFunc, This)

// // ======

// console.log(Array.from("Osama")); // ['O', 's', 'a', 'm', 'a']
// console.log(Array.from("12345", (n) => +n + +n)); // [2, 4, 6, 8, 10]

// // =======

// let myArray = [1, 1, 1, 2, 3, 4];

// let mySet = new Set(myArray);
// console.log(Array.from(mySet)); // [1, 2, 3, 4]
// console.log([...mySet]); // [1, 2, 3, 4]

// // =======

// function af1() {return arguments}
// console.log(af1("Osama", "Ahmed", 1, 2)); // ['Osama', 'Ahmed', 1, 2]

// function af2() {
// return Array.from(arguments);
// }
// console.log(af2("Osama", "Ahmed", 1, 2)); // ['Osama', 'Ahmed', 1, 2]

// // =======


// =============================================================
// =============================================================
// ================== Array.copyWithin Method ==================
// =============================================================
// =============================================================

// // Array.copyWithin(Target, Start => Optional, End => Optional)
// //    => Copy Part Of An Array To Another Location in The Same Array
// //    => Any Negative Value Will Count From The End
// // -Target
// //    Index To Copy Part To
// //    If At Or Greater Than Array Length Nothing Will Be Copied
// // -Start
// //    Index To Start Copying From
// //    If Ommited = Start From Index 0
// // -End
// //    Index To End Copying From
// //    Not Including End
// //    If Ommited = Reach The End


// let myArray = [10, 20, 30, 40, 50, "A", "B"];
// console.log(myArray);
// // myArray.copyWithin(3); // [10, 20, 30, 10, 20, 30, 40]
// // myArray.copyWithin(4, 6); // [10, 20, 30, 40, "B", "A", "B"]
// // myArray.copyWithin(4, -1); // [10, 20, 30, 40, "B", "A", "B"]
// // myArray.copyWithin(1, -2); // [10, "A", "B", 40, 50, "A", "B"]
// // myArray.copyWithin(1, -2, -1); // [10, "A", 30, 40, 50, "A", "B"]
// console.log(myArray);



// =============================================================
// =============================================================
// ===================== Array.some Method =====================
// =============================================================
// =============================================================

// // Array.some(CallbackFunc(Element, Index, Array), This Argument)
// //    CallbackFunc => Function To Run On Every Element On The Given Array
// //    Element => The Current Element To Process
// //    Index => Index Of Current Element
// //    Array => The Current Array Working With
// //    This Argument => Value To Use As This When Executing CallbackFunc
// // Using
// //    => Return True or False
// //    => Check if Element Exists In Array
// //    => Check If Number In Range


// let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// let check = nums.some(function (e) {
//     console.log("Test"); // Test Test Test Test
//     return e > 3;
// });

// console.log(check); // true

// ==============

// let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let myNumber = 3;

// let check = nums.some(function (e) {
//     console.log(this); // 5 5 5 5
//     return e > this;
// }, myNumber);

// console.log(check); // true

// ==============

// let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// function checkValues(arr, val) {
//     return arr.some(e => e === val);
// };

// console.log(checkValues(nums, 20)); // false
// console.log(checkValues(nums, 5)); // true

// ==============

// let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// let range = {
//     min: 10,
//     max: 20,
// };

// let checkNumberInRange = nums.some(function (e) {
//     console.log(this); // {min: 10, max: 20}
//     console.log(this.min); // 10
//     console.log(this.max); // 20
//     return e >= this.min && e <= this.max;
// }, range);

// console.log(checkNumberInRange); // false



// =============================================================
// =============================================================
// ===================== Array.every Method ====================
// =============================================================
// =============================================================

// // Array.every(CallbackFunc(Element, Index, Array), This Argument)
// //    CallbackFunc => Function To Run On Every Element On The Given Array
// //    Element => The Current Element To Process
// //    Index => Index Of Current Element
// //    Array => The Current Array Working With
// //    This Argument => Value To Use As This When Executing CallbackFunc
// // Using
// //    => Return True or False


// const locations = {
//     20: "Place 1",
//     30: "Place 2",
//     10: "Place 3",
//     40: "Place 4"
// };
// let mainLocation = 15;

// let locationsArray = Object.keys(locations);
// console.log(locationsArray); // ['20', '30', '40', '50']

// let locationArrayNumbers = locationsArray.map(n => +n);
// console.log(locationArrayNumbers); // [20, 30, 40, 50]

// let check = locationArrayNumbers.every(function(e){
//     return e > this
// }, mainLocation);
// console.log(check); // false



// =============================================================
// =============================================================
// ======================= Spread Syntax =======================
// =============================================================
// =============================================================

// // Spread Operator => ...Iterable
// //    => "Allow Iterable To Expand In Place"

// // String
// console.log("Osama"); // Osama
// console.log(..."Osama"); // O s a m a
// console.log([..."Osama"]); // ['O', 's', 'a', 'm', 'a']


// // Concat Array
// let myArray1 = [1, 2, 3];
// let myArray2 = [4, 5, 6];
// let allArrays = [...myArray1, ...myArray2];
// console.log(allArrays); // [1, 2, 3, 4, 5, 6]

// // Copy Array
// let myArr = ['a', 'b', 'c'];
// let copiedArray = [...myArr];
// console.log(copiedArray); // ['a', 'b', 'c']

// // Push Inside Array
// let allFriends = ["Osama", "Ahmed", "Sayed"];
// let thisYearFriends = ["Sameh", "Mahmoud"];
// allFriends.push(...thisYearFriends);
// console.log(allFriends); // ['Osama', 'Ahmed', 'Sayed', 'Sameh', 'Mahmoud']
// // allFriends.push(thisYearFriends);
// // console.log(allFriends); // ['Osama', 'Ahmed', 'Sayed', ["Sameh", "Mahmoud"]]

// // Use With Math Object
// let myNums = [10, 20, -100, 100, 1000, 500];
// console.log(Math.max(myNums)); // NaN
// console.log(Math.max(...myNums)); // 1000

// // Spread With Objects => Merge Objects
// let objOne = {
//     a: 1,
//     b: 2,
// };
// let objTwo = {
//     c: 3,
//     d: 4,
// };
// console.log({ objOne, objTwo, e: 5 }); // {{a: 1, b: 2}, {c: 3, d: 4}, e: 5}
// console.log({ ...objOne, ...objTwo, e: 5 }); // {a: 1, b: 2, c: 3, d: 4, e: 5}



// =============================================================
// =============================================================
// ========================= Challenge =========================
// =============================================================
// =============================================================

// let setOfNumbers = new Set([10]);
// setOfNumbers.add(20).add(setOfNumbers.size);
// console.log(setOfNumbers); // Set(3) {10, 20, 2}
// console.log([...setOfNumbers][2]) // 2

// =============================================================

// let myFriends = ["Osama", "Ahmed", "Sayed", "Sayed", "Mahmoud", "Osama"];
// console.log([...new Set(myFriends)].sort())
// // (4) ['Ahmed', 'Mahmoud', 'Osama', 'Sayed']

// =============================================================

// let num = 100020003000;
// // let r = +([...new Set(num.toString())].filter(n => n > 0)).reduce((x, y) => x + y)
// let r = +([...new Set(num.toString())].filter(n => n > 0)).join("")
// console.log(r) // 123

// =============================================================

// let theName = "Elzero";
// console.log(theName.split(""))
// console.log([...theName])
// console.log(Array.from(theName))
// // ['E', 'l', 'z', 'e', 'r', 'o']

// =============================================================

// let arr = ["A", "B", "C", "D", "E", 10, 15, 6];
// // let arr = ["A", "B", "C", 20, "D", "E", 10, 15, 6];
// // let arr = ["Z", "Y", "A", "D", "E", 10, 1];

// let chars = arr.filter(n => typeof n === "string");
// let nums = arr.filter(n => typeof n === "number");
// arr.length = 0;
// arr = [...nums, ...chars]
// arr.copyWithin(0, nums.length, nums.length*2)

// console.log(arr)
// // ['A', 'B', 'C', 'A', 'B', 'C', 'D', 'E']
// // ['A', 'B', 'C', 'D', 'A', 'B', 'C', 'D', 'E']
// // ["Z", "Y", "Z", "Y", "A", "D", "E"]

// =============================================================

// let numsOne = [1, 2, 3];
// let numsTwo = [4, 5, 6];

// console.log(numsOne.concat(numsTwo))
// console.log([].concat(numsOne, numsTwo))
// console.log([...numsOne, ...numsTwo])
// // [1, 2, 3, 4, 5, 6]



// =============================================================
// =============================================================
// =============================================================
// =============================================================
// =============================================================




// =============================================================
// =============================================================
// =============================================================
// =============================================================
// =============================================================




// =============================================================
// =============================================================
// =============================================================
// =============================================================
// =============================================================



// =============================================================
// =============================================================
// =============================================================
// =============================================================
// =============================================================




// =============================================================
// =============================================================
// =============================================================
// =============================================================
// =============================================================



// =============================================================
// =============================================================
// =============================================================
// =============================================================
// =============================================================


// =============================================================
// =============================================================
// ===================== (For in, For of ) =====================
// =============================================================
// =============================================================

// // FOR >>> add all numbers you will pass them as param
// function addAll(...numbers){
//     let result = 0
//     for(let i = 0; i < numbers.length; i++){
//         result += numbers[i]
//     }
//     return result
// }
// console.log(addAll(1,2,3,4,5)) // 15

// =============================================================

// // for of >>> items
// function addAll(...numbers){
//    let result = 0
//    for(let i of numbers){
//       result += i
//    }
//    return result
// }
// console.log(addAll(1,2,3,4,5)) // 15

// =============================================================

// // for in >>> index
// function addAll(...numbers){
//    let result = 0
//    for(let i in numbers){
//       result += numbers[i]
//    }
//    return result
// }
// console.log(addAll(1,2,3,4,5)) // 15

// =============================================================

// let addAll = (...numbers) => {
//    let result = 0
//    for(let i in numbers){
//       result += numbers[i]
//    }
//    return result
// }
// console.log(addAll(1,2,3,4,5)) // 15

// =============================================================

// let arr1 = [1,3,3], arr2 = ["a","b","c"]
// // let arr = arr1.concat(arr2)
// let arr = [...arr1, ...arr2]
// console.log(arr) // [1, 3, 3, "a", "b", "c"]



// =============================================================
// =============================================================
// ====================== counter function =====================
// =============================================================
// =============================================================

// // // <div id="counterOne"></div>
// // // <div id="counterTwo"></div>
// // // <div id="counterThree"></div>

// let counter = (id, from, to, step, ms) => {
//     let steps = from
//     const interval = setInterval(()=>{
//         steps += step
//         document.getElementById(`${id}`).innerHTML = `${steps},00+`
//         steps === to ? clearInterval(interval) : ""
//     },ms);
// }
// counter("counterOne", 0, 50, 1, 40)
// counter("counterTwo", 0, 100, 1, 40)
// counter("counterThree", 0, 150, 1, 40)



// =============================================================
// =============================================================
// ======================== generator ==========================
// =============================================================
// =============================================================

// function* generator(){
//     yield 1;
//     yield 2;
//     yield 3;
// }

// let gen = generator() // >>> Iterator

// // console.log(generator) // ƒ* generator(){    yield 1;    yield 2;    yield 3; }

// // console.log(gen.next()) // {value: 1, done: false}
// // console.log(gen.next()) // {value: 2, done: false}
// // console.log(gen.next()) // {value: 3, done: false}
// // console.log(gen.next()) // {value: undefined, done: true}

// // console.log(gen.next()) // {value: 1, done: false} >>> yeild 1
// // console.log(gen.next()) // {value: 2, done: false} >>> yeild 2
// // console.log(gen.next().value) // 3 >>> yeild 3
// // console.log(gen.next().done) // true >>> yeild 4
// // console.log(gen.next()) // {value: 2, done: false}  >>> yeild 5

// =============================================================

// function* generator(){
//     yield* [1, 2, 3, 4];
//     yield 5;
// }

// let gen = generator()

// console.log(gen.next().value) // 1
// console.log(gen.next().value) // 2
// console.log(gen.next().value) // 3
// console.log(gen.next().value) // 4
// console.log(gen.next().value) // 5
// console.log(gen.next().value) // undefined

// =============================================================

// function* generator(){
//     yield* [1, 2];
//     yield 3;
//     yield 4;
// }

// let gen = generator() // Iterator

// for(let val of gen){
//     console.log(val) // 1  2  3  4
// }

// for(let val of generator()){
//     console.log(val) // 1  2  3  4
// }

// =============================================================

// function* generateNumbers(){
//     yield 1;
//     yield 2;
// }

// function* generateNames(){
//     yield "Ziad";
//     yield "Ali";
// }

// function* generateAll(){
//     yield* generateNumbers();
//     yield* generateNames();
// }

// let gen = generateAll()

// console.log(gen.next()) // {value: 1, done: false}
// console.log(gen.next()) // {value: 2, done: false}
// console.log(gen.next()) // {value: 'Ziad', done: false}
// console.log(gen.next()) // {value: 'Ali', done: false}
// console.log(gen.next()) // {value: undefined, done: true}



// =============================================================
// =============================================================
// ================= Modules (Import, Export) ==================
// =============================================================
// =============================================================

// // HTML
// // <script src="main.js" type="module"></script>
// // <script src="app.js" type="module"></script>

// // app.js
// export const a = 1;
// export let arr = [1, 2, 3];
// export function sayHi() {return "Hi"}

// // main.js
// import {a, arr, sayHi} from './app.js'
// console.log(a)
// console.log(arr)
// console.log(sayHi())

// =============================================================

// // HTML
// // <script src="main.js" type="module"></script>
// // <script src="app.js" type="module"></script>

// // app.js
// const a = 1;
// let arr = [1, 2, 3];
// function sayHi() {return "Hi"}
// export{
//     a,
//     arr,
//     sayHi()
// }

// // main.js
// import {a, arr, sayHi} from './app.js'
// console.log(a)
// console.log(arr)
// console.log(sayHi())

// =============================================================

// // HTML
// // <script src="main.js" type="module"></script>
// // <script src="app.js" type="module"></script>

// // app.js
// const a = 1;
// let arr = [1, 2, 3];
// function sayHi() {return "Hi"}
// export{
//     a as item,
//     arr,
//     sayHi()
// }

// // main.js
// import {item, arr, sayHi} from './app.js'
// console.log(item)
// console.log(arr)
// console.log(sayHi())

// =============================================================

// // HTML
// // <script src="main.js" type="module"></script>
// // <script src="app.js" type="module"></script>

// // app.js
// const a = 1;
// let arr = [1, 2, 3];
// function sayHi() {return "Hi"}
// export{
//     a as item,
//     arr,
//     sayHi()
// }

// // main.js
// import * as all from './app.js'
// console.log(all.item)
// console.log(all.arr)
// console.log(all.sayHi())

// =============================================================
// =============================================================
// =============================================================
// =============================================================
// =============================================================
// =============================================================
// =============================================================
// =============================================================
// =============================================================