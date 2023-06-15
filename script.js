// complete the given function

function palindrome(str){
	let org=str.replace(/ /g,"");
	let rev=org.reverse();
	return org===rev;
}
module.exports = palindrome
