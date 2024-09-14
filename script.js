// function addtodo(id) {
//     let input = document.getElementById("input-box-" + id);
//     let child = document.getElementById(id);

//     let div = document.createElement("div");
//     let uniqueId = "task-" + Date.now();
//     div.setAttribute("id", uniqueId);

//     let taskText = document.createElement("h1");
//     taskText.innerHTML = input.value;
//     div.appendChild(taskText);

//     let btn = document.createElement("button");
//     btn.innerHTML = "Delete";
//     btn.setAttribute("onclick", "deleteTask('" + uniqueId + "')");  // Fix: Pass uniqueId as string
//     div.appendChild(btn);

//     child.appendChild(div);

//     input.value = ""; 

//     div.setAttribute("draggable", "true");
//     div.addEventListener("dragstart", function(e){
//         let selected = e.target;
//         let container = document.getElementsByClassName("store");

//         for (let i = 0; i < container.length; i++) {
//             container[i].addEventListener("dragover", function(e){
//                 e.preventDefault();
//             });
//             container[i].addEventListener("drop", function(e){
//                 container[i].appendChild(selected);
//                 selected = null;
//             });
//         }
//     });
// }

// function deleteTask(id) {
//     let child = document.getElementById(id);
//     child.remove();  // Remove the task div
// }
function addtodo(id) {
    let input = document.getElementById("input-box-" + id);
    let child = document.getElementById(id);

    let div = document.createElement("div");
    let uniqueId = "task-" + Date.now();
    div.setAttribute("id", uniqueId);

    let taskText = document.createElement("h1");
    taskText.innerHTML = input.value;
    div.appendChild(taskText);


    let btn = document.createElement("button");
    btn.setAttribute("onclick", "deleteTask('" + uniqueId + "')");
    btn.classList.add("delete-btn"); 

    let icon = document.createElement("i");
    icon.classList.add("fas", "fa-trash");  
    btn.appendChild(icon);

    div.appendChild(btn);
    child.appendChild(div);

    input.value = "";  

    // Set draggable attributes
    div.setAttribute("draggable", "true");
    div.addEventListener("dragstart", function(e){
        let selected = e.target;
        let container = document.getElementsByClassName("store");

        for (let i = 0; i < container.length; i++) {
            container[i].addEventListener("dragover", function(e){
                e.preventDefault();
            });
            container[i].addEventListener("drop", function(e){
                container[i].appendChild(selected);
                selected = null;
            });
        }
    });
}

function deleteTask(id) {
    let child = document.getElementById(id);
    child.remove();  // Remove the task div
}
