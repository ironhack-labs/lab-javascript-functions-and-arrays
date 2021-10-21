const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10]

function averageNumbers(numbers) {
	let ret = 0;
	ret = numbers.reduce((acc, elm) => {
		acc += elm;
		return acc;
	})
	return ret / numbers.length;
}

console.log(averageNumbers(numbers));