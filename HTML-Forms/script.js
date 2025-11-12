const name = document.querySelector("#username");
const container = document.querySelector(".the-greeting");
const button = document.querySelector('.greet-me');

button.addEventListener("click", () => {
    container.innerText = `Happy Birthday ${name.value}`;
});