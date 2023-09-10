import Category from "./Category";
import styles from "./CategoriesList.module.css";
import PropTypes from "prop-types";

const CategoriesList = ({ data, changeCategory, editCategory }) => {
  if (!data.length) return;
  const a = data.map((item) => {
    return (
      <Category
        changeCategory={changeCategory}
        key={item.category.id}
        id={item.category.id}
        title={item.category.title}
        active={item.category.isActive}
        editCategory={editCategory}
      />
    );
  });
  return <ul className={styles.categoriesList}>{a}</ul>;
};

CategoriesList.propTypes = {
  data: PropTypes.array.isRequired,
  changeCategory: PropTypes.func.isRequired,
  editCategory: PropTypes.func.isRequired,
};

export default CategoriesList;
