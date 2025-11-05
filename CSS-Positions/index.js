const navBar = document.querySelector(".nav-bar");
const navMore = document.querySelector(".nav-more");
const navLinks = document.querySelectorAll(".nav-link");

navMore.addEventListener("click", () => {
    navLinks.forEach(link => {
        if(link.style.display === "none") {
            link.style.display = "block";
        } else {
            link.style.display = "none"
        }
    })
})