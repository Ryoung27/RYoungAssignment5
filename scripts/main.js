/* Practice Assignment 4:

Complete this javascript file according to the individual instructions
given in the comments. 

*** DO NOT CHANGE any of the code that you are not instructed to. */

// 1) Create a function named helloWorld that returns the exact phrase:
// "Hello World!".

// You can create a one line function without return, if it's one line.
const helloWorld = () => 'Hello World!';
// 2) Create a function named greeting that will accept a "name" parameter
// and return the string: "Hello, name." where "name" is replaced
// with whatever value we want to provide when calling the function.

// You can create a one line function without return, if it's one line.
const greeting = (name) => "Hello, " + name + ".";

// 3) Create a function named divisibleByThree that accepts a "number" parameter
// and will return accurate boolean data depending on the value
// of the "number" parameter. Hint: Try the modulus operator.

const divisibleByThree = (number) => {
    //Terniary to check if number modulo three equals zero.
    //If number is divisible by 3 return true else false.
    return number % 3 === 0 ? true : false;
}
// 4) Create a function named averageAge that accepts 3 parameters:
// num1, num2, and num3. The function should return the average of
// all three numbers, but the parameter num3 is missing, it should
// return the average of num1 and num2. Returned results should be
// rounded to the nearest integer. Hint: Use a Math method to round.
const averageAge = (num1, num2, num3) => {
    if(num1 && num2 && num3){
        return Math.round(((num1+num2+num3)/3))
    }else{
        return Math.round(((num1+num2)/2))
    }
}

// 5) Create a function named leetSpeak that accepts a word
// as a parameter and returns the same word except all of the letter
// e occurances (lower case only) are replaced by the number 3.
// Replace any lower case a with the number 4, too.
// Hints: You will use a loop. You will use conditionals.
// Example: leet is returned as l33t. speak is returned as sp34k.
const leetSpeak = (word) => {
    //Create an empty array to store our new values.
    let newWord = [];
    //Turn our word into an array of letters and spread it.
    //Then map over the letters in the array calling an ananoymous function.
    [...word].map((letter) => {
        //If the letter is e push to our empty arrary 3
        if(letter === "e"){
            newWord.push("3");
            //If the letter is a push to our empty array 4.
        }else if(letter === "a"){
            newWord.push("4");
        }else{
            //Else push our letter.
            newWord.push(letter);
        }
    })
    //Join our newWord array with no separator.
    return newWord.join('');
}