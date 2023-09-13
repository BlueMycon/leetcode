/**
 * @param {string} s
 * @return {boolean}
 *
 *
 * Two pointers; only O(1) extra memory
 */
const isPalindrome = function(s) {
    let left = 0;
    let right = s.length - 1;

    while(left < right) {
        if (!isAlphanumeric(s[left])) {left++; continue;}
        if (!isAlphanumeric(s[right])) {right--; continue;}

        if (s[left].toLowerCase() !== s[right].toLowerCase()) return false;

        left++;
        right--;
    }

    return true;
};

function isAlphanumeric(char) {
    return (
        (char.toLowerCase() >= 'a' && char.toLowerCase() <= 'z') || 
        (char >= '0' && char <= '9')
    );
    
    // alternatively let charCode = char.charCodeAt(0) and use those codes
    // return (
    //     (charCode >= 65 && charCode <= 90) || // Uppercase Latin Letters (A-Z)
    //     (charCode >= 97 && charCode <= 122) || // Lowercase Latin Letters (a-z)
    //     (charCode >= 48 && charCode <= 57) // Digits (0-9)
    // );
}


/* One pointer but O(n) memory use */
// const isPalindrome = function(s) {
//     if (s.trim() === "") return true;

//     const sNormalized = s.toLowerCase().replace(/[^a-z0-9]/g, '');
    
//     for (let i = 0; i < Math.floor(sNormalized.length / 2); i++) {
//         if (sNormalized[i] !== sNormalized[sNormalized.length - 1 - i]) return false;
//     }

//     return true;
// };
