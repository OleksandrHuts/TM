const app = document.querySelector('.app');

document.addEventListener("keydown", (event) => {
    if (event.ctrlKey && event.code === "KeyE") {
        event.preventDefault();
        const textarea = document.createElement("textarea");
        const par = document.querySelector(".paragraf");
        
        textarea.value = par.textContent;

        app.innerHTML = '';
        app.append(textarea);

    };
    if (event.ctrlKey && event.code === "KeyS") {
        event.preventDefault();
        const parag = document.createElement("p");
        parag.classList.add('paragraf');
        const textarea = document.querySelector('.app textarea');
        parag.textContent = textarea.value;

        app.innerHTML = '';
        app.append(parag);
    }
});

let startX = 0;
let endX = 0;
let startY = 0;
let endY = 0;
const box = document.querySelector('.box');

document.querySelector('.drag').addEventListener('dragstart', event => {
    console.log(event);
    startX = event.clientX;
    startY = event.clientY;
});

document.querySelector('.drag').addEventListener('dragend', event => {
    console.log(event);
    endX = event.clientX;
    endY = event.clientY;
    console.log('Difference:', endX - startX);
    const currentBoxWidth = box.offsetWidth;
    const currentBoxHeight = box.offsetHeight;

    box.style.width = currentBoxWidth + endX - startX + 'px';
    box.style.height = currentBoxHeight + endY - startY + 'px';
})