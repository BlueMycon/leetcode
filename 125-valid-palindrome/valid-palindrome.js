/**
 * @param {string} s
 * @return {boolean}
 *
 *
 * Two pointers; only O(1) extra memory
 */
const isPalindrome = function(s) {
    if (s.trim() === "") return true;

    s = s.toLowerCase().trim();
    let left = 0;
    let right = s.length - 1;

    while(left < right) {
        if (!isAlphanumeric(s[left])) {
            left++;
        } else if (!isAlphanumeric(s[right])) {
            right--;
        } else if (s[left] !== s[right]) {
            return false;
        } else {
            left++;
            right--;
        }
    }

    return true;
};

function isAlphanumeric(char) {
    return /[a-z0-9]/.test(char);
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
