import styles from "./CategoriesList.module.css";

const CategoriesList = () => {
  return (
    <ul className={styles.categoriesList}>
      <li className={styles.categoriesItem}>All</li>
      <li className={`${styles.categoriesItem} ${styles.active}`}>Products</li>
      <li className={styles.categoriesItem}>Books</li>
    </ul>
  );
};

export default CategoriesList;
