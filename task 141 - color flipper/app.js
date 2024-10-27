
const colors = [
    '#F0F5F8', '#0C065A', '#FF5733', '#33FF57', '#3357FF', '#F0E68C', 
    '#FF33A8', '#33FFD8', '#A033FF', '#FF8333', '#33FF8C'
];

function changeColor() {
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.body.style.backgroundColor = randomColor;
    document.getElementById('colorCode').innerText = randomColor;
}