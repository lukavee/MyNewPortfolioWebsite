"use strict"

const checkbox = document.querySelector('input[type="checkbox"]')
const video = document.querySelector(".video-bg")
const image = document.querySelector(".backgroundImage")
const hireMeBtn = document.querySelector(".hireMeBtn")

checkbox.addEventListener("click", function () {
  if (this.checked) {
    image.style.display = "none"
    video.play()
  } else {
    image.style.display = "inline"
    video.pause()
  }
})

hireMeBtn.addEventListener("click", function () {
  window.location.href = "mailto:lukaposlovni23@gmail.com.com"
})
