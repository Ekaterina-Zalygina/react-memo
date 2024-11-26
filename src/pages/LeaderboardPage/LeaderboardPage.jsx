import magicBall from "./magic-ball.svg";
import puzzle from "./puzzle.svg";

import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../../components/Button/Button";
import { useLeaderboard } from "./UseLeaderboard";
import styles from "./LeaderboardPage.module.css";

export function LeaderboardPage() {
  const leaderboard = useLeaderboard();

  console.log(leaderboard);

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.title}>Лидерборд</h1>
        <Link to="/">
          <Button onClick={() => {}} className={styles.playButton}>
            Начать игру
          </Button>
        </Link>
      </div>

      <div className={styles.table}>
        <div className={`${styles.row} ${styles.headerRow}`}>
          <div className={styles.positionHeader}>Позиция</div>
          <div className={styles.userHeader}>Пользователь</div>
          <div className={styles.userHeader}>Достижения</div>
          <div className={styles.timeHeader}>Время</div>
        </div>

        {leaderboard
          .sort((x, y) => x.time - y.time)
          .map((item, index) => (
            <div key={item.id} className={styles.row}>
              <div className={styles.position}>#{index + 1}</div>
              <div className={styles.user}>{item.name}</div>
              <div className={styles.achievements}>
                {item.achievements.includes(1) && <img src={magicBall} alt="" />}
                {item.achievements.includes(2) && <img src={puzzle} alt="" />}
              </div>
              <div className={styles.time}>
                {Math.floor(item.time / 60)
                  .toString()
                  .padStart(2, "0")}
                :{(item.time % 60).toString().padStart(2, "0")}
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}
