import {useEffect, useState} from 'react'
import './App.css';

function App() {

  const [pokemonName, setPokemonName] = useState([])

  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon?limit=807&offset=0')
    .then((response) => {
      return response.json()
    }).then((response) => {
      setPokemonName(response.results)
    })

    .catch((err) => {
      console.log(err)
    })
  })

  return (
    <div className="App">
      <h1>Pokemon</h1>
      {
        pokemonName.map((pokemon, idx) => (
          <div key={idx}>
            <ul className='list'>
              <li>{pokemon.name}</li>
            </ul>
          </div>
        ))
      }
    </div>
  );
}

export default App;
