import {useEffect, useState} from 'react'
import axios from 'axios'
import './App.css';

function App() {

  const [pokemonName, setPokemonName] = useState([])

  useEffect(() => {
    axios.get('https://pokeapi.co/api/v2/pokemon?limit=807&offset=0')
      .then((response) => {
        setPokemonName(response.data.results)
        // console.log(response.data.results)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])

  return (
    <div className="App">
      <h1>Fetch Pokemon</h1>
      {
        pokemonName.map((pokemon,idx) =>(
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
