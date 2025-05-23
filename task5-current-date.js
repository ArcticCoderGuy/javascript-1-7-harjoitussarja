// Task 5: Näytä nykyinen päivämäärä

// Create a new Date object
const today = new Date();

// Define days of the week manually
const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

// Extract year, month, and day
const year = today.getFullYear();
const month = String(today.getMonth() + 1).padStart(2, '0'); // Month is 0-indexed
const day = String(today.getDate()).padStart(2, '0');

// Get day of the week
const dayName = days[today.getDay()];

// Print formatted date
console.log(`Date: ${dayName} ${year}-${month}-${day}`);
