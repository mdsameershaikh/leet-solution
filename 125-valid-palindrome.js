/**
 * @param {string} s
 * @return {boolean}
 */
function reverseString(inputString) {
    return inputString.split('').reverse().join('');
}


var isPalindrome = function (s) {
    s = s.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
    return s === `${reverseString(s)}`.toLowerCase();
};