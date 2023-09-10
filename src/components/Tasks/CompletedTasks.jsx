import arrowIcon from "../../assets/icons/arrow.svg";
import checkIcon from "../../assets/icons/check.svg";
import deleteIcon from "../../assets/icons/delete.svg";
import styles from "./Tasks.module.css";
import PropTypes from "prop-types";

const CompletedTasks = ({ data }) => {
  const activeCategory = data.filter((item) => item.category.isActive);

  return (
    <div className={styles.completedTasks}>
      <div className={styles.completedTasksCount}>
        <span>Completed ({`${activeCategory[0].completedTask.length}`})</span>
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

CompletedTasks.propTypes = {
  data: PropTypes.array.isRequired,
};

export default CompletedTasks;
