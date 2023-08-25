/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
    if (s.length != t.length) return false;

    sCharCount = makeFreqCounter(s);
    tCharCount = makeFreqCounter(t);

    for (let key in sCharCount) {
        if (sCharCount[key] != tCharCount[key]) {
            return false;
        }
    }

    return true;
};

function makeFreqCounter(iter) {
    let freqCounter = {}

    for (let elem of iter) {
        freqCounter[elem] = (freqCounter[elem] || 0) + 1;
    }

    return freqCounter;
}