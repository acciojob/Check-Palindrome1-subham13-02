// complete the given function

function palindrome(str){
	let org=str.replace(" ","");
	let rev=org.reverse();
	return org===rev?true:false;
}
module.exports = palindrome
