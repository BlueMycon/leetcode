/**
 * @param {string[]} strs
 * @return {string[][]}
 */
const groupAnagrams = function(strs) {
    let anagrams = []
    // loop through strs
    while (strs.length > 0) {
        // grab last of remaining strs
        let last = strs.pop();
        // initialize anagram class
        let aGramClass = [last];
        // loop through rest of strs to find anagrams for class
        for (let i = 0; i < strs.length; i++) {
            // if anagram, put into array together and remove from strs
            if (isAnagram(last, strs[i])) {
                aGramClass.push(strs[i]);
                strs.splice(i, 1);
                i--;
            }
        }
        anagrams.push(aGramClass);
    }
    // return array of anagrams
    return anagrams;
};

const isAnagram = function(s, t) {
    if (s.length !== t.length) return false;

    let alphabetCount = new Array(26).fill(0);

    for (let i = 0; i < s.length; i++) {
        alphabetCount[s.charCodeAt(i) - 'a'.charCodeAt(0)]++
        alphabetCount[t.charCodeAt(i) - 'a'.charCodeAt(0)]--
    }

    for (const count of alphabetCount) {
        if (count !== 0) return false;
    }

    return true;
};