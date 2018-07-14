let first = [1, 2, 5, 6, 2, 3, 8];
let second = [2, 4, 5, 6, 2];

const computeIntersection = (first, second) => {
    if (first == null && second == null) return 'Incorrect Input Set';

    const result = [];

    if (first.length > second.length) {
        store = first;
        arr = second;
    }
    else {
        store = second;
        arr = first;
    }
    var length = arr.length || 0;

    for (var i = 0; i < length; i++) {
        let value = arr[i];
        if (store.indexOf(value) >= 0 && result.indexOf(value) == -1) {
            result.push(value)
        }
    }
    return result;
}

const result = computeIntersection(first, second);
console.log(result);