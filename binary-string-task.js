const removeLeadingZeroes = (binaryString) => {
  const regex = /1[0|1]*/;
  return (binaryString.match(regex)[0]);
};

const convertBinaryStringToInteger = (binaryString) => {
  integerValue = 0
  j = 0;
  for(let i = binaryString.length - 1; i >= 0; i--) {
    multiplier = Math.pow(2, j++);
    //console.log(multiplier);
    //console.log(i, parseInt(binary_string[i]) * multiplier);
    integerValue += parseInt(binaryString[i]) * multiplier;
  }

  return integerValue;
};

const getNumberOfOperations = (decimalNumber, numberOfOperations = 0) => {
  // let numberOfOperations = 0;
  if (decimalNumber === 0)
    return ++numberOfOperations;
  else if (decimalNumber % 2 === 0)
    decimalNumber /= 2;
  else
    decimalNumber -= 1;
  return getNumberOfOperations(decimalNumber, ++numberOfOperations);
};

let binaryString = "10110101";
binaryString = removeLeadingZeroes(binaryString);
let numberOfOperations = 0;

if (binaryString == "")
  console.log(numberOfOperations);
else {
  const decimalNumber = convertBinaryStringToInteger(binaryString);
  console.log(decimalNumber);
  const numberOfOperations = getNumberOfOperations(decimalNumber);
  console.log(numberOfOperations);
}