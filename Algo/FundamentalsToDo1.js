// Fundamentals To Do 1
// OK Ninjas-in-training, use your new knowledge. Can you solve these?



// Setting and Swapping
// Set myNumber to 42. Set myName to your name. Now swap myNumber into myName & vice versa.

function swapValues() {
    let myNumber = 42;
    let myName = "Mayur Nayak";

    // Swap myNumber into myName
    let temp = myNumber;
    myNumber = myName;
    myName = temp;

    // Swap myName into myNumber
    temp = myNumber;
    myNumber = myName;
    myName = temp;

    console.log("myNumber:", myNumber);
    console.log("myName:", myName);
}
swapValues();

// Print -52 to 1066
// Print integers from -52 to 1066 using a FOR loop.
function printNumbers() {
    for (let i = -52; i <= 1066; i++) {
        console.log(i);
    }
}

printNumbers();


// Don’t Worry, Be Happy
// Create beCheerful(). Within it, console.log string "good morning!" Call it 98 times.

function beCheerful() {
    console.log("good morning!");
}

for (let i = 1; i <= 98; i++) {
    beCheerful();
}

// Multiples of Three – but Not All
// Using FOR, print multiples of 3 from -300 to 0. Skip -3 and -6.
function printMultiples() {
    for (let i = -300; i <= 0; i += 3) {
        if (i === -3 || i === -6) {
            continue;
        }
        console.log(i);
    }
}

printMultiples();



// Printing Integers with While
// Print integers from 2000 to 5280, using a WHILE.

function printIntegers() {
    let i = 2000;
    while (i <= 5280) {
        console.log(i);
        i++;
    }
}

printIntegers();

// You Say It’s Your Birthday
// If 2 given numbers represent your birth month and day in either order, log "How did you know?", else log "Just another day...." 

function isMyBirthday(month, day) {
    if ((month === 9 && day === 15) || (month === 15 && day === 9)) {
        console.log("How did you know?");
    } else {
        console.log("Just another day....");
    }
}

isMyBirthday(12, 22);


// Leap Year
// Write a function that determines whether a given year is a leap year. If a year is divisible by four, it is a leap year, unless it is divisible by 100. However, if it is divisible by 400, then it is.

function isLeapYear(year) {
    if (year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0)) {
        console.log(year + " is a leap year.");
    } else {
        console.log(year + " is not a leap year.");
    }
}

isLeapYear(2000);

// Print and Count
// Print all integer multiples of 5, from 512 to 4096. Afterward, also log how many there were.
function printMultiplesOfFive() {
    let count = 0;
    for (let i = 512; i <= 4096; i++) {
        if (i % 5 === 0) {
            console.log(i);
            count++;
        }
    }
    console.log("There were " + count + " multiples of 5.");
}

printMultiplesOfFive();


// Multiples of Six
// Print multiples of 6 up to 60,000, using a WHILE.
function printMultiplesOfSix() {
    let i = 6;
    while (i <= 60000) {
        console.log(i);
        i += 6;
    }
}

printMultiplesOfSix();


// Counting, the Dojo Way
// Print integers 1 to 100. If divisible by 5, print "Coding" instead. If by 10, also print " Dojo".

function printIntegersWithConditionals() {
    for (let i = 1; i <= 100; i++) {
        let output = i;
        if (i % 5 === 0) {
            output = "Coding";
            if (i % 10 === 0) {
                output += " Dojo";
            }
        }
        console.log(output);
    }
}

printIntegersWithConditionals();

// What Do You Know?
// Your function will be given an input parameter incoming. Please console.log this value.
function logIncomingValue(incoming) {
    console.log(incoming);
}

logIncomingValue("Hello, world!"); 



// Whoa, That Sucker’s Huge…
// Add odd integers from -300,000 to 300,000, and console.log the final sum. Is there a shortcut?
function sumOddIntegers() {
    console.log(0);
}

sumOddIntegers();


// Countdown by Fours
// Log positive numbers starting at 2016, counting down by fours (exclude 0), without a FOR loop.

function countDownByFours() {
    let i = 2016;
    while (i > 0) {
        console.log(i);
        i -= 4;
    }
}

countDownByFours();

// Flexible Countdown
// Based on earlier “Countdown by Fours”, given lowNum, highNum, mult, print multiples of mult from highNum down to lowNum, using a FOR. For (2,9,3), print 9 6 3 (on successive lines).
function printMultiples(lowNum, highNum, mult) {
    for (let i = highNum; i >= lowNum; i--) {
        if (i % mult === 0) {
            console.log(i);
        }
    }
}

printMultiples(2, 9, 3); 


// The Final Countdown
// This is based on “Flexible Countdown”. The parameter names are not as helpful, but the problem is essentially identical; don’t be thrown off! Given 4 parameters (param1,param2,param3,param4), print the multiples of param1, starting at param2 and extending to param3. One exception: if a multiple is equal to param4, then skip (don’t print) it. Do this using a WHILE. Given (3,5,17,9), print 6,12,15 (which are all of the multiples of 3 between 5 and 17, and excluding the value 9).


function printFlexibleCountdown(param1, param2, param3, param4) {
    let i = param2;
    while (i <= param3) {
        if (i % param1 === 0 && i !== param4) {
            console.log(i);
        }
        i++;
    }
}

printFlexibleCountdown(3, 5, 17, 9);