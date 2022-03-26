// check if two strings are an anagram

//var first = "I am Lord Voldemort";
//var second = "Tom Marvolo Riddle";
var first = 'Fourth of July';
var second = 'joyful Fourth';
/*
  I am Lord Voldemort
*/

function validateAnagrams(firstStrObj, secondStrObj) {
  for (let property in firstStrObj) {
    if (!secondStrObj.hasOwnProperty(property) && secondStrObj[property] !== firstStrObj[property])
      return 'The two strings are not anagrams =(';
    // console.log(secondStrObj.hasOwnProperty(property));
    // console.log(firstStrObj[property]);
    // console.log(secondStrObj[property]);
  }

  return 'The two strings given are anagrams!!! ;)';
}

function checkIfAnagram(firstStr, secondStr) {
  // todo
  const regex = / /g;
  const firstStrWithoutSpaces = firstStr.replace(regex, '').toLowerCase();
  const secondStrWithoutSpaces = secondStr.replace(regex, '').toLowerCase();

  const firstStrLength = firstStrWithoutSpaces.length;
  const secondStrLength = secondStrWithoutSpaces.length;

  if (firstStrLength !== secondStrLength)
    return console.log('The strings can not be anagrams! The lengths are different...');
  
  let firstStrObj = {}, secondStrObj = {};

  for (let i = 0; i < firstStrLength; i++) {
    if (firstStrObj[firstStrWithoutSpaces[i]])
      firstStrObj[firstStrWithoutSpaces[i]]++;
    else
      firstStrObj[firstStrWithoutSpaces[i]] = 1;
    
    if (secondStrObj[secondStrWithoutSpaces[i]])
      secondStrObj[secondStrWithoutSpaces[i]]++;
    else
      secondStrObj[secondStrWithoutSpaces[i]] = 1;
  }

  return validateAnagrams(firstStrObj, secondStrObj);
  
}

console.log(checkIfAnagram(first, second));