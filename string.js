// Write a function to split a string into chunks of a given length
// Example :
// splitString("abcde", 2) -> ["ab", "cd", "e"]
// splitString("abcdef", 2) -> ["ab", "cd", "ef"]
// splitString("abcdef", 3) -> ["abc", "def"]

let string1 =
  "It is a trust that collects money from a number of investors who share a common investment objective and invests the same in equities, bonds, money market instruments and/or other securities. And the income / gains generated from this collective investment is distributed proportionately amongst the investors after deducting applicable expenses and levies, by calculating a scheme’s “Net Asset Value” or NAV. Simply put, the money pooled in by a large number of investors is what makes up a Mutual Fund.";

const spliter = (str) => {
  let strTemp = str.split("");
  let count = 0;
  let temp = "";
  let ans = [];
  for (let i = 0; i < strTemp.length; i++) {
    if (count < 15) {
      temp += strTemp[i];
      count++;
    } else {
      ans.push(temp);
      count = 0;
      temp = "";
    }
  }
  ans.push(temp);
  return ans;
};

// console.log(spliter(string1));

const spliter2 = (str) => {
  const ans = [];
  let slow = 0;
  let fast = 15;
  while (slow < str.length) {
    ans.push(str.substring(slow, fast));
    fast += 15;
    slow += 15;
  }
  return ans;
};

// console.log(spliter2(string1));
// Need more optimization in this


let str = "hello";
str.length; // 5
str[0];     // 'h'
str.toUpperCase(); // "HELLO"
str.includes("ell"); // true
str.indexOf("l"); // 2
str.substring(1, 4); // "ell"

function charFrequency(str) {
  const freq = {};
  for (let ch of str) {
    freq[ch] = (freq[ch] || 0) + 1;
  }
  return freq;
}

// console.log(charFrequency(str));

function isPalindrome(str) {
  let left = 0, right = str.length - 1;
  while (left < right) {
    if (str[left++] !== str[right--]) return false;
  }
  return true;
}

// console.log(isPalindrome(str));


function longestUniqueSubstring(str) {
  let set = new Set();
  let left = 0, maxLen = 0;
  for (let right = 0; right < str.length; right++) {
    while (set.has(str[right])) {
      set.delete(str[left++]);
    }
    set.add(str[right]);
    maxLen = Math.max(maxLen, right - left + 1);
  }
  return maxLen;
}

// console.log(longestUniqueSubstring(str));


function isAnagram(a, b) {
  a = a.split("").sort().join("");
  b = b.split("").sort().join("");
  return a === b;
}
// console.log(isAnagram(str, "olleh"));

function isAnagram2(a, b) {
  if (a.length !== b.length) return false;
  const count = {};
  for (let ch of a) count[ch] = (count[ch] || 0) + 1;
  for (let ch of b) {
    if (!count[ch]) return false;
    count[ch]--;
  }
  return true;
}

// console.log(isAnagram2(str, "olleh"));

// truncate a string
// truncateString("abcdef", 4) -> "abcd..."
// truncateString("abcdef", 3) -> "abc..."
// truncateString("abcdef", 2) -> "ab..."

function truncateString(str, num) {
  if (str.length <= num) return str;
  return str.slice(0, num) + "...";
}
// console.log(truncateString("akash borate", 5));


// Hamming distance

const hammingDistance = (x,y) => {
  if(x.length !== y.length) return -1;
  let distance =0;
  for(let i=0; i<x.length; i++){
    if(x[i] !== y[i]){
      distance++;
    }
  }
  return distance;
}

// console.log(hammingDistance("abcde", "bcdef"));


