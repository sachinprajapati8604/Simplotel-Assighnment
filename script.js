let app = document.getElementById('app');
let row = document.getElementById('row');

// script for add a server 
var noOfServer = 0;
let totalTasks = 0;
document.getElementById('addServer').addEventListener('click', () => {
    noOfServer++;
    let col = document.getElementById('server-box');
    let div = document.createElement('div');
    div.className = 'p-5 mb-3 border bg-light server';
    // div.innerHTML = "Server"
    col.append(div);

    row.append(col);
    app.append(row);

})

// script for add tasks
document.getElementById('addTasks').addEventListener('click', () => {
    let noOfTasks = Number(document.getElementById('tasks').value);
    totalTasks += noOfTasks
    console.log(totalTasks)
    let server = document.getElementsByClassName('server');
    let waitingBox = document.getElementById('waiting-box');

    // console.log(server)
    console.log("Total task ", totalTasks, "No of server ", noOfServer, "No of tasks ", noOfTasks)

    let pendingTasks = 0;
    if (noOfServer < totalTasks) {
        pendingTasks = totalTasks - noOfServer;

    }

    for (let i = 0; i < totalTasks - pendingTasks; i++) {
        server[i].innerHTML = `
        <div class="bar">
        <div class="in"></div>
        </div>
        `
        removeItem();
    }
    for (let i = 0; i < pendingTasks; i++) {
        let div = document.createElement('div');
        div.className = 'p-3 mb-3 border bg-light waiting';
        div.innerHTML = `
        <div class="progress">
        <div class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" >Waiting.....</div>
        </div>
        `
        waitingBox.append(div);
    }

})

function removeItem() {
    var trash = document.getElementsByClassName('server');
    for (var i = 0; i < trash.length; i++) {
        trash[i].onclick = function () {
            var div = this.parentElement;
            div.style.display = "none";
        }
    }

}

// if (totalTasks <= noOfServer) {
//     server[i].innerHTML = "i am working..."
// } else {
//     let div = document.createElement('div');
//     div.className = 'p-3 mb-3 border bg-light waiting';
//     div.innerHTML = "I am waiting";
//     waitingBox.append(div);
// }