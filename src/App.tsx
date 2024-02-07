import './App.css'
import Game from './game'
import Player from './player';

function App() {
  const player1 = new Player()
  const player2 = new Player()

  const start = new Game(player1, player2);

  return (
    <>
      {start.chooseActionCard()}
    </>
  )
}

export default App
