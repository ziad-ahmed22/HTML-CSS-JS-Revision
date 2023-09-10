// =============================================================
// =============================================================
// =============================================================
// // window
// window.document.title

// alert()
// confirm()
// prompt( , )

// ==============================

// // Heigh, Width
// window.innerHeight => No Scroll
// window.innerWidth => No Scroll
// window.outerHeight => Scroll and other
// window.outerWidth => Scroll and other

// ==============================

// // DOM
//  [clientHeight | clientWidth]
//      Include padding 
//      No scroll, No border, No margin
//  [scrollHeight | scrollWidth]
//      Include padding, Include scroll (invisible area)
//      No border, No margin
//  [offsetHeight | offsetWidth]
//      Include padding, Include Border, Include scroll
//      No margin

// ==============================

// // scroll
// window.scrollBy(h,v)
// window.scrollTo(h,v)
// window.scrollX = window.pageXOffset => getter only
// window.scrollY = window.pageYOffset => getter only

// // DOM
// scrollTop => setter , getter
// scrollLeft => setter , getter
// document.documentElement.scrollTop => <html></html>
// document.body.scrollTop => <body></body>

// ==============================

// setTimeout(fun,millisecond)
// clearTimeout(id of setTimeout)
// setInterval(fun,millisecond)
// clearInterval(id of setInterval)

// ==============================

// window.open(url, name, properties, replace)

// window.stop()
// window.close()
// window.focus()
// window.blur()
// window.print()
// window.closed

// ==============================

// // Location
// window.location.href => setter, getter
// window.location.protocol => setter, getter
// window.location.host => setter, getter
// window.location.hostname => setter, getter
// window.location.pathname => setter, getter
// window.location.search => setter, getter
// window.location.hash => setter, getter

// window.location.assign(url) >> still old page in history
// window.location.replace(url) >> replace old page from history
// window.location.reload() >> reload from browser
// window.location.reload(false) >> reload from browser
// window.location.reload(true) >> reload from server

// ==============================

// // History
// window.history.length
// window.history.back()
// window.history.forward()
// window.history.go(2)
// window.history.go(-2)

// <a href="javascript:history.back(-1)">backward</a>

// ==============================

// // Navigator
// window.navigator.appName
// window.navigator.appCodeName
// window.navigator.platform
// window.navigator.product
// window.navigator.appVersion
// window.navigator.userAgent
// window.navigator.language
// window.navigator.geolocation
// window.navigator.onLine
// window.navigator.cookieEnabled
// window.navigator.javaEnabled()

// ==============================

// User Screen
// window.screen.height
// window.screen.availHeight >> without taskbar
// window.screen.width
// window.screen.availWidth
// window.screen.colorDepth = window.screen.pixelDepth

// ==============================

// regular expression
// cookies
// session storage
// local storage
// and more in folder >> jsmore

// =============================================================
// =============================================================
// =============================================================


// =============================================================
// =============================================================
// ========================== Window ===========================
// =============================================================
// =============================================================

// //- window is the default object of browser
// window.alert("Windw.Alert")
// alert("Alert")
// window.console.log("window.console")
// console.log("console")
// console.log(window.document.title)
// console.log(document.title)
// console.log(window.innerHeight)
// console.log(innerHeight)



// =============================================================
// =============================================================
// ================= [alert | confirm | prompt] ================
// =============================================================
// =============================================================

// // alert
// alert("Hello Ziad")
// alert("Hello\nZiad")

// // confirm
// // return true or false
// let val = confirm("Do You Agree?")
// val === true ? alert(val) : alert(val)

// // prompt
// let val1 = prompt("Your Name")
// let val2 = prompt("Your Name", "Default Ziad")
// alert(val1)
// alert(val2)



// ==============================================================
// ==============================================================
// ====================== [Height | Width] ======================
// ==============================================================
// ==============================================================

// // window.innerHeight >> No Scroll
// // window.innerWidth >> No Scroll
// // window.outerHeight >> Scroll and other
// // window.outerWidth >> Scroll and other

// console.log(`inner h ${window.innerHeight}`)
// console.log(`outer h ${window.outerHeight}`)
// console.log(`inner w ${window.innerWidth}`)
// console.log(`outer w ${window.outerWidth}`)



// ==============================================================
// ==============================================================
// ===================== [Heights | Widths] =====================
// ============================= DOM ============================
// ==============================================================

// // DOM
// //- [clientHeight | clientWidth]
// //      Include padding 
// //      No scroll, No border, No margin
// //- [scrollHeight | scrollWidth]
// //      Include padding, Include scroll (invisible area)
// //      No border, No margin
// //- [offsetHeight | offsetWidth]
// //      Include padding, Include Border, Include scroll
// //      No margin

// // <div id="main"><p>Hello</p></div>
// // div{background-color:blueviolet; height: 100px; width: 100px;
// //     padding: 20px; margin: 20px; overflow: scroll; border: 10px solid;}
// // p{background-color: aqua; height: 200px; width: 200px;}

// let mainDiv = document.getElementById('main')

// console.log(mainDiv.clientHeight) // 123
// console.log(mainDiv.clientWidth) // 123
// console.log(mainDiv.scrollHeight) // 272 => padding, scroll(invisible area)
// console.log(mainDiv.scrollWidth) // 220 => padding, scroll(invisible area)
// console.log(mainDiv.offsetHeight) // 160
// console.log(mainDiv.offsetWidth) // 160



// ==============================================================
// ==============================================================
// ========================== Scrolls ===========================
// ==============================================================
// ==============================================================

// //- window.scrollBy(h,v)
// //- window.scrollTo(h,v)
// //- window.scrollX = window.pageXOffset >> getter only
// //- window.scrollY = window.pageYOffset >> getter only

// // html{scroll-behavior: smooth;}
// // body{height: 1200px; width: 1200px;}
// // button{position: fixed;}


// document.querySelector('button').onclick = function() {

//     // window.scrollBy(50,50)
//     // window.scrollBy(0,50)

//     // window.scrollTo(250,250)
//     window.scrollTo(0,250)

//     console.log(window.scrollX)
//     console.log(window.pageXOffset)
//     console.log(window.scrollY)
//     console.log(window.pageYOffset)
// }



// ==============================================================
// ==============================================================
// ========================== Scrolls ===========================
// ============================ DOM =============================
// ==============================================================

// // DOM
// // - scrollTop >> setter , getter
// // - scrollLeft >> setter , getter
// // document.documentElement.scrollTop


// // <div id="one">One</div>
// // <div id="two">Two</div>
// // <div id="three">Three</div>
// // <div id="four">Four</div>
// // <div id="five">FIve</div>

// // body{height: 3000px;}
// // div{background-color: tomato; height: 500px; width: 80%; margin: 50px;}
// // div{transform: scale(0); transition: 1s;}
// // /* div{margin-left: -600px; transition: 1s;} */
// // /* div{width: 0; transition: 1s;} */
// // .show{transform: scale(1);}
// // /* .show{margin-left: 0px;} */
// // /* .show{width: 80%;} */

// document.getElementById('one').classList.add('show')

// window.onscroll = function(){
//     if(document.documentElement.scrollTop >= 330)
//         document.getElementById('two').classList.add('show')
//     else
//     document.getElementById('two').classList.remove('show')

//     if(document.documentElement.scrollTop >= 870)
//         document.getElementById('three').classList.add('show')
//     else
//         document.getElementById('three').classList.remove('show')

//     if(document.documentElement.scrollTop >= 1370)
//         document.getElementById('four').classList.add('show')
//     else
//         document.getElementById('four').classList.remove('show')

//     if(document.documentElement.scrollTop >= 1920)
//         document.getElementById('five').classList.add('show')
//     else
//         document.getElementById('five').classList.remove('show')
// }

// ==============================================================

// // <span>
// //    <button name="scroll">Click To Scroll</button>
// //    <button name="up">Up</button>
// //    <button name="one">one</button>
// //    <button name="two">two</button>
// //    <button name="three">three</button>
// //    <button name="four">four</button>
// //    <button name="five">five</button>
// //    <button name="six">six</button>
// //    <button name="seven">seven</button>
// // </span>
// // <div>one</div><div>two</div><div>three</div><div>four</div><div>five</div><div>six</div><div>seven</div>

// // html{scroll-behavior: smooth;}
// // body{height: 2500px;}
// // span{position: fixed; top: 10px; left: 50%; transform: translate(-50%);}
// // div:nth-of-type(1){background-color: tomato;}
// // div:nth-of-type(2){background-color: violet;}
// // div:nth-of-type(3){background-color:yellow;}
// // div:nth-of-type(4){background-color:teal;}
// // div:nth-of-type(5){background-color:yellowgreen;}
// // div:nth-of-type(6){background-color:hotpink;}
// // div:nth-of-type(7){background-color:indigo;}
// // div{height: 200px; margin: 50px;}
// // .active-btn{background-color: #bbb;}

// let btns = document.querySelectorAll('button')
// let scroll = 0;

// for(let btn of btns){
//     btn.onclick = function() {
//         for(let btn of btns) btn.classList.remove('active-btn')
//         this.classList.add('active-btn')

//         if(this.name === 'scroll') scroll += 100
//         if(this.name === 'up') scroll = 0
//         if(this.name === 'one') scroll = 0
//         if(this.name === 'two') scroll = 250
//         if(this.name === 'three') scroll = 500
//         if(this.name === 'four') scroll = 750
//         if(this.name === 'five') scroll = 1000
//         if(this.name === 'six') scroll = 1250
//         if(this.name === 'seven') scroll = 1500
//         document.documentElement.scrollTop = scroll
//     }
// }



// =============================================================
// =============================================================
// ======================== setTimeout =========================
// =============================================================
// =============================================================

// //- wait time to run function
// //     setTimeout(function, milliseconds, param1, param2, param3)
// //     clearTimeout(id of setTimeout)

// ========

// setTimeout(function(){
//     console.log("Hello After 2 Second")
// }, 2000)

// ========
// ========

// function hi(){
//     console.log("Hello After 2 Second")
// }
// setTimeout(hi, 2000)

// ========
// ========

// let id = setTimeout(function(){
//     console.log("Hello After 2 Second")
// }, 2000)

// console.log(id) // 1
// window.onclick = function(){clearTimeout(id)} 

// ========
// ========

// let id = setTimeout(() => console.log("Hello After 2 Second"), 2000)
// console.log(id) // 1
// window.onclick = function(){clearTimeout(id)} 



// ==============================================================
// ==============================================================
// ========================= setInterval ========================
// ==============================================================
// ==============================================================

// // run function many time
// //     setInterval(function, milliseconds, param1, param2, param3)
// //     clearInterval(id of setInterval)

// ========

// setInterval(function(){
//     console.log("Hello Every 1 Second")
// }, 1000)

// ========
// ========

// function hi(){
//     console.log("Hello Every 1 Second")
// }
// setInterval(hi, 1000)

// ========
// ========

// let id = setInterval(function(){
//     console.log("Hello Every 1 Second")
// }, 1000)

// console.log(id) // 1
// window.onclick = function(){clearInterval(id)} 

// ========
// ========

// let id = setInterval(() => console.log("Hello Every 1 Second"), 1000)
// console.log(id) // 1
// window.onclick = function(){clearInterval(id)} 


// ==============================================================

// // count down timer
// // <div>10</div>
// let myDiv = document.querySelector('div')
// setInterval(() => {
//     if(myDiv.textContent > 0){
//         myDiv.textContent -= 1
//     } else{
//         myDiv.textContent = 'Done'
//     }
// }, 250);

// ===========

// // count down timer
// // <div>10</div>
// let myDiv = document.querySelector('div')
// let timeO = setInterval(() => {
//     if(myDiv.textContent <= 0){
//         myDiv.textContent = 'Done'
//         clearInterval(timeO)
//     }
//     else{
//         myDiv.textContent -= 1
//     }
// }, 250);



// ==============================================================
// ==============================================================
// ============================ open ============================
// ==============================================================
// ==============================================================

// // window.open(url, name, properties, replace)
// //   name >>> مش اسم الويندو ده عشان توصله من خلاله
// //   
// //      (_blank) | _self | _parent | _top
// //   properties
// //      width | height | left | top | menubar | status
// //      scrollbars | titlebar | toolbar | resizable
// //   replace
// //      true >> replaces the current document in the history list
// //      false >> creates a new entry in the history list


// document.querySelector('.open').onclick = function(){
//     // window.open()
//     // window.open('https://www.google.com')
//     // window.open('https://www.google.com', '_self')
//     // window.open('https://www.google.com', '_blank', 'width=400, height=400, scrollbars=no')
//     // window.open('https://www.twitter.com', '_blank', 'width=400, height=400', 'false')
// }



// ==============================================================
// ==============================================================
// ============ [close | print | stop | blur | focus] ===========
// ==============================================================
// ==============================================================

// // window.stop()
// // window.close()
// // window.focus()
// // window.blur()
// // window.print()

// document.querySelector('button').onclick = function() {
//     window.open('', '_blank', 'width=400, height=400, left=100, top=100')
//     // window.close() // my main window
// }

// ===============

// document.querySelector('button').onclick = function() {
//     let win = window.open('', '_blank', 'width=400, height=400, left=100, top=100')
//     // win.close()
// }



// ==============================================================
// ==============================================================
// ========================== Location ==========================
// ==============================================================
// ==============================================================

// // >>>setter, getter<<<
// // window.location.href >> 'https://www.facebook.com/magicanoo0/posts/1218314338992382'
// // window.location.protocol >> 'https:'
// // window.location.host >> 'www.facebook.com'
// // window.location.hostname >> 'www.facebook.com'
// // window.location.pathname >> '/magicanoo0/posts/1218314338992382'
// // window.location.search >> ?ngkg (querystring)
// // window.location.hash >> #elzero

// // window.location.assign(url) >> still old page in history
// // window.location.replace(url) >> replace old page from history
// // window.location.reload() >> reload from browser
// // window.location.reload(false) >> reload from browser
// // window.location.reload(true) >> reload from server

// console.log(location.href)
// location.href = 'https://www.google.com'
// location.href = 'main.html'
// location.href = '#div-id'
// location.href = 'mailto:ziiadd2211@gmail.com'

// if(window.location.hash.indexOf('ziad') > -1) {console.log("Good")}



// ==============================================================
// ==============================================================
// =========================== History ==========================
// ==============================================================
// ==============================================================

// window.history.length
// window.history.back()
// window.history.forward()
// window.history.go(2)
// window.history.go(-2)

// <a href="javascript:history.back(-1)">backward</a>



// ==============================================================
// ==============================================================
// ========================== Navigator =========================
// ==============================================================
// ==============================================================

// // window.navigator.appName
// // window.navigator.appCodeName
// // window.navigator.platform
// // window.navigator.product
// // window.navigator.appVersion
// // window.navigator.userAgent
// // window.navigator.language
// // window.navigator.geolocation
// // window.navigator.onLine
// // window.navigator.cookieEnabled
// // window.navigator.javaEnabled()

// console.log(navigator.appName) // Netscape
// console.log(navigator.appCodeName) // Mozilla
// console.log(navigator.platform) // Win32
// console.log(navigator.product) // Gecko
// console.log(navigator.appVersion)
//     // 5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/93.0.4577.82 Safari/537.36
// console.log(navigator.userAgent)
//     // Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/93.0.4577.82 Safari/537.36
// console.log(navigator.language) // en-US
// console.log(navigator.geolocation) // Geolocation{}
// console.log(navigator.onLine) // true
// console.log(navigator.cookieEnabled) // true
// console.log(navigator.javaEnabled()) // false



// ==============================================================
// ==============================================================
// ======================== User Screen =========================
// ==============================================================
// ==============================================================

// // window.screen.height
// // window.screen.availHeight >> without taskbar
// // window.screen.width
// // window.screen.availWidth
// // window.screen.colorDepth = window.screen.pixelDepth

// console.log(screen.height) // 864
// console.log(screen.width) // 1536
// console.log(screen.availHeight) // 834
// console.log(screen.availWidth) // 1536
// console.log(screen.colorDepth) // 24
// console.log(screen.pixelDepth) // 24


// ==============================================================
// ==============================================================
// =========================== More =============================
// ==============================================================
// ==============================================================

// regular expression
// cookies
// sessiom storage
// local storage 
// and more in folder >>> jsmore

// ==============================================================
// ==============================================================
// ==============================================================
// ==============================================================
// ==============================================================
// ==============================================================
// ==============================================================