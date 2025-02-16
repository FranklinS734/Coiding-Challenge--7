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

// Test Data
console.log(calculateHourlyWage(52000, 40)); // Expected: "Hourly Wage: $25.00"
console.log(calculateHourlyWage(75000, 35)); // Expected: "Hourly Wage: $41.21"

// Task 3: Arrow Function
const calculateLoyaltyDiscount = (amount, years) => {
    // Determine discount percentage based on years
    let discountRate = years >= 5 ? 0.15 : years >= 3 ? 0.10 : 0.05;
    // Apply discount
    let discountedPrice = amount * (1 - discountRate);
    return `Discounted Price: $${discountedPrice.toFixed(2)}`;
};

// Test Data
console.log(calculateLoyaltyDiscount(100, 6)); // Expected: "Discounted Price: $85.00"
console.log(calculateLoyaltyDiscount(200, 2)); // Expected: "Discounted Price: $190.00"

// Task 4: Parameters and Arguments
function calculateShippingCost(weight, location, expedited = false) {
    // Set base costs based on location
    let baseCost;
  if (location === "USA") {
    baseCost = 5 + 0.5 * weight;
  } else if (location === "Canada") {
    baseCost = 10 + 0.7 * weight;
  } else {
    return "Invalid location";
  }
  if (expedited) {
    baseCost += 10;
  }
  return `Shipping Cost: $${baseCost.toFixed(2)}`;
}

// Test Data
console.log(calculateShippingCost(10, "USA", true)); // Expected: "Shipping Cost: $20.00"
console.log(calculateShippingCost(5, "Canada", false)); // Expected: "Shipping Cost: $13.50"

// Task 5: Returning Values
function calculateLoanInterest(principal, rate, years) {
    // Calculate total interest using formula given 
    let interest = principal * rate * years;
    return `Total Interest: $${interest.toFixed(2)}`;
}

// Test Data
console.log(calculateLoanInterest(1000, 0.05, 3)); // Expected: "Total Interest: $150.00"
console.log(calculateLoanInterest(5000, 0.07, 5)); // Expected: "Total Interest: $1750.00"

// Task 6: Higher-Order Functions
let transactions = [500, 1200, 3000, 800, 2200];

function filterHighValueTransactions(transactions, filterFunction) {
    return transactions.filter(filterFunction);
}

// Test Data
console.log(filterHighValueTransactions(transactions, amount => amount > 1000)); // Expected: [1200, 3000, 2200]