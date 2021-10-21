const words = [
	'crab',
	'poison',
	'contagious',
	'simple',
	'bring',
	'sharp',
	'playground',
	'poison',
	'communion',
	'simple',
	'bring',
	'crab'
];

function removeDuplicates (arr){
	
	let ret;

	ret = arr.filter((element, index) => {
		if (arr.lastIndexOf(element) === arr.indexOf(element)){
			return element;
		}
		
	});
	
	return ret;
}
console.log(removeDuplicates(words));
