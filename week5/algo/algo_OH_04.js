// ? Count how many vowels are in a given string 
// * Create a function that takes in a string as an argument and return back how many vowels are in the string 
// * Example: countVowels('Racecar') should return 3 because there are 3 vowels (2 a's and 1 e)
// ! Hint if your stuck look into the .includes() method 

const vowels = ['a', 'e', 'i', 'o', 'u'];

const countVowels = (str) => {
    let vowelCount = 0;
    for (let index = 0; index < str.length; index++) {
        if(vowels.includes(str[index].toLowerCase())){
            vowelCount++
        }
    }
    console.log(vowelCount)
    return vowelCount
}

const vowelCount = countVowels('SUPERCALIFRAGILISTICEXSPLEALADOSHISH'); // sp?
// ***************how to include both lowercase and uppercase letters



// ? Create a function that given a string, returns the integer made from the string’s digits. Given “0s1a3y5w7h9a2t4?“, the function should return the number ‘01357924’

const numsInString = (str) => {
    let final = ''
    for (let index = 0; index < str.length; index++) {
        if(! isNaN(str[index])){
            final += str[index]
        }
    }
    console.log(final)
    console.log(typeof Number(final))
    return final
}

const numsFromString = numsInString('0s1a3y5w7h9a2t4?');




// ? Create a function to create a deck of cards 
// ! Hint you will probably want to look into nested for loops
// ! This is what the output should look like
// [
//     'Ace of Hearts',     '2 of Hearts',      '3 of Hearts',
//     '4 of Hearts',       '5 of Hearts',      '6 of Hearts',
//     '7 of Hearts',       '8 of Hearts',      '9 of Hearts',
//     '10 of Hearts',      'Jack of Hearts',   'Queen of Hearts',
//     'King of Hearts',    'Ace of Diamonds',  '2 of Diamonds',
//     '3 of Diamonds',     '4 of Diamonds',    '5 of Diamonds',
//     '6 of Diamonds',     '7 of Diamonds',    '8 of Diamonds',
//     '9 of Diamonds',     '10 of Diamonds',   'Jack of Diamonds',
//     'Queen of Diamonds', 'King of Diamonds', 'Ace of Clubs',
//     '2 of Clubs',        '3 of Clubs',       '4 of Clubs',
//     '5 of Clubs',        '6 of Clubs',       '7 of Clubs',
//     '8 of Clubs',        '9 of Clubs',       '10 of Clubs',
//     'Jack of Clubs',     'Queen of Clubs',   'King of Clubs',
//     'Ace of Spades',     '2 of Spades',      '3 of Spades',
//     '4 of Spades',       '5 of Spades',      '6 of Spades',
//     '7 of Spades',       '8 of Spades',      '9 of Spades',
//     '10 of Spades',      'Jack of Spades',   'Queen of Spades',
//     'King of Spades'
//   ]
const face = ["Ace", "2", "3", "4", "5", "6", "7", "8", "9", "10", "Jack", "Queen", "King"];
const suits = ["Hearts", "Diamonds", "Clubs", "Spades"];
const deck = [];

const deckOfCards = () => {

for (let suit of suits){
    for (let card of face){
        deck.push(`${suit} of ${card}`)
    }
    return deck
}
}

console.log(deckOfCards())


