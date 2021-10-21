const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10]

function sumNumbers (numbers){
	let ret = 0;
	ret = numbers.reduce((acc, elm) =>{
		acc+=elm;
		console.log(acc);
		return acc;
	})
	return ret;
}

console.log(sumNumbers(numbers));