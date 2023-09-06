import AddTask from "./AddTask";
import CompletedTasks from "./CompletedTasks";
import TaskList from "./TaskList";

import styles from "./Tasks.module.css";

const Tasks = () => {
  return (
    <main className={styles.tasks}>
      <h2 className={styles.tasksCategory}>Products</h2>
      <AddTask />
      <TaskList />
      <CompletedTasks />
    </main>
  );
};

export default Tasks;
