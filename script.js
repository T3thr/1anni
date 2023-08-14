// Fetch Google Sheet data (sample data)
const roomData = [
    { roomNumber: "101", availability: "Available" },
    { roomNumber: "102", availability: "Booked" },
    // Add more room data as needed
];

// Populate the table with Google Sheet data
const tableBody = document.getElementById("tableBody");
roomData.forEach(room => {
    const row = tableBody.insertRow();
    row.insertCell(0).textContent = room.roomNumber;
    row.insertCell(1).textContent = room.availability;
});
