let countEl = document.querySelector("#count-el");
let incrementBtn = document.querySelector("#increment-btn");
let saveBtn = document.querySelector("#save-btn");
let saveEl = document.querySelector("#save-el");

let count = 0;

incrementBtn.addEventListener("click", function increment() {
    count += 1;
    countEl.innerText = count;
});

saveBtn.addEventListener("click", function save() {
    let countStr = count + " - ";
    saveEl.textContent += countStr;
    countEl.textContent = 0;
    count = 0;
});