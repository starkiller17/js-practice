// check if an integer is a number

function isAnInteger(num) {
  // TODO
  regex = /[\.]+/;
  numString = num.toString().split(regex)[1];
  
  if (numString)
    return 'Not an Integer! ' + typeof num;
  else
    return 'Is an Integer ' + typeof num;
}

console.log(isAnInteger(24.2));
console.log(isAnInteger('1'));
