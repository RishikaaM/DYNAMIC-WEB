// Variables to store elements
const title = document.getElementById('main-title');
const colorButton = document.getElementById('color-btn');
const circle = document.getElementById('circle');
let darkMode = false;

// Hover event listener on the title
title.addEventListener('mouseenter', () => {
    title.style.transform = 'rotate(10deg)';
});
title.addEventListener('mouseleave', () => {
    title.style.transform = 'rotate(0)';
});

// Button click event listener to change background color and toggle dark mode
colorButton.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    if (darkMode) {
        colorButton.innerHTML = "Change Background";
    } else {
        colorButton.innerHTML = "Switch Back";
    }
    darkMode = !darkMode;
});

// Event listener to move and change the color of the circle on a keypress (space bar)
document.addEventListener('keydown', (e) => {
    if (e.code === 'Space') {
        circle.classList.toggle('moved');
    }
});

// Event listener to drag the circle
let isDragging = false;
let offsetX, offsetY;

circle.addEventListener('mousedown', (e) => {
    isDragging = true;
    offsetX = e.clientX - circle.getBoundingClientRect().left;
    offsetY = e.clientY - circle.getBoundingClientRect().top;
    document.body.style.cursor = 'grabbing';
});

document.addEventListener('mousemove', (e) => {
    if (isDragging) {
        circle.style.left = `${e.clientX - offsetX}px`;
        circle.style.top = `${e.clientY - offsetY}px`;
        circle.style.position = 'absolute';
    }
});

document.addEventListener('mouseup', () => {
    isDragging = false;
    document.body.style.cursor = 'default';
});
