import styles from "./MahjongTile.module.css";

type MahjongTileProps = {
  value: String;
  suit: String;
};

export default function MahjongTile({ value, suit }: MahjongTileProps) {
  return (
    <div className={styles.tile}>
      <div className={styles.inner}>
        <div>{value}</div>
        {suit !== "Special" ? <div>{suit}</div> : null}
      </div>
    </div>
  );
}
