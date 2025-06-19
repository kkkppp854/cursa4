import { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../../store/catalog.store';
import type { RootState, AppDispatch } from '../../store/store';
import ProductCard from "../../components/card/ProductCard";
import ErrorBoundary from "../../components/errorboundary/ErrorBoundary";
import Sidebar from "../../components/sidebar/Sidebar";
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import NotFound from "../../NotFound";

const Catalog = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { items, status, sortOrder, selectedCategories, selectedMaterials } = useSelector((state: RootState) => state.products);
  const { query } = useParams<{ query?: string }>();
  const navigate = useNavigate();

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchProducts());
    }
  }, [dispatch, status]);


const filteredItems = items
  .filter((item) =>
    !query || item.title.toLowerCase().includes(query.toLowerCase())
  )
  .filter((item) =>
    selectedCategories.length === 0 || selectedCategories.includes(item.category)
  )
  .filter((item) =>
    selectedMaterials.length === 0 || selectedMaterials.includes(item.material)
  );

 const handleProductClick = (id: number) => {
    navigate(`/product/${id}`);
  };
  

  const sortedItems = [...filteredItems];
  if (sortOrder === 'asc') {
    sortedItems.sort((a, b) => a.price - b.price);
  } else if (sortOrder === 'desc') {
    sortedItems.sort((a, b) => b.price - a.price);
  }

  return (
    <main className="container mt-4">
      <div className="row">
        <div className="col-lg-3 col-md-5">
          <ErrorBoundary>
            <Sidebar />
          </ErrorBoundary>
        </div>

        <div className="col-lg-9 col-md-7">
          <div className="row g-4">
            <ErrorBoundary>
              {status === 'loading' && <p>Завантаження...</p>}
              {status === 'succeeded' && sortedItems.length > 0 && sortedItems.map(product => (
                <div className="col-6 col-md-4 col-lg-3" key={product.id} style={{ cursor: 'pointer' }} onClick={() => handleProductClick(product.id)} >
                  <ProductCard
                    title={product.title}
                    price={product.price}
                    image={product.image}
                  />
                </div>
              ))}
              {status === 'succeeded' && sortedItems.length === 0 && <NotFound/>}
              {status === 'failed' && <p>Помилка завантаження.</p>}
            </ErrorBoundary>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Catalog;
