// Level One - Problem Set 5: Concert Ticket Access
// Logic Rules:
// - If ticketCategory is "Backstage" AND age is 18 → return "can access"
// - If age is 18 AND ticketCategory is NOT "Backstage" → return "can sign in"
// - Else → return "go home"

// ============================================
// EASY PROBLEM 1: Simple if with two conditions
// ============================================
// Task: Use && to check both ticketCategory and age
// Hint: Both conditions must be true for && to work
function easyProblem1(ticketCategory, age) {
    // TODO: Write your code here
    // If ticketCategory is "Backstage" AND age is 18, return "can access"
    // Otherwise return "go home"
    if (ticketCategory === "Backstage" && age === 18) {
        return "can access";
    } else {
        return "go home";
    }
}

// Test your code:
console.log("Easy 1 - Test 1:", easyProblem1("Backstage", 18)); // Should print: "can access"
console.log("Easy 1 - Test 2:", easyProblem1("Backstage", 17)); // Should print: "go home"
console.log("Easy 1 - Test 3:", easyProblem1("General", 18)); // Should print: "go home"

// ============================================
// EASY PROBLEM 2: If-else with !== operator
// ============================================
// Task: Check if ticketCategory is different from "Backstage"
// Hint: !== checks if values are NOT equal
function easyProblem2(ticketCategory, age) {
    // TODO: Write your code here
    // If age is 18 AND ticketCategory is NOT "Backstage", return "can sign in"
    // Otherwise return "go home"
    if (age === 18 && ticketCategory !== "Backstage") {
        return "can sign in";
    } else {
        return "go home";
    }
}

// Test your code:
console.log("Easy 2 - Test 1:", easyProblem2("General", 18)); // Should print: "can sign in"
console.log("Easy 2 - Test 2:", easyProblem2("Backstage", 18)); // Should print: "go home"
console.log("Easy 2 - Test 3:", easyProblem2("VIP", 16)); // Should print: "go home"

// ============================================
// MEDIUM PROBLEM: Complete conditional chain
// ============================================
// Task: Write all three conditions using if-else if-else
// Hint: Check each condition carefully
function mediumProblem(ticketCategory, age) {
    // TODO: Write your code here
    // Write a complete if-else if-else chain:
    // 1. If ticketCategory === "Backstage" && age === 18 → "can access"
    // 2. If age === 18 AND ticketCategory !== "Backstage" → "can sign in"
    // 3. Else → "go home"
    if (ticketCategory === "Backstage" && age === 18) {
        return "can access";
    } else if (age === 18 && ticketCategory !== "Backstage") {
        return "can sign in";
    } else {
        return "go home";
    }
}

// Test your code:
console.log("Medium - Test 1:", mediumProblem("Backstage", 18)); // Should print: "can access"
console.log("Medium - Test 2:", mediumProblem("General", 18)); // Should print: "can sign in"
console.log("Medium - Test 3:", mediumProblem("Backstage", 16)); // Should print: "go home"
console.log("Medium - Test 4:", mediumProblem("VIP", 18)); // Should print: "can sign in"
console.log("Medium - Test 5:", mediumProblem("Premium", 20)); // Should print: "go home"

// ============================================
// HARD PROBLEM: Advanced nested conditions
// ============================================
// Task: Use nested if-else statements with proper structure
// Hint: Think about the logic flow - what should be checked first?
function hardProblem(ticketCategory, age) {
    // TODO: Write your code here
    // Create nested if statements:
    //
    // First, check if age is 18:
    //   - If age is 18:
    //     - Check ticketCategory:
    //       - If ticketCategory is "Backstage" → return "can access"
    //       - If ticketCategory is anything else → return "can sign in"
    //   - If age is NOT 18:
    //     - Return "go home"
    if (age === 18) {
        if (ticketCategory === "Backstage") {
            return "can access";
        } else {
            return "can sign in";
        }
    } else {
        return "go home";
    }
}

// Test your code:
console.log("Hard - Test 1:", hardProblem("Backstage", 18)); // Should print: "can access"
console.log("Hard - Test 2:", hardProblem("General", 18)); // Should print: "can sign in"
console.log("Hard - Test 3:", hardProblem("Backstage", 17)); // Should print: "go home"
console.log("Hard - Test 4:", hardProblem("VIP", 18)); // Should print: "can sign in"
console.log("Hard - Test 5:", hardProblem("Premium", 25)); // Should print: "go home"
console.log("Hard - Test 6:", hardProblem("Standard", 18)); // Should print: "can sign in"
