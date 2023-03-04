let slideIndex = 1;
const slides = document.querySelectorAll(".courses__item"); 

function showSlides(numSlides) {
  let i;
  if (slideIndex > slides.length - numSlides + 1) {
    slideIndex = slides.length - numSlides + 1;
  }
  if (slideIndex < 1) {
    slideIndex = 1;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = slideIndex - 1; i < slideIndex + numSlides - 1; i++) {
    slides[i].style.display = "flex";
  }
}

function changeSlides(n) {
  showSlides(getNumSlides());
  slideIndex += n;
  showSlides(getNumSlides());
}

function getNumSlides() {
  if (window.innerWidth < 768) {
    return 1;
  } else if (window.innerWidth < 1200) {
    return 2;
  } else {
    return 3;
  }
}

function widthChangeCallback(myMediaQuery) {
  if (myMediaQuery.matches) {
    showSlides(getNumSlides()); 
    document.querySelector("#next_bt").onclick = function(){changeSlides(1);}
    document.querySelector("#prev_bt").onclick = function(){changeSlides(-1);}
  } else {
    showSlidesMob(slideIndex);
    document.querySelector("#next_bt").onclick = function(){changeSlideMob(1);}
    document.querySelector("#prev_bt").onclick = function(){changeSlideMob(-1);}
  }
}

function showSlidesMob(n) {
  showSlides(1);
}

showSlides(getNumSlides());
document.querySelector("#next_bt").onclick = function() { changeSlides(1); }
document.querySelector("#prev_bt").onclick = function() { changeSlides(-1); }
window.addEventListener("resize", function() { showSlides(getNumSlides()); });
const myMediaQuery = window.matchMedia("(min-width: 500px)");
myMediaQuery.addEventListener("change",widthChangeCallback);
widthChangeCallback(myMediaQuery);