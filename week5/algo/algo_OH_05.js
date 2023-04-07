// ? Create a function that takes in a string input, search through each letter in the string input
// to find “h”, “e”, “l” and “p” which spells out help in that order. Return True if found and false if not.
// ex: “The last person was Ironman” --> True
// ex: “How about them pelicans” --> False

const helpFinder = (str) => {
    let targetWord = 'help'
    let index = 0
    for (let i = 0; i < str.length; i++) {
        if (str[i] === targetWord[index]) {
            index++;
            if (index === targetWord.length) {
                return true;
            }
        }
    }
    return false;
};

const result = helpFinder('The last person was Ironman'); // should return true
const result2 = helpFinder('How about them pelicans'); // should return false 
const result3 = helpFinder('helphelphelphelp'); // should return false 

console.log(result3)


// ? Given two arrays, create a function that lets a user know (true/false) whether these two arrays contains any common items:
// inputs: array1, array2
// outputs: true/false

// Case 1: returns True
const array1 = ['a', 'b', 'c', 'd', 'e', 'z'] //<=inputs
const array2 = ['z', 'y', 'x'] //<=inputs

// Case 2: returns False
// const array1 = ['f', 'e', 'd'] //<=inputs
// const array2 = ['n', 'm', 'o'] //<=inputs

const commonItems = (arr1, arr2) => {
    for (let i = 0; i < arr1.length; i++) {
        for (let j = 0; j < arr2.length; j++) {
            if (arr1[i] === arr2[j]) {
                return true;
            }
        }
    } 
    return false;
}

const isCommon = commonItems(['a', 'b', 'c', 'd', 'e', 'z'], ['z', 'y', 'x']); // should return true
const isCommon2 = commonItems(['f', 'e', 'd'], ['n', 'm', 'o']) // should return false 




// ? Given a string, return true if the string is a palindrome, and false otherwise.
// * Palindrome means the word is the same read backwards example mom, dad, racecar, kayak are all palindrome but racecars, fast, 
// hug are examples that are not palindrome


const palindrome = (str) => {
    for (let index = 0; index < str.length / 2; index++) {
        if (str[index] !== str[str.length - 1 - index]) {
            return false
        }
    }
    return true
}


const isPalindrome = palindrome('kayak'); // should return true
const isPalindrome2 = palindrome('racecars'); // should return false 
const isPalindrome3 = palindrome('ajuujuuja')

// console.log(isPalindrome)
// console.log(isPalindrome2)
// console.log(isPalindrome3)