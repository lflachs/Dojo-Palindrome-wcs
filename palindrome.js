// Write a method called "palindrome" that checks if a given string is palindrome or not, and return true or false.

const palindrome = (text) => {
    let newText = [];
    newText = text.toLowerCase().split("").reverse().join("")
    let finalword = newText.replace(/[/\W/]/g, '');
    console.log(finalword);
    return text.toLowerCase() === finalword


};
console.log(palindrome("hello/^?/wo\ rld"));
module.exports = palindrome; 