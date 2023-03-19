const pokémon = Object.freeze([
        { "id": 1,   "name": "Bulbasaur",  "types": ["poison", "grass"] },
        { "id": 5,   "name": "Charmeleon", "types": ["fire"] },
        { "id": 9,   "name": "Blastoise",  "types": ["water"] },
        { "id": 12,  "name": "Butterfree", "types": ["bug", "flying"] },
        { "id": 16,  "name": "Pidgey",     "types": ["normal", "flying"] },
        { "id": 23,  "name": "Ekans",      "types": ["poison"] },
        { "id": 24,  "name": "Arbok",      "types": ["poison"] },
        { "id": 25,  "name": "Pikachu",    "types": ["electric"] },
        { "id": 37,  "name": "Vulpix",     "types": ["fire"] },
        { "id": 52,  "name": "Meowth",     "types": ["normal"] },
        { "id": 63,  "name": "Abra",       "types": ["psychic"] },
        { "id": 67,  "name": "Machamp",    "types": ["fighting"] },
        { "id": 72,  "name": "Tentacool",  "types": ["water", "poison"] },
        { "id": 74,  "name": "Geodude",    "types": ["rock", "ground"] },
        { "id": 87,  "name": "Dewgong",    "types": ["water", "ice"] },
        { "id": 98,  "name": "Krabby",     "types": ["water"] },
        { "id": 115, "name": "Kangaskhan", "types": ["normal"] },
        { "id": 122, "name": "Mr. Mime",   "types": ["psychic"] },
        { "id": 133, "name": "Eevee",      "types": ["normal"] },
        { "id": 144, "name": "Articuno",   "types": ["ice", "flying"] },
        { "id": 145, "name": "Zapdos",     "types": ["electric", "flying"] },
        { "id": 146, "name": "Moltres",    "types": ["fire", "flying"] },
        { "id": 148, "name": "Dragonair",  "types": ["dragon"] }
    ]);

    
// an array of pokémon objects where the id is evenly divisible by 3
const id3 = pokémon.filter((name) => name.id%3 === 0);
console.log(id3);


// an array of pokémon objects that are "fire" type
const typeFire = pokémon.filter(pokemonType => pokemonType.types.includes('fire'));
console.log(typeFire)


// an array of pokémon objects that have more than one type
const moreType = pokémon.filter(pokemonType => pokemonType.types.length>1);
console.log(moreType)


// an array with just the names of the pokémon
const names = pokémon.map((pname) => pname.name);
console.log(names);


// an array with just the names of pokémon with an id greater than 99
const new99 =[]
const id99 = pokémon.filter((pname) => {
    if(pname.id > 99){
        new99.push(pname.name)
    }
})
console.log(new99)


// an array with just the names of the pokémon whose only type is poison
const poison = []
const typePoison = pokémon.filter((pname) => {
    if(pname.types.length == 1 && pname.types == 'poison'){
        poison.push(pname.name)
    }
})
console.log(poison)



// an array containing just the first type of all the pokémon whose second type is "flying"
const newArray = []
const typeFlying = pokémon.filter((type) => {
    
    if(type.types[1] === 'flying'){
        newArray.push(type.types[0])
    }
})
console.log(newArray)


// a count of the number of pokémon that are "normal" type
let count = 0
const pNormal = pokémon.filter((type) => {
    
    if(type.types.includes('normal')){
        count +=1
    }
})
console.log(`count of the number of pokémon that are normal type is:- ${count}.`)
