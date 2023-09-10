// ==============================================================
// ==============================================================
// ==============================================================
// function findMissingLetterIn(givenLetters) {
//     let alpha = "abcdefghijklmnopqrstuvwxyz";
//     let start = alpha.indexOf(givenLetters[0]);

//     for (let i = 0; i < givenLetters.length; i++) {
//         // console.log(alpha[start + i]); // Loop On Alpha
//         // console.log(givenLetters[i]); // Loop On Given Letters
//         if (givenLetters[i] !== alpha[start + i]) {
//             return alpha[start + i];
//         }
//     }
//     return "No Missing Letter In Sequence";
// }

// console.log(findMissingLetterIn("abde")); // c
// console.log(findMissingLetterIn("klno")); // m
// console.log(findMissingLetterIn("xyz")); // No Missing Letter In Sequence



// ==============================================================
// ==============================================================
// ==============================================================
// ==============
// function foo(num){
//     let arrS = num.toString().split("").reverse()
//     let arrN = []
//     for(let i in arrS){
//         arrN.push(parseInt(arrS[i]))
//     }
//     return arrN
// }
// console.log(foo(987654321)) // [1, 2, 3, 4, 5, 6, 7, 8, 9]
// ==============

// ==============
// function foo(num){
//     let arrS = num.toString().split("")
//     let arrN = []
//     for(let i in arrS){
//         arrN.unshift(parseInt(arrS[i]))
//     }
//     return arrN
// }
// console.log(foo(987654321)) // [1, 2, 3, 4, 5, 6, 7, 8, 9]
// ==============

// ==============
// function foo(num){
//     return num.toString().split("").map((el) => +el).reverse()
// }
// console.log(foo(987654321)) // [1, 2, 3, 4, 5, 6, 7, 8, 9]
// ==============



// ==============================================================
// ==============================================================
// ==============================================================
// =============
// function foo(string){
//     let arr = string.split(" ")
//     let len = 0
//     let str = ''
//     for(let i = 0; i < arr.length; i++){
//         if(arr[i].length > len){
//             len = arr[i].length
//             str = arr[i]
//         }
//     }
//     return str
// }
// console.log(foo("Iam Ziad From Egypt Eg")) // Egypt
// ==============

// ==============
// function foo(string){
//     let longest = string.split(" ").reduce((longest, curr) => {
//         // console.log(longest)
//         // console.log(curr)
//         return curr.length > longest.length ? curr : longest
//     })
//     return longest
// }
// console.log(foo("Iam Ziad From Egypt Eg")) // Egypt
// ==============



// ==============================================================
// ==============================================================
// ==============================================================
// ==========
// function foo(str){
//     let arr = str.split(" ")
//     let result = []
//     for(let i = 0; i < arr.length; i++){
//         if(result.indexOf(arr[i]) === -1){
//             result.push(arr[i])
//         }
//     }
//     return result
// }
// console.log(foo("Hello Ziad Hello Again From Eg Eg")) // Hello Ziad Again From Eg
// ==========

// ==========
// function foo(str){
//     let mySet = new Set(str.split(" "))
//     // let arr = [...mySet]
//     let arr = Array.from(mySet)
//     return arr.join(" ")
// }
// console.log(foo("Hello Ziad Hello Again From Eg Eg")) // Hello Ziad Again From Eg
// ==========



// ==============================================================
// ==============================================================
// ==============================================================
// ===========
// function foo(word, letter) {
//     let arr = word.split("")
//     let result = []
//     for(let i = 0; i < arr.length; i++){
//         if(arr[i] !== letter.toLowerCase() && arr[i] !== letter.toUpperCase()){
//             result.push(arr[i])
//         }
//     }
//     return result.join("")
// }
// console.log(foo("JdavDaSdcdrDidptd","d")) // JavaScript
// ===========

// ===========
// function foo(word, letter) {
//     return word
//     .split("")
//     .filter((el) => 
//         el !== letter.toLowerCase() && 
//         el !== letter.toUpperCase())
//     .join("")
// }
// console.log(foo("JdavDaSdcdrDidptd","d")) // JavaScript
// ===========

// ===========
// console.log("JdavDaSdcdrDidptd".replace(/d/gi,'')) // JavaScript
// ===========



// ==============================================================
// ==============================================================
// ==============================================================
// function fun(number){
//     let result = number.toLocaleString()
//     // console.log(number.toString()) // 15125478594
//     // console.log(number.toLocaleString()) // 15,125,478,594

//     result = result.split("")

//     result[result.length - 4] = '_'

//     return result.join("")
// }

// console.log(fun(120)); // 120
// console.log(fun(1530)); // 1_530
// console.log(fun(120510650)); // 120,510_650
// console.log(fun(510650480910)); // 510,650,780_910
// console.log(fun(12069057014032)); // 12,069,057,014_032



// ==============================================================
// ==============================================================
// ==============================================================
// // Reduce 
// const arrayOfNumbers = [1, 2, 3, 4];
// const sum = arrayOfNumbers.reduce((accumulator, current) => {  
//     console.log(accumulator) // 1  3  6
//     console.log(current) // 2  3  4
//     console.log(accumulator + current) // 3  6  10
//     console.log("============");
//   return accumulator + current; // 10
// });
// console.log(sum); // 10



// ==============================================================
// ==============================================================
// ==============================================================
// // ForEach
// const numbers = [1, 2, 3, 4, 5];
// numbers.forEach(n => console.log(n)) // 1 2 3 4 5


// ==============================================================
// ==============================================================
// ==============================================================
// // Filter
// const arr = [1, 2, 3, 4, 5];
// const result = arr.filter(n => n > 2)
// console.log(result) // [3, 4, 5]



// ==============================================================
// ==============================================================
// ==============================================================
// // Map
// const arr = ['Taylor', 'Don', 'Bobby'];
// const result = arr.map(student => student + ' Failed')
// console.log(result) // ['Taylor Failed', 'Don Failed', 'Bobby Failed']



// ==============================================================
// ==============================================================
// ==============================================================
// // Generate Random Serial Number
// console.log(Math.random()) // 0 - 1 >>> 0.125558745145
// console.log(Math.random()*25) // 0 - 25 >>> 19.78148521452
// console.log(Math.floor(Math.random()*25)) // >>> 19
// console.log(Math.trunc(Math.random()*25)) // >>> 19

// let arr = ["Ahmed", "Sayed", "Ali", "Ziad", "Dalia", "Nada"]
// console.log(arr[Math.floor(Math.random()*arr.length)])



// ==============================================================
// ==============================================================
// ==============================================================
// // Generate Random Serial Number And Letter

// // <div class="serial">0000000000</div>
// // <button class="btn">Generate</button>

// document.querySelector('.btn').onclick = () => {
//     document.querySelector('.serial').textContent = generate()
// }

// function generate(){
//     let arr = 'abcdefghijklmnobqrstuvwxyz0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ'
//     let count = 10
//     let serial = ''

//     for(let i = 0; i < count; i++){
//         serial += arr[Math.floor(Math.random()*arr.length)]
//     }
//     return serial
// }



// ==============================================================
// ==============================================================
// ==============================================================
// // gallery

// // <ul class="switcher">
// //   <li data-cat=".all" class="active">All Work</li>
// //   <li data-cat=".web">Web</li>
// //   <li data-cat=".gfx">Graphic</li>
// //   <li data-cat=".mar">Marketing</li>
// // </ul>
// // <div class="gallery">
// //   <img class="all web" src="https://via.placeholder.com/150/F00/FFF?text=Web" alt="" />
// //   <img class="all web" src="https://via.placeholder.com/150/F00/FFF?text=Web" alt="" />
// //   <img class="all gfx" src="https://via.placeholder.com/150/00F/FFF?text=Graphic" alt="" />
// //   <img class="all gfx" src="https://via.placeholder.com/150/00F/FFF?text=Graphic" alt="" />
// //   <img class="all mar" src="https://via.placeholder.com/150/000/FFF?text=Marketing" alt="" />
// //   <img class="all web" src="https://via.placeholder.com/150/F00/FFF?text=Web" alt="" />
// //   <img class="all web" src="https://via.placeholder.com/150/F00/FFF?text=Web" alt="" />
// //   <img class="all mar" src="https://via.placeholder.com/150/000/FFF?text=Marketing" alt="" />
// //   <img class="all mar" src="https://via.placeholder.com/150/000/FFF?text=Marketing" alt="" />
// //   <img class="all gfx" src="https://via.placeholder.com/150/00F/FFF?text=Graphic" alt="" />
// // </div>
// // .active{color: red;}

// // =============
// let lis = document.querySelectorAll('.switcher li')
// let imgs = document.querySelectorAll('.gallery img')
// lis.forEach((li) => {
//     li.onclick =  function () {
//         lis.forEach(li => li.classList.remove('active'))
//         this.classList.add('active')

//         imgs.forEach((img) => img.style.display = 'none')
//         // console.log(document.querySelectorAll(this.dataset.cat)) // .web
//         document.querySelectorAll(this.dataset.cat).forEach((img) => {
//             img.style.display = 'inline'
//         })
//     }
// })
// // =============

// // =============
// let lis = document.querySelectorAll('.switcher li')
// let imgs = document.querySelectorAll('.gallery img')
// lis.forEach((li) => {
//     li.addEventListener('click', removeActive)
//     li.addEventListener('click', manageImages)
// })
// function removeActive() {
//     lis.forEach(li => li.classList.remove('active'))
//     this.classList.add('active')
// }
// function manageImages() {
//     imgs.forEach((img) => img.style.display = 'none')
//     // console.log(document.querySelectorAll(this.dataset.cat)) // .web
//     document.querySelectorAll(this.dataset.cat).forEach((img) => {
//         img.style.display = 'inline'
//     })
// }
// =============



// ==============================================================
// ==============================================================
// ==============================================================
// // Tabs
// // <ul class="tabs">
// //   <li data-cont=".one" class="active">Tab 1</li>
// //   <li data-cont=".two">Tab 2</li>
// //   <li data-cont=".three">Tab 3</li>
// // </ul>
// // <div class="content">
// //   <div class="one">Content 1</div>
// //   <div class="two">Content 2</div>
// //   <div class="three">Content 3</div>
// // </div>
// // .content > div:not(:first-child) {display: none;}
// // .active{color: red;}
// // .content > div:not(:first-child) {display: none;}
// // .active{color: red;}

// // ===========
// // let lis = document.querySelectorAll('.tabs li')
// // let contents = document.querySelectorAll('.content >div')

// // lis.forEach((li) => {
// //     li.addEventListener('click', function(e){
// //         lis.forEach((li) => li.classList.remove('active'))
// //         e.currentTarget.classList.add('active')
// //         // e.target.classList.add('active')
// //         // this.classList.add('active')
        
// //         // console.log(e.currentTarget.dataset.cont) // .two
// //         contents.forEach((el) => el.style.display = 'none')
// //         document.querySelector(e.currentTarget.dataset.cont).style.display = 'block'
// //     })
// // })
// // ===========

// // ===========
// let lis = document.querySelectorAll('.tabs li')
// let contents = document.querySelectorAll('.content >div')
// lis.forEach((li) => {
//     li.addEventListener('click', removeActive)
//     li.addEventListener('click', showContent)
// })
// function removeActive(e){
//     lis.forEach((li) => li.classList.remove('active'))
//     e.currentTarget.classList.add('active')
//     // e.target.classList.add('active')
//     // this.classList.add('active')
// }
// function showContent(e){
//     // console.log(e.currentTarget.dataset.cont) // .two
//     contents.forEach((el) => el.style.display = 'none')
//     document.querySelector(e.currentTarget.dataset.cont).style.display = 'block'
// }
// // ===========

// // e.currentTarget >>> work with arrow function
// // this >>> Do Not work with arrow function
// // data-cat=".one" >>> e.currentTarget.dataset.cat >>> .one
// // data-cat=".one" >>> this.dataset.cat >>> .one



// ==============================================================
// ==============================================================
// ==============================================================
// // Scroll Up
// // <div></div><div></div><div></div><div></div><div></div>
// // <span class="up">Up</span>
// // html{scroll-behavior: smooth;}
// // div{background-color: yellow;height: 500px;margin: 100px;}
// // .up{position: fixed;right: -40px;bottom: 20px;transition: .5s;background-color: tomato;padding: 10px;cursor: pointer;user-select: none;}

// // ============
// // let up = document.querySelector('.up')
// // window.onscroll = () => {
// //     // console.log(document.documentElement.scrollTop)
// //     document.documentElement.scrollTop >= 600
// //     ? up.style.cssText = 'right:20px'
// //     : up.style.cssText = ''
// // }
// // up.onclick = () => document.documentElement.scrollTop = 0
// // ============

// // ============
// let up = document.querySelector('.up')
// window.onscroll = () => {
//     console.log(this.scrollY)
//     this.scrollY >= 600
//     ? up.style.cssText = 'right:20px'
//     : up.style.cssText = ''
// }
// // up.onclick = () => window.scrollTo(0,0)
// up.onclick = () => {
//     window.scrollTo({
//         top: 0,
//         behavior: "smooth"
//     })
// }
// // ============



// ==============================================================
// ==============================================================
// ==============================================================
// // Website Theme 
// // <ul>
// //    <li data-color="white"></li>
// //    <li data-color="black"></li>
// //    <li data-color="yellow"></li>
// // </ul>
// // <h1>Heading</h1>
// // <div>This Is Div</div>
// // ul{list-style-type: none;}
// // ul li{display: inline-block; width: 20px; height: 20px; border: 2px solid red;}
// // ul li[data-color="white"]{background: white;}
// // ul li[data-color="black"]{background: black;}
// // ul li[data-color="yellow"]{background: yellow;}
// // body[theme="white"]{--color-one: white; --color-two: black}
// // body[theme="black"]{--color-one: black; --color-two: white}
// // body[theme="yellow"]{--color-one: yellow; --color-two: red}
// // h1{background-color: var(--color-one); color: var(--color-two);}
// // div{background-color: var(--color-one); color: var(--color-two);}

// document.body.setAttribute('theme',localStorage.getItem('color'))
// let lis = document.querySelectorAll('ul li')
// lis.forEach((li) => {
//     li.addEventListener('click', function(){
//         document.body.setAttribute('theme',this.getAttribute('data-color'))
//         localStorage.setItem('color',this.getAttribute('data-color'))
//     })
// })



// ==============================================================
// ==============================================================
// ==============================================================
// // Capitalize
// function capitalize(str){
//     let arr = []
//     for (let i of str.split(" ")) {
//         arr.push(`${i.charAt(0).toUpperCase()}${i.slice(1)}`)
//     }
//     return arr.join(" ")
// }
// console.log(capitalize('ziad ahmed mahmoud')) // Ziad Ahmed Mahmoud



// ==============================================================
// ==============================================================
// ==============================================================
// // Count Text Area Letters
// // <textarea cols="50" rows="10" maxlength="100"></textarea>
// // <span></span>

// let txtArea = document.querySelector('textarea')
// let mySpan = document.querySelector('span')
// let count = txtArea.getAttribute('maxlength')
// txtArea.oninput = function(){
//     mySpan.textContent = count - this.value.length
//     mySpan.textContent === '0' ? mySpan.style.color = 'red' :''
// }



// ==============================================================
// ==============================================================
// ==============================================================
// // Hide Placeholder On Focus
// // <form name="focus">
// //    <input type="text" name="fone" placeholder="Focus One">
// //    <input type="text" name="ftwo" placeholder="Focus Two">
// // </form>
// // console.log(document.forms[0]) // index >> form
// // console.log(document.forms.focus) // name >> form
// // console.log(document.forms.focus[0]) // index >> input
// // console.log(document.forms.focus.fone) // name input

// let form = document.forms.focus
// let inputs = document.querySelectorAll('form input')
// inputs.forEach(function(inp){
//     inp.onfocus = (e) => {
//         e.target.setAttribute('data-place',e.target.placeholder)
//         e.target.setAttribute('placeholder','')
//     }
//     inp.onblur = (e) => {
//         e.target.placeholder = e.target.getAttribute('data-place')
//         e.target.setAttribute('data-place','')
//     }
// })



// ==============================================================
// ==============================================================
// ==============================================================
// // Type Writer
// // <p></p>
// let txt = "Hello I'm Ziad From Elzero Web School"
// let myP = document.querySelector('p')
// let index = 0

// let typeWriter = setInterval(() => {
//     myP.textContent += txt[index]
//     index++
//     index >= txt.length ? clearInterval(typeWriter) :''
// }, 50);



// ==============================================================
// ==============================================================
// ==============================================================
// // Show Hide Password
// // <input type="password" name="pass">
// // <button>show</button>
// let passInput = document.querySelector('[name=pass]')
// let btn = document.querySelector('button')

// btn.addEventListener('click', function(){
//     if(this.textContent === 'show'){
//         passInput.setAttribute('type','text')
//         this.textContent = 'hide'
//     }
//     else{
//         passInput.setAttribute('type','password')
//         this.textContent = 'show'
//     }
// })

// // btn.addEventListener('click', function(){
// //     if(passInput.type === 'password'){
// //         passInput.setAttribute('type','text')
// //         this.textContent = 'hide'
// //     }
// //     else{
// //         passInput.setAttribute('type','password')
// //         this.textContent = 'show'
// //     }
// // })


// ==============================================================
// ==============================================================
// ==============================================================
// // Random Color
// // .red{background-color: red;}
// // .blue{background-color: blue;}
// // .green{background-color: green;}
// // .yellow{background-color: yellow;}
// // .black{background-color: black;} 

// let arr = ["red","blue","green","yellow","black"]
// let randomKey = Math.floor(Math.random()*arr.length)
// document.body.classList.add(arr[randomKey])

// console.log(Math.random())
// console.log(Math.random()*arr.length)
// console.log(Math.floor(Math.random()*arr.length))



// ==============================================================
// ==============================================================
// ==============================================================
// // Edit Text Live On Edit
// // <input type="text">
// // <p></p>
// document.querySelector('input').oninput = function(){
//     document.querySelector('p').textContent = this.value
// }



// ==============================================================
// ==============================================================
// ==============================================================
// // Disable Right Click
// document.oncontextmenu = (e) => e.preventDefault()


// ==============================================================
// ==============================================================
// ==============================================================
// // Clock
// // <div id="clock"></div>
// let clock = document.getElementById('clock')
// setInterval(() => {
//     clock.textContent = new Date().toLocaleTimeString()
// }, 1000);



// ==============================================================
// ==============================================================
// ==============================================================
// // Random Image Every 1 Second
// // <img src="images/1.jpg">
// // img{width: 500px; height: 300px; display: block; margin: 20px auto;}
// let myImg = document.querySelector('img')
// let imagesArr = ["images/1.jpg","images/2.jpg","images/3.jpg","images/4.jpg","images/5.jpg","images/6.jpg"]

// function change(img,arr){
//     setInterval(()=>{
//         let randomKey = Math.floor(Math.random()*arr.length)
//         img.setAttribute('src',arr[randomKey])
//     },500)
// }
// change(myImg, imagesArr)



// ==============================================================
// ==============================================================
// ==============================================================
// // Slider News
// // <div class="container">
// //    <div class="left">
// //       <div></div>
// //       <div></div>
// //       <div></div>
// //       <div></div>
// //    </div>
// //    <div class="right">
// //       <div class="image"><img src=""></div>
// //       <div class="content"></div>
// //    </div>
// // </div>
// // *{margin: 0; padding: 0; box-sizing: border-box; color: white;}
// // body{font-family: Arial, Helvetica, sans-serif; background-color: #222;}
// // .container{width: 500px; height: 300px; display: flex; justify-content: space-between; padding: 15px; margin: 20px auto; background-color:bisque;}
// // .container > div{width: 47%;}
// // .container .left{display: flex; flex-direction: column; justify-content: space-between;}
// // .container .left > div{background-color: teal; height: 22%; padding: 10px; overflow: hidden;}
// // .container .right{outline: 16px solid teal;}
// // .container .right .image{width: 100%; height: 65%;}
// // .container .right .image img{width: 100%; height: 100%;}
// // .container .right .content{background-color: yellowgreen; height: 35%; padding: 10px;}

// let imagesArr = ["images/1.jpg","images/2.jpg","images/3.jpg","images/4.jpg"]
// let titleArr = ["Title One","Title Two","Title Three","Title Four"]
// let contentArr = ["Content One One One","Content Two Two Two","Content Three Three Three","Content Four Four Four",]
// let titles = document.querySelectorAll('.container .left div')
// let image = document.querySelector('.container .right .image img')
// let content = document.querySelector('.container .right .content')
// let counter = 0

// for(let i = 0; i < titleArr.length; i++){
//     titles[i].textContent = titleArr[i]
// }

// titles[0].style.backgroundColor = 'yellowgreen'
// content.textContent = contentArr[0]
// image.setAttribute('src', imagesArr[0])

// setInterval(()=>{
//     titles.forEach((el)=> el.style.backgroundColor = '')
//     titles[counter].style.backgroundColor = 'yellowgreen'
    
//     content.textContent = contentArr[counter]
    
//     image.setAttribute('src', imagesArr[counter])

//     counter++
//     counter >= titleArr.length ? counter = 0 :''

// },1000)



// ==============================================================
// ==============================================================
// ==============================================================
// // News Line
// // <div class="container">
// //    <div class="ul">
// //       <ul>
// //          <li><a href="#">انخفاض بدرجات الحرارة غدا بجميع الأنحاء وشبوة والعظمي بالقاهرة 38 درجة</a></li>
// //          <li><a href="#">الضرائب: تواصلنا مع مقرات الشركات الدولية بمصر لرصد أرباح اليوتيوبرز</a></li>
// //          <li><a href="#">الصحة: الطفل المدخن سلبيا يستنشق 50 مادة مسرطنة</a></li>
// //       </ul>
// //    </div>
// //    <div class="logo"><span>عاجل</span></div>
// // </div>
// // *{margin: 0; padding: 0; box-sizing: border-box}
// // .container{background-color: #333; margin: 50px auto; width: 600px; display: flex; justify-content: space-between;  padding: 10px;}
// // .container > div {display: flex; align-items: center; }
// // .container .ul{width: 85%; overflow: hidden; background-color: #444; height: 40px; padding: 0 15px; direction: rtl;}
// // .container .ul ul{list-style: none;}
// // .container .ul ul li a{text-decoration: none; color: #ccc;}
// // .container .logo{background-color: #222; width: 13%; justify-content: center; color: yellowgreen;}
// // .container .logo span{animation: hideShow 1.3s infinite; color: yellowgreen;}
// // .container .ul ul li a:hover{color: white;}
// // @keyframes hideShow {
// //    0%{opacity: 0; transform: scale(.5);}
// //    50%{opacity: 1; transform: scale(1.5);}
// //    100%{opacity: 0; transform: scale(.5);}
// // }

// let lis = document.querySelectorAll('.container ul li')
// let arr = []
// let counter = 0

// lis.forEach((li)=>{
//     arr.push(li)
//     li.style.display = 'none'
//     li.onmouseover = () => clearInterval(int)
//     li.onmouseleave = () => setInterval(fun,2000)
// })
// arr[arr.length-1].style.display = ''
// let int = setInterval(fun,2000)

// function fun(){
//     arr.forEach((li)=>{
//         li.style.display = 'none'
//     })    
//     arr[counter].style.display = ''
//     counter++
//     counter >= arr.length ? counter = 0 :''
// }



// ==============================================================
// ==============================================================
// ==============================================================
// // Search Hash In Link
// if(window.location.hash){
//    if(window.location.hash.indexOf('ziad') === 1){
//     console.log(window.location.hash.slice(1))
//    }
// }else{
//     console.log("No Hash In Link")
// }



// ==============================================================
// ==============================================================
// ==============================================================
// // Redirect URL
// function Go(url){
//     url !== '' ? window.location = 'https://www.w3schools.com/' :''
// }
// window.onclick = Go 



// ==============================================================
// ==============================================================
// ==============================================================
// // Slider
// // <div class="container">
// // <div class="slide main">
// //   <img src="images/1.jpg">
// //   <div class="counter">1 / 3</div>
// //   <div class="caption">Caption One</div>
// // </div>
// // <div class="slide">
// //    <img src="images/2.jpg">
// //    <div class="counter">2 / 3</div>
// //    <div class="caption">Caption Two</div>
// //  </div>
// //  <div class="slide">
// //    <img src="images/3.jpg">
// //    <div class="counter">3 / 3</div>
// //    <div class="caption">Caption Three</div>
// //  </div>
// // 
// // <span class="prev">&#10094;</span>
// // <span class="next">&#10095;</span>
// // 
// // <div class="dots">
// //    <span data-dot="1" class="active"></span>
// //    <span data-dot="2"></span>
// //    <span data-dot="3"></span>
// // </div>
// // </div>
// // *{box-sizing: border-box; margin: 0; padding: 0}
// // .container{overflow: hidden; position: relative; width: 550px; height: 300px; margin: 20px auto; color: white;}
// // .container .slide, .container .slide img{width: 100%; height: 100%}
// // .container .slide{animation: show 1s; display: none;}
// // @keyframes show {from{opacity: .4;} to{opacity: 1;}}
// // .container .slide .counter{position: absolute; top: 8px; left: 8px;}
// // .container .slide .caption{position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%);}
// // .container .prev, .container .next{user-select: none; position: absolute; top: 50%; transform: translateY(-50%); padding: 10px; cursor: pointer; transition: .4s;}
// // .container .prev:hover, .container .next:hover{background-color: #222;}
// // .container .prev{left: 0; border-radius: 0 4px 4px 0;}
// // .container .next{right: 0; border-radius: 4px 0 0 4px;}
// // .container .dots{position: absolute; bottom: 5px; left: 50%; transform: translateX(-50%);}
// // .container .dots > span{background-color: #888; width: 13px; height: 13px; display: inline-block; border-radius: 50%; cursor: pointer; transition: .4s;}
// // .container .dots > span:hover, .container .dots > span.active{background-color: #222;}
// // .container .main{display: block;}

// let slideIndex = 0
// let slides = document.querySelectorAll('.container .slide')
// let dots = document.querySelectorAll('.container .dots span')

// function slider(index){
//     for(let i = 0; i < slides.length; i++){
//         slides[i].classList.remove('main')
//         dots[i].classList.remove('active')
//     }
//     slides[index].classList.add('main')
//     dots[index].classList.add('active')
// }
// function prev(){
//     slideIndex > 0 ? slideIndex-- : slideIndex = dots.length-1
//     slider(slideIndex)
// }
// function next(){
//     slideIndex < slides.length-1 ? slideIndex++ : slideIndex = 0
//     slider(slideIndex)
// }

// setInterval(function(){
//     slideIndex++
//     slideIndex > slides.length-1 ? slideIndex = 0 :''
//     slider(slideIndex)
// }, 5000);

// document.querySelector('.container .prev').onclick = () => prev(slideIndex)
// document.querySelector('.container .next').onclick = () => next(slideIndex)

// dots.forEach((dot) =>{
//     dot.onclick = () =>{
//         dots.forEach((dot) => dot.classList.remove('active'))
//         this.classList.add('active')
//         slider(dot.dataset.dot-1)
//     }
// })



// ==============================================================
// ==============================================================
// ==============================================================
// // Sweet Alert Lib
// // <script src="https://unpkg.com/sweetalert/dist/sweetalert.min.js"></script>
// swal({
//     title: "Are you sure?",
//     text: "Once deleted, you will not be able to recover!",
//     icon: "warning",
//     buttons: true,
//     dangerMode: true
// })
// .then((val) => {
//     if (val) {
//         swal("Done, Your Item has been deleted!", {icon: "success"});
//     }
//     console.log(val)
// });



// ==============================================================
// ==============================================================
// ==============================================================


// ==============================================================
// ==============================================================
// ==============================================================



// ==============================================================
// ==============================================================
// ==============================================================



// ==============================================================
// ==============================================================
// ==============================================================



// ==============================================================
// ==============================================================
// ==============================================================



// ==============================================================
// ==============================================================
// ==============================================================

















