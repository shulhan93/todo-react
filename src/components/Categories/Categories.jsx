import CategoriesList from "./CategoriesList.jsx";
import AddCategories from "./AddCategories.jsx";
import styles from "./Categories.module.css";

const Categories = () => {
  return (
    <div className={styles.categories}>
      <h2 className={styles.categoriesTitle}>Categories</h2>
      <CategoriesList />
      <AddCategories />
    </div>
  );
};

export default Categories;
