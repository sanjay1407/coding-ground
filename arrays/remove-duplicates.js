//Input here is a sorted array

let input = [1, 1, 2, 3, 4, 4, 4, 4, 5, 6, 6, 7, 7];

const getUniqueElementsCount = (arr) => {
    if (arr == null || arr.length == 0) return 0;
    if (arr.length == 1) return 1;
    let count = 1;
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] != arr[i - 1])
           count++;
    }
    return count;
}

var result = getUniqueElementsCount(input);
console.log(result);