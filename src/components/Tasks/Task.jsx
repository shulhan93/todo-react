import styles from "./Task.module.css";
import PropTypes from "prop-types";

const Task = ({ title, description }) => {
  return (
    <div className={styles.task}>
      <div className={styles.taskContent}>
        <h3 className={styles.taskTitle}>
          <div className={styles.taskIcon}></div>
          <span>{title}</span>
        </h3>
        <p className={styles.taskDescription}>{description}</p>
      </div>
    </div>
  );
};

Task.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default Task;
