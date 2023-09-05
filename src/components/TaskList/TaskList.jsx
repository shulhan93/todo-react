import CompletedTasks from "../CompletedTasks/CompletedTasks";
import Task from "../Task/Task";

const TaskList = () => {
  return (
    <main>
      <h2 className="category-title">Products</h2>
      <div className="add-task">
        <div className="add-task-top">
          <span className="add-task-icon">+</span>
          <span className="add-task-text">add task</span>
        </div>
        <form className="add-task-bottom">
          <input className="add-task-title" type="text" placeholder="Title" />
          <textarea placeholder="Details"></textarea>
        </form>
      </div>

      <ul className="task-list">
        <Task />
      </ul>

      <CompletedTasks />
    </main>
  );
};

export default TaskList;
