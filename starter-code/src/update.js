const mixedArr = [6, 12, 'miami', 1, true, 'barca', '200', 'lisboa', 8, 10];

function sumMixedArray(arr) {
    let count = 0
    arr.forEach(element => {
        switch (typeof element) {
            case "number":
                count += element;
                break;
            case "string":
                count += element.length;
                break
            case "boolean":
                count += element;
                break;
            default:
                count += element.length;
                break;
        }
    });
    return count
}

console.log(sumMixedArray(mixedArr));