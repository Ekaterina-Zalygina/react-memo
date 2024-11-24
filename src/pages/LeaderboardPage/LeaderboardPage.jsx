// import css from "./LeaderboardPage.module.css";
// import { Button } from "../../components/Button/Button";
// import React from "react";
// import { Link } from "react-router-dom";
// import { useLeaderboard } from "./UseLeaderboard";
// import styles from "./LeaderboardPage.module.css";

// export function LeaderboardPage() {
//   const leaderboard = useLeaderboard();

//   return (
//     <div className={css.container}>
//       <div className={css.line}>
//         <h1 className={styles.leaderboard}>Лидерборд</h1>
//         <Link to="/">
//           <Button onClick={() => {}} className={styles.playButton}>
//             Начать игру
//           </Button>
//         </Link>
//       </div>

//       <div className={css.table}>
//         <div className={styles.position}>Позиция</div>
//         <div className={styles.user}>Пользователь</div>
//         <div className={styles.time}>Время</div>

//         {[...leaderboard]
//           .sort((x, y) => x.time - y.time)
//           .map((item, index) => (
//             <React.Fragment key={item.id}>
//               <div>#{index + 1}</div>
//               <div>{item.name}</div>
//               <div>
//                 {Math.floor(item.time / 60)
//                   .toString()
//                   .padStart(2, "0")}
//                 :{(item.time % 60).toString().padStart(2, "0")}
//               </div>
//             </React.Fragment>
//           ))}
//       </div>
//     </div>
//   );
// }

import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../../components/Button/Button";
import { useLeaderboard } from "./UseLeaderboard";
import styles from "./LeaderboardPage.module.css";

export function LeaderboardPage() {
  const leaderboard = useLeaderboard();

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
          <div className={styles.timeHeader}>Время</div>
        </div>

        {leaderboard
          .sort((x, y) => x.time - y.time)
          .map((item, index) => (
            <div key={item.id} className={styles.row}>
              <div className={styles.position}>#{index + 1}</div>
              <div className={styles.user}>{item.name}</div>
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
