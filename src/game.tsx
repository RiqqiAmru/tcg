import { DialogStart } from "./components/dialog";
import Player from "./player";
import { chooseRandom } from "./utils";
class Game {
  mode: string;
  player1: Player;
  player2: Player;

  constructor(player1: Player, player2: Player, mode = "singlePlayer") {
    this.mode = mode;
    this.player1 = player1;
    this.player2 = player2;
  }

  chooseActionCard() {
    // diberikan 5 kartu, player dapat menolak satu/beberapa kartu untuk diambilkan lagi random
    const cards = chooseRandom(this.player1.action, 5);
    return (
      <>
        <DialogStart cards={cards}></DialogStart>
      </>
    )
  }
}

export default Game;
