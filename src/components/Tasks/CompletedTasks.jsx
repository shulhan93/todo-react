import arrowIcon from "../../assets/icons/arrow.svg";
import checkIcon from "../../assets/icons/check.svg";
import deleteIcon from "../../assets/icons/delete.svg";

import styles from "./CompletedTasks.module.css";

const CompletedTasks = () => {
  return (
    <div className={styles.completedTasks}>
      <div className={styles.completedTasksCount}>
        <span>Completed (5)</span>
        <img src={arrowIcon} />
      </div>
      <div className={styles.completedTaskList}>
        <li className={styles.completedTask}>
          <img src={checkIcon} />
          <div className={styles.completedTaskTitle}>Something did</div>
          <img src={deleteIcon} />
        </li>
      </div>
    </div>
  );
};

export default CompletedTasks;
