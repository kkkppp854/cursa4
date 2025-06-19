import { useDispatch, useSelector } from 'react-redux';
import type { RootState, AppDispatch } from '../../store/store';
import { setSortOrder, toggleCategory, toggleMaterial } from '../../store/catalog.store';
import type { SortOrder } from '../../store/catalog.store';

const SidebarFilters = () => {
  const dispatch = useDispatch<AppDispatch>();
  const sortOrder = useSelector((state: RootState) => state.products.sortOrder);
  const selectedCategories = useSelector((state: RootState) => state.products.selectedCategories);
  const selectedMaterials = useSelector((state: RootState) => state.products.selectedMaterials);

  const handleSortChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value as SortOrder;
    dispatch(setSortOrder(value));
  };

  const categories = [
    'Каблучки',
    'Сережки',
    'Ланцюжки',
    'Кольє',
    'Підвіски',
    'Брошки',
    'Браслети',
  ];

  const materials = ['Золото', 'Срібло', 'Платина'];

  return (
    <div className="p-3 card" style={{ minWidth: '200px' }}>
      <div className="m-4">
        <h4 className="mb-3">Сортувати</h4>
        <div className="form-check mx-3">
          <input
            type="radio"
            id="sortAsc"
            name="sort"
            className="form-check-input"
            value="asc"
            checked={sortOrder === 'asc'}
            onChange={handleSortChange}
          />
          <label htmlFor="sortAsc" className="form-check-label">
            Ціна (від найнижчої)
          </label>
        </div>
        <div className="form-check mx-3">
          <input
            type="radio"
            id="sortDesc"
            name="sort"
            className="form-check-input"
            value="desc"
            checked={sortOrder === 'desc'}
            onChange={handleSortChange}
          />
          <label htmlFor="sortDesc" className="form-check-label">
            Ціна (від найвищої)
          </label>
        </div>
      </div>

      <div className="m-4">
        <h4 className="mb-3">Фільтри</h4>
        <strong>КАТЕГОРІЯ</strong>
        <ul className="list-unstyled m-3">
          {categories.map((cat) => (
            <li key={cat}>
              <label className="form-check-label">
                <input
                  className="form-check-input me-2"
                  type="checkbox"
                  checked={selectedCategories.includes(cat)}
                  onChange={() => dispatch(toggleCategory(cat))}
                />
                {cat}
              </label>
            </li>
          ))}
        </ul>
      </div>

      <div className="m-4 mt-0">
        <strong>МАТЕРІАЛ</strong>
        <ul className="list-unstyled m-3">
          {materials.map((mat) => (
            <li key={mat}>
              <label className="form-check-label">
                <input
                  className="form-check-input me-2"
                  type="checkbox"
                  checked={selectedMaterials.includes(mat)}
                  onChange={() => dispatch(toggleMaterial(mat))}
                />
                {mat}
              </label>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SidebarFilters;
