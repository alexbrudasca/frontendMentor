const burgerButton =document.querySelector(".burgerButton")
const CloseButton =document.querySelector(".close")
const list = document.querySelector(".list")

burgerButton.addEventListener("click",()=>{
    list.classList.toggle("active")
})