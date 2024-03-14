const errors = document.querySelectorAll(".hidden")
const submit = document.querySelector(".submit")
const error = document.querySelector(".error")


submit.addEventListener("click",()=>{
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if(email.value.trim() == "" || !emailRegex.test(email.value)){
        errors.forEach(error =>{
            error.classList.remove("hidden")
        })
    }else{
        errors.forEach(error =>{
            error.classList.add("hidden")
        })
    }
})
