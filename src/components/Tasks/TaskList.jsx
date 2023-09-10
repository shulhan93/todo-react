import Task from "./Task";
import styles from "./TaskList.module.css";
import PropTypes from "prop-types";

const TaskList = ({ data }) => {
  const activeCategory = data.filter((item) => item.category.isActive);
  const listTasks = activeCategory[0].tasks.map((item, idx) => (
    <Task title={item.title} key={idx} description={item.description} />
  ));
  return <ul className={styles.tasksList}>{listTasks}</ul>;
};

TaskList.propTypes = {
  data: PropTypes.array.isRequired,
};

export default TaskList;
