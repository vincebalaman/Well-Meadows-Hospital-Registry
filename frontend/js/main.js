// Selecting the elements from the HTML
const button = document.getElementById('fetchDataBtn');
const display = document.getElementById('resultContainer');

// Function to handle the API call
async function getMessageFromServer() {
    try {
        display.innerText = "Loading...";

        const response = await fetch('http://localhost:5001/patients/patientlist');
        
        if (!response.ok) {
            throw new Error("Network response was not ok");
        }

        const data = await response.json();
        
        display.innerText = `Server says: ${data.message}`;
        
    } catch (error) {
        console.error("There was a problem with the fetch operation:", error);
        display.innerText = "Error: Could not connect to server.";
    }
}

button.addEventListener('click', getMessageFromServer);