var removeDuplicateNums = (numbers) => {
  // TODO
  const array_without_duplicates = [];
  const numbers_in_array = {};

  numbers.forEach(number => {
    if (!numbers_in_array[number])
      array_without_duplicates.push(number);
    
    numbers_in_array[number] = number;
  });
  
  console.log(numbers_in_array);
  return array_without_duplicates;
};

console.log(removeDuplicateNums([5, 1, 2, 3, 2, 4, 4, 4, 5, 8]));
