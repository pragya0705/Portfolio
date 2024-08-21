var preloder= document.querySelector(".preloader");
window.addEventListener("load",vanish);
function vanish(){
  preloder.classList.add("disppear");
}
//made by vipul mirajkar thevipulm.appspot.com

var TxtType = function (el, toRotate, period) {
  this.toRotate = toRotate;
  this.el = el;
  this.loopNum = 0;
  this.period = parseInt(period, 10) || 2000;
  this.txt = '';
  this.tick();
  this.isDeleting = false;
};

TxtType.prototype.tick = function () {
  var i = this.loopNum % this.toRotate.length;
  var fullTxt = this.toRotate[i];

  if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
  } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
  }

  this.el.innerHTML = '<span class="wrap">' + this.txt + '</span>';

  var that = this;
  var delta = 200 - Math.random() * 100;

  if (this.isDeleting) { delta /= 2; }

  if (!this.isDeleting && this.txt === fullTxt) {
    delta = this.period;
    this.isDeleting = true;
  } else if (this.isDeleting && this.txt === '') {
    this.isDeleting = false;
    this.loopNum++;
    delta = 500;
  }

  setTimeout(function () {
    that.tick();
  }, delta);
};

window.onload = function () {
  var elements = document.getElementsByClassName('typewrite');
  for (var i = 0; i < elements.length; i++) {
    var toRotate = elements[i].getAttribute('data-type');
    var period = elements[i].getAttribute('data-period');
    if (toRotate) {
      new TxtType(elements[i], JSON.parse(toRotate), period);
    }
  }
  // INJECT CSS
  var css = document.createElement("style");
  css.type = "text/css";
  css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid var(--orang)}";
  document.body.appendChild(css);
};
document.querySelector(".btn-chat").addEventListener("click", function () {
  location.href = "mailto:21ucc041@lnmiit.ac.in";
  var activeButton = document.querySelector("." + "btn-chat");
  activeButton.classList.add("pressed");

  setTimeout(function () {
    activeButton.classList.remove("pressed");
  }, 300)
})
document.querySelector(".btn2").addEventListener("click", function () {
  location.href = "#contact";
  var activeButton = document.querySelector("." + "btn2");
  activeButton.classList.add("pressed");

  setTimeout(function () {
    activeButton.classList.remove("pressed");
  }, 300);
})
document.querySelector(".btn1").addEventListener("click", function () {

  location.href = "#skills";
  var activeButton1 = document.querySelector("." + "btn1");
  activeButton1.classList.add("pressed");

  setTimeout(function () {
    activeButton1.classList.remove("pressed");
  }, 300);
})

document.querySelector(".b1").addEventListener("click", function () {
  var r = document.querySelector(':root');
  var rs = getComputedStyle(r);
  alert("Are you sure to change this color to ORANGE");

  r.style.setProperty('--orang', '#FF5733');
})
document.querySelector(".b2").addEventListener("click", function () {
  var r1 = document.querySelector(':root');
  var rs1 = getComputedStyle(r1);
  alert("Are you sure to change this color to GREEN");
  r1.style.setProperty('--orang', '#1cb889');
})
document.querySelector(".b3").addEventListener("click", function () {
  var r3 = document.querySelector(':root');
  var rs3 = getComputedStyle(r3);
  alert("Are you sure to change this color to RED");
  r3.style.setProperty('--orang', '#b30000');
})


document.querySelector(".b4").addEventListener("click", function () {
  alert("Are you sure to change theme");
  var activeButton2 = document.querySelector("." + "b4");
  activeButton2.classList.toggle("b5");

  
  document.querySelector("." + "boy").classList.toggle("change-background");
  document.querySelector("." + "maindiv-clubs").classList.toggle("change-background2");
  document.querySelector("." + "skillmain ").classList.toggle("change-background2");
  document.querySelector("." + "main-about").classList.toggle("change-background2");
  document.querySelector("." + "interestmain").classList.toggle("change-background2");
 
  for (let i = 0; i < 32; i++) {
    document.querySelectorAll("." + "changc")[i].classList.toggle("change-background3");


  }
  document.querySelector("." + "skill-heading").classList.toggle("change-background2");
  document.querySelector("." + "about-heading").classList.toggle("change-background2");
  document.querySelector("." + "interesthead").classList.toggle("change-background2");
  document.querySelector("." + "clubhead").classList.toggle("change-background2");
  document.querySelector("." +"foote").classList.toggle("change-background2");
  document.querySelector("." +"first-div").classList.toggle("first-div-change");

})


