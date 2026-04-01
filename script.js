let bottles = document.getElementsByClassName("bottle-box");

let firstBox = document.getElementById("firstBox");
let secondBox = document.getElementById("secondBox");

let result = document.getElementById("result");

const correctOrder = ["red", "orange", "yellow", "green", "blue"];

let selected;

for (let bottle of bottles) {
    bottle.addEventListener("dragstart", function (e) {
        selected = this;

        console.log("selected");

        firstBox.addEventListener("dragover", function (e) {
            e.preventDefault();
        });

        firstBox.addEventListener("drop", function(e){
            firstBox.appendChild(selected);
            selected = null;
        });

        secondBox.addEventListener("dragover", function (e) {
            e.preventDefault();
        });

        secondBox.addEventListener("drop", function(e){
            secondBox.appendChild(selected);
            selected = null;
        });
    });
}

function checkOrder() {
    let items = firstBox.children;
    let correctCount = 0;

    for (let i = 0; i < items.length; i++) {
        let color = items[i].getAttribute("data-color");

        if (color === correctOrder[i]) {
            correctCount++;
        }
    }

    result.innerText = `✅ ${correctCount} / ${correctOrder.length} correct`;

    if (correctCount === correctOrder.length) {
      result.innerText = "🏆 Perfect! You nailed it!";
    }
}