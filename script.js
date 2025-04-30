function addTask() {

    var taskInput = document.getElementById("task Input")
    var taskList = document.getElementById("tasklist")

    if(taskInput.value ==="")
    {
        alert("Please enter a task ");
        return ;
}
   var li = document.createElement("li");
   var textnode = document.createTextNode(taskInput.value);
   li.appendChild(textnode)

    var deleteButton = document.createTextNode(taskInput.value);
deleteButton.innerHTML = "Delete";
  deleteButton.onClick = function(){
    taskList.removeChild(li);
}

    var completeButton = document.createElement('button');
    completeButton.innerHTML = 'Complete'

    completeButton.onClick = function(){
     li.classList.toggle('completed');
    };

    li.appendChild(deleteButton);
    li.appendChild(completeButton);

    taskList.appendChild(li);
    taskInput.value = "";
} 