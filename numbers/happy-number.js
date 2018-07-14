const isHappyNumber = num => {
  let digits = num.toString().split("");
  let number = parseInt(
    digits
      .map(item => item * item)
      .reduce((accumulator, currentValue) => accumulator + currentValue, 0)
  );
  if (number > 9) {
    return isHappyNumber(number);
  }
  return number == 1 ? true : false;
};

//should return true
console.log(isHappyNumber(19));

//should return false
console.log(isHappyNumber(4));
