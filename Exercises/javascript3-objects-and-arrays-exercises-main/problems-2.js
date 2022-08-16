/*
    Create a function that returns the sum of the two lowest positive numbers given an array of minimum 4 positive integers.

    For example, when an array is passed like [19, 5, 42, 2, 77], the output should be 7.
*/

const sumTwoSmallestNumbers = (numbers) => {
    let ordered = numbers.sort(function(a, b){return a-b;});
    let result = 0;
    for (let i = 0; i < ordered.length; i++){
        if (i===0){
            result = result + ordered[0]; //2
            console.log(result);
        }
        if (i===1){
            result = result + ordered[1]; //5
            console.log(result);
        }
    }
    return result;
};

console.log(sumTwoSmallestNumbers([19, 5, 42, 2, 77]));
//output: (2+5)= 7

// // Do not modify this code
window.solutions = window.solutions || {}
window.solutions.sumTwoSmallestNumbers = sumTwoSmallestNumbers