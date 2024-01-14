// menu button begin
let menuButton = document.querySelector("#menuButton");
let menu = document.querySelector("#header nav");
menuButton.addEventListener("click", () => {
  menu.classList.toggle("open");
});

// menu button end

// showDropdown menu begin

function showDropdown() {
  document.getElementById("myDropdown").classList.toggle("show");
}

window.onclick = function (event) {
  if (!event.target.matches(".dropdown li")) {
    let dropdowns = document.getElementsByClassName("dropdown-content");
    for (let i = 0; i < dropdowns.length; i++) {
      let openDropdown = dropdowns[i];
      if (openDropdown.classList.contains("show")) {
        openDropdown.classList.remove("show");
      }
    }
  }
};

// showDropdown menu end

// splide begin
let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  slides[slideIndex - 1].style.display = "block";
  setTimeout(showSlides, 3000); // Change image every 2 seconds
}

// splide end

// timer begin
let countDownDate = new Date("July 5, 2024 15:37:25").getTime();

// Update the count down every 1 second
setInterval(function () {
  // Get today's date and time
  let now = new Date().getTime();

  // Find the distance between now and the count down date
  let distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  let days = Math.floor(distance / (1000 * 60 * 60 * 24));
  let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="demo"
  let timerHtml = document.getElementById("timer");
  if (timerHtml) {
    timerHtml.innerHTML =
      days + "D  " + hours + "H  " + minutes + "M  " + seconds + "S";
  }
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("timer").innerHTML = "EXPIRED";
  }
}, 1000);

// timer end
// gallery image click scale begin

var modal = document.querySelector("#myModal");
var img = document.querySelectorAll(".column-img");
var modalImg = document.querySelector("#img01");
var captionText = document.querySelector("#caption");
if (modal) {
  for (let i = 0; i < img.length; i++) {
    img[i].addEventListener("click", function () {
      // console.log(img[i].src);
      modal.classList.add("show-block");
      let imgUrl = img[i].src;
      modalImg.src = imgUrl;
      captionText.innerHTML = this.alt;
      // cbox[i].classList.toggle("red");
    });
  }

  var span = document.getElementsByClassName("close")[0];

  span.onclick = function () {
    modal.classList.remove("show-block");
  };
}

// gallery image click scale end

//fans page begin
let txt = document.querySelector("#message-board");
let btn = document.querySelector("#message-submit");
let ul = document.querySelector(".message-ul");
if (btn) {
  btn.onclick = function () {
    if (txt.value == "") {
      alert("Please put in text");
    } else {
      let li = document.createElement("li");
      ul.appendChild(li);

      li.innerHTML = txt.value;
      txt.value = "";
    }
  };
}

//fans page end
