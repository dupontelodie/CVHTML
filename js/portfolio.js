// Get the modal
var modal = document.getElementById("modalPhotos");
var modal1 = document.getElementById("modalProjet1");
var modal2 = document.getElementById("modalProjet2");
var modal3 = document.getElementById("modalProjet3");
var modal4 = document.getElementById("modalProjet4");


// Get the button that opens the modal
var btn = document.getElementById("photos");
var btn1 = document.getElementById("projet1");
var btn2 = document.getElementById("projet2");
var btn3 = document.getElementById("projet3");
var btn4 = document.getElementById("projet4");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];
var span1 = document.getElementsByClassName("close")[1];
var span2 = document.getElementsByClassName("close")[2];
var span3 = document.getElementsByClassName("close")[3];
var span4 = document.getElementsByClassName("close")[4];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
};
btn1.onclick = function() {
  modal1.style.display = "block";
};
btn2.onclick = function() {
  modal2.style.display = "block";
};
btn3.onclick = function() {
  modal3.style.display = "block";
};
btn4.onclick = function() {
  modal4.style.display = "block";
};

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
};
span1.onclick = function() {
  modal1.style.display = "none";
};
span2.onclick = function() {
  modal2.style.display = "none";
};
span3.onclick = function() {
  modal3.style.display = "none";
};
span4.onclick = function() {
  modal4.style.display = "none";
};


// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }else if(event.target == modal1) {
    modal1.style.display = "none";
  }else if(event.target == modal2) {
    modal2.style.display = "none";
  }else if(event.target == modal3) {
    modal3.style.display = "none";
  }else if(event.target == modal4) {
    modal4.style.display = "none";
  };
};




// slider
var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}
