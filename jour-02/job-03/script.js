
let display = document.getElementById('text-displayer');
let input = document.getElementById('input-text').value;
const btn_bold = document.getElementById('turn-text-bold');
const btn_italic = document.getElementById('turn-text-italic');
const btn_clear = document.getElementById('clear-text');

console.log(btn_bold)
console.log(btn_italic)
console.log(btn_clear)
console.log(display)

function myDisplayText() {
    display.innerText = input
}

myDisplayText()

