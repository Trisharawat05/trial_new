// Get the current date and time
const currentDateTime = new Date();

// Format the date and time
const formattedDate = currentDateTime.toLocaleDateString();
const formattedTime = currentDateTime.toLocaleTimeString();

console.log("Current Date: ", formattedDate);
console.log("Current Time: ", formattedTime);