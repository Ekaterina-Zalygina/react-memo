import styles from "./EndGameModal.module.css";

import { Button } from "../Button/Button";

import deadImageUrl from "./images/dead.png";
import celebrationImageUrl from "./images/celebration.png";
import { useLeaderboard } from "../../pages/LeaderboardPage/UseLeaderboard";
import { Link, useNavigate } from "react-router-dom";
import { apiProvider } from "../../api";
import { useState } from "react";

export function EndGameModal({ isWon, gameDurationSeconds, gameDurationMinutes, onClick, hard, achieves }) {
  const leaderboard = useLeaderboard();
  const [name, setName] = useState("");

  const navigate = useNavigate();

  function isInLeaderboard() {
    if (!hard) return false;
    if (!isWon) return false;
    const last = leaderboard[leaderboard.length - 1];
    if (!last) return true;
    return last.time > gameDurationSeconds;
  }

  function getTitle() {
    if (!isWon) return "Вы проиграли!";
    if (isInLeaderboard()) return "Вы попали в лидерборд!";
    return "Вы победили!";
  }

  const imgSrc = isWon ? celebrationImageUrl : deadImageUrl;

  const imgAlt = isWon ? "celebration emodji" : "dead emodji";

  return (
    <div className={styles.modal}>
      <img className={styles.image} src={imgSrc} alt={imgAlt} />
      <h2 className={styles.title}>{getTitle()}</h2>
      {isInLeaderboard() && (
        <input placeholder="Ваше имя" value={name} onChange={e => setName(e.target.value)} type="text" name="" id="" />
      )}
      <p className={styles.description}>Затраченное время:</p>
      <div className={styles.time}>
        {gameDurationMinutes.toString().padStart("2", "0")}.{gameDurationSeconds.toString().padStart("2", "0")}
      </div>

      <Button onClick={onClick}>Начать сначала</Button>
      <div
        onClick={() => {
          if (!name || !isInLeaderboard()) {
            navigate("/leaderboard");
            return;
          }
          apiProvider
            .addToLeaderboard({
              name,
              time: gameDurationSeconds,
              achievements: achieves,
            })
            .then(() => navigate("/leaderboard"));
        }}
      >
        <Link className={styles.linkLeaderboard}>Перейти к лидерборду</Link>
      </div>
    </div>
  );
}
