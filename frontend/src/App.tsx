import DealerHand from "./DealerHand/DealerHand";
import PlayerHand from "./PlayerHand/PlayerHand";

export default function App() {
  return (
    <div>
      <h1>Mahjong Matching Game</h1>
      <DealerHand />
      <PlayerHand />
    </div>
  );
}
