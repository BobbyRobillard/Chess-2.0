import ListGroup from "./components/ListGroup";

import { Chess } from 'chess.js'

function App() {

  const chess = new Chess()
  while(!chess.isGameOver()) {
  const moves = chess.moves()
  const move = moves[Math.floor(Math.random() * moves.length)]
  chess.move(move)
  }
  return <p>{chess.pgn()}</p>
}

export default App;