import { useState } from "react";
import PropTypes from "prop-types";

import styles from "./AddTask.module.css";

const AddTask = ({ addTask }) => {
  const [isActive, setIsActive] = useState(false);
  const [title, setTitle] = useState("");
  const [details, setDetails] = useState("");

  const toggleInputs = () => {
    setIsActive(!isActive);
  };

  return (
    <div className={styles.task}>
      <div onClick={toggleInputs} className={styles.taskTop}>
        <span className={styles.taskIcon}>+</span>
        <span className={styles.taskText}>Add task</span>
      </div>
      <div className={`${styles.taskBottom} ${isActive ? styles.active : ""}`}>
        <input
          className={styles.taskTitle}
          value={title}
          type="text"
          placeholder="Title"
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          className={styles.taskDetails}
          placeholder="Details"
          value={details}
          onChange={(e) => setDetails(e.target.value)}
        ></textarea>
        <button
          onClick={() => {
            addTask(title, details);
            setDetails("");
            setTitle("");
            setIsActive(false);
          }}
        >
          ok
        </button>
      </div>
    </div>
  );
};

AddTask.propTypes = {
  addTask: PropTypes.func.isRequired,
};
export default AddTask;
