const words = ['mystery', 'brother', 'aviator', 'crocodile', 'pearlaaaaaaa', 'orchard', 'crackpot'];

function findLongestWord (words){

	let longest = words[0];

	for (let index = 0; index < words.length; index++) {
		
		if (words[index].length > longest.length){
			longest = words[index];
		}
		
	}
	return (longest);
}

console.log(findLongestWord(words));