// Task 1: Function Declaration
function calculateInvoice(subtotal, taxRate, discount) {
    // Calculate using formula 
    let total = (subtotal + (subtotal * taxRate)) - discount;
    // Return formatted output
    return `Total Invoice: $${total.toFixed(2)}`;
}
// Test Data
console.log(calculateInvoice(100, 0.08, 5)); // Expected: "Total Invoice: $103.00"
console.log(calculateInvoice(500, 0.1, 20)); // Expected: "Total Invoice: $530.00"

// Task 2: Function Expression
const calculateHourlyWage = function(salary, hoursPerWeek) {
    // Calculate hourly wage
    let hourlyWage = salary / (hoursPerWeek * 52);
    // Return formatted hourly wage
    return `Hourly Wage: $${hourlyWage.toFixed(2)}`;
};

// Test cases
console.log(calculateHourlyWage(52000, 40)); // Expected: "Hourly Wage: $25.00"
console.log(calculateHourlyWage(75000, 35)); // Expected: "Hourly Wage: $41.21"