import { Link, useNavigate } from "react-router-dom";
import { Button } from "../../components/Button/Button";
import styles from "./SelectLevelPage.module.css";
import { useEffect, useState } from "react";
import { useEasyMode } from "../../context/useEasyMode";

export function SelectLevelPage() {
  const [level, setLevel] = useState(null);
  const navigate = useNavigate();

  const { isEasyMode, setEasyMode } = useEasyMode();

  useEffect(() => {
    setEasyMode(false);
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.modal}>
        <h1 className={styles.title}>Выбери сложность</h1>
        <ul className={styles.levels}>
          <li className={styles.level}>
            <div className={styles.levelLink} data-selected={level === 3} onClick={() => setLevel(3)}>
              1
            </div>
          </li>
          <li className={styles.level}>
            <div className={styles.levelLink} data-selected={level === 6} onClick={() => setLevel(6)}>
              2
            </div>
          </li>
          <li className={styles.level}>
            <div className={styles.levelLink} data-selected={level === 9} onClick={() => setLevel(9)}>
              3
            </div>
          </li>
        </ul>

        <label style={{ marginBottom: 10 }}>
          <input type="checkbox" onChange={() => setEasyMode(!isEasyMode)} value={isEasyMode} />
          <span>Легкий режим (3 жизни)</span>
        </label>

        <Button
          disabled={level === null}
          onClick={() => {
            navigate(`/game/${level}`);
          }}
        >
          Играть
        </Button>

        <Link to="/leaderboard" style={{ marginTop: 40 }}>
          Перейти к лидерборду
        </Link>
      </div>
    </div>
  );
}
