let slideIndex = 1;
handleSlide(slideIndex);

function handleClickArrow(slide) {
  handleSlide((slideIndex += slide));
}

function hancleChangeCurrSlide(slide) {
  handleSlide((slideIndex = slide));
}

function handleSlide(currSlide) {
  let item;
  let slides = document.getElementsByClassName("slider-item");
  let dots = document.getElementsByClassName("dot-item");

  if (currSlide > slides.length) {
    slideIndex = 1;
  }

  if (currSlide < 1) {
    slideIndex = slides.length;
  }

  for (item = 0; item < slides.length; item++) {
    slides[item].style.display = "none";
  }

  for (item = 0; item < dots.length; item++) {
    dots[item].className = dots[item].className.replace(" active", "");
  }

  slides[slideIndex - 1].style.display = "flex";
  dots[slideIndex - 1].className += " active";
}
