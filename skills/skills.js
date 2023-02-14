const carousel = document.querySelector(".carousel")
const slides = document.querySelectorAll(".slide")
const nextButton = document.querySelector(".next")
let currentSlide = 0

function goToSlide(n) {
  slides[currentSlide].classList.remove("active")
  currentSlide = (n + slides.length) % slides.length
  slides[currentSlide].classList.add("active")
}

function nextSlide() {
  goToSlide(currentSlide + 1)
}

nextButton.addEventListener("click", () => {
  // Show first slide immediately
  goToSlide(0)

  // Start automatic slide change every 2 seconds
  let slideInterval = setInterval(nextSlide, 2000)
})
