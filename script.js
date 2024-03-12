function validateSyntax() {
    // Get the input value from the petInput element
    let input = document.getElementById('petInput').value;
    
    // Define a regular expression pattern to check the syntax
    /*: The pattern is enclosed within forward slashes, indicating the start and end of the regular expression.*/
    /*This is a character set that matches any alphanumeric character.*/

    let pattern = /^pet_[a-zA-Z0-9]+$/;

    if (pattern.test(input)) {
        // If the input matches the pattern, set the result to "Valid Syntax"
        document.getElementById('result').innerText = "Valid Syntax";
    } else {
        // If the input doesn't match the pattern, set the result to "Invalid Syntax"
        document.getElementById('result').innerText = "Invalid Syntax";
    }
}
