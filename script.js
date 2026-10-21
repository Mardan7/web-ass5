// Each section runs only on its own page.
if (document.getElementById("home")) {
    let name = "Mardan Khalilov";
    let group = "SE-2527";
    let student = true;
    let a = 10;
    let b = 5;

    console.log(name);
    console.log(group);
    alert("Hello, JavaScript World!");

    console.log("Student: " + name + ", group: " + group);
    console.log("Is a student: " + student);
    console.log("Addition: " + (a + b));
    console.log("Subtraction: " + (a - b));
    console.log("Multiplication: " + (a * b));
    console.log("Division: " + (a / b));
}

if (document.getElementById("changeText")) {
    document.getElementById("changeText").addEventListener("click", function () {
        document.getElementById("text").textContent = "The text has changed!";
    });

    document.getElementById("changeColor").addEventListener("click", function () {
        document.getElementById("styleBox").style.backgroundColor = "lightblue";
    });

    document.getElementById("changeSize").addEventListener("click", function () {
        document.getElementById("styleBox").style.fontSize = "24px";
    });

    let items = document.getElementById("items");
    document.getElementById("addItem").addEventListener("click", function () {
        let item = document.createElement("li");
        item.textContent = "Item";
        items.appendChild(item);
    });

    document.getElementById("removeItem").addEventListener("click", function () {
        if (items.lastElementChild) {
            items.removeChild(items.lastElementChild);
        }
    });
}

if (document.getElementById("mouseBox")) {
    let box = document.getElementById("mouseBox");
    box.addEventListener("mouseover", function () {
        box.style.backgroundColor = "lightblue";
    });
    box.addEventListener("mouseout", function () {
        box.style.backgroundColor = "lightgray";
    });

    let input = document.getElementById("typing");
    input.addEventListener("keyup", function () {
        document.getElementById("typedText").textContent = input.value;
    });
}

function calculate(operator) {
    let first = document.getElementById("first");
    let second = document.getElementById("second");
    let result = document.getElementById("result");

    if (first.value === "" || second.value === "") {
        result.textContent = "Please enter two numbers.";
        return;
    }

    let a = Number(first.value);
    let b = Number(second.value);
    let answer;

    if (operator === "+") {
        answer = a + b;
    } else if (operator === "-") {
        answer = a - b;
    } else if (operator === "*") {
        answer = a * b;
    } else if (b === 0) {
        result.textContent = "Cannot divide by zero.";
        return;
    } else {
        answer = a / b;
    }

    result.textContent = "Result: " + answer;
}

if (document.getElementById("plus")) {
    document.getElementById("plus").addEventListener("click", function () {
        calculate("+");
    });
    document.getElementById("minus").addEventListener("click", function () {
        calculate("-");
    });
    document.getElementById("multiply").addEventListener("click", function () {
        calculate("*");
    });
    document.getElementById("divide").addEventListener("click", function () {
        calculate("/");
    });
}

let tasks = [];

if (document.getElementById("addTask")) {
    document.getElementById("addTask").addEventListener("click", function () {
        let input = document.getElementById("taskInput");
        let text = input.value.trim();
        if (text === "") {
            return;
        }

        let task = { text: text, completed: false };
        tasks.push(task);

        let item = document.createElement("li");
        let label = document.createElement("span");
        label.textContent = task.text;
        label.addEventListener("click", function () {
            task.completed = !task.completed;
            if (task.completed) {
                label.className = "completed";
            } else {
                label.className = "";
            }
        });

        let button = document.createElement("button");
        button.textContent = "Delete";
        button.addEventListener("click", function () {
            let index = tasks.indexOf(task);
            tasks.splice(index, 1);
            document.getElementById("tasks").removeChild(item);
        });

        item.appendChild(label);
        item.appendChild(button);
        document.getElementById("tasks").appendChild(item);
        input.value = "";
    });
}
