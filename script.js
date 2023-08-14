$(document).ready(function() {
    // Fetch Google Sheet data using Google Sheets API (replace with your API endpoint)
    const googleSheetUrl = "https://docs.google.com/spreadsheets/d/e/2PACX-1vSHPyTes5nTyz5_AYHdT7i9GkBZOimW4OINBRKmi3K9rFaGHfYtJAbklfSB2dA8_k3FJPhpLprFcsjh/pubhtml?gid=0&amp;single=true&amp;widget=true&amp;headers=false";

    $.getJSON(googleSheetUrl, function(data) {
        const tableBody = document.getElementById("tableBody");
        data.forEach(row => {
            const newRow = tableBody.insertRow();
            newRow.insertCell(0).textContent = row[0]; // Assuming room number is in the first column
            newRow.insertCell(1).textContent = row[1]; // Assuming availability is in the second column
        });
    });
});
