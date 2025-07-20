import ScoreKeeper from './components/ScoreKeeper';
import './App.css';

function App() {

  return (
    <>
      <ScoreKeeper numPlayers={5} target={3} />
    </>
  )
}

export default App;