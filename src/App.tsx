import { Routes, Route } from 'react-router-dom';
import Header from "./components/header/Header";
import Catalog from "./containers/catalog/Catalog";
import Footer from "./components/footer/Footer";
import ErrorBoundary from "./components/errorboundary/ErrorBoundary";
import ProductPage from './containers/productpage/ProductPage';
import NotFound from './NotFound';

function App() {
  return (
    <div>
      <Header />
      <ErrorBoundary>
        <Routes>
          <Route path="/" element={<Catalog />} />
          <Route path="/search/:query" element={<Catalog />} />
          <Route path="/product/:id" element={<ProductPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </ErrorBoundary>
      <Footer />
    </div>
  );
}

export default App;
