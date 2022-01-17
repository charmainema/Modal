// select modal-btn,modal-overlay,close-btn
// listen for click events on modal-btn and close-btn
// when user clicks modal-btn add .open-modal to modal-overlay
// when user clicks close-btn remove .open-modal from modal-overlay

const modalBtn = document.querySelector(".modal-btn");
const modal = document.querySelector(".modal-overlay");
const closeBtn = document.querySelector(".close-btn");
const text = document.getElementsByClassName("fortune-text");

let fortunes = ["You will find a $20 bill on the sidewalk.", "It will be sunny tomorrow.", "You won't spill your coffee today.", "McDonald's will be offering free cheeseburgers today.", "Today will be a good day.", "A bird will see you but it won't attack you.", "You will lose your cheapest pair of socks. (Don't worry, at least it wasn't your most expensive!", "It won't rain tomorrow.", "You will find your missing keys.", "You will find a dollar between the cushions of your couch."];
let i = 0;

modalBtn.addEventListener("click", function() {
    modal.classList.add("open-modal");
    text[0].innerHTML = fortunes[randomNum()];
    i++;
});

closeBtn.addEventListener("click", function() {
    modal.classList.remove("open-modal");
});

function randomNum() {
    return Math.floor(Math.random() * fortunes.length);
}

console.log(fortunes.length);