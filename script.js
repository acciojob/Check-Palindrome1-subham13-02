// complete the given function

function palindrome(str){
	// Remove non-alphanumeric characters and convert to lowercase
  var cleanedString = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
  
  // Reverse the cleaned string
  var reversedString = cleanedString.split('').reverse().join('');
  
  // Check if the cleaned string and reversed string are equal
  return cleanedString === reversedString;
}
module.exports = palindrome
