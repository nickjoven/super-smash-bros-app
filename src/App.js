import './App.css';
import Fighter from './components/Fighter'

function App() {
  // started here const fighters = ['Roy', 'Ganondorf', 'Mario', 'Luigi', 'Marth', 'Link', 'Inkling', 'Samus', 'Fox', 'Sheik', 'Zelda', 'Ken']
  // goal is to have array of objects
  const fighters = [
    {name: 'Roy', color: 'blue'},
    { name: 'Ike', color: 'brown'},
    { name: 'Lucina', color: 'lightskyblue'},
    {name: 'Marth', color: 'dodgerblue'},
    {name: 'Byleth', color: 'gray'},
    {name: 'Chrom', color: 'orange'},
    {name: 'Corrin', color: 'gold'},
    {name: 'Sheik', color: 'coral'},
    { name: 'Zelda', color: 'pink'},
    {name: 'Sephiroth', color: 'black'},
    {name: 'Cloud', color: 'midnightblue'},
    {name: 'Sora', color: 'firebrick'},
  ]

  return (
    <div className="App">
      <h1>Fighters</h1>
      <div className='fighters-grid'>
        {
          fighters.map((element, index) => {
            return (
              <Fighter fighter={element} />
            )
          })
        }
      </div>
    </div>
  );
}

export default App;
