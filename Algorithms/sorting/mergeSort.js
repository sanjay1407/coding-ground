let input = [15, 34, 2, 3, 12, 32, 56, 28];

const merge = (left, right) => {
  const arr = [];
  while (left.length > 0 && right.length > 0) {
    arr.push(left[0] < right[0] ? left.shift() : right.shift());
  }
  return arr.concat(left).concat(right);
};

Array.prototype.mergeSort = function() {
  if (this.length <= 1) return this;

  let half = parseInt(this.length / 2);
  let left = this.slice(0, half).mergeSort();
  let right = this.slice(half, this.length).mergeSort();
  return merge(left, right);
};

let output = input.mergeSort();
console.log(output);
