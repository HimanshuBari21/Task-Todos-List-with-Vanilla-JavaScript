var taskName = document.getElementById("input-box1");
var taskNo = 0;
var tasksList = [];

function insert(){

    taskNo++;
    tasksList[taskNo] = {
        taskno : taskNo,
        taskname : taskName.value,
        status: false,
    }

    document.getElementById("table-body").innerHTML += 
    "<tr class='task' ><td>" + tasksList[taskNo].taskno + "</td><td>" + tasksList[taskNo].taskname + "</td><td><button class='table-btn'>Mark Done</button><button class='table-btn' onclick='deleteIt(" + tasksList[taskNo].taskno + ")'>Delete</button></td></tr>";
}

function deleteIt(tasknum) {

    document.getElementsByClassName("task")[tasknum-1].innerHTML = "Task no. " + (tasknum) + " is Deleted<hr>";

}