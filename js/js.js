const SignUp = document.querySelector(".header__controls-button--active");
const modalApplication = document.querySelector(".applications");

if (SignUp && modalApplication) {
    SignUp.addEventListener("click", function(event) {
        modalApplication.removeAttribute("hidden");
    });
}

window.addEventListener("click", function(event) {
    if (event.target === modalApplication) {
        modalApplication.setAttribute("hidden", true);
    }
});