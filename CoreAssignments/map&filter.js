const nums = [23, 56, 19, 20, 9, 20, 78, 55, 32, 42, 8, 12, 80]

// const newArr = nums.map( (item, idx, wholeArray) => {
//     return item *2
// })
// console.log(newArr);


// const evenNums = nums.filter( (item) => item % 2 === 0 )
// console.log(evenNums);

// ! filter through the nums array and return a new array that contains only the numbers that are less than 50

const fNums = nums.filter((item) => item < 50)
console.log(fNums);


// -------------------------------------------------

const nbaAthletes = [
    { name: 'Kevin Durant', league: 'NBA', position: 'Small Forward', active: true },
    { name: 'Charles Barkley', league: 'NBA', position: 'Power Forward', active: false },
    { name: 'Stephen Curry', league: 'NBA', position: 'Point Guard', active: true },
    { name: 'Shaq', league: 'NBA', position: 'Center', active: false },
    { name: 'Damian Lillard', league: 'NBA', position: 'Point Guard', active: true },
    { name: 'Mike James', league: 'Euro', position: 'Shooting Guard', active: true },
]
// ! map through nbaAthletes and console log every athletes name, position and league they play in
const playerList = nbaAthletes.map((athlete) => {
    return {
        name: athlete.name,
        position: athlete.position,
        league: athlete.league
    };
}
)
console.log(playerList)


// here I am filtering out all the players that play in the NBA 
const NBAPlayers = nbaAthletes.filter((athlete) => athlete.league === 'NBA')
console.log(NBAPlayers);

// ! filter through the nbaAthletes array and return a new array that contains only the players that are active (active status is true)
let otherArray = []
const activePlayerList = nbaAthletes.filter((athlete) => {
    if (athlete.active === true) {
        otherArray.push(athlete.name)
    }
})
console.log(otherArray)

// ! filter through the nbaAthletes array and return a new array that contains only the players that are point guards (position: 'Point Guard')