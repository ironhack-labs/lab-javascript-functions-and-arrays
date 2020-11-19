// ======== ITERATION 1 =========
// Iteration #1: Find the maximum
// ==============================

let maxOfTwoNumbers = function (num1, num2) {
	if (num1 > num2){
	  return num1
	}
	return num2
  }
  maxOfTwoNumbers(34, 98);
  
  
  
  // ======== ITERATION 2 =========
  // Iteration #2: Find longest word
  // ==============================
  const words = ['mystery', 'brother', 'aviator', 'crocodile', 'pearl', 'orchard', 'crackpot'];
  
  let findLongestWord = function (wordsArray) {
	longestWord = '';
	if (wordsArray.length === 0){
		return null;
	}
	  for (let i = 0; i < wordsArray.length; i++){
		  if (wordsArray[i].length > longestWord.length){
				  longestWord = wordsArray[i];
		  }
	  }
	  return longestWord;
  }
  findLongestWord(words);
  
  
  
  // ======== ITERATION 3 =========
  // Iteration #3: Calculate the sum
  // ==============================
  const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];
  
  // SUM FUNCTION
  let sumFunction = function(array) {
	  let suma = 0;
	for (let i = 0; i < array.length; i++){
	  if (typeof(array[i]) === 'number'){
			  suma += array[i];
		  } else if (typeof(array[i]) === 'string'){
			  suma += array[i].length;
		  } else if (typeof(array[i]) === 'boolean'){
			  if (array[i] === true){
				  suma += 1;
			  }
		  } else {
		throw new Error("Unsupported data type sir or ma'am")
		  }
	}
	return suma;
  }
  
  // SUMNUMBERS FUNCTION
  let sumNumbers = function (nums) {
	return sumFunction(nums);
  }
  sumNumbers(numbers);
  
  // ======== ITERATION 3 BONUS =========
  const mixedArr = [6, 12, 'miami', 1, true, 'barca', '200', 'lisboa', 8, 10];
  
  let sum = function (mixed) {
	return sumFunction(mixed);
  }
  sum(mixedArr);
  
  
  // ======== ITERATION 4 =========
  // Iteration #4: Calculate the average
  // ==============================
  
  // Level 1: Array of numbers
  const numbersAvg = [2, 6, 9, 10, 7, 4, 1, 9];
  
  let averageNumbers = function (numbers){
	  if (numbers.length === 0){
		  return null;
	  }
	  return sumFunction(numbers) / numbers.length;
  }
  averageNumbers(numbersAvg)
  
  // Level 2: Array of strings
  const wordsArr = ['seat', 'correspond', 'linen', 'motif', 'hole', 'smell', 'smart', 'chaos', 'fuel', 'palace'];
  
  let averageWordLength = function (words){
	  if (words.length === 0){
		  return null;
	  }
	  return sumFunction(words) / words.length;
  }
  averageWordLength(wordsArr);
  
  // BONUS
  let avg = function (array) {
	  if (array.length === 0){
		  return null;
	  }
	  let averageCalculate = sumFunction(array) / array.length
	  return parseFloat(averageCalculate.toFixed(2))
  }
  avg(mixedArr);
  
  
  
  // ======== ITERATION 5 =========
  // Iteration #5: Unique arrays
  // ==============================
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
  
  let uniquifyArray = function (wordsArr) {
	if ( wordsArr.length === 0 ){
	  return null;
	}
	  newArr = [];
	  for (let i = 0; i < wordsArr.length; i++){
		  if ( wordsArr.indexOf(wordsArr[i]) !== wordsArr.lastIndexOf(wordsArr[i]) && newArr.indexOf(wordsArr[i]) === -1 ) {
				  newArr.push(wordsArr[i]);
		  } else if (wordsArr.indexOf(wordsArr[i]) === wordsArr.lastIndexOf(wordsArr[i])) {
			   newArr.push(wordsArr[i]);
		  }
	  }
  return newArr;
  }
  uniquifyArray(wordsUnique);
  
  
  
  // ======== ITERATION 6 =========
  // Iteration #6: Find elements
  // ==============================
  const wordsFind = ['machine', 'subset', 'trouble', 'starting', 'matter', 'eating', 'truth', 'disobedience'];
  
  let doesWordExist = function (arr, str){
	  if ( arr.length === 0 || str === '' ){
		  return null;
	  }
	  for (let i = 0; i < arr.length; i++){
		  if ( arr[i] === str ){
			  return true;
		  }
	  }
	  return false;
  
  }
  doesWordExist(wordsFind, 'matter');
  
  
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
  
  let howManyTimes = function (arr, word) {
	  if ( arr.length === 0 || word === '' ) {
		  return 0;
	  }
	  let repeteciciones = 0;
	  for ( let i = 0; i <  arr.length; i++){
		  if ( word ===  arr[i] ){
			  repeteciciones++
		  }
	  }
	  return repeteciciones;
  
  }
howManyTimes(wordsCount, 'matter');