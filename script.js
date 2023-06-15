// complete the given function

function palindrome(str){
	let org=str.replace(/\s/g,"");
	let rev=org.reverse();
	return org===rev;
}
module.exports = palindrome
