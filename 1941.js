// Check if All Characters Have Equal Number of Occurrences

// Given a string s, return true if s is a good string, or false otherwise.

// A string s is good if all the characters that appear in s have the same number of occurrences (i.e., the same frequency).

 

// Example 1:

// Input: s = "abacbc"
// Output: true
// Explanation: The characters that appear in s are 'a', 'b', and 'c'. All characters occur 2 times in s.
// Example 2:

// Input: s = "aaabb"
// Output: false
// Explanation: The characters that appear in s are 'a' and 'b'.
// 'a' occurs 3 times while 'b' occurs 2 times, which is not the same number of times.


// it beats 86%
var areOccurrencesEqual = function(s) {
    let obj ={};
    for(let i=0; i<s.length; i++){
        if(obj[s[i]]){
            obj[s[i]] = obj[s[i]] + 1;
        } else{
            obj[s[i]] = 1;
        }
    }
    let count = obj[s[0]];
    for(let key in obj){
        if(obj[key] !== count){
            return false;
        }
    }
    return true;
};


// it beats 56%
var areOccurrencesEqual2 = function(s) {
    var freq = {}
    for (let c of s) freq[c] = (freq[c] || 0) + 1
    var val = freq[s[0]]
    for (let c in freq) if (freq[c] && freq[c] != val) return false;
    return true;
};
console.log(areOccurrencesEqual("abacbc"));
console.log(areOccurrencesEqual2("abacbc"));