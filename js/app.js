const slidePage = document.querySelector(".slidepage")
const firstNextBtn = document.querySelector(".nextBtn")
const prevBtnSec = document.querySelector(".prev-1")
const nextBtnSec = document.querySelector(".next-1")
const prevBtnThird = document.querySelector(".prev-2")
const nextBtnThird = document.querySelector(".next-2")
const prevBtnFourth = document.querySelector(".prev-3")
const submitBtn = document.querySelector(".submit")
const progressText = document.querySelectorAll(".step p")
const progressCheck = document.querySelectorAll(".step .check")
const bullet = document.querySelectorAll(".step .bullet")

let max = 4
let current = 1

firstNextBtn.addEventListener("click", function(){
    slidePage.style.marginLeft = "-25%"
    bullet[current -1].classList.add("active")
    progressText[current -1].classList.add("active")
    progressCheck[current -1].classList.add("active")
    current += 1
})
nextBtnSec.addEventListener("click", function(){
    slidePage.style.marginLeft = "-50%"
    bullet[current -1].classList.add("active")
    progressText[current -1].classList.add("active")
    progressCheck[current -1].classList.add("active")
    current += 1
})
nextBtnThird.addEventListener("click", function(){
    slidePage.style.marginLeft = "-75%"
    bullet[current -1].classList.add("active")
    progressText[current -1].classList.add("active")
    progressCheck[current -1].classList.add("active")
    current += 1
})
submitBtn.addEventListener("click", function(){
    bullet[current -1].classList.add("active")
    progressText[current -1].classList.add("active")
    progressCheck[current -1].classList.add("active")
    current += 1
    setTimeout(function(){
        alert("Form Submited")
        location.reload()
    }, 800)
})
prevBtnSec.addEventListener("click", function(){
    slidePage.style.marginLeft = "0%"
    bullet[current -2].classList.remove("active")
    progressText[current -2].classList.remove("active")
    progressCheck[current -2].classList.remove("active")
    current -= 1
})
prevBtnThird.addEventListener("click", function(){
    slidePage.style.marginLeft = "-25%"
    bullet[current -2].classList.remove("active")
    progressText[current -2].classList.remove("active")
    progressCheck[current -2].classList.remove("active")
    current -= 1
})
prevBtnFourth.addEventListener("click", function(){
    slidePage.style.marginLeft = "-50%"
    bullet[current -2].classList.remove("active")
    progressText[current -2].classList.remove("active")
    progressCheck[current -2].classList.remove("active")
    current -= 1
})


const email = document.getElementById("email");
const icon1 = document.querySelector(".icon1");
const icon2 = document.querySelector(".icon2");
const errorText = document.querySelector(".error-text");
const btn = document.querySelector("button");

let regExp = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
function check(){
    if(email.value.match(regExp)){
        email.style.borderColor = "#27ae60"
        icon1.style.display ="none"
        icon2.style.display ="block"
        errorText.style.display ="none"
    }else{
        email.style.borderColor = "#e74c3c"
        icon1.style.display ="block"
        icon2.style.display ="none"
        errorText.style.display ="block"
    }
    if(email.value == ""){
        email.style.borderColor = "lightgrey"
        icon1.style.display ="none"
        icon2.style.display ="none"
        errorText.style.display ="none"
    }
}
