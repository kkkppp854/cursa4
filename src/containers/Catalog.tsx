import { useEffect, useState } from "react";
import ProductCard from "../components/card/ProductCard";
import data from "../../data.json";

const HomePage = () => {
  const [products, setProducts] = useState<any[]>([]);

  useEffect(() => {
    // Можна симулювати fetch тут
    setProducts(data);
  }, []);

  return (
    <main style={{ display: "flex", flexWrap: "wrap", gap: "1rem", padding: "1rem" }}>
      {products.map((p) => (
        <ProductCard
          key={p.id}
          title={p.title}
          category={p.category}
          material={p.material}
          price={p.price}
          description={p.description}
          image={p.image}
        />
      ))}
    </main>
  );
};

export default HomePage;
