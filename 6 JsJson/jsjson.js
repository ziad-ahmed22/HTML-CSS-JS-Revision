// ==============================================================
// ==============================================================
// ==============================================================
// //- Json Data Types
// //   => string
// //   => number
// //   => object
// //   => array
// //   => boolean
// //   => null

// js can be all of above + function, date, undifined

// // cannot write comment in json file
// // http://myjson.dit.upm.es/api/bins/n1o

// const obj = [{
//     "name": "ziad",
//     "age": 22,
//     "skills": [
//         "html",
//         "css",
//         {
//             "react js": 80,
//             "angular js": 50,
//             "vue js": 60
//         }
//     ],
//     "lang": [
//         "arabic",
//         [
//             "english us",
//             "english uk"
//         ]
//     ],
//     "married": false,
//     "sons": null
// },
// {
//     "name": "ziad",
//     "age": 22,
//     "skills": [
//         "html",
//         "css",
//         {
//             "react": 80,
//             "angular js": 50,
//             "veu js": 60
//         }
//     ],
//     "lang": [
//         "arabic",
//         [
//             "english us",
//             "english uk"
//         ]
//     ],
//     "married": false,
//     "sons": null
// }]

// console.log(obj[1].name) // ziad
// console.log(obj[1].skills[0]) // html
// console.log(obj[1].skills[2].react) // 80
// console.log(obj[1].skills[2]["veu js"]) // 60
// console.log(obj[1].lang[1][1]) // english uk

// ==============================================================
// ==============================================================
// ==============================================================

// // convert json object to javascript object
// // because you receive the object from server as string obj
// // JSON.parse(jsonObj)

// let jsonObj = '{"name": "ziad", "age": 22}'
// let jsObj = JSON.parse(jsonObj)

// console.log(jsonObj) // {"name": "ziad", "age": 22}
// console.log(typeof jsonObj) // string

// console.log(jsObj) // {name: 'ziad', age: 22}
// console.log(typeof jsObj) // object

// ==============================================================
// ==============================================================
// ==============================================================

// // convert javascript object to json object
// // because you send the object to server as json obj
// // JSON.stringify(jsObj)

// let jsObj = {name: 'ziad', age: 22}
// let jsonObj = JSON.stringify(jsObj)

// console.log(jsObj) // {name: 'ziad', age: 22}
// console.log(typeof jsObj) // object

// console.log(jsonObj) // {"name": "ziad", "age": 22}
// console.log(typeof jsonObj) // string

// ==============================================================
// ==============================================================
// ==============================================================