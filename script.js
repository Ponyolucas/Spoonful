let currentSpoons = parseFloat(localStorage.getItem("startingSpoons")) || 8;
updateSpoonBar();


function updateSpoonBar() {
    const spoonDisplay = document.getElementById("spoonDisplay");
    spoonDisplay.innerHTML = "";

    const totalSpoons = 8;
    let spoonCount = parseFloat(localStorage.getItem("startingSpoons")) || 8;

    for (let i = 0; i < totalSpoons; i++) {
        if (i + 1 <= spoonCount) {
            // Full spoon
            const spoon = document.createElement("img");
            spoon.src = "spoon.png";
            spoon.alt = "Spoon";
            spoon.classList.add("spoon-icon");
            spoonDisplay.appendChild(spoon);
        } else if (i + 0.5 === spoonCount) {
            // Half-used spoon
            const wrapper = document.createElement("span");
            wrapper.classList.add("half-used-wrapper");

            const leftHalf = document.createElement("img");
            leftHalf.src = "spoon.png";
            leftHalf.alt = "Half spoon left";
            leftHalf.classList.add("spoon-icon", "half-overlay");

            const rightHalf = document.createElement("img");
            rightHalf.src = "spoon.png";
            rightHalf.alt = "Half spoon right";
            rightHalf.classList.add("spoon-icon", "half-mask");

            wrapper.appendChild(leftHalf);
            wrapper.appendChild(rightHalf);
            spoonDisplay.appendChild(wrapper);
        } else {
            // Used spoon
            const spoon = document.createElement("img");
            spoon.src = "spoon.png";
            spoon.alt = "Used Spoon";
            spoon.classList.add("spoon-icon", "used-spoon");
            spoonDisplay.appendChild(spoon);
        }
    }
}


function addTask() {
    var taskInput = document.getElementById("taskInput");
    var taskList = document.getElementById("taskList");
    var difficultySelect = document.getElementById("difficultySelect");

    if (taskInput.value === "") {
        alert("Please enter a task");
        return;
    }

    var li = document.createElement("li");

    var textSpan = document.createElement("span");
    textSpan.textContent = taskInput.value + " ";

    var spoonSpan = document.createElement("span");
    spoonSpan.classList.add("difficulty");

    let difficulty = parseFloat(difficultySelect.value);
    if (difficulty > currentSpoons) {
        alert("Not enough spoons to add this task!");
        return;
    }
    currentSpoons -= difficulty;
    updateSpoonBar();
    
    let fullSpoons = Math.floor(difficulty);
    let halfSpoon = (difficulty % 1 !== 0);

    for (let i = 0; i < fullSpoons; i++) {
        let spoon = document.createElement("img");
        spoon.src = "spoon.png";
        spoon.alt = "spoon";
        spoon.classList.add("spoon-icon");
        spoonSpan.appendChild(spoon);
    }

    if (halfSpoon) {
        let halfWrapper = document.createElement("span");
        halfWrapper.classList.add("half-spoon");

        let spoon = document.createElement("img");
        spoon.src = "spoon.png";
        spoon.alt = "half spoon";
        spoon.classList.add("spoon-icon");

        halfWrapper.appendChild(spoon);
        spoonSpan.appendChild(halfWrapper);
    }

    li.appendChild(textSpan);
    li.appendChild(spoonSpan);

    let deleteButton = document.createElement("button");
    deleteButton.innerHTML = "Delete";
    deleteButton.onclick = () => taskList.removeChild(li);

    let completeButton = document.createElement("button");
    completeButton.innerHTML = "Complete";
    completeButton.onclick = () => li.classList.toggle("completed");

    li.appendChild(deleteButton);
    li.appendChild(completeButton);

    taskList.appendChild(li);
    taskInput.value = "";
}

updateSpoonBar();