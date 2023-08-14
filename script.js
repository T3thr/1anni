// Fetch Google Sheet data using Google Sheets API
function fetchSheetData() {
    // Replace with your own Google Sheets API key and spreadsheet ID
    const apiKey = "AIzaSyDCS6hFxkfaqyTWvO7Zlo23zDbAWh8U3Oc";
    const spreadsheetId = "1_moyVZ-HgihXBqrvqW2zEsRtn8dEN-5CtMpBnvhEI9s/edit#gid=0";

    const url = `https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}/values/Sheet1?key=${apiKey}`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            const rows = data.values.slice(1); // Skip header row
            const tableBody = document.getElementById("tableBody");

            tableBody.innerHTML = ""; // Clear existing rows

            rows.forEach(row => {
                const roomNumber = row[0];
                const availability = row[1];
                const newRow = tableBody.insertRow();
                newRow.insertCell(0).textContent = roomNumber;
                newRow.insertCell(1).textContent = availability;
            });
        })
        .catch(error => {
            console.error("Error fetching sheet data:", error);
        });
}

// Call fetchSheetData to load Google Sheet data when the page loads
fetchSheetData();
