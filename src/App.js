import { useState } from 'react'
import './App.css';
import Fighter from './components/Fighter'
import FighterScreen from './components/FighterScreen'


function App() {
  // started here const fighters = ['Roy', 'Ganondorf', 'Mario', 'Luigi', 'Marth', 'Link', 'Inkling', 'Samus', 'Fox', 'Sheik', 'Zelda', 'Ken']
  // goal is to have array of objects
  const fighters = [
    {name: 'Roy', color: 'blue'},
    { name: 'Chrom', color: 'white'},
    { name: 'Lucina', color: 'lightskyblue'},
    {name: 'Marth', color: 'dodgerblue'},
    {name: 'Byleth', color: 'gray'},
    {name: 'Ike', color: 'brown'},
    {name: 'Corrin', color: 'gold'},
    {name: 'Sheik', color: 'coral'},
    { name: 'Zelda', color: 'pink'},
    {name: 'Sephiroth', color: 'black'},
    {name: 'Cloud', color: 'midnightblue'},
    {name: 'Sora', color: 'firebrick'},
  ]

  const [selectedFighter, setSelectedFighter] = useState()

  return (
    <div className="App">
      <h1>Fighters</h1>
      <div className='fighters-grid'>
        {
          fighters.map((element, index) => {
            return (
              <Fighter fighter={element} setSelectedFighter={setSelectedFighter} />
              )
            })
          }
      </div>
    {
      selectedFighter
      ? <FighterScreen />
      : null
    }
    </div>
  );
}

export default App;
