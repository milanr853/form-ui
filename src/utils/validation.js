export function validateText(input) {
    // Regular expression to match only alphabetic characters (uppercase and lowercase)
    const regex = /^[a-zA-Z]+$/;

    // Test the input against the regular expression
    return regex.test(input);
}



export function validateEmail(email) {
    // Regular expression for basic email validation
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Test the email against the regular expression
    return regex.test(email);
}


export function isNumeric(input) {
    // Regular expression to match only numeric digits
    const regex = /^[0-9]+$/;

    // Test the input against the regular expression
    return regex.test(input);
}