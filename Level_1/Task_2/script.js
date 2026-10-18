
const colorButton = document.getElementById("colorButton");

colorButton.addEventListener("click", function () {
    if (colorButton.style.backgroundColor === "green") {
        colorButton.style.backgroundColor = "#3157a4";
    } else {
        colorButton.style.backgroundColor = "green";
    }
});

// Time-based greeting
const greetButton = document.getElementById("greetButton");

greetButton.addEventListener("click", function () {
    const hour = new Date().getHours();
    let greeting;

    if (hour < 12) {
        greeting = "Good morning!";
    } else if (hour < 17) {
        greeting = "Good afternoon!";
    } else {
        greeting = "Good evening!";
    }

    alert(greeting);
});

// Addition calculator
const addButton = document.getElementById("addButton");

addButton.addEventListener("click", function () {
    const first = document.getElementById("num1").value;
    const second = document.getElementById("num2").value;
    const result = document.getElementById("result");

    if (first.trim() === "" || second.trim() === "") {
        result.textContent = "Please enter both numbers.";
        return;
    }

    const sum = Number(first) + Number(second);

    result.textContent = "Sum: " + sum;
});
