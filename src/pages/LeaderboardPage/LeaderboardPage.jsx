import css from "./LeaderboardPage.module.css";
import { Button } from "../../components/Button/Button";
import React from "react";
import { Link } from "react-router-dom";
import { useLeaderboard } from "./UseLeaderboard";

export function LeaderboardPage() {
  const leaderboard = useLeaderboard();

  return (
    <div className={css.container}>
      <div className={css.line}>
        <h1>Лидерборд</h1>
        <Link to="/">
          <Button onClick={() => {}}>Начать игру</Button>
        </Link>
      </div>

      <div className={css.table}>
        <div>Место</div>
        <div>Имя</div>
        <div>Время</div>

        {[...leaderboard]
          .sort((x, y) => x.time - y.time)
          .map((item, index) => (
            <React.Fragment key={item.id}>
              <div>{index + 1}</div>
              <div>{item.name}</div>
              <div>
                {Math.floor(item.time / 60)
                  .toString()
                  .padStart(2, "0")}
                :{(item.time % 60).toString().padStart(2, "0")}
              </div>
            </React.Fragment>
          ))}
      </div>
    </div>
  );
}
