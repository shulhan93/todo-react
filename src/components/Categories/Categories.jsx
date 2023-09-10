import CategoriesList from "./CategoriesList.jsx";
import AddCategories from "./AddCategories.jsx";
import styles from "./Categories.module.css";
import PropTypes from "prop-types";

const Categories = ({ data, addCategory, changeCategory, editCategory }) => {
  return (
    <div className={styles.categories}>
      <h2 className={styles.categoriesTitle}>Categories</h2>
      <CategoriesList
        editCategory={editCategory}
        changeCategory={changeCategory}
        data={data}
      />
      <AddCategories addCategory={addCategory} />
    </div>
  );
};

Categories.propTypes = {
  data: PropTypes.array.isRequired,
  addCategory: PropTypes.func.isRequired,
  changeCategory: PropTypes.func.isRequired,
  editCategory: PropTypes.func.isRequired,
};

export default Categories;
