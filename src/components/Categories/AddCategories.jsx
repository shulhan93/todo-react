import styles from "./AddCategories.module.css";

const AddCategories = () => {
  return (
    <div className={styles.addCategories}>
      <div className={styles.addCategoriesTop}>
        <span className={styles.addCategoriesIcon}>+</span>
        <span className={styles.addCategoriesText}>add categories</span>
      </div>
      <div className={styles.addCategoriesInputs}>
        <input
          className={styles.addCategoriesInput}
          type="text"
          placeholder="New category"
        />
        <span>+</span>
      </div>
    </div>
  );
};

export default AddCategories;
