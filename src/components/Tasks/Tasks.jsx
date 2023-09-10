import AddTask from "./AddTask";
import CompletedTasks from "./CompletedTasks";
import TaskList from "./TaskList";
import PropTypes from "prop-types";
import styles from "./Tasks.module.css";

const Tasks = ({ data, addTask }) => {
  const activeCategory = data.filter((item) => item.category.isActive);
  return (
    <main className={styles.tasks}>
      <h2 className={styles.tasksCategory}>
        {activeCategory[0].category.title}
      </h2>
      <AddTask addTask={addTask} />
      <TaskList data={data} />
      {!!activeCategory[0].completedTask.length && (
        <CompletedTasks data={data} />
      )}
    </main>
  );
};

Tasks.propTypes = {
  data: PropTypes.array.isRequired,
  addTask: PropTypes.func.isRequired,
};

export default Tasks;
