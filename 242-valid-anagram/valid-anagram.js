// Solution 2 with whiteboard notes & pseudocode

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
  all letters in s can be rearranged to get t and vice versa
  do spaces count? 
  empty string? 
  max length? 
  case sensitive? 

  create an array of length 26 and fill with zeros
    as s,t grow this array uses constant memory!
    both s,t are built out of a common base, namely the alphabet

  iterate over s
    use charcodes and shift them to 0-25
    array at charcode at index of s minus charcode of 'a' gets incremented
    array at charcode at index of t minus charcode of 'a' gets decremented
  
  if array has any non-zero value return false
  else true
 */
const isAnagram = function(s, t) {
    
    if (s.length !== t.length) return false; 

    const frequency = new Array(26).fill(0)

    for (let i = 0; i < s.length; i++) {
        frequency[s.charCodeAt(i) - 'a'.charCodeAt(0)]++;
        frequency[t.charCodeAt(i) - 'a'.charCodeAt(0)]--;
    }

    for (const count of frequency) {
        if (count !== 0) return false;
    }
    return true;
};