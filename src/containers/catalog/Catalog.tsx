import { useEffect, useState } from "react";
import ProductCard from "../../components/card/ProductCard";
import data from "../../../data.json";
import ErrorBoundary from "../../components/errorboundary/ErrorBoundary"
import Sidebar from "../../components/sidebar/Sidebar";

const Catalog = () => {
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
            {data.map((product) => (
              <div className="col">
                <ErrorBoundary>
                  <ProductCard
                    key={product.id}
                    title={product.title}
                    category={product.category}
                    material={product.material}
                    price={product.price}
                    description={product.description}
                    image={product.image}
                  />
                </ErrorBoundary>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Catalog;