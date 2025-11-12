const name = document.querySelector("#username");
const container = document.querySelector(".the-greeting");
const button = document.querySelector('.greet-me');
const submit = document.querySelector('.submit');
const reset = document.querySelector('.reset');

button.addEventListener("click", () => {
    container.innerText = `Happy Birthday ${name.value}`;
});

submit.addEventListener("click", () => {
    reset.style.backgroundColor = `${randomColor()}`;
});

function randomColor () {
    const number = [0,1,2,3,4,5,6,7,8,9];
    const sorted = number.sort((a, b) => Math.random() - 0.5);
    const compressed = '#' + sorted.slice(0,6).join("");
    return compressed;
};

