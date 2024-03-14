document.addEventListener("DOMContentLoaded", () => {
    const generateAdvice = document.getElementById("generate");
    const para = document.getElementById("advice-para");
    const API = "https://api.adviceslip.com/advice";
    const number = document.getElementById("number")

    let adviceCount = 0
    generateAdvice.addEventListener("click", () => {
        fetch(API)
            .then((res) => res.json())
            .then((data) => {
                para.textContent = data.slip.advice;
                adviceCount++;
                number.textContent = `#${ adviceCount}`;
            })
            .catch((error) => {
                console.error("Error fetching advice:", error);
            });
    });
});