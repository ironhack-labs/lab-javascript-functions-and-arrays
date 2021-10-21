const words = ['seat', 'correspond', 'linen', 'motif', 'hole', 'smell', 'smart', 'chaos', 'fuel', 'palace'];

function averageWordLength (words){
	let ret = 0;
	ret = words.reduce((acc, elm) => {
		acc += elm.length
		return acc;
	}, 0);
	return (ret / words.length);
}

console.log(averageWordLength(words));