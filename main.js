document.addEventListener("DOMContentLoaded", function() {
  var canvas = document.getElementById("x86");
  var ctx = canvas.getContext("2d");
  ctx.font = "30px Arial";
  ctx.fillText("x86",100,90);

  var canvas1 = document.getElementById("cpp");
  var ctx1 = canvas1.getContext("2d");
  ctx1.font = "30px Arial";
  ctx1.fillText("C++",100,90);


  var canvas2 = document.getElementById("java");
  var ctx2 = canvas2.getContext("2d");
  ctx2.font = "30px Arial";
  ctx2.fillText("Java",110,90);

  var canvas3 = document.getElementById("javascript");
  var ctx3 = canvas3.getContext("2d");
  ctx3.font = "30px Arial";
  ctx3.fillText("JavaScript",70,90);

  var canvas4 = document.getElementById("python");
  var ctx4 = canvas4.getContext("2d");
  ctx4.font = "30px Arial";
  ctx4.fillText("Python",100,90);

  var canvas5 = document.getElementById("php");
  var ctx5 = canvas5.getContext("2d");
  ctx5.font = "30px Arial";
  ctx5.fillText("PHP",120,90);

  var canvas6 = document.getElementById("mysql");
  var ctx6 = canvas6.getContext("2d");
  ctx6.font = "30px Arial";
  ctx6.fillText("MySql",100,90);


  var canvas7 = document.getElementById("mongodb");
  var ctx7 = canvas7.getContext("2d");
  ctx7.font = "30px Arial";
  ctx7.fillText("Mongodb",70,90);

  var canvas8 = document.getElementById("nodejs");
  var ctx8 = canvas8.getContext("2d");
  ctx8.font = "30px Arial";
  ctx8.fillText("Node.js",100,90);


  var canvas9 = document.getElementById("react");
  var ctx9 = canvas9.getContext("2d");
  ctx9.font = "30px Arial";
  ctx9.fillText("React",120,90);


  var canvas10 = document.getElementById("csharp");
  var ctx10 = canvas10.getContext("2d");
  ctx10.font = "30px Arial";
  ctx10.fillText("C#",120,90);
});



var animation = new TimelineLite()
animation.set('.heading', {display:"block"}).to('.pokeball', {duration: 1, opacity: 1, x:680, rotation:360, stagger:0.25, display: "block"})
              .set('.pokeball', {opacity:0})
             // .from('.pokeballOpened', {duration: 2, opacity: 1, x:650, rotation:360, stagger:0.25, display:"none"})
             .from('.pokeballOpened', {duration: 1, opacity: 0, x:600,  rotation:360, display:"block"})
             // .set('.pokeballOpened', {opacity:1})
             .to('.charmander2', {duration: 1, opacity: 1, x:600, rotation:360, stagger:0.25, display: "block", ease: "back"})
             .from('.fire', {duration: 1.5, opacity: 0, x:400, delay: 0.1, display:"block"})
             .from('.react', {duration: 1.5, opacity: 0, x:400, delay: 0.1,rotation:360, display:"block"})
             .from('.nodejs', {duration: 1.5, opacity: 0, x:400, delay: 0.1,rotation:360, display:"block"})
             .from('.mongodb', {duration: 1.5, opacity: 0, x:400, delay: 0.1,rotation:360, display:"block"})
             .from('.javascript', {duration: 1.5, opacity: 0, x:400, delay: 0.1,rotation:360, display:"block"})
             .from('.mysqlPhp', {duration: 1.5, opacity: 0, x:400, delay: 0.1,rotation:360, display:"block"});
             // .set('.charmander2', {display:"none"})

             // .set('.heading', {display:"none"})




function myFunction() {
  setTimeout(function(){ gsap.to(".me", {duration: 1, opacity: 1, x:180, stagger:0.25, display:"block"});
  }, 16000);

}

function myFunction1() {
  setTimeout(function(){
    var animation = new TimelineMax();
    animation.set("#displayCommand", {duration: 3, opacity: 1, x:100, display:"block"}).set('#displayCommand', {delay: 1, display:"none"})
    .to('.charmander2', {duration: 2, opacity: 1, x:-1780, rotation:360, stagger:0.25, display: "block"})
    .set('.charmander2', {opacity: 0})
    .to(".me", {duration: 1, opacity: 1, x:180, stagger:0.25, display:"block"});
  }, 13000);
}


$(document).ready(() =>{
  // myFunction();
  myFunction1()
  var currentYear = new Date().getFullYear();
  document.getElementById("currentYear").innerHTML = currentYear; // this function is to render the current year in the copy right field

});

$(document).ready(function(){

  $(".multiple-items").slick({
    infinitie:true,
    slidesToShow: 4,
    slidesToScroll:3,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    // arrows: true,
    // dots:true
    centerPadding: 0,
    // centerMode: true
  });
});

var app = document.getElementById('app');

var typewriter = new Typewriter(app, {
    loop: true
});

typewriter.typeString('<span style="color:#EFD819; font-size: 40px;">coding.</span>')
    .pauseFor(2500)
    .deleteChars(7)
    .typeString('<span style="color:#EFD819; font-size: 40px;">playing basketball.</span>')
    .pauseFor(2500)
    .deleteChars(19)
    .typeString('<span style="color:#EFD819; font-size: 40px;">swimming.</span>')
    .pauseFor(2500)
    .deleteChars(9)
    .typeString('<span style="color:#EFD819; font-size: 40px;">tinkering with new technologies!</span>')
    .pauseFor(2500)
    .start();
