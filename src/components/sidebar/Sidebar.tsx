const SidebarFilters = () => {
  return (
    <div className="p-3 card" style={{ minWidth: '200px' }}>
      <div className="m-4">
        <h4 className="mb-3">Сортувати</h4>
        <div className="form-check  mx-3">
          <input type="radio" id="sortAsc" name="sort" className="form-check-input"/>
          <label htmlFor="sortAsc" className="form-check-label"> Ціна (від найнижчої)
          </label>
        </div>
        <div className="form-check mx-3">
          <input type="radio" id="sortDesc" name="sort" className="form-check-input"/>
          <label htmlFor="sortDesc" className="form-check-label"> Ціна (від найвищої)
          </label>
        </div>
      </div>
      
      <div className="m-4"> 
        <h4 className="mb-3">Фільтри</h4>
        <strong>КАТЕГОРІЯ</strong>
        <ul className="list-unstyled m-3">
          <li>
            <label className="form-check-label">
              <input className="form-check-input me-2" type="checkbox" id="category-rings" />
              Каблучки
            </label>
          </li>
          <li>
            <label className="form-check-label">
              <input className="form-check-input me-2" type="checkbox" id="category-earrings" />
              Сережки
            </label>
          </li>
          <li>
            <label className="form-check-label">
              <input className="form-check-input me-2" type="checkbox" id="category-chains" />
              Ланцюжки
            </label>
          </li>
          <li>
            <label className="form-check-label">
              <input className="form-check-input me-2" type="checkbox" id="category-necklaces" />
              Кольє
            </label>
          </li>
          <li>
            <label className="form-check-label">
              <input className="form-check-input me-2" type="checkbox" id="category-pendants" />
              Підвіски
            </label>
          </li>
          <li>
            <label className="form-check-label">
              <input className="form-check-input me-2" type="checkbox" id="category-brooches" />
              Брошки
            </label>
          </li>
          <li>
            <label className="form-check-label">
              <input className="form-check-input me-2" type="checkbox" id="category-bracelets" />
              Браслети
            </label>
          </li>
        </ul>
      </div>

      <div className="m-4 mt-0">
        <strong>МАТЕРІАЛ</strong>
        <ul className="list-unstyled m-3">
          <li>
            <label className="form-check-label">
              <input className="form-check-input me-2" type="checkbox" id="material-gold" /> Золото
            </label>
          </li>
          <li>
            <label className="form-check-label">
              <input className="form-check-input me-2" type="checkbox" id="material-silver" /> Срібло
            </label>
          </li>
          <li>
            <label className="form-check-label">
              <input className="form-check-input me-2" type="checkbox" id="material-platinum" /> Платина
            </label>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SidebarFilters;
