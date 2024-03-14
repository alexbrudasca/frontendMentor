document.addEventListener("DOMContentLoaded", function () {
    const popUp = document.querySelectorAll(".pop-up-container");
    const arrow = document.querySelector("#features");
    const arrowCompany = document.querySelector("#company");
    const company = document.querySelectorAll(".companyPopUp");

    arrow.addEventListener("click", () => {

        popUp.forEach((pop) => {
            pop.classList.toggle("hidden");
        });
    });


    popUp.forEach((pop) => {
        pop.addEventListener("click", () => {

            popUp.forEach((e) => {
                if (e !== pop) {
                    e.classList.add("hidden");
                }
            });
        });
    });

    arrowCompany.addEventListener("click", () => {

        company.forEach((com) => {
            com.classList.toggle("hidden");
        });
    });


    company.forEach((com) => {
        com.addEventListener("click", () => {

            company.forEach((e) => {
                if (e !== com) {
                    e.classList.add("hidden");
                }
            });
        });
    });
});