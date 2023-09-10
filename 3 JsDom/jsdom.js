// =============================================================
// =============================================================
// =============================================================
// // find element
// document.getElementById
// document.getElementsByTagName
// document.getElementsByClassName
// document.querySelector
// document.querySelectorAll
// document.title
// document.body
// document.inputEncoding
// document.lastModified
// document.URL
// document.images
// document.forms
// document.links => <a href=""></a>
// document.anchors => <a name=""></a>

// ==============================

// // Get, Set >>> Elements, Content, Attributes
// innerHTML
// textContent
// myDiv.className >>> element.attribute
// getAttribute(attr)
// setAttribute(attr, content)
// setAttribute("attr", ""); // attribute >> data-src=""
// setAttributeNode(attr) // attribute >>> data-src

// ==============================

// // classList
// classList
// classList.length
// classList.item(index)
// classList.contains('class')
// classList.replace('old','new')
// classList.add('class')
// classList.remove('class')
// classList.toggle('class')

// ==============================

// // Attributes
// attributes
// hasAttributes()
// hasAttribute(attr)
// removeAttribute("attr")

// ==============================

// // Create
// createElement()
// createComment()
// createTextNode()
// createAttribute()

// ==============================

// // append
// appendChild()
// removeChild()
// append()
// prepend()
// before()
// after()
// remove(el)
// el.remove()

// ==============================

// // Childrens
// children
// childNodes
// firstChild
// lastChild
// firstElementChild
// lastElementChild

// nodeName
// nodeValue
// nodeType >>> 1 = element, 3 = text, 8 = comment

// hasChildNodes()
// cloneNode()
// cloneNode(false) => element, attributes => (default)
// cloneNode(true) => element, attributes, text

// parentElement
// parentNode

// nextSibling
// nextElementSibling
// previousSibling
// previousElementSibling

// ==============================

// // Events
// onclick
// oncontextmenu => right click
// onmouseenter
// onmouseleave
// onKeyUp
// onKeyDown
// onKeyPress

// onfocus
// onblur
// onsubmit => document.forms[0].onsubmit

// window.onload
// window.onscroll
// window.onresize

// click()
// focus()
// blur()

// e.preventDefault()

// ==============================

// // Event Listener
// addEventListener('',fun)
// removeEventListener('',fun)

// ==============================

// myDiv.contains(document.querySelector('p'))
// document.querySelector('p').remove()

// ==============================

// // Styling
// style
// style.cssText
// setProperty()
// removeProperty()
// myDiv.style.fontSize = ''
// myDiv.style.cssText = ''
// // inline
// myDiv.style.setProperty("color", "red")
// myDiv.style.setProperty("color", "red", "important")
// myDiv.style.removeProperty("color")
// // external
// document.styleSheets[0].rules[0].style.setProperty("color", "red")
// document.styleSheets[0].rules[0].style.setProperty("color", "red", "important")
// document.styleSheets[0].rules[0].style.removeProperty("color")

// ==============================================================
// ==============================================================
// ==============================================================

// ==============================================================
// ==============================================================
// ========================= Find Element =======================
// ==============================================================
// ==============================================================

// // Find Element By ID >>> getElementById
// // Find Element By Tag Name >>> getElementsByTagName
// // Find Element By Class Name >>> getElementsByClassName
// // Find Element By CSS Selectors >>> querySelector >>> querySelectorAll
// // Find Element By Collection 
//-// -- title
//-// -- body
//-// -- images
//-// -- forms
//-// -- links >>> <a href=""></a>
//-// -- anchors >>> <a name=""></a>

// let myIdElement = document.getElementById("my-div");
// console.log(myIdElement);

// let myTagElements = document.getElementsByTagName("p");
// console.log(myTagElements); // array
// console.log(myTagElements[1]);

// let myClassElement = document.getElementsByClassName("my-span");
// console.log(myClassElement); // array
// console.log(myClassElement[1]);

// let myQueryElement = document.querySelector(".my-span");
// console.log(myQueryElement);

// let myQueryAllElement = document.querySelectorAll(".my-span");
// console.log(myQueryAllElement); // array
// console.log(myQueryAllElement[1]);

// console.log(document.title);
// // console.log(document.body);
// console.log(document.inputEncoding) // UTF-8
// console.log(document.lastModified) // 11/17/2021 21:04:36
// console.log(document.URL)

// console.log(document.images); // array
// console.log(document.images[0]);
// console.log(document.images[0].src);

// console.log(document.forms); // array
// console.log(document.forms[0]); // first form
// console.log(document.forms[0].one);
//     // one >> name >>>>>>  <input type="text" name="one" value="hello">
// console.log(document.forms[0].one.value); // hello

// console.log(document.links); // array
// console.log(document.links[0]); // link one 
// console.log(document.links[0].href); // https://elzero.org



// ==============================================================
// ==============================================================
// ========= Get, Set >>> Elements, Content, Attributes =========
// ==============================================================
// ==============================================================

// // DOM [Get / Set Elements Content And Attributes]
// // - innerHTML
// // - textContent
// // - Change Attributes Directly
// // - Change Attributes With Methods
// // --- getAttribute(attr)
// // --- setAttribute(attr, content)

// //         <div class="js">
// //             <p>pppp</p>
// // <p>ccc</p>
// //         </div>

// let myElement = document.querySelector(".js");

// console.log(myElement.innerHTML); // html
// console.log(myElement.textContent); // text
// console.log(myElement.innerText); // text

// myElement.innerHTML = "Text From <span>Main.js</span> File";
// myElement.textContent = "Text From <span>Main.js</span> File";


// document.images[0].src = "https://google.com";
// document.images[0].alt = "Alternate";
// document.images[0].title = "Picture";
// document.images[0].id = "pic";
// document.images[0].className = "img";


// let myLink = document.querySelector(".link");

// console.log(myLink.getAttribute("class"));
// console.log(myLink.getAttribute("href"));

// myLink.setAttribute("href", "https://twitter.com");
// myLink.setAttribute("title", "Twitter");



// ==============================================================
// ==============================================================
// ========================== classList =========================
// ==============================================================
// ==============================================================

// // classList
// //    length
// //    item(index)
// //    contains('class')
// //    replace('old','new')
// //    add('class')
// //    remove('class')
// //    toggle('class')

// // <div class="main-div show cool"></div>
// let myDiv = document.querySelector('div')

// console.log(myDiv.classList)
// console.log(myDiv.classList.length)
// console.log(myDiv.classList.item(0)) // index
// console.log(myDiv.classList[0]) // index
// console.log(myDiv.classList.contains('show'))
// console.log(myDiv.classList.replace('show','new-show'))
// console.log(myDiv.classList)

// ==============================================================

// // <input type="text" name="class" placeholder="Class Name">
// // <button id="add">Add</button>
// // <button id="remove">Remove</button>
// // <button id="toggle">Toggle</button>
// // <div></div>

// let classInput = document.querySelector('[name=class]')
// let addBtn = document.getElementById('add')
// let removeBtn = document.getElementById('remove')
// let toggleBtn = document.getElementById('toggle')
// let myDiv = document.querySelector('div')

// addBtn.onclick = () => myDiv.classList.add(classInput.value)
// removeBtn.onclick = () => myDiv.classList.remove(classInput.value)
// toggleBtn.onclick = () => myDiv.classList.toggle(classInput.value)

// ==============================================================

// //<span class="main click show">This is my p</span>
// //<button>click</button>

// let mySpan = document.querySelector('span')
// let myButton = document.querySelector('button')

// myButton.onclick = () => {
//     for(let i = 0; i < mySpan.classList.length; i++){
//         if(myButton.textContent === mySpan.classList.item(i)){
//             console.log(mySpan.classList.item(i))
//         }
//     }
// }

// ==============================================================

// // <input type="button" name="toggle" value="hide">
// // <div>Click Button To Hide Or Show Me</div>
// // .toggle{display: none;}

// let toggleBtn = document.querySelector('[name=toggle]')
// let myDiv = document.querySelector('div')

// toggleBtn.onclick = () => {
//    myDiv.classList.toggle('toggle')

//    toggleBtn.value == 'hide'
//    ? toggleBtn.setAttribute('value', 'show')
//    : toggleBtn.setAttribute('value', 'hide')
// }



// ==============================================================
// ==============================================================
// ========================= Attributes =========================
// ==============================================================
// ==============================================================

// // DOM [Check Attributes]
// // - Element.attributes
// // - Element.hasAttribute(attr)
// // - Element.hasAttributes()
// // - Element.removeAttribute("attr")

// // <p class alt ali data-src=" "></p>
// let myP = document.getElementsByTagName("p")[0];

// console.log(myP.attributes); // class alt ali data-src
// console.log(myP.hasAttributes())
// console.log(myP.hasAttribute('ali'))
// myP.removeAttribute("alt")
// console.log(myP.attributes); // class ali data-src

// if (myP.hasAttribute("data-src")) {
//     if (myP.getAttribute("data-src") === "") {
//         myP.removeAttribute("data-src");
//     } else {
//         myP.setAttribute("data-src", "New Value");
//     }
// } else {
//     console.log(`Not Found`);
// }




// ==============================================================
// ==============================================================
// ====================== Create Elements =======================
// =========================== Append ===========================
// ==============================================================
// ==============================================================

// // DOM [Create Elements]
// // - createElement
// // - createComment
// // - createTextNode
// // - createAttribute
// // - appendChild
// // - removeChild
// // setAttributeNode(attr) // attribute >>> data-src
// // setAttribute("attr", ""); // attribute >> data-src=""

// let myElement = document.createElement("div");
// let myAttr = document.createAttribute("data-custom");
// let myText = document.createTextNode("Product One");
// let myComment = document.createComment("This Is Div");

// myElement.className = "product";

// // myElement.setAttribute("data-custom", ""); // data-custom=""
// myElement.setAttributeNode(myAttr); // attribute empty >>> data-custom
// myElement.setAttribute("data-test", "Testing");

// myElement.appendChild(myComment);

// myElement.appendChild(myText);

// // myElement.removeChild(myComment);

// document.body.appendChild(myElement);



// ==============================================================
// ==============================================================
// =========================== Append ===========================
// ==============================================================
// ==============================================================

// //- appendChild(element)
// //- removeChild(element)

// //- append(element), append("text")
// //- prepend(element), prepend("text")
// //- before(element), before("text")
// //- after(element), after("text")
// //- remove(element)

// let myDiv = document.createElement('div')
// let mySpan = document.createElement('span')
// let myLink = document.createElement('a')
// let myP = document.createElement('p')

// myDiv.append(mySpan)
// myDiv.append("append text end")

// myDiv.prepend(myP)
// myDiv.prepend("prepend text first")

// myP.after("text after p")
// myP.after(myLink)

// myLink.before("text before link")
// myLink.before(myP)

// document.body.appendChild(myDiv)
// // document.body.removeChild(myDiv)
// // myDiv.remove()

// ==============================================================

// // DOM [Create Elements]

// let myElement = document.createElement("div");

// let myHeading = document.createElement("h2");
// let myHeadingText = document.createTextNode("Product Title");

// myHeading.appendChild(myHeadingText);
// myElement.appendChild(myHeading);

// let myParagraph = document.createElement("p");
// let myParagraphText = document.createTextNode("Product Description");

// myParagraph.appendChild(myParagraphText);
// myElement.appendChild(myParagraph);

// myElement.setAttribute("class","product")
// myElement.className += " p1";

// document.body.appendChild(myElement);

// ==============================================================

// // challenge
// // css
// .con{
//     background-color:brown;
//     display: flex;
//     flex-wrap: wrap;
//     justify-content: space-evenly;
//  }
//  .product{
//     background-color: antiquewhite;
//     text-align: center;
//     padding: 20px;
//     margin: 20px;
//     border-radius: 10px;
//     width: 200px;
//  }

// let myMainElement = document.createElement("div");

// for(let i = 0; i < 5; i++){
//     let myElement = document.createElement("div");

//     let myHeading = document.createElement("h2");
//     let myHeadingText = document.createTextNode(`Product Title ${i+1}`);
//     myHeading.appendChild(myHeadingText);
//     myElement.appendChild(myHeading);

//     let myParagraph = document.createElement("p");
//     let myParagraphText = document.createTextNode("Product Description");
//     myParagraph.appendChild(myParagraphText);
//     myElement.appendChild(myParagraph);

//     myElement.setAttribute("class","product")
//     // myElement.className += ` p${i+1}`;
//     // myElement.classList.add(`p${i+1}`)
//     // myElement.id = ` p${i+1}`;

//     myMainElement.appendChild(myElement);

//     // document.write("<hr>")
// }

// myMainElement.classList.add("con")
// document.body.appendChild(myMainElement);



// ==============================================================
// ==============================================================
// ========================== Childrens =========================
// ==============================================================
// ==============================================================

// // DOM [Deal With Childrens]
// // - children => Elements
// // - firstElementChild => Elements
// // - lastElementChild => Elements
// // - childNodes => Elements & Nodes
// // - firstChild => Elements & Nodes
// // - lastChild => Elements & Nodes

// // - childElementCount = children.length
// // - childNodes.length
// // - hasChildNodes()


// //- nodeName
// //- nodeValue
// //- nodeType

// // - cloneNode()

// // - parentElement
// // - parentNode

// // - nextSibling
// // - nextElementSibling
// // - previousSibling
// // - previousElementSibling


// // <div><!-- Osama -->Hello Div<p>Hello P</p><span>Hello Span</span><!-- Comment -->Hello</div>

// let myElement = document.querySelector("div");

// console.log(myElement); // div
// console.log(myElement.children); // array [p, span]
// console.log(myElement.children[0]); // p

// console.log(myElement.childNodes); // array [comment, text, p, span, comment, text]
// console.log(myElement.childNodes[0]); // <!--osama-->

// console.log(myElement.firstChild); // <!--osama-->
// console.log(myElement.lastChild); // "Hello"

// console.log(myElement.firstElementChild); // p
// console.log(myElement.lastElementChild); // span

// console.log(myElement.children.length) // 2 element only
// console.log(myElement.childElementCount) // 2 element only

// console.log(myElement.childNodes.length) // 6 element and all
// console.log(myElement.hasChildNodes()) // true

// ==============================================================

// //- nodeName
// //- nodeValue
// //- nodeType >>> 1 = element , 3 = text , 8 = comment

// // <div id="main">
// //     First Text
// //     <p>First P</p>
// //     Second Text
// //     <p>Second P</p>
// //     Final
// // </div>

// let myDiv = document.getElementById('main')

// console.log(myDiv.children) // [p, p]
// console.log(myDiv.childNodes) // [text, p, text, p, text]

// console.log(myDiv.childNodes[0]) // "First Text"
// console.log(myDiv.childNodes[0].nodeName) // #text
// console.log(myDiv.childNodes[0].tagName) // undefined
// console.log(myDiv.childNodes[0].nodeValue) // First Text
// console.log(myDiv.childNodes[0].nodeType) // 3 >>> text

// console.log(myDiv.childNodes[1]) // <p>First P</p>
// console.log(myDiv.childNodes[1].nodeName) // P
// console.log(myDiv.childNodes[1].tagName) // P
// console.log(myDiv.childNodes[1].nodeValue) // null
// console.log(myDiv.childNodes[1].nodeType) // 1 >>> element

// console.log(myDiv.childNodes[0].nodeValue) // First Text >> text
// console.log(myDiv.childNodes[1].nodeValue) // null >> element
// console.log(myDiv.childNodes[1].firstChild.nodeValue) // First P
// console.log(myDiv.childNodes[1].childNodes[0].nodeValue) // First P

// ==============================================================

// // - copy
// //    - cloneNode()
// //    - cloneNode(false) >> copy element, attributes >> (default)
// //    - cloneNode(true) >> copy element, attributes, text

// // <p id="main" class="main">Hello</p>

// let myP = document.querySelector("#main")
// let myPClone = document.querySelector("#main").cloneNode(true);
// myPClone.id = `${myPClone.id}-clone`;

// myP.after(myPClone)

// ==============================================================

//<div id="main">
//   First Text
//   <p class="p">First P</p>
//   Second Text
//   <p>Second P</p>
//   Final
//</div>
// <div id="new"> </div>

// // way one >> innert html in div
// let mainDiv = document.getElementById('main')
// let newDiv = document.getElementById('new')
// newDiv.innerHTML = mainDiv.innerHTML

// // way two >> main div
// let mainDivClone = document.getElementById('main').cloneNode(true)
// mainDivClone.id = `${mainDivClone.id}-Clone`
// let newDiv = document.getElementById('new')
// newDiv.appendChild(mainDivClone)

// ==============================================================

// // - parentElement
// // - parentNode

// //<div id="main">
// //  <button>Click</button>
// //</div>

// let mainDiv = document.getElementById('main')
// let btn = mainDiv.firstElementChild;

// console.log(btn.parentElement) // <div id="main">
// console.log(btn.parentNode) // <div id="main">

// btn.onmouseenter = function () {
//     // this.parentNode.style.display = 'none'
//     this.parentElement.style.display = 'none'
// }

// ==============================================================

// // - nextSibling
// // - nextElementSibling
// // - previousSibling
// // - previousElementSibling

// // <div id="main">
// //    First Text
// //    <p>First P</p>
// //    Second Text
// //    <p>Second P</p>
// //    Final Text
// // </div>
// // <div id="new"> </div>

// let myDiv = document.getElementById('main')

// // console.log(myDiv.children) // [p,p]
// // console.log(myDiv.childNodes) // [text, p.p, text, p, text]
// // console.log(myDiv.firstChild) // #text
// // console.log(myDiv.lastChild) // #text
// // console.log(myDiv.firstElementChild) // p
// // console.log(myDiv.lastElementChild) // p

// console.log(myDiv.firstElementChild) // <p>first P</p>
// console.log(myDiv.firstElementChild.nextSibling) // "second text"
// console.log(myDiv.firstElementChild.nextElementSibling) // <p>Second P</p>

// console.log(myDiv.firstElementChild) // <p>first P</p>
// console.log(myDiv.firstElementChild.previousSibling) // "First text"
// console.log(myDiv.firstElementChild.previousElementSibling) // null



// ==============================================================
// ==============================================================
// ============================ Events ==========================
// ==============================================================
// ==============================================================

// // DOM [Events]
// // - Use Events On HTML
// // - Use Events On JS
// // --- onclick
// // --- oncontextmenu => right click
// // --- onmouseenter
// // --- onmouseleave
// // --- onKeyUp
// // --- onKeyDown
// // --- onKeyPress

// // --- onfocus
// // --- onblur
// // --- onsubmit => document.forms[0].onsubmit

// // --- onload => window.onload
// // --- onscroll => window.onscroll
// // --- onresize => window.onresize

// // - click()
// // - focus()
// // - blur()

// // <input type="text" name=uesrname >
// // <button id="btn">Click</button>

// document.getElementById("btn").oncontextmenu = () => console.log("Clicked");

// let username = document.querySelector('[name=uesrname]')
// username.onblur = () => console.log(username.value)

// window.onresize = _ => console.log("Scroll");

// let myBtn = document.getElementById("btn")
// myBtn.onclick = () => alert("Clicked"); console.log("Clicked")
// window.onload = () => myBtn.click()

// let username = document.querySelector('[name=uesrname]')
// window.onload = () => username.focus()

// ==============================================================

// // focus(), blur(), click()

// let inputName = document.querySelector('[name=username]')
// let inputAge = document.querySelector('[name=age]')
// let btnClick = document.querySelector('[name=click]')

// window.onload = () => inputName.focus()
// inputName.onkeyup = () => inputName.value.length >= 5 ? inputAge.focus() :''
// inputAge.onkeyup = () => inputAge.value.length >= 2 ? btnClick.click() :''
// btnClick.onclick = () => alert("Clicked")

// ==============================================================

// // DOM [Events]
// // - Validate Form Practice
// // - Prevent Default

// //<form>
// //         <input type="text" name="username" placeholder="username">
// //         <input type="text" name="age" placeholder="age">
// //         <input type="submit">
// //</form>

// let usernameInput = document.querySelector("[name='username']");
// let ageInput = document.querySelector("[name='age']");

// document.forms[0].onsubmit = function (e) {
//     let usernameValid = false;
//     let ageValid = false;

//     usernameInput.value !== "" && usernameInput.value.length <= 10 ? usernameValid = true :''
//     ageInput.value !== "" ? ageValid = true : ''
//     usernameValid === false || ageValid === false ? e.preventDefault() :''
// }

// ==============================================================

// //<a href="https://www.google.com/">GOOGLE</a>

// document.links[0].onclick = function (e) {
//     console.log(e)
//     console.log(e.target) // a
//     console.log(this) // a
//     e.preventDefault()
// }



// ==============================================================
// ==============================================================
// ========================= Challenge ==========================
// ==============================================================
// ==============================================================

// // <div id="elzero" class="elzero" name="elzero">JavaScript</div>

// console.log(document.body.children[0])
// console.log(document.body.childNodes[0])
// console.log(document.body.firstChild)
// console.log(document.body.firstElementChild)

// console.log(document.getElementById('elzero'))
// console.log(document.getElementsByClassName('elzero')[0])
// console.log(document.getElementsByName('elzero')[0])
// console.log(document.getElementsByTagName('div')[0])

// console.log(document.querySelector('#elzero'))
// console.log(document.querySelector('.elzero'))
// console.log(document.querySelector('div'))
// console.log(document.querySelector('div#elzero'))
// console.log(document.querySelector('div.elzero'))
// console.log(document.querySelector('[name=elzero]'))

// console.log(document.querySelectorAll('#elzero')[0])
// console.log(document.querySelectorAll('.elzero')[0])
// console.log(document.querySelectorAll('div')[0])
// console.log(document.querySelectorAll('div#elzero')[0])
// console.log(document.querySelectorAll('div.elzero')[0])
// console.log(document.querySelectorAll('[name=elzero]')[0])

// ==============================================================

// // <div> <img src="#" alt=""/> </div>
// // <div> <img src="#" alt=""/> </div>
// // <div> <img src="#" alt=""/> </div>
// // <div> <img src="#" alt=""/> </div>
// // <div> <img src="#" alt=""/> </div>
// // <div> <img src="#" alt=""/> </div>
// // <div> <img src="#" alt=""/> </div>
// // <div> <img src="#" alt=""/> </div>
// // <div> <img src="#" alt=""/> </div>
// // <div> <img src="#" alt=""/> </div>

// for(let i = 0; i < document.images.length; i++){
//     document.images[i].src = 'https://via.placeholder.com/50'
//     document.images[i].alt = 'Logo'
// }

// Array.from(document.images).forEach(img => {
//     img.src = 'https://via.placeholder.com/50'
//     img.alt = 'Logo'
// })


// ==============================================================

// // <form action="">
// //     <input type="number" name="dollar" placeholder="USD Dollar" />
// //     <div class="result">
// //         {<span id="dollar">0</span>} USD Dollar = 
// //         {<span id="pound">0.00</span>} Egyptian Pound
// //     </div>
// // </form>

// let dollarInput = document.querySelector('[name=dollar]')
// let dollarSpan = document.getElementById('dollar')
// let poundSpan = document.getElementById('pound')

// // dollarInput.onkeyup = calc
// dollarInput.oninput = calc
// // dollarInput.onchange = calc

// function calc () {
//     dollarSpan.innerText = dollarInput.value
//     poundSpan.innerText =  (dollarInput.value * 15.6).toFixed(2)
// }

// ==============================================================

// // <div class="one" title="two">two 2</div>
// // <div class="two" title="one">one</div>

// let divOne = document.querySelector('.one')
// let divTwo = document.querySelector('.two')

// let divOneTitle = divOne.title
// let divTwoTitle = divTwo.title
// divOne.title = divTwoTitle
// divTwo.title = divOneTitle

// let divOneHtml = divOne.innerHTML
// let divTwoHtml = divTwo.innerHTML
// divOne.innerHTML = divTwoHtml
// divTwo.innerHTML = divOneHtml

// ==============================================================

// // <img src="#" alt="One" />
// // <img src="#" />
// // <img src="#" alt="Three" />
// // <img src="#" />
// // <img src="#" />

// let imgs = document.images
// for(let i of imgs){
//     i.hasAttribute('alt') ? i.alt = 'Old' : i.alt = ' New'
// }

// ==============================================================

// // <form action="">
// //     <input type="number" name="elements" class="input" placeholder="Number Of Elements" />
// //     <input type="text" name="texts" class="input" placeholder="Elements Text" />
// //     <select name="type" class="input">
// //         <option value="Div">Div</option>
// //         <option value="Section">Section</option>
// //     </select>
// //     <input type="submit" name="create" value="Create" />
// // </form>
// // <div class="results"></div>

// // .results{
// //     background-color:darkkhaki;
// //     display: flex;
// //     flex-wrap: wrap;
// //     justify-content: space-evenly;
// //     margin: 20px;
// //  }
// //  .results >* {
// //     background-color:chartreuse;
// //     padding: 20px 40px;
// //     margin: 20px;
// //     border-radius: 10px;
// //  }

// let elementNumber = document.querySelector('[name=elements]')
// let elementText = document.querySelector('[name=texts]')
// let elementType = document.querySelector('[name=type]')
// let btn = document.querySelector('[name=create]')
// let divResult = document.querySelector('.results')

// btn.onclick = function (e) {
//     e.preventDefault();
//     divResult.innerHTML = ''

//     for(let i = 0; i < elementNumber.value; i++){
//         let createdElement = document.createElement(elementType.value)
//         let createdText = document.createTextNode(elementText.value)
//         createdElement.appendChild(createdText)
//         divResult.appendChild(createdElement)
//     }

//     elementNumber.value = ''
//     elementText.value = ''
// }



// ==============================================================
// ==============================================================
// ======================= Event Listener =======================
// ==============================================================
// ==============================================================

// // Add Event Listener
// // - Attach Multiple Events
// // - on fly
// // Search
// // - Capture & Bubbling JavaScript
// // - removeEventListener

// let myP = document.querySelector("p");
// function one() {console.log("Msg From 1111111");}
// function two() {console.log("Msg From 2222222");}

// myP.onclick = one;
// myP.onclick = two; // will overwrite on one

// =====================

// let myP = document.querySelector("p");
// function one() {console.log("Msg From 1111111");}
// function two() {console.log("Msg From 2222222");}

// myP.addEventListener("click", function () {
//     console.log("Message From OnClick 1 Event");
// });
// myP.addEventListener("click", one);
// myP.addEventListener("click", two);

// ==============================================================

// // <button id="hide">Hide One</button>
// // <button id="power">Power</button>
// // <div id="divOne">Div One</div>
// // <div id="divTwo">Div Two</div>

// let hideBtn = document.getElementById('hide'),
//     powerBtn = document.getElementById('power')

// hideBtn.onclick = () => document.getElementById('divOne').style.display = 'none'

// function hideFun() {
//     document.getElementById('divTwo').style.display = 'none'
// }

// powerBtn.onclick = () => hideBtn.addEventListener('click',hideFun)
// // لما تدوس علي باور روح ادي الهايد اكشن كليك وينفز الفانكشن علي 
// // اللي هو هينفزه يعني مش هيعمل اوفر رايت

// // powerBtn.onclick = () => hideBtn.onclick = hideFun
// // لما تدوس علي باور روح خلي الهايد ينفز الفانكشن دي ويعمل اوفر رايت
// // علي اللي كان بيعمله قبل كدا



// ==============================================================
// ==============================================================
// ========================== Contains ==========================
// ==============================================================
// ==============================================================

// // <div id="main">
// //    <span id="sp">span</span>
// //    <input type="text" name="age">
// //    <p>p</p>
// // </div>

// let mainDiv = document.getElementById('main')

// console.log(mainDiv.contains(document.querySelector('p'))) // true
// console.log(mainDiv.contains(document.querySelector('#sp'))) // true
// console.log(mainDiv.contains(document.querySelector('[name=age]'))) // true
// console.log(mainDiv.contains(document.getElementById('sp'))) // true

// if(mainDiv.contains(document.getElementById('sp'))){
//     // document.getElementById('sp').remove()
// }



// ==============================================================
// ==============================================================
// =========================== Styling ==========================
// ==============================================================
// ==============================================================

// - style
// - style.cssText
// - setProperity("","") >> (inline style | style sheet)
// - removeProperity("") >> (inline style | style sheet)

// let myDiv = document.querySelector('div')

// myDiv.style.color = 'red'
// myDiv.style.fontSize = '100px'

// myDiv.style.cssText = 'color: red; font-size: 100px;'

// // inline style
// myDiv.style.setProperty("color", "red")
// myDiv.style.setProperty("color", "red", "important")
// myDiv.style.removeProperty("color")

// // external style (style sheet)
// document.styleSheets[0].rules[0].style.setProperty("color", "red")
// document.styleSheets[0].rules[0].style.setProperty("color", "red", "important")
// document.styleSheets[0].rules[0].style.removeProperty("color")

// console.log(document.styleSheets[0].rules[0].cssText)



// ==============================================================
// ==============================================================
// ========================== Challenge =========================
// ==============================================================
// ==============================================================

// // <a class="open" href="https://google.com">Google</a>
// // <a class="open" href="https://elzero.org">Elzero</a>
// // <a class="not" href="https://facebook.com">Facebook</a>
// // <a class="linked" href="https://linkedin.com">Elzero</a>

// window.onload = function(){
//     let links = document.querySelectorAll('a')
//     for(let link of links){
//         if(link.className === 'open' && link.textContent === 'Elzero'){
//             link.click()
//         }
//     }
// }

// ==============================================================
// ==============================================================
// ==============================================================
// ==============================================================

// // div class="assign">
// //   <input type="text" class="add" placeholder="Add Class" />
// //   <input type="text" class="remove" placeholder="Remove Class" />
// //   <div title="Current">Current Element</div>
// //   <div class="classes-list">
// //     <h5>Current Element Class Lists</h5>
// //     <div></div>
// //   </div>
// // </div>


//     //    body {
//     //     font-family: Arial, Helvetica, sans-serif;
//     //   }
//     //   .assign {
//     //     text-align: center;
//     //     padding-top: 20px;
//     //   }
//     //   .assign input {
//     //     padding: 10px;
//     //     width: 300px;
//     //     border: 1px solid #ddd;
//     //   }
//     //   .assign input:focus {
//     //     outline: none;
//     //     border-color: #ccc;
//     //   }
//     //   .assign [title="Current"] {
//     //     padding: 20px;
//     //     margin: 10px auto;
//     //     width: 610px;
//     //     background-color: #f1f0f0;
//     //   }
//     //   .assign .classes-list {
//     //     padding: 20px;
//     //     margin: 10px auto;
//     //     width: 610px;
//     //     background-color: #f1f0f0;
//     //   }
//     //   .assign .classes-list h5 {
//     //     margin: 0 0 10px;
//     //     text-align: left;
//     //   }
//     //   .assign .classes-list div span {
//     //     background-color: #ff5722;
//     //     padding: 6px 10px 8px;
//     //     margin-right: 5px;
//     //     border-radius: 6px;
//     //     color: white;
//     //     display: inline-flex;
//     //   }


// let addInput = document.querySelector('.add')
// let removeInput = document.querySelector('.remove')
// let currentDiv = document.querySelector('[title=Current]')
// let myDiv = document.querySelector('.assign .classes-list div')
// let arr = []

// loopClassAddArrayShow()
// addInput.addEventListener('blur', add)
// removeInput.addEventListener('blur', remove)

// function loopClassAddArrayShow(){
//     arr.length = 0
//     myDiv.textContent = ''

//     // loop in classlist add in arr
//     for(let i = 0; i < currentDiv.classList.length; i++){
//         arr.push(currentDiv.classList.item(i))
//         arr.sort()
//     }

//     // show classes from arr
//     for(let i = 0; i < arr.length; i++){
//         let mySpan = document.createElement('span')
//         let mySpanText = document.createTextNode(arr[i])
//         mySpan.appendChild(mySpanText)
//         myDiv.appendChild(mySpan)
//     }

//     if(currentDiv.classList.length <= 0){
//         myDiv.textContent = 'There Is No Classes To Show'
//     }

//     console.log(arr)
// }

// function add(){
//     if(addInput.value !== ''){
//         let a = addInput.value.toLowerCase().trim().split(" ")

//         for(let val of a){
//             if(val !== '') {currentDiv.classList.add(val)}
//         }

//         loopClassAddArrayShow()
//         addInput.value = ''
//     }
// }

// function remove(){
//     if(removeInput.value !== ''){
//         let a = removeInput.value.toLowerCase().trim().split(" ")

//         for(let val of a){
//             if(val !== '') {currentDiv.classList.remove(val)}
//         }

//         loopClassAddArrayShow()
//         removeInput.value = ''
//     }
// }


// ==============================================================
// ==============================================================
// ==============================================================

// // <div class="our-element">Our Element</div>
// // <p>Mew</p>

// document.querySelector('p').remove()

// let myDiv = document.querySelector('.our-element')

// let startDiv = document.createElement('div')
// let endDiv = document.createElement('div')
// let startDivText = document.createTextNode('Start')
// let endDivText = document.createTextNode('End')

// startDiv.setAttribute('class', 'start')
// endDiv.setAttribute('class', 'end')

// startDiv.appendChild(startDivText)
// endDiv.appendChild(endDivText)

// myDiv.before(startDiv)
// myDiv.after(endDiv)

// ==============================================================

// // <div>
// //   <span>Hello</span>
// //   <!-- We Need The Next Text Without Spaces -->
// //   Elzero
// // </div>

// console.log(document.querySelector('div').childNodes[4])
// // " Elzero "       
// console.log(document.querySelector('div').childNodes[4].nodeValue)
// //          Elzero         
// console.log(document.querySelector('div').childNodes[4].nodeValue.trim())
// // Elzero

// ==============================================================

// // <div>Element</div>
// // <span>Element</span>
// // <p>Element</p>
// // <article>Element</article>
// // <section>Element</section>

// let elements = document.body.children

// for(let i = 0; i < elements.length; i++){
//     elements[i].onclick = function(){
//         console.log(`This is ${this.nodeName}`)
//     }
// }


// // let elements = document.body.children

// // for(let i = 0; i < elements.length; i++){
// //     elements[i].onclick = function(e){
// //         console.log(`This is ${e.target.nodeName}`)
// //     }
// // }

// ==============================================================
// ==============================================================

// // container
// let container = document.createElement('div')
// container.style.cssText = "font-family: sans-serif"

// // =================
// // header
// let headerDiv = document.createElement('div')
// container.appendChild(headerDiv)
// headerDiv.style.cssText = `
//        display: flex;
//        justify-content: space-between;
//        background-color: #666;
//        padding: 10px;
//        color: white;
//        box-sizing: border-box;
// `

// // logo
// let logoDiv = document.createElement('div')
// let logoText = document.createTextNode("Z E Z O")
// logoDiv.appendChild(logoText)
// headerDiv.appendChild(logoDiv)

// // links
// let linksDiv = document.createElement('div')
// for(let i = 0; i < 4; i++){
//     let link = document.createElement('a')
//     let linkText = document.createTextNode(`link ${i+1}`)
//     link.appendChild(linkText)
//     linksDiv.appendChild(link)
//     headerDiv.appendChild(linksDiv)
//     link.id = `link${i+1}`
//     link.href = '#'
//     link.style.cssText = `
//         margin: 0 0 0 20px;
//         color: white;
//         text-decoration: none;
//     `
// }

// // =================
// // body
// let bodyDiv = document.createElement('div')
// container.appendChild(bodyDiv)
// bodyDiv.style.cssText = `
//     color: white;
//     display: flex;
//     flex-wrap: wrap;
//     justify-content: space-evenly;
//     margin-top: 20px;
// `

// for(let i = 0; i < 15; i++){
//     let divCon = document.createElement('div')
//     let headerCon = document.createElement('h2')
//     let pCon = document.createElement('p')
//     let headerConText = document.createTextNode(i+1)
//     let pConText = document.createTextNode('Product')
//     pCon.appendChild(pConText)
//     headerCon.appendChild(headerConText)
//     divCon.appendChild(headerCon)
//     divCon.appendChild(pCon)
//     bodyDiv.appendChild(divCon)
//     divCon.style.cssText = `
//         background-color: #333;
//         width: 200px;
//         margin: 6px;
//         border-radius: 5px;
//         text-align: center;
//         height: 100px
//     `
// }

// // =================
// // footer

// let footerDiv = document.createElement('div')
// let footerText = document.createTextNode('Copy Rights 2021')
// footerDiv.appendChild(footerText)
// container.appendChild(footerDiv)
// footerDiv.style.cssText = `
//     background-color: #666;
//     color: white;
//     padding: 10px;
//     text-align: center;
//     margin-top: 20px;
// `

// // =================
// // append container in body
// document.body.appendChild(container)


// ==============================================================
// ==============================================================
// ==============================================================
// ==============================================================
// ==============================================================
// ==============================================================
// ==============================================================
// ==============================================================