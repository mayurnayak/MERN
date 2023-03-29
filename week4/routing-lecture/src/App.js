import './App.css';
import { Routes, Route, Link} from 'react-router-dom'
import Home from './components/Home';
import About from './components/About';
import Word from './components/Word';

function App() {
  return (
    <div className="App">
      <h1>Welcome!</h1>

        <Link to={'/Home'}>Home</Link>
        <br />
        <Link to={'/about'}>About</Link>
        <Routes>
          <Route path='/home' element={<Home/>} />
          <Route path='/about' element={<About/>} />
          <Route path='/word/:color/:id' element={<Word/>} />
        </Routes>

    </div>
  );
}

export default App;
