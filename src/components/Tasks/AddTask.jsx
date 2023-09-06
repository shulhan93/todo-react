import styles from "./AddTask.module.css";

const AddTask = () => {
  return (
    <div className={styles.task}>
      <div className={styles.taskTop}>
        <span className={styles.taskIcon}>+</span>
        <span className={styles.taskText}>Add task</span>
      </div>
      <form className={styles.taskBottom}>
        <input className={styles.taskTitle} type="text" placeholder="Title" />
        <textarea
          className={styles.taskDetails}
          placeholder="Details"
        ></textarea>
      </form>
    </div>
  );
};

export default AddTask;
