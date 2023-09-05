const Categories = () => {
  return (
    <div className="categories">
      <h2 className="categories__title">Categories</h2>

      <ul className="categories__list">
        <li className="categories__item">All</li>
        <li className="categories__item">Products</li>
        <li className="categories__item">Books</li>
      </ul>

      <button className="categories__add-btn">
        <div className="categories__add-box">
          <span className="categories__add-icon">+</span>
          <span className="categories__text">add categories</span>
        </div>
        <div className="categories__input-box">
          <input
            className="categories__input"
            type="text"
            placeholder="New category"
          />
          <span className="categories__add">+</span>
        </div>
      </button>
    </div>
  );
};

export default Categories;
