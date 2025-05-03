let currentSpoons = parseFloat(localStorage.getItem("currentSpoons"));
if (isNaN(currentSpoons)) {
  currentSpoons = parseFloat(localStorage.getItem("startingSpoons")) || 8;
  localStorage.setItem("currentSpoons", currentSpoons);
}

updateSpoonBar();

function updateSpoonBar() {
    const spoonDisplay = document.getElementById("spoonDisplay");
    const spoonLabel = document.getElementById("spoonLabel");
    spoonDisplay.innerHTML = "";
  
    const totalSpoons = 8;
    const spoonCount = Math.max(0, Math.min(currentSpoons, totalSpoons)); // clamp between 0 and 8
  
    if (spoonLabel) {
      spoonLabel.textContent = `You have ${spoonCount} / ${totalSpoons} spoons remaining`;
    }
  
    for (let i = 0; i < totalSpoons; i++) {
      const spoon = document.createElement("img");
      spoon.src = "spoon.png";
      spoon.alt = i < spoonCount ? "Spoon" : "Used Spoon";
      spoon.classList.add("spoon-icon");
      if (i >= spoonCount) {
        spoon.classList.add("used-spoon");
      }
      spoonDisplay.appendChild(spoon);
    }
  }
  
  
  

  function addTask() {
    const taskInput = document.getElementById("taskInput");
    const taskList = document.getElementById("taskList");
    const difficultySelect = document.getElementById("difficultySelect");
  
    if (taskInput.value === "") {
      alert("Please enter a task");
      return;
    }
  
    const li = document.createElement("li");
    li.dataset.difficulty = difficultySelect.value;
  
    // 🔹 Task text
    const taskText = document.createElement("span");
    taskText.textContent = taskInput.value;
    li.appendChild(taskText);
  
    // 🔹 Spoon icons (next to task name)
    const spoonSpan = document.createElement("span");
    spoonSpan.style.marginLeft = "10px";
    const difficulty = parseFloat(difficultySelect.value);

    if (difficulty > currentSpoons) {
        alert("You don’t have enough spoons to add this task. Please rest or reset your spoons.");
        return;
      }
    
      if (taskInput.value === "") {
        alert("Please enter a task");
        return;
      }
  
    const fullSpoons = Math.floor(difficulty);
    const hasHalf = difficulty % 1 !== 0;
  
    for (let i = 0; i < fullSpoons; i++) {
      const spoon = document.createElement("img");
      spoon.src = "spoon.png";
      spoon.alt = "Spoon";
      spoon.classList.add("spoon-icon");
      spoonSpan.appendChild(spoon);
    }
  
    if (hasHalf) {
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
      spoonSpan.appendChild(wrapper);
    }
  
    li.appendChild(spoonSpan);
  
    // 🔹 Delete button
    const deleteButton = document.createElement("button");
    deleteButton.innerHTML = "Delete";
    deleteButton.onclick = () => {
      if (li.classList.contains("completed")) {
        currentSpoons += difficulty;
        localStorage.setItem("currentSpoons", currentSpoons);
        updateSpoonBar();
      }
      taskList.removeChild(li);
    };
  
    // 🔹 Complete button
    const completeButton = document.createElement("button");
    completeButton.innerHTML = "Complete";
    completeButton.onclick = () => {
        const wasCompleted = li.classList.contains("completed");
      
        if (!wasCompleted) {
          if (difficulty > currentSpoons) {
            alert("Not enough spoons to complete this task!");
            return;
          }
          currentSpoons -= difficulty;
      
          // ✅ Add to history when marked as complete
          const completedTasks = JSON.parse(localStorage.getItem("completedTasks") || "[]");
          completedTasks.push({
  name: taskText.textContent, // use what's displayed
  difficulty: difficulty,
  timestamp: new Date().toLocaleString()
});

          localStorage.setItem("completedTasks", JSON.stringify(completedTasks));
      
        } else {
          currentSpoons += difficulty;
        }
      
        li.classList.toggle("completed");
        localStorage.setItem("currentSpoons", currentSpoons);
        updateSpoonBar();
      };
      
  
    li.appendChild(deleteButton);
    li.appendChild(completeButton);
  
    taskList.appendChild(li);
    taskInput.value = "";
  }
  

function updateSpoonCountFromSlider(value) {
    const newValue = parseFloat(value);
    localStorage.setItem("startingSpoons", newValue);
    localStorage.setItem("currentSpoons", newValue);
    currentSpoons = newValue;
    updateSpoonBar();
  }
  
