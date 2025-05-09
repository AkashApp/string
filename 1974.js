// Minimum Time to Type Word Using Special Typewriter

// There is a special typewriter with lowercase English letters 'a' to 'z'
// arranged in a circle with a pointer. A character can only be typed if
// the pointer is pointing to that character. The pointer is initially pointing to the character 'a'.

// Each second, you may perform one of the following operations:

// Move the pointer one character counterclockwise or clockwise.
// Type the character the pointer is currently on.
// Given a string word, return the minimum number of seconds to type out the characters in word.

// Example 1:

// Input: word = "abc"
// Output: 5
// Explanation:
// The characters are printed as follows:
// - Type the character 'a' in 1 second since the pointer is initially on 'a'.
// - Move the pointer clockwise to 'b' in 1 second.
// - Type the character 'b' in 1 second.
// - Move the pointer clockwise to 'c' in 1 second.
// - Type the character 'c' in 1 second.
// Example 2:

// Input: word = "bza"
// Output: 7
// Explanation:
// The characters are printed as follows:
// - Move the pointer clockwise to 'b' in 1 second.
// - Type the character 'b' in 1 second.
// - Move the pointer counterclockwise to 'z' in 2 seconds.
// - Type the character 'z' in 1 second.
// - Move the pointer clockwise to 'a' in 1 second.
// - Type the character 'a' in 1 second.
// Example 3:

// Input: word = "zjpc"
// Output: 34
// Explanation:
// The characters are printed as follows:
// - Move the pointer counterclockwise to 'z' in 1 second.
// - Type the character 'z' in 1 second.
// - Move the pointer clockwise to 'j' in 10 seconds.
// - Type the character 'j' in 1 second.
// - Move the pointer clockwise to 'p' in 6 seconds.
// - Type the character 'p' in 1 second.
// - Move the pointer counterclockwise to 'c' in 13 seconds.
// - Type the character 'c' in 1 second.

var minTimeToType = function (word) {
  let ops = 0;
  let cur = "a";

  for (const char of word) {
    const diff = Math.abs(cur.charCodeAt(0) - char.charCodeAt(0));
    if (diff > 13) {
      ops += 26 - diff + 1;
    } else {
      ops += diff + 1;
    }

    cur = char;
  }

  return ops;
};
console.log(minTimeToType("zjpc"));

var minTimeToType2 = function(word) {
    if (word === undefined) return 0;
    let current = "a";
    let totalCount = 0;
  
    for (let char of word) {
      let difference = Math.abs(char.charCodeAt(0) - current.charCodeAt(0));
      let moveTime = Math.min(difference, 26 - difference);
      totalCount += moveTime + 1;
      current = char;
    }
  
    return totalCount;
      
  };
console.log(minTimeToType2("zjpc"));
