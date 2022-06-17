const mobileMenu = document.getElementById('mobile-menu');
const searchMenuMobile = document.getElementById('search-menu-mobile')
const myDropdown = document.getElementById('myDropdown')
const dropdownBox = document.getElementById('drop-box-item')
const inputRange = document.getElementById("input-range");
const inputBottom = document.getElementById('input-range2')
const output = document.getElementById("demo");

const rangeLeft =document.getElementById('input-range-left')
const demoLeft = document.getElementById('demo-range-left')

//toggle menu 

function toggleMenu () {
    mobileMenu.classList.toggle('active')
}

//search item

function srch(){
searchMenuMobile.classList.toggle('show')
}

//click on button open dropdown and choose language

function chooseLanguage() {
myDropdown.classList.toggle('open')
}

//click on button open dropdown and choose new content

function chooseNew () {
    dropdownBox.classList.toggle('open')
}

function test (element,idRange) {
  console.log(element.value);
  const outputRange = document.getElementById(idRange);
  outputRange.innerHTML = element.value
}

//create range input

// output.innerHTML = inputRange.value;

// inputRange.oninput = function() {
//   output.innerHTML = this.value;
// }
// //
// outputRange.innerHTML = inputBottom.value;

// inputBottom.oninput = function() {
//   outputRange.innerHTML = this.value;
// }

if (navigator.userAgent.indexOf("Chrome") !== -1){
  document.body.classList.add("chrome-web");
} 