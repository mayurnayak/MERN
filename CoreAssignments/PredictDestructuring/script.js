//Problem 1
const cars = ['Tesla', 'Mercedes', 'Honda']
const [ randomCar ] = cars
const [ ,otherRandomCar ] = cars
//Predict the output
console.log(randomCar)
//output will be: - Tesla

console.log(otherRandomCar)
//output will be: - Mercedes



//Problem 2
const employee = {
    name: 'Elon',
    age: 47,
    company: 'Tesla'
}
const { name: otherName } = employee;
//Predict the output
console.log(name);
//output will be: this will give an error as name is not defined anywhere

console.log(otherName);
//output will be: Elon



//Problem 3
const person = {
    name: 'Phil Smith',
    age: 47,
    height: '6 feet'
}
const password = '12345';
const { password: hashedPassword } = person;  
//Predict the output
console.log(password);
//output will be: 12345

console.log(hashedPassword);
//output will be: this will give an error as password is not defined inside the person.



//Problem 4
const numbers = [8, 2, 3, 5, 6, 1, 67, 12, 2];
const [,first] = numbers;
const [,,,second] = numbers;
const [,,,,,,,,third] = numbers;
//Predict the output
console.log(first == second); //console.log(2 == 5)
//output will be: false

console.log(first == third); //console.log(2 == 2)
//output will be: true



//Problem 5
const lastTest = {
    key: 'value',
    secondKey: [1, 5, 1, 8, 3, 3]
}
const { key } = lastTest;
const { secondKey } = lastTest;
const [ ,willThisWork] = secondKey;
//Predict the output
console.log(key);
//output will be: value

console.log(secondKey);
//output will be: [1, 5, 1, 8, 3, 3]

console.log(secondKey[0]);
//output will be: 1

console.log(willThisWork);
//output will be: 5






