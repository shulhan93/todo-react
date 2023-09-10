import { useState } from "react";
import styles from "./AddCategories.module.css";

const AddCategories = ({ addCategory }) => {
  const [active, setActive] = useState(false);
  const [text, setText] = useState("");

  const toggleTextField = () => {
    setActive(!active);
    setText("");
  };

  const handlerChangeText = (e) => {
    setText(e.target.value);
  };

  // const addCategory = (e) => {
  //   e.preventDefault();
  //   setText("");
  // };

  return (
    <div className={styles.addCategories}>
      <div onClick={toggleTextField} className={styles.addCategoriesTop}>
        <span className={styles.addCategoriesIcon}>+</span>
        <span className={styles.addCategoriesText}>add categories</span>
      </div>
      <div
        className={`${styles.addCategoriesInputs} ${
          active ? styles.active : ""
        }`}
      >
        <form
          onSubmit={(e) => {
            e.preventDefault();
            addCategory(text);
            setText("");
          }}
        >
          <input
            onChange={handlerChangeText}
            className={styles.addCategoriesInput}
            type="text"
            placeholder="New category"
            value={text}
          />
        </form>

        <span>+</span>
      </div>
    </div>
  );
};

export default AddCategories;
