import MahjongTile from "../MahjongTile/MahjongTile";
import styles from "./PlayerHand.module.css";

export default function PlayerHand() {
  return (
    <div className={styles.container}>
      <div className={styles.handContainer}>
        <MahjongTile value="1" suit="Maan" />
        <MahjongTile value="2" suit="Maan" />
        <MahjongTile value="3" suit="Maan" />
        <MahjongTile value="7" suit="Soek" />
        <MahjongTile value="8" suit="Soek" />
        <MahjongTile value="9" suit="Soek" />
        <MahjongTile value="3" suit="Tong" />
        <MahjongTile value="4" suit="Tong" />
        <MahjongTile value="5" suit="Tong" />
        <MahjongTile value="1" suit="Soek" />
        <MahjongTile value="2" suit="Soek" />
        <MahjongTile value="2" suit="Tong" />
        <MahjongTile value="2" suit="Tong" />
      </div>
    </div>
  );
}
