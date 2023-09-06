import Task from "./Task";
import styles from "./TaskList.module.css";

const TaskList = () => {
  return (
    <ul className={styles.tasksList}>
      <Task> Buy something or milk</Task>
      <Task> Pasta and water</Task>
      <Task> Red tomato and schees</Task>
    </ul>
  );
};

export default TaskList;
