function checkPalindrome() {
    // Prompt user for input
    let input = prompt("Enter a word or number to check:");

    // Validate input
    if (input === null || input === "") {
        document.getElementById("result").innerHTML = "No input provided!";
        return;
    }

    // Convert to lowercase and remove spaces for comparison
    let str = input.toLowerCase().replace(/\s+/g, '');

    // Reverse the string
    let reversed = str.split('').reverse().join('');

    // Check if palindrome
    if (str === reversed) {
        document.getElementById("result").innerHTML = `<strong>"${input}" is a Palindrome! ✓</strong>`;
        document.getElementById("result").style.color = "#28a745";
    } else {
        document.getElementById("result").innerHTML = `<strong>"${input}" is NOT a Palindrome! ✗</strong>`;
        document.getElementById("result").style.color = "#dc3545";
    }
}