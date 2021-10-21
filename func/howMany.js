const words = [
	'machine',
	'matter',
	'subset',
	'trouble',
	'starting',
	'matter',
	'eating',
	'matter',
	'truth',
	'disobedience',
	'matter'
];


function howManyTimes(array, toCount) {

	let total = 0;

	for (const word of array) {

		if (word === toCount) {
			total++;
		}
	}

	return total;
}

console.log(howManyTimes(words, "matter"));
console.log(howManyTimes(words, "eating"));
console.log(howManyTimes(words, "oreja"));