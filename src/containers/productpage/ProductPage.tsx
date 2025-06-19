import { useParams, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import type { RootState, AppDispatch } from '../../store/store';
import { fetchProducts } from '../../store/catalog.store';
import type { Product } from '../../store/catalog.store';
import ProductDetails from '../../components/productdetails/ProductDetails';
import NotFound from '../../NotFound';

const ProductPage = () => {
  const { id } = useParams<{ id: string }>();
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  const { items, status } = useSelector((state: RootState) => state.products);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchProducts());
    }
  }, [dispatch, status]);

  if (!id) {
    navigate('/');
    return null;
  }

  const product = items.find((p: Product) => p.id === +id);

  if (status === 'loading') {
    return <p>Завантаження товару...</p>;
  }

  if (!product) {
    return <NotFound/>;
  }

  return <ProductDetails product={product} />;
};

export default ProductPage;
