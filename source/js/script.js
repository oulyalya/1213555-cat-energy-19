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
