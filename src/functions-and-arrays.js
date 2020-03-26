// Iteration #1: Find the maximum

const maxOfTwoNumbers = (num1, num2) => {

	if (num1 > num2) {
		
		return num1

	} else {
		
		return num2
	} 
}

// Iteration #2: Find longest word
const words = ['mystery', 'brother', 'aviator', 'crocodile', 'pearl', 'orchard', 'crackpot'];

const findLongestWord = (wordsArr) => {

	if (wordsArr.length === 0) {
		
		return null 

	} else {
		
		let maxLength = 0, longestWord = ""
		
		wordsArr.forEach(element => {
			
			if (maxLength < element.length) {
				
				maxLength = element.length
				longestWord = element
			}
		});

		return longestWord;
	}

}



// Iteration #3: Calculate the sum

const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

const sumNumbers = (numbersArr) => {
	
	let total = 0;
	numbersArr.forEach(element => {
		total += element
	});

	return total;
}


// Iteration #3: Calculate the sum - Bonus track

const sum = (numbersArr) => {

	let total = 0;
	numbersArr.forEach(element => {
		total += parseValue(element)
	});
	
	return total
}

const parseValue = (element) => {

	switch (typeof element) {
		case "string":
			return element.length
		
		case "number":
			return element
		
		case "boolean":
			if (element) {
				return 1
			} else {
				return 0
			}

		default:
			throw "Error: Unsupported data type sir or ma'am"
	}
}


// En la consola dan OK, en Jasmine dan error
// const mixedArrExample1 = [6, 12, 'miami', 1, true, 'barca', '200', 'lisboa', 8, 10];
// sum(mixedArrExample)



// Iteration #4: Calculate the average

// Level 1: Array of numbers
const numbersAvg = [2, 6, 9, 10, 7, 4, 1, 9];

const averageNumbers = (numbersArr) => { 
	
	if (numbersArr.length > 0) {
		
		let total = sumNumbers(numbersArr)
		let average = total / numbersArr.length

		return average

	} else {

		return null
	}
}


// Level 2: Array of strings
const wordsArr = ['seat', 'correspond', 'linen', 'motif', 'hole', 'smell', 'smart', 'chaos', 'fuel', 'palace'];


const averageWordLength = (wordsArr) => {

	let wordsArrLengths = []
	
	wordsArr.forEach(element => wordsArrLengths.push(element.length));

	return averageNumbers(wordsArrLengths)
}

// Level 3: Bonus - Iteration #4.1: A generic avg() function

const avg = (mixedArr) => {

	if (mixedArr.length > 0) {

		let total = 0;

		mixedArr.forEach(element => {
			total += parseValue(element)
		});

		let average = total / mixedArr.length

		return average

	} else {

		return null
	}
}

// En la consola dan OK, en Jasmine dan error
// const mixedArrExample2 = [6, 12, 'miami', 1, true, 'barca', '200', 'lisboa', 8, 10];

// avg(mixedArrExample)


// Iteration #5: Unique arrays
const wordsUnique = [
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
	'bring'
];

const uniquifyArray = (wordsArr) => {
	
	// debugger
	
	if (wordsArr.length > 0) {

		let uniqueArray = []

		wordsArr.map(element => {
			
			if (!uniqueArray.includes(element)) {
				
				uniqueArray.push(element)
			}
		})

		return uniqueArray;

	} else {

		return null
	}
}

// Iteration #6: Find elements
const wordsFind = ['machine', 'subset', 'trouble', 'starting', 'matter', 'eating', 'truth', 'disobedience'];


const doesWordExist = (wordsArr, searchWord) => {

	if (wordsArr.length > 0 ) {
		
		return wordsArr.includes(searchWord)

	} else {
		
		return null
	}


}


// Iteration #7: Count repetition
const wordsCount = [
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



const howManyTimes = (wordsArr, searchWord) => {
	
	debugger
	if (wordsArr.length > 0) {
		
		let counter = 0

		wordsArr.forEach(element => {
			
			if (element === searchWord) {
				counter++
			}
		});

		return counter;

	} else {
		
		return 0
	}

}

howManyTimes(['basketball', 'football', 'tennis'], 'tennis')

// Iteration #8: Bonus

const matrix = [
	[8, 2, 22, 97, 38, 15, 0, 40, 0, 75, 4, 5, 7, 78, 52, 12, 50, 77, 91, 8],
	[49, 49, 99, 40, 17, 81, 18, 57, 60, 87, 17, 40, 98, 43, 69, 48, 4, 56, 62, 0],
	[81, 49, 31, 73, 55, 79, 14, 29, 93, 71, 40, 67, 53, 88, 30, 3, 49, 13, 36, 65],
	[52, 70, 95, 23, 4, 60, 11, 42, 69, 24, 68, 56, 1, 32, 56, 71, 37, 2, 36, 91],
	[22, 31, 16, 71, 51, 67, 63, 89, 41, 92, 36, 54, 22, 40, 40, 28, 66, 33, 13, 80],
	[24, 47, 32, 60, 99, 3, 45, 2, 44, 75, 33, 53, 78, 36, 84, 20, 35, 17, 12, 50],
	[32, 98, 81, 28, 64, 23, 67, 10, 26, 38, 40, 67, 59, 54, 70, 66, 18, 38, 64, 70],
	[67, 26, 20, 68, 2, 62, 12, 20, 95, 63, 94, 39, 63, 8, 40, 91, 66, 49, 94, 21],
	[24, 55, 58, 5, 66, 73, 99, 26, 97, 17, 78, 78, 96, 83, 14, 88, 34, 89, 63, 72],
	[21, 36, 23, 9, 75, 0, 76, 44, 20, 45, 35, 14, 0, 61, 33, 97, 34, 31, 33, 95],
	[78, 17, 53, 28, 22, 75, 31, 67, 15, 94, 3, 80, 4, 62, 16, 14, 9, 53, 56, 92],
	[16, 39, 5, 42, 96, 35, 31, 47, 55, 58, 88, 24, 0, 17, 54, 24, 36, 29, 85, 57],
	[86, 56, 0, 48, 35, 71, 89, 7, 5, 44, 44, 37, 44, 60, 21, 58, 51, 54, 17, 58],
	[19, 80, 81, 68, 5, 94, 47, 69, 28, 73, 92, 13, 86, 52, 17, 77, 4, 89, 55, 40],
	[4, 52, 8, 83, 97, 35, 99, 16, 7, 97, 57, 32, 16, 26, 26, 79, 33, 27, 98, 66],
	[88, 36, 68, 87, 57, 62, 20, 72, 3, 46, 33, 67, 46, 55, 12, 32, 63, 93, 53, 69],
	[4, 42, 16, 73, 38, 25, 39, 11, 24, 94, 72, 18, 8, 46, 29, 32, 40, 62, 76, 36],
	[20, 69, 36, 41, 72, 30, 23, 88, 34, 62, 99, 69, 82, 67, 59, 85, 74, 4, 36, 16],
	[20, 73, 35, 29, 78, 31, 90, 1, 74, 31, 49, 71, 48, 86, 81, 16, 23, 57, 5, 54],
	[1, 70, 54, 71, 83, 51, 54, 69, 16, 92, 33, 48, 61, 43, 52, 1, 89, 19, 67, 48]
];


// El Bonus lo he dejado sin hacer porque toda mi solución se basaba en un include comparativo entre 2 arrays que da false a pesar de que los elementos sean los mismos.
// Una posible solución (muchísimo más sencilla) sería realizar el tracking de los puntos críticos mediante objetos. 
// Quizás lo pruebe mañana por la mañana: hoy ya estoy demasiado cansado jajajaja

const greatestProduct = (matrixArr) => {

	let biggestNum = 0
	let biggestNumIndex = []
	let visitedNumbersIndexes = []


	// for (let i = 0; i < matrixArr.length; i++) {

	// 	for (let j = 0; j < matrixArr.length; j++) {

	// 		if (matrixArr[i][j] > biggestNum) {

	// 			biggestNum = matrixArr[i][j]
	// 			biggestNumIndex = [i, j]
	// 		}
	// 	}

	// }

	biggestNumIndex = findBiggestNumberIndex(matrixArr)

	// console.log(biggestNumIndex)

	visitedNumbersIndexes.push(biggestNumIndex)

	


	


	
}


const findBiggestNumberIndex = (matrixArr, biggestNumIndex = []) => {

	let biggestNum = 0;

	// Find Biggest Num Index 
	for (let i = 0; i < matrixArr.length; i++) {

		for (let j = 0; j < matrixArr.length; j++) {

			if (matrixArr[i][j] > biggestNum) {

				biggestNum = matrixArr[i][j]
				biggestNumIndex = [i, j]
			}
		}

	}

	// let visitedIndexes = []
	// visitedIndexes.push(startingIndex)




	return biggestNumIndex

}

const findBiggestAdjacentNumber = (startingIndex, visitedIndexesList, matrixArr) => {

	let biggestAdjacentNumber = 0
	let biggestAdjacentNumberIndex = []

	for (let i = 0; i < 4; i++) {
		
		switch (i) {
			case 0:
				if (biggestAdjacentNumber < matrixArr[startingIndex[0] - 1][startingIndex[1]] &&
					visitedIndexesList) {
					// console.log(matrixArr[startingIndex[0] - 1][startingIndex[1]])
					biggestAdjacentNumber = matrixArr[startingIndex[0] - 1][startingIndex[1]]
					biggestAdjacentNumberIndex = []
					biggestAdjacentNumberIndex.push(startingIndex[0] - 1,startingIndex[1])
				}
				break;
			
			case 1:
				if ( biggestAdjacentNumber < matrixArr[startingIndex[0]][startingIndex[1] + 1]) {
					// console.log(matrixArr[startingIndex[0]][startingIndex[1] + 1])
					biggestAdjacentNumber = matrixArr[startingIndex[0]][startingIndex[1] + 1]
					biggestAdjacentNumberIndex = []
					biggestAdjacentNumberIndex.push(startingIndex[0], startingIndex[1] + 1)

				}
				break;
			
			case 2:
				if ( biggestAdjacentNumber < matrixArr[startingIndex[0] + 1][startingIndex[1]]) {
					// console.log(matrixArr[startingIndex[0] + 1][startingIndex[1]])
					biggestAdjacentNumber = matrixArr[startingIndex[0] + 1][startingIndex[1]]
					biggestAdjacentNumberIndex = []
					biggestAdjacentNumberIndex.push(startingIndex[0] + 1, startingIndex[1])

				}
				break;
			
			case 3:
				if ( biggestAdjacentNumber < matrixArr[startingIndex[0]][startingIndex[1] - 1]) {
					// console.log(matrixArr[startingIndex[0]][startingIndex[1] - 1])
					biggestAdjacentNumber = matrixArr[startingIndex[0]][startingIndex[1] - 1]
					biggestAdjacentNumberIndex = []
					biggestAdjacentNumberIndex.push(startingIndex[0], startingIndex[1] - 1)

				}
				break;
			
			default:
				break;
		}
		
	}

	return biggestAdjacentNumberIndex;

}

findBiggestAdjacentNumber([1,2] ,matrix)

const findeAdjacents = (visitedIndexes) => {


}


