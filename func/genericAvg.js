const mixedArr = [6, 12, 'miami', 1, true, 'barca', '200', 'lisboa', 8, 10];

function avg(arr) {

	let total = 0;

	for (let i = 0; i < arr.length; i++) {

		switch (typeof arr[i]) {
			case "string":
				total += arr[i].length;
				break;

			default:
				total += arr[i];
				break;
		}
	}
	return (total / arr.length);
}

console.log(sum(mixedArr));