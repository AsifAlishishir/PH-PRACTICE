var ticketPrice = 800;     // base price according to comment
var age = 20;
var isStudent = false;      // better variable name (optional but clearer)

let finalPrice = ticketPrice;  // we'll modify this

if (age < 10) {
    finalPrice = 0;
    console.log("You are a Child! Your ticket price is:", finalPrice, "tk");
} 
else if (isStudent) {
    finalPrice = ticketPrice * 0.5;          // or ticketPrice * 50 / 100
    // or more readable: finalPrice = ticketPrice * (50 / 100);
    console.log("You are a Student! Your ticket price is:", finalPrice, "tk");
} 
else if (age >= 60) {
    finalPrice = ticketPrice * 0.85;         // 100% - 15% = 85%
    // or: finalPrice = ticketPrice * (85 / 100);
    console.log("You are a Senior Citizen! Your ticket price is:", finalPrice, "tk");
} 
else {
    finalPrice = ticketPrice;
    console.log("Regular passenger → Your ticket price is:", finalPrice, "tk");
}