function isPalindrome(string) {
  // Write your algorithm here
  return string.split('').reverse('').join('') === string ? true : false;
}

  
/* 
  Add your pseudocode here

  First split the string with .split(), then reverse it and 
  finally join it back together.

*/

/*
  Add written explanation of your solution here

  After joining, is it equal to the string? If yes return true, 
  else false.

*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
