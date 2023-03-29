import './App.css';
import PersonCard from './Components/PersonCard';

function App(props) {
  return (
    <div className="App">
      <PersonCard 
        firstName={"Mayur"}
        lastName={"Nayak"}
        age={31}
        hairColor={"Black"}
      />
      <PersonCard 
        firstName={"Shraddha"}
        lastName={"Nayak"}
        age={25}
        hairColor={"Black"}
      />
      <PersonCard 
        firstName={"Kailash"}
        lastName={"Naik"}
        age={63}
        hairColor={"Black"}
      />
      <PersonCard 
        firstName={"Sunanda"}
        lastName={"Nayak"}
        age={56}
        hairColor={"Black"}
      />
    </div>
  );
}

export default App;
