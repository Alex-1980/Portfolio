let underline = document.querySelector("#underline");
let navMenu = document.querySelectorAll("#nav-menu a");

navMenu.forEach((menu) =>
  menu.addEventListener("click", (e) => navMenuIndicator(e))
);

function navMenuIndicator(e) {
  underline.style.left = e.currentTarget.offsetLeft + "px"
  underline.style.width = e.currentTarget.offsetWidth + "px";
  underline.style.top = e.currentTarget.offsetTop + e.currentTarget.offsetHeight - 10 + "px";
}


function myToggle() {
  let navToggle = document.getElementById("nav-menu");
  if (navToggle.style.display === "block") {
    navToggle.style.display = "none";
    underline.style.opacity = 0;
  } else {
    navToggle.style.display = "block";
    underline.style.opacity = 1;
  }
} // myToggle()

let slidePos = 0;
let slideTimer = setInterval('SlideImage()', 5000);
let slider = document.querySelector('#slider');

function SlideImage() {
    slidePos -= 1870;
    if(slidePos <= -5610)
        slidePos = 0;
    $('#slider').animate({
        backgroundPosition: slidePos
    }, 1000, 'swing');
} // SlideImage()

let themeButton = document.getElementById('themeButton');
let body = document.querySelector('body');
let nav = document.querySelector('.topnav');
let icons = document.querySelectorAll('.icon');

function SwapTheme() {
    if(themeButton.value=="Dark Mode") {
        themeButton.value="Light Mode"
        body.setAttribute('style', 'background: #333; color: white;');
        nav.setAttribute('style', 'background: rgb(72, 69, 69); color: #999');
        for(let i = 0; i < icons.length; i++) {
          icons[i].setAttribute('style', 'color: white;');
        } // for
    } else {
        themeButton.value="Dark Mode"
        body.setAttribute('style', 'background: #ecc4c4; color: #333;');
        nav.setAttribute('style', 'background: #aaa;  color: #333;');
        for(let i = 0; i < icons.length; i++) {
          icons[i].setAttribute('style', 'color: black;');
        } // for
      }
} // SwapTheme()