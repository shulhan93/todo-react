import styles from "./Task.module.css";

const Task = (props) => {
  return (
    <div className={styles.task}>
      <div className={styles.taskContent}>
        <h3 className={styles.taskTitle}>
          <div className={styles.taskIcon}></div>
          <span>{props.children}</span>
        </h3>
        <p className={styles.taskDescription}>Something description</p>
      </div>
    </div>
  );
};

export default Task;
