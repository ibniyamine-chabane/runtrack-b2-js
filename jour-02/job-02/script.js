
const display = document.getElementById('count-displayer');
const btn = document.getElementById('add-count-btn');

console.log(display);
console.log(btn);

let count = 0;

function myAddCount() {
    count = count + 1;
    display.innerHTML = count;
}

btn.addEventListener("click", myAddCount)