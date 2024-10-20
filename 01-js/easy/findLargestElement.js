/*
  Write a function `findLargestElement` that takes an array of numbers and returns the largest element.
  Example:
  - Input: [3, 7, 2, 9, 1]
  - Output: 9
*/

function findLargestElement(numbers) {
    var Largest=numbers[0];
    for(let i =0;i<numbers.length;i++){
        if(numbers[i]>Largest){
            Largest=numbers[i];
        }
    }
    return Largest;   
}

module.exports = findLargestElement;