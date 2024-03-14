const fname = document.getElementById("Fname")
const lname = document.getElementById("Lname")
const email = document.getElementById("email")
const password = document.getElementById("password")
const submitBtn = document.getElementById("submitBtn")
const errors = document.querySelectorAll(".error")
const smalls = document.querySelectorAll(".smallText")



submitBtn.addEventListener("click",()=>{
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if(fname.value.trim() === "" || lname.value.trim() ==="" || password.value.trim() === "" || email.value.trim() ==="" || !emailRegex.test(email.value)){
        errors.forEach(error=>{
            error.classList.remove("hidden")
        })

        smalls.forEach(small=>{
            small.classList.remove("hidden")
        })
    }else{

        passed.forEach(pass=>{
            pass.classList.remove("hidden")
        })
    }
})

