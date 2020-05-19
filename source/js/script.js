var mainNav = document.querySelector(".main-nav");
var menuBtn = document.querySelector(".main-nav__toggle");

if(mainNav && mainNav.classList.contains("main-nav--no-js")) {
  mainNav.classList.remove("main-nav--no-js");
  mainNav.classList.add("main-nav--closed");
};

if (menuBtn) {
  menuBtn.addEventListener ("click", function(evt) {
    evt.preventDefault();
    mainNav.classList.toggle("main-nav--closed");
    menuBtn.classList.toggle("main-nav__toggle--off");
  });
}

// var nav = document.querySelector(".main-nav");
// var btn = document.querySelector(".main-nav__toggle");

// if (nav && nav.classList.contains("main-nav--nojs")) {
//   nav.classList.remove("main-nav--nojs");
//   nav.classList.add("main-nav--closed");
// }

// if (btn) {
//   btn.addEventListener("click", function (evt) {
//     evt.preventDefault();
//     nav.classList.toggle("main-nav--closed");
//     btn.classList.toggle("main-nav__toggle--off");
//   });
// }
