// Program-4

const inputArry = [1, 2, 8, 9, 12, 46, 76, 82, 15, 20, 30];
 
  const multiples = [1, 2, 3, 4, 5, 6, 7, 8, 9];


function countMultiples(inputs, multiples) {
    const result = {};
  
    for (let numMultiples of multiples) {
      let count = 0;
  
      for (let numInputs of inputs) {
        if (numInputs % numMultiples === 0) {
          count++;
        }
      }
  
      result[numMultiples] = count;
    }
  
    return result;
  }
  
  
  const outputDict = countMultiples(inputArry, multiples);
  console.log(outputDict);