//Reverse the Order of Words with Five Letters or More
//reverse("Reverse") ➞ "esreveR"
//reverse("This is a typical sentence.") ➞ "This is a lacipyt .ecnetnes"
//reverse("The dog is big.") ➞ "The dog is big."

//Using ternary operator

function reverse(str) {
	let arr = str.split(" ").map(function(word) {
		return word.length >= 5? word.split("").reverse().join(""):word;
	})
	return arr.join(" ");
}

//Find the Smallest and Biggest Numbers of a given array
//minMax([1, 2, 3, 4, 5]) ➞ [1, 5]

//Using reduce method

function minMax(arr) {
	let max = arr.reduce((accu,curr)=> {return Math.max(accu, curr)});
	let min = arr.reduce((accu,curr)=> {return Math.min(accu, curr)})
	return [min, max];
}
