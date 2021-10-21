const words = ['machine', 'subset', 'trouble', 'starting', 'matter', 'eating', 'truth', 'disobedience'];


function doesWordExist(array, toFind){
	
	for (const word of array) {
		
		if (word === toFind){
			return true;
		}
	}

	return false;
}

console.log(doesWordExist(words, "machine"));
console.log(doesWordExist(words, "estafa"));