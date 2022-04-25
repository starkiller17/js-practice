// Tasks
// use forEach() to solve this problem

// problem
// Create a function called countExistenceInStr
// it should count how many times a letter appears in a string

function countExistenceInStr(str) {
  // hint: remember you'll need to transform your data first..
  // ['G', 'R', 'E', 'E', 'T', 'I', 'N', 'G', 'S']
  const strArray = Array.from(str);
  const wordCounter = {};
  strArray.forEach(char => {
    if (wordCounter[char])
      wordCounter[char]++;
    else
      wordCounter[char] = 1;
  });

  return wordCounter;
}

console.log(countExistenceInStr("GREETINGS"));
