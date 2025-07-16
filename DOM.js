const container = document.querySelector(".container")

const content = document.createElement("p");
content.classList.add('content');
content.textContent = "Hey I'm red";

container.appendChild(content);

const mediaInside = document.createElement('h3');
mediaInside.classList.add('mediaInside')
mediaInside.textContent = "I'm a blue h3";
mediaInside.style.color = 'blue';

container.appendChild(mediaInside);


const secondContainer = document.createElement('div');
secondContainer.classList.add('secondDiv');
secondContainer.setAttribute("style", "background-color: pink;")

container.appendChild(secondContainer);

const heading = document.createElement('h1');
heading.classList.add('second-heading');
heading.textContent = "I'm in a div";


const paragraph = document.createElement('p');
paragraph.classList.add('para');
paragraph.textContent = 'ME TOO!'

secondContainer.appendChild(heading);
secondContainer.appendChild(paragraph);

