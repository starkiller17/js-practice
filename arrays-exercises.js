// Exercise #1
// 1. Create an array using array literal
// 2. Name the array pets
// 3. Add some pets to it!
// TIP: Make sure you open the console in CodeSandbox by
// looking at the bottom right of the codexandbox built in browser
// TIP: Comment out line 26

let pets = [];
pets.push('Dog');
pets.push('Fish');
pets.unshift('Cat');

// Exercise #2
// 1. Add the element "alligator" to the end of your array.
// Hint: Use a method

console.log(pets);

pets.push('Alligator');

// Exercise #3
// But an alligator realy isn't a pet, right?
// 1. Remove the alligator and replace it with "horses"
console.log(pets);

pets.pop();
pets.push('Horses');

console.log(pets);

// Exercise #4
// Let's iterate through each item in an array and console.log it
// with it's index

// comment this out

pets.forEach((pet, index) => {
  console.log(`[${index}] => ${pet}`)
});

console.log(pets);
