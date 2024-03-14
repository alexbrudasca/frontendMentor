// const inputSumit = document.getElementById('submitEmail')
const mainContainer = document.querySelector(".main")
const succesContainer = document.querySelector('.succes')
const submitBtn = document.getElementById('mainSubmit')
const backButton = document.getElementById('submit')
const emailSpan = document.querySelector(".emailSpan")

function getVal() {
    const val = document.getElementById("submitEmail").value;
    const emailSpan = document.getElementById("emailSpan");
    emailSpan.textContent = val;
    emailSpan.style.fontWeight = "bold";
    showSuccessSection();
  }
  
  
  function showSuccessSection() {
    const successSection = document.querySelector('.succes');
    successSection.classList.remove('hidden');
  }
  
  document.getElementById("mainSubmit").addEventListener("click", getVal);
  



backButton.addEventListener("click", ()=>{
    mainContainer.classList.remove('hidden')
    succesContainer.classList.add('hidden')
});

