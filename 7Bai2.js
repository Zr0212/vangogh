function myFunction() {
  var x = document.getElementById("myLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById("logo").style.height = "60px";
    document.getElementById("navbar-right").style.padding = "5px";
    document.getElementById("navbar").style.padding = "0 calc((100% - 1000px)/2)"
  } else {
    document.getElementById("logo").style.height = "70px";
    document.getElementById("navbar-right").style.padding = "10px 0";

  }
}
