import styles from "./Leaderboard.module.css";

export function LeaderBoardPlayer({ name, time, position }) {
  return (
    <div className={styles.leaderboardContainer}>
      <div className={styles.leaderCoardContainerPosition}>{position}</div>
      <div className={styles.leaderCoardContainerName}>{name}</div>
      <div className={styles.leaderCoardContainerTime}>{time}</div>
    </div>
  );
}
