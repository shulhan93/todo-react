import Categories from "../Categories/Categories.jsx";
import Tasks from "../Tasks/Tasks.jsx";
import styles from "./App.module.css";
import data from "./../../data/data.js";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

function App() {
  const [tasks, setTasks] = useState(data);

  const addCategoryHandler = (title) => {
    const newCategory = {
      category: { id: uuidv4(), isActive: false, title: title },
      tasks: [],
      completedTask: [],
    };
    setTasks([...tasks, newCategory]);
  };

  const changeCategoryHandler = (id) => {
    const newArr = tasks.map((task) => {
      if (id === task.category.id) {
        task.category.isActive = true;
      } else {
        task.category.isActive = false;
      }
      return task;
    });
    console.log(newArr);
    setTasks(newArr);
  };

  const addTaskHandler = (title, details) => {
    const task = {
      id: uuidv4(),
      title: title,
      description: details,
      completed: false,
    };

    const newArr = tasks.map((item) => {
      if (item.category.isActive) {
        item.tasks.push(task);
      }
      return item;
    });

    setTasks(newArr);
  };

  const editCategory = (id, title) => {
    const newArr = tasks.map((item) => {
      if (item.category.id === id) {
        item.category.title = title;
      }
      return item;
    });
    setTasks(newArr);
  };

  return (
    <div className={styles.app}>
      <Categories
        changeCategory={changeCategoryHandler}
        addCategory={addCategoryHandler}
        data={tasks}
        editCategory={editCategory}
      />
      <Tasks addTask={addTaskHandler} data={tasks} />
    </div>
  );
}

export default App;
