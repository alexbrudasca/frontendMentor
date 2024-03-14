const number = document.getElementById("facebookNumber")
let numberEl = 0;
let intervalId

function count(){
    numberEl++
    number.innerHTML = `${numberEl}`

    if(numberEl === 1980){
        clearInterval(intervalId)
    }
}

intervalId = setInterval(() => {
    count()
}, 0);


const toggle = document.getElementById('toggle');
const body = document.body;
const cards = document.querySelectorAll(".top-cards__card")
const cardsBottom = document.querySelectorAll(".bottom-cards__card")
const header = document.querySelector(".header")

toggle.addEventListener('input', e => {
    const isChecked = e.target.checked;

    if (isChecked) {
        body.classList.add('dark-theme');
        header.classList.add('dark-theme');
        cards.forEach(card=>{
            card.classList.add("dark-theme")
        })
        cardsBottom.forEach(card=>{
            card.classList.add("dark-theme")
        })
    } else {
        body.classList.remove('dark-theme');
        header.classList.remove('dark-theme');
        cards.forEach(card=>{
            card.classList.remove("dark-theme")
        })
        cardsBottom.forEach(card=>{
            card.classList.remove("dark-theme")
        })
    }
});