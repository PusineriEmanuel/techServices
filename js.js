function modo_oscuro(){
var a = document.getElementsByTagName("html");
var b = document.getElementsByTagName("p");
var c = document.getElementsByTagName("footer"); 
var d = document.getElementsByTagName("body"); 
var e = document.getElementsByTagName("h1");
var f = document.getElementsByTagName("h2"); 
var g = document.getElementsByTagName("h3"); 
//var h = document.getElementsByClassName("") 
var h = document.getElementsByClassName("botoneraColor"); 
var j = document.getElementById("logo-margin").src="img/logo_transparentWhite.png"; 
var k = document.getElementById("logo-margin0").src="img/logo_transparentWhite.png";
var q = document.getElementsByTagName("a"); 
var qw = document.getElementsByClassName("card-title");
var qe = document.getElementsByClassName("card");


var i;

for (i = 0; i < a.length; i++) {
  a[i].style.backgroundColor = "#3D3D3D";
}

for (i = 0; i < b.length; i++) {
  b[i].style.color = "white";
}

for (i = 0; i < c.length; i++) {
  c[i].style.backgroundColor = "#242423";
}

for (i = 0; i < d.length; i++) {
  d[i].style.backgroundColor = "#3D3D3D";
}

for (i = 0; i < e.length; i++) {
  e[i].style.color = "white";
}

for (i = 0; i < f.length; i++) {
  f[i].style.color = "white";
}

for (i = 0; i < g.length; i++) {
  g[i].style.color = "white";
}

for (i = 0; i < h.length; i++) {
  h[i].style.backgroundColor = "#242423";
}

for (i = 0; i < q.length; i++) {
  q[i].style.color = "white";
}

for (i = 0; i < qw.length; i++) {
  qw[i].style.color = "white";
}

for (i = 0; i < qe.length; i++) {
  qe[i].style.backgroundColor = "#242423";
}


}




function reveal() {
  var reveals = document.querySelectorAll(".reveal");

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}

window.addEventListener("scroll", reveal);