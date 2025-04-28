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

console.log(spliter(string1));

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

console.log(spliter2(string1));
// Need more optimization in this