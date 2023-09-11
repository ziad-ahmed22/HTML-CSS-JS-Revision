// ==============================================================
// ==============================================================
// Regular Expression
// Date
// Cookie
// Session Storage
// Local Storage
// ==============================================================
// ==============================================================


// ==============================================================
// ==============================================================
// ===================== Regular Expression =====================
// ==============================================================
// ==============================================================

// // syntax
// //  => /pattern/attribute
// // Methods
// //  => search( ) - replace( , ) - match( ) - split( ) - test( )
// // attributes
// //   i  => case insensitive
// //   g  => global
// //   m  => multi line search
// // Brackets
// //  [ e ] => character e
// //  [^e ] => Not character e
// //  [a-e] => range small letters
// //  [A-Z] => range capital letters
// //  [0-9] => range numbers
// //  [^0-9] => Not range numbers
// //  [A-e] => [A-Za-e] => range [A-Z] and range [a-e]
// //  [0-9a-z] => rang mix
// // Quantifiers
// //   e+  => one or more
// //   e{2} => 2 only
// //   e{2,3} => 2 or 3
// //   e{2,} => 2 or more

// let str = "I LOve Elzero Web SchOol 012345 01234"

// console.log(str.search(/L/)) // 2 (index)
// console.log(str.search(/l/)) // 8

// console.log(str.replace(/O/, '@')) // I L@ve Elzero Web SchOol
// console.log(str.replace(/o/, '@')) // I LOve Elzer@ Web SchOol
// console.log(str.replace(/o/i, '@')) // I L@ve Elzero Web SchOol
// console.log(str.replace(/o/gi, '@')) // I L@ve Elzer@ Web Sch@@l

// ====================
// ====================

// let str = "I LOve Elzero Web SchOol 012345 01234"

// console.log(str.replace(/[e]/gi, '@')) // I LOv@ @lz@ro W@b SchOol 012345 01234
// console.log(str.replace(/[^e]/gi, '@')) // @@@@@e@E@@e@@@@e@@@@@@@@@@@@@@@@@@@@@
// console.log(str.replace(/[a-h]/g, '@')) // I LOv@ Elz@ro W@@ S@@Ool 012345 01234
// console.log(str.replace(/[A-Z]/g, '@')) // @ @@ve @lzero @eb @ch@ol 012345 01234

// console.log(str.replace(/[0-2]/g, '@')) // I LOve Elzero Web SchOol @@@345 @@@34
// console.log(str.replace(/[0-2]/, '@')) // I LOve Elzero Web SchOol @12345 01234
// console.log(str.replace(/[^0-2]/g, '@')) // @@@@@@@@@@@@@@@@@@@@@@@@@012@@@@012@@
// console.log(str.replace(/[A-e]/g, '@')) // @ @@v@ @lz@ro @@@ @@h@ol 012345 01234
// console.log(str.replace(/[A-Za-e]/g, '@')) // @ @@v@ @lz@ro @@@ @@h@ol 012345 01234
// console.log(str.replace(/[A-Za-e]/g, '@')) // @ @@v@ @lz@ro @@@ @@h@ol 012345 01234
// console.log(str.replace(/[0-9A-Za-z]/g, '@')) // @ @@@@ @@@@@@ @@@ @@@@@@ @@@@@@ @@@@@
// console.log(str.replace(/[0-9A-Z]/gi, '@')) // @ @@@@ @@@@@@ @@@ @@@@@@ @@@@@@ @@@@@

// ====================
// ====================

// console.log("i lovhhe elhhhzero web school hhhh".replace(/h/g, '@'))
//           // i lov@@e el@@@zero web sc@ool @@@@
// console.log("i lovhhe elhhhzero web school hhhh".replace(/h+/g, '@'))
//           // i lov@e el@zero web sc@ool @
// console.log("i lovhhe elhhhzero web school hhhh".replace(/h{2}/g, '@'))
//           // i lov@e el@hzero web school @@
// console.log("i lovhhe elhhhzero web school hhhh".replace(/h{2,3}/g, '@'))
//           // i lov@e el@zero web school @h
// console.log("i lovhhe elhhhzero web school hhhh".replace(/h{2,}/g, '@'))
//           // i lov@e el@zero web school @



// ==============================================================
// ==============================================================
// ============================ Date ============================
// ==============================================================
// ==============================================================

// Mon Oct 25 1999 09:30:25 GMT+0200 (Eastern European Standard Time)

// - current date
// - => new Date()

// - add millisecond to UTC (1 jan 1970 00:00:00)
//   => new Date(1000)

// - string
//   => new Date("oct 25 1999 09:30:25")
//   => new Date("month day year hour:minute:second")

// - number,, month 0 = jan
//   => new Date(1999, 9, 25, 09, 30, 25)
//   => new Date(year, month, day, hour, minute, second)

// ==============================================================

// Date Formating
// Sat Sep 25 1999 09:30:25 GMT+0300 (Eastern European Summer Time)

// - long format
//   => new Date("sep 25 1999 09:30:25")

// - short format
//   => new Date("9/25/1999 09:30:25")

// - ISO format
//   => new Date(YYYY-MM-DD hh:mm:ss TZD)
//   => new Date("1999-9-25 09:30:25") // Sat Sep 25 1999 09:30:25 GMT+0300
//   => new Date("1999-9-25 09:30:25+03:00") // Sat Sep 25 1999 09:30:25 GMT+0300
//   => new Date("1999-9-25 09:30:25+04:00") // Sat Sep 25 1999 08:30:25 GMT+0300

// ==============================================================

// - Date Methods (get)
//   => new Date().toLocaleString()
//   => new Date().getFullYear() // year

//   => new Date().getMonth() // month 0-11
//   => new Date().getDate() // day of month 1-31
//   => new Date().getDay() // day of week 0-6
//   => new Date().getHours() // hours 0-23
//   => new Date().getMinutes() // minutes 0-59
//   => new Date().getSeconds() // seconds 0-59
//   => new Date().getMilliseconds() // milliseconds 0-999

//   => new Date().getTime() // number of millisecond from 1 jan 1970
//   => new Date().getTime(date) // number of millisecond from date
//   => new Date().getTimezoneOffset() // different between UTC in minutes

// - UTC Methods
//   => new Date().getUTCFullYear()
//   => new Date().getUTCMonth()
//   => new Date().getUTCDate()
//   => new Date().getUTCDay()
//   => new Date().getUTCHours()
//   => new Date().getUTCMinutes()
//   => new Date().getUTCSeconds()
//   => new Date().getUTCMilliseconds()

// console.log(new Date()) // Mon Sep 20 2021 19:23:34 GMT+0200 (Eastern European Standard Time)
// console.log(new Date().toLocaleString()) // 9/20/2021, 7:23:45 PM

// ===========
// let date = new Date()
// let dateTest = date.getTime()
// console.log(dateTest)
// ===========

// ===========
// let date = new Date("1999-9-25 09:30:25")
// let dateTest = date.getTime()
// console.log(dateTest)
// ===========

// ===========
// let date = new Date()
// let dateTest = date.getHours()
// console.log(dateTest)
// ===========

// ===========
// let date = new Date()
// let dateTest = date.getUTCHours()
// console.log(dateTest)
// ===========

// ==============================================================

// - Date Methods (set)
//   => new Date().setFullYear(Y[req], M[opt], D[opt]) // year

//   => new Date().setMonth(M[req], D[opt]) // month 0-11
//   => new Date().setDate(D[req]) // day of month 1-31
//   => new Date().setHours(H[req], M[opt], S[opt], Milli[opt]) // hours 0-23
//   => new Date().setMinutes(M[req], S[opt], Milli[opt]) // minutes 0-59
//   => new Date().setSeconds(S[req], Milli[opt]) // seconds 0-59
//   => new Date().setMilliseconds(Milli) // milliseconds 0-999

// - UTC Methods
//   => new Date().setUTCFullYear()
//   => new Date().setUTCMonth()
//   => new Date().setUTCDate()
//   => new Date().setUTCDay()
//   => new Date().setUTCHours()
//   => new Date().setUTCMinutes()
//   => new Date().setUTCSeconds()
//   => new Date().setUTCMilliseconds()

// ===========
// let date = new Date()
// date.setHours(8)
// console.log(date)
// ===========

// ===========
// let date = new Date("1999-9-25 09:30:25")
// date.setMinutes(22)
// console.log(date)
// ===========

// ===========
// let date = new Date()
// date.setUTCHours(12)
// console.log(date)
// ===========


// ===========
// let currentDate = new Date()
// console.log(currentDate) // Mon Sep 20 2021 19:17:16 GMT+0200

// currentDate.setHours(1)
// console.log(currentDate) // Mon Sep 20 2021 01:17:29 GMT+0200 
// ===========

// ===========
// let currentDate = new Date()
// console.log(currentDate) // Mon Sep 20 2021 19:17:16 GMT+0200

// currentDate.setHours(currentDate.getHours()+1)
// console.log(currentDate) // Mon Sep 20 2021 20:17:29 GMT+0200
// console.log(currentDate) // Mon Sep 20 2021 20:17:29 GMT+0200
// ===========



// ==============================================================
// ==============================================================
// =========================== Cokkie ===========================
// ==============================================================
// ==============================================================

// document.cookie = "name=value; expires=Date; path="
// expiresDate default => لحد م السيشن ينتهي
// path default => الصفحة اللي فيها بس
// path=/ => all domains

// ===============
// // Add Cookie
// document.cookie = 'name=ziad;'
// console.log(document.cookie) // name=ziad
// document.cookie = 'color=red;'
// console.log(document.cookie) // name=ziad; color=red
// document.cookie = 'age=22; expires=oct 21 2022 12:30:30; path=/'
// console.log(document.cookie) // name=ziad; color=red; age=22
// ===============

// ===============
// // Edit Cookie
// // can edit name or expireDate
// // type path if it has or will add new cookie
// document.cookie = 'name=ali; expires=oct 21 2022 12:30:30;'
// document.cookie = 'age=25; expires=oct 21 2022 12:30:30; path=/'
// console.log(document.cookie) // color=red; name=ali; age=25
// ===============

// ===============
// // Delete Cookie
// // edit date before current date
// type path if it has or will not delete it
// document.cookie = 'name=ali; expires=oct 21 2018 12:30:30;'
// document.cookie = 'name=ziad; expires=oct 21 2018 12:30:30;'
// document.cookie = 'age=; expires=oct 21 2018 12:30:30; path=/'
// console.log(document.cookie) // color=red;
// ===============



// ==============================================================
// ==============================================================
// ========================== Storage ===========================
// ==============================================================
// ==============================================================

// // Session Storage
// // stores the data for only one session
// // - Store
// //   => sessionStorage.setItem("name", "Ahmed")
// //   => sessionStorage.name = "Ahmed"
// //   => sessionStorage["name"] = ""
// // - Retrieve
// //   => sessionStorage.getItem("name")
// //   => sessionStorage.name
// //   => sessionStorage["name"]
// // - Remove
// //   => sessionStorage.removeItem("name")


// // Local Storage
// // stores data with no expiration date 
// // - Store
// //   => localStorage.setItem("name", "Ahmed")
// //   => localStorage.name = "Ahmed"
// //   => localStorage["name"] = ""
// // - Retrieve
// //   => localStorage.getItem("name")
// //   => localStorage.name
// //   => localStorage["name"]
// // - Remove
// //   => localStorage.removeItem("name")


// // Remove All 
// // => window.localStorage.clear();
// // Get Key 
// // => console.log(window.localStorage.key(0));

// =================
// console.log(typeof Storage); // function
// console.log(typeof sessionStorage); // object
// console.log(typeof localStorage); // object
// =================

// =================
// // check browser suppor storage or not
// typeof Storage !== 'undefined'
//     ? console.log(typeof Storage) // function
//     : console.log("Your Browser Not Support Storage")
// =================

// =================
// // <input type="text" name="name" placeholder="Add Storage Name">
// // <input type="text" name="value" placeholder="Add Storage Value">
// // <input type="button" name="add" value="Add">
// // <input type="button" name="remove" value="Delete">
// // <div id="show"></div>

// let inputName = document.querySelector('[name=name]'),
//     inputValue = document.querySelector('[name=value]'),
//     addBtn = document.querySelector('[name=add]'),
//     removeBtn = document.querySelector('[name=remove]'),
//     myDiv = document.getElementById("show");

// addBtn.addEventListener('click', addToStorage)
// removeBtn.addEventListener('click', removeFromStorage)

// function addToStorage(){
//     localStorage.setItem(inputName.value, inputValue.value)
//     let val = localStorage.getItem(inputName.value)
//     myDiv.textContent = `You added "${inputName.value}" = "${val}"`
// }
// function removeFromStorage(){
//     localStorage.removeItem(inputName.value)
//     myDiv.textContent = ''
// }
// =================

// ==============================================================
// // challenge 1
// // <body class="experiment">
// // <ul>
// //   <li class="active" data-color="red"></li>
// //   <li data-color="green"></li>
// //   <li data-color="blue"></li>
// //   <li data-color="black"></li>
// // </ul>
// //ul {
// //  background-color: #ddd;
// //  margin: 20px auto;
// //  padding: 20px;
// //  width: 300px;
// //  list-style: none;
// //  display: flex;
// //  justify-content: space-between;
// //}
// //ul li {
// //  width: 60px;
// //  height: 60px;
// //  opacity: 0.4;
// //  cursor: pointer;
// //  transition: 0.3s;
// //}
// //ul li.active,
// //ul li:hover {
// //  opacity: 1;
// //}
// //ul li:first-child {
// //  background-color: red;
// //}
// //ul li:nth-child(2) {
// //  background-color: green;
// //}
// //ul li:nth-child(3) {
// //  background-color: blue;
// //}
// //ul li:nth-child(4) {
// //  background-color: black;
// //}

// let lis = document.querySelectorAll('ul li')

// if(localStorage.getItem('color')){
//     document.body.style.backgroundColor = localStorage.getItem('color')
//     lis.forEach(li => {
//         li.classList.remove('active')
//     })
//     document.querySelector(`[data-color="${localStorage.getItem('color')}"]`).classList.add("active")
// }
// // localStorage.clear()
// lis.forEach(li => {
//     li.addEventListener('click',(e)=>{
//         // Active
//         lis.forEach(li => {
//             li.classList.remove('active')
//         })
//         e.currentTarget.classList.add('active')
//         // li.classList.add('active')

//         // Body
//         document.body.style.backgroundColor = e.currentTarget.dataset.color
//         // document.body.style.backgroundColor = li.dataset.color

//         // Storage
//         localStorage.setItem('color',li.dataset.color)
//     })
// })
// ==============

// ==============================================================
// ==============================================================
// ==============================================================
// ==============================================================
// ==============================================================
// ==============================================================
// ==============================================================
// ==============================================================
// ==============================================================