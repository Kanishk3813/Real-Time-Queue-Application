// const taskQueue = [];

//         function enqueueTask() {
//             const taskInput = document.getElementById("taskInput");
//             const taskList = document.getElementById("taskList");
//             const task = taskInput.value;

//             if (task) {
//                 taskQueue.push(task);
//                 taskInput.value = "";
//                 displayQueue();
//             }
//         }

//         function dequeueTask() {
//             if (taskQueue.length > 0) {
//                 const dequeuedTask = taskQueue.shift();
//                 displayQueue();
//                 alert(`Dequeued Task: ${dequeuedTask}`);
//             } else {
//                 alert("Queue is empty.");
//             }
//         }

//         function displayQueue() {
//             const taskList = document.getElementById("taskList");
//             taskList.innerHTML = "Tasks in Queue: " + taskQueue.join(" -> ");
//         }


const requestQueue = [];
const issuedTickets = [];
const maxQueueSize = 5; // Maximum number of customers in the queue
let availableTickets = 10; // Initial number of available tickets

function enqueueRequest() {
    const customerName = document.getElementById("customerName").value;

    if (customerName && requestQueue.length < maxQueueSize) {
        requestQueue.push(customerName);
        document.getElementById("customerName").value = "";
        displayQueue();
    } else if (requestQueue.length >= maxQueueSize) {
        alert("Queue is full. Cannot accept more requests at the moment.");
    }
}

function dequeueRequest() {
    if (requestQueue.length > 0 && availableTickets > 0) {
        const dequeuedCustomer = requestQueue.shift();
        issuedTickets.push(dequeuedCustomer);
        availableTickets--;
        displayQueue();
        displayIssuedTickets();
    } else if (requestQueue.length === 0) {
        alert("Queue is empty.");
    } else {
        alert("No available tickets.");
    }
}

function displayQueue() {
    const queueList = document.getElementById("queueList");
    queueList.innerHTML = "";

    requestQueue.forEach((customer, index) => {
        const listItem = document.createElement("li");
        listItem.textContent = `${index + 1}. ${customer}`;
        queueList.appendChild(listItem);
    });

    document.getElementById("availableTickets").textContent = availableTickets;
}

function displayIssuedTickets() {
    const issuedList = document.getElementById("issuedList");
    issuedList.innerHTML = "";

    issuedTickets.forEach((customer, index) => {
        const listItem = document.createElement("li");
        listItem.textContent = `${index + 1}. ${customer}`;
        issuedList.appendChild(listItem);
    });
}
