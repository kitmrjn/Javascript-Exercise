const workNav = document.querySelector('.work-nav');
const clickMe = document.querySelector('.click-me');


function empty() {
    if (workNav.textContent == "") {
        workNav.textContent = "Work";
        clickMe.textContent = "The work is not visible";
        console.log(workNav);
    } else {
        workNav.textContent = "";
        clickMe.textContent = "The work is visible";
        console.log(workNav);
    }
}

clickMe.addEventListener("click", ()=> {
    empty();
})
