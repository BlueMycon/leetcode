/**
 * @param {string[]} strs
 * @return {string[][]}
 *
 * time complexity optimized solution
 *      uses the alphabet count as a unique signature for a string up to permuation
 *      exactly what is needed for anagrams checking, since order does not matter
 *      this approach extends the use of the alphabet count used in single anagram *            comparisons
 */
const groupAnagrams = function(strs) {
    const strMap = new Map();
    const alphabetCount = new Array(26).fill(0);

    for(let i=0; i<strs.length; i++) {
        const str = strs[i];
        alphabetCount.fill(0);

        for (const char of str) {
            const index = char.charCodeAt(0) - 'a'.charCodeAt(0);
            alphabetCount[index]++;
        }

        const key = alphabetCount.toString();
        strMap.set(key, [...(strMap.get(key) ?? []), str]);
    }

    return Array.from(strMap.values());
};

/**
 * @param {string[]} strs
 * @return {string[][]}
 *
 * space complexity optimized solution
 *      uses no more space than what is required for the return value, 
 *      i.e. the array of anagram classes
 *
 */
// const groupAnagrams = function(strs) {
//     let anagrams = []
//     // loop through strs
//     while (strs.length > 0) {
//         // grab last of remaining strs
//         let last = strs.pop();
//         // initialize anagram class
//         let aGramClass = [last];
//         // loop through rest of strs to find anagrams for class
//         for (let i = 0; i < strs.length; i++) {
//             // if anagram, put into array together and remove from strs
//             if (isAnagram(last, strs[i])) {
//                 aGramClass.push(strs[i]);
//                 strs.splice(i, 1);
//                 i--;
//             }
//         }
//         anagrams.push(aGramClass);
//     }
//     // return array of anagrams
//     return anagrams;
// };
// 
// const isAnagram = function(s, t) {
//     if (s.length !== t.length) return false;

//     let alphabetCount = new Array(26).fill(0);

//     for (let i = 0; i < s.length; i++) {
//         alphabetCount[s.charCodeAt(i) - 'a'.charCodeAt(0)]++
//         alphabetCount[t.charCodeAt(i) - 'a'.charCodeAt(0)]--
//     }

//     for (const count of alphabetCount) {
//         if (count !== 0) return false;
//     }

//     return true;
// };