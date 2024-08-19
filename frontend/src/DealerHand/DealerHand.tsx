import MahjongTile from "../MahjongTile/MahjongTile";
import styles from "./DealerHand.module.css";

export default function DealerHand() {
  return (
    <div className={styles.container}>
      <div className={styles.handContainer}>
        <MahjongTile value="Zhong" suit="Special" />
        <MahjongTile value="9" suit="Maan" />
        <MahjongTile value="3" suit="Soek" />
        <MahjongTile value="5" suit="Maan" />
        <MahjongTile value="Choy" suit="Special" />
      </div>
    </div>
  );
}
