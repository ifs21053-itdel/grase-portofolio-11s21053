//NAVIGATION BAR
let menu = document.querySelector("#menu-bars");
let header = document.querySelector("header");

menu.onclick = () => {
  menu.classList.toggle("fa-times");
  header.classList.toggle("active");
};

window.onscroll = () => {
  menu.classList.remove("fa-times");
  header.classList.remove("active");
};

//CURSOR
let cursor1 = document.querySelector(".cursor-1");
let cursor2 = document.querySelector(".cursor-2");

window.onmousemove = (e) => {
  cursor1.style.top = e.pageY + "px";
  cursor1.style.left = e.pageX + "px";
  cursor2.style.top = e.pageY + "px";
  cursor2.style.left = e.pageX + "px";
};

document.querySelectorAll("a").forEach((links) => {
  links.onmouseenter = () => {
    cursor1.classList.add("active");
    cursor2.classList.add("active");
  };

  links.onmouseleave = () => {
    cursor1.classList.remove("active");
    cursor2.classList.remove("active");
  };
});

//CONTACT
function validateForm() {
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var number = document.getElementById("number").value;
  var message = document.getElementById("message").value;

  if (name === "" || email === "" || number === "" || message === "") {
    alert("Please fill all the forms!");
    return false;
  }
  if (!isValidEmail(email)) {
    alert("Please enter a valid email address!");
    return false;
  }
  if (!isValidPhoneNumber(number)) {
    alert("Please enter a valid phone number with at least 12 digits!");
    return false;
  }
  alert("Message sent!");
  return true;
}

function isValidEmail(email) {
  //validasi email menggunakan regular expression
  var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  return emailPattern.test(email);
}
function isValidPhoneNumber(number) {
  //validasi nomor telepon: setidaknya 12 digit
  var phoneNumberPattern = /^\d{12,}$/;
  return phoneNumberPattern.test(number);
}

document.getElementById("form").addEventListener("submit", function (event) {
  if (!validateForm()) {
    event.preventDefault();
  }
});

//CAROUSEL
let slideIndex = 1;
showSlides(slideIndex);

// next/previous control
function plusSlides(n) {
  showSlides((slideIndex += n));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("demo");
  let captionText = document.getElementById("caption");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
  captionText.innerHTML = dots[slideIndex - 1].alt;
}

