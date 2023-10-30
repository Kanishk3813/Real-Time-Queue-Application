const requestQueue = [];
const issuedTickets = [];
const maxQueueSize = 5;
let availableTickets = 10;

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
