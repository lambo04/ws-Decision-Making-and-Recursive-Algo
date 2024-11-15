// 1. Leap Year Checker
function leapYearChecker() {
    const year = parseInt(prompt("Enter the year: "), 10);

    if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
        console.log(`${year} is a leap year.`);
    } else {
        console.log(`${year} is not a leap year.`);
    }
}

// 2. Ticket Pricing
function ticketPricing() {
    const age = parseInt(prompt("Enter your age: "), 10);
    let price;

    if (age <= 12) {
        price = "$10"; // Children price
    } else if (age >= 13 && age <= 17) {
        price = "$15"; // Teenagers price
    } else {
        price = "$20"; // Adults price
    }

    console.log(`Ticket price is: ${price}`);
}

// 3. Fibonacci Sequence (Recursion)
function fibonacciRecursive(n) {
    if (n <= 1) {
        return n; // Base case
    } else {
        return fibonacciRecursive(n - 1) + fibonacciRecursive(n - 2);
    }
}

function fibonacci() {
    const n = parseInt(prompt("Enter the position (n) for the Fibonacci number: "), 10);
    const result = fibonacciRecursive(n);

    console.log(`The Fibonacci number at position ${n} is: ${result}`);
}

// 4. Palindrome Checker (Recursion)
function checkPalindrome(str) {
    const cleanedStr = str.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();

    if (cleanedStr.length <= 1) {
        return true; // Base case
    } else if (cleanedStr[0] === cleanedStr[cleanedStr.length - 1]) {
        return checkPalindrome(cleanedStr.slice(1, -1));
    } else {
        return false; // Characters don't match
    }
}

function palindromeChecker() {
    const str = prompt("Enter a string: ");
    const result = checkPalindrome(str);

    if (result) {
        console.log("The string is a palindrome.");
    } else {
        console.log("The string is not a palindrome.");
    }
}

// 5. Power Function (Recursion)
function calculatePower(base, exponent) {
    if (exponent === 0) {
        return 1;
    } else {
        return base * calculatePower(base, exponent - 1);
    }
}

function powerFunction() {
    const base = parseInt(prompt("Enter the base number: "), 10);
    const exponent = parseInt(prompt("Enter the exponent: "), 10);

    const result = calculatePower(base, exponent);
    console.log(`${base} raised to the power of ${exponent} is: ${result}`);
}
