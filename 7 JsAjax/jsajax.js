// ==============================================================
// ==============================================================
// ==============================================================
// // - readyState
// //   [0] => Request Not Initialized
// //   [1] => Server Connection Stablished
// //   [2] => Request Recieved
// //   [3] => Processing Request
// //   [4] => Request Is Finished And Response Is Ready

// // - status
// //   [100-200] => Informational responses
// //   [200-299] => Successful responses
// //   [300-399] => Redirects
// //   [400-499] => Client errors
// //   [500-599] => Server errors

// // - statusText
// //   => OK [200]
// //   => Not found [404]
// //   => Forbidden [403]

// // open('Method', 'URL', [Async,Sync], 'User', 'Password')
// // open('[GET, POST]', 'URL', [true, false])
// // open('GET', 'http://myjson.dit.upm.es/api/bins/n1o', true)
// // open('GET', 'ziad.txt', true)

// // <button onclick="fun()">Request</button>

// function fun() {
//     let myRequest = new XMLHttpRequest()
//     // console.log(myRequest)

//     myRequest.onreadystatechange = function() {
//         // console.log(this.readyState) // 1 2 3 4
//         // console.log(this.status) // 200
//         // console.log(this.statusText) // ok
//         if(this.readyState === 4 && this.status === 200){
//             console.log(this.responseText) // text
//             // console.log(JSON.parse(this.responseText)) // js object
//         }
//     }

//     // myRequest.open('GET', 'http://myjson.dit.upm.es/api/bins/n1o', true)
//     myRequest.open('GET', 'jsajax.json', true)

//     myRequest.send()
// }


// ==============================================================
// ==============================================================
// ==============================================================
// let myRequest = new XMLHttpRequest()
// myRequest.onreadystatechange = function()  {
//     if(this.readyState === 4 && this.status === 200 ){
//         console.log(this.responseText)
//         console.log(JSON.parse(this.responseText))
//     }
// }
// myRequest.open('GET', 'jsajax.json', true)
// myRequest.send()
// ==============================================================
// ==============================================================
// ==============================================================

// // Example

// // <div class="container"></div>
// // .container{background-color:#702283;color: #962071;display: flex;flex-wrap: wrap;justify-content: space-evenly;font-family: Arial, Helvetica, sans-serif;}
// // .container >div{background-color:white;text-transform: capitalize;text-align: center;margin: 20px;padding: 20px;border-radius: 5px;}
// // .container >div div:not(.container >div div:last-of-type){margin-bottom: 8px;}
// // .container >div div.skills span{background-color: yellowgreen;text-transform: uppercase;margin: 0 5px;border-radius: 5px;padding: 2px 10px;font-size: 14px;}
// // [{"name": "ziad","age": 22,"skills": ["html", "css", "js"]},
// // {"name": "aLi","age": 25,"skills": ["html", "css", "js"]},
// // {"name": "sayes","age": 28,"skills": ["html", "css", "js"]},
// // {"name": "medo","age": 12,"skills": ["html", "css", "js"]},
// // {"name": "ahmed","age": 33,"skills": ["html", "css", "js"]},
// // {"name": "mosa","age": 55,"skills": ["html", "css", "js"]}]

// let myRequest = new XMLHttpRequest()
// let con = document.querySelector('.container')

// myRequest.onreadystatechange = function() {
//     if(this.readyState === 4 && this.status === 200){
//         var myObj = JSON.parse(this.responseText)
//         // console.log(myObj) // array 2 obj
//         // console.log(myObj.length) // 2
//         // console.log(myObj[0])
//         // console.log(myObj[1])
//         for(let i = 0; i < myObj.length; i++){
//             let myDiv = document.createElement('div')
//             let name = document.createElement('div')
//             let age = document.createElement('div')
//             let skills = document.createElement('div')            

//             name.textContent = myObj[i].name
//             age.textContent = myObj[i].age
//             skills.classList.add('skills')
//             for(let j = 0; j < myObj[i].skills.length; j++){
//                 let skSpan = document.createElement('span')
//                 skSpan.textContent = myObj[i].skills[j]
//                 skills.appendChild(skSpan)
//             }

//             myDiv.appendChild(name)
//             myDiv.appendChild(age)
//             myDiv.appendChild(skills)
//             con.appendChild(myDiv)
//         }
//     }
// }

// myRequest.open('GET', 'jsajax.json', true)
// myRequest.send()

// ==============================================================
// ==============================================================
// ==============================================================

// Example
// https://www.w3schools.com/js/tryit.asp?filename=tryjs_ajax_database
// https://www.w3schools.com/js/tryit.asp?filename=tryjs_ajax_callback

// ==============================================================
// ==============================================================
// ==============================================================