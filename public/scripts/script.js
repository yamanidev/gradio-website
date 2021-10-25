const burgerToggle = document.getElementById("burgerToggle");
const navMenu = document.getElementById("navMenu");

burgerToggle.addEventListener("click", () => {
    navMenu.classList.toggle("active");
    burgerToggle.classList.toggle("active");
})

