import PropTypes from "prop-types";
import styles from "./Category.module.css";

import iconEdit from "../../assets/icons/edit.svg";
import { useState } from "react";

const Category = (category) => {
  const [isEdit, setIsEdit] = useState(false);
  const [edit, setEdit] = useState(category.title);

  const editCategoryHandler = () => {
    setIsEdit(!isEdit);
    setEdit(category.title);
  };
  return (
    <li
      onClick={() => {
        category.changeCategory(category.id);
      }}
      className={`${styles.category} ${category.active ? styles.active : ""}`}
    >
      {category.title}
      <div className={styles.icon} onClick={editCategoryHandler}>
        <img src={iconEdit} alt="sss" />
      </div>

      <form
        className={styles.form}
        onSubmit={(e) => {
          e.preventDefault();
          category.editCategory(category.id, edit);
          setEdit("");
          setIsEdit(false);
        }}
      >
        <input
          onChange={(e) => setEdit(e.target.value)}
          value={edit}
          className={`${styles.editCategory} ${isEdit ? styles.show : ""}`}
          type="text"
        />
      </form>
    </li>
  );
};

Category.propTypes = {
  title: PropTypes.string.isRequired,
  active: PropTypes.bool.isRequired,
};

export default Category;
