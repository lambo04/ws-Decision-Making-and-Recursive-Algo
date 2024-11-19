function leapYearChecker() {
    const year = parseInt(document.getElementById("leapYearInput").value.trim(), 10);
    const result = document.getElementById("leapYearResults");
    const message = ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) 
        ? `${year} is a leap year.` 
        : `${year} is not a leap year.`;
    const li = document.createElement("li");
    li.textContent = message;
    result.appendChild(li);
}

function ticketPricing() {
    const age = parseInt(document.getElementById("ticketPricingInput").value.trim(), 10);
    const result = document.getElementById("ticketPricingResults");
    let price;
    if (age <= 12) {
        price = "$10";
    } else if (age >= 13 && age <= 17) {
        price = "$15";
    } else {
        price = "$20";
    }
    const li = document.createElement("li");
    li.textContent = `Ticket price is: ${price}`;
    result.appendChild(li);
}

function fibonacciRecursive(n) {
    if (n <= 1) return n;
    return fibonacciRecursive(n - 1) + fibonacciRecursive(n - 2);
}

function fibonacci() {
    const n = parseInt(document.getElementById("fibonacciInput").value.trim(), 10);
    const result = document.getElementById("fibonacciResults");
    const fib = fibonacciRecursive(n);
    const li = document.createElement("li");
    li.textContent = `The Fibonacci number at position ${n} is: ${fib}`;
    result.appendChild(li);
}

function checkPalindrome(str) {
    const cleanedStr = str.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
    if (cleanedStr.length <= 1) return true;
    if (cleanedStr[0] === cleanedStr[cleanedStr.length - 1]) {
        return checkPalindrome(cleanedStr.slice(1, -1));
    }
    return false;
}

function palindromeChecker() {
    const str = document.getElementById("palindromeInput").value.trim();
    const result = document.getElementById("palindromeResults");
    const isPalindrome = checkPalindrome(str);
    const li = document.createElement("li");
    li.textContent = isPalindrome 
        ? "The string is a palindrome." 
        : "The string is not a palindrome.";
    result.appendChild(li);
}

function calculatePower(base, exponent) {
    if (exponent === 0) return 1;
    return base * calculatePower(base, exponent - 1);
}

function powerFunction() {
    const base = parseInt(document.getElementById("powerBaseInput").value.trim(), 10);
    const exponent = parseInt(document.getElementById("powerExponentInput").value.trim(), 10);
    const result = document.getElementById("powerResults");
    const power = calculatePower(base, exponent);
    const li = document.createElement("li");
    li.textContent = `${base} raised to the power of ${exponent} is: ${power}`;
    result.appendChild(li);
}
