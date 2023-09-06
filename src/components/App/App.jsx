import Categories from "../Categories/Categories.jsx";
import Tasks from "../Tasks/Tasks.jsx";
import styles from "./App.module.css";

function App() {
  return (
    <div className={styles.app}>
      <Categories />
      <Tasks />
    </div>
  );
}

export default App;
