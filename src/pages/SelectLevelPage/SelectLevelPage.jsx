import { Link } from "react-router-dom";
import styles from "./SelectLevelPage.module.css";
import { useContext } from "react";
import { EasyContext } from "../../context/useGameData.context.jsx";

export function SelectLevelPage() {
  const { isEasyMode, setEasyMode } = useContext(EasyContext);

  return (
    <div className={styles.container}>
      <div className={styles.modal}>
        <h1 className={styles.title}>Выбери сложность</h1>
        <ul className={styles.levels}>
          <li className={styles.level}>
            <Link className={styles.levelLink} to="/game/3">
              1
            </Link>
          </li>
          <li className={styles.level}>
            <Link className={styles.levelLink} to="/game/6">
              2
            </Link>
          </li>
          <li className={styles.level}>
            <Link className={styles.levelLink} to="/game/9">
              3
            </Link>
          </li>
        </ul>
        <div className={styles.EasyMode}>
          <label className={styles.LabelLight}>Легкий режим</label>
          <input
            className={styles.InputLight}
            type="checkbox"
            checked={isEasyMode}
            onChange={e => setEasyMode(e.target.checked)}
          />
        </div>
      </div>
    </div>
  );
}
