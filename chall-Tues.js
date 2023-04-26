function hasMoreVowels(word) {
    
    word = word.toLowerCase();
  
    
    let vowelCount = 0;
    let nonVowelCount = 0;
    for (let i = 0; i < word.length; i++) {
      const char = word.charAt(i);
      if (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u') {
        vowelCount++;
      } else {
        nonVowelCount++;
      }
    }
  
    
    return vowelCount > nonVowelCount;
  }

console.log(hasMoreVowels('hello'));
console.log(hasMoreVowels('world'));
console.log(hasMoreVowels('aaeio')); 
console.log(hasMoreVowels('bdfghj'));



function fixAnimal(arr) {
    
    [arr[0], arr[2]] = [arr[2], arr[0]];
    return arr;
  }
  //This function takes in an array with three values (tail, body, head) and swaps the first and last elements of the array to fix the order of the animal. You can call this function on each array in your program to fix the order of the animals.
  let meerkatParts = [
    ['tail', 'body', 'head'],
    ['tail', 'body', 'head'],
    ['tail', 'body', 'head'],
    
  ];
//order of the meerkat parts using a loop and the fixAnimal() function like this:

  for (let i = 0; i < meerkatParts.length; i++) {
    meerkatParts[i] = fixAnimal(meerkatParts[i]);
  }
//This will modify the meerkatParts array in place, swapping the first and last elements of each sub-array to fix the order of the meerkats.