interface Props {
  title: string;
  category: string
  material: string
  price: number;
  description: string;
  image: string;
}

const ProductCard = ({ title, price, image }: Props) => (
  <div style={{ border: "1px solid #ccc", padding: "1rem", width: 200 }}>
    <img src={image} alt={title} style={{ width: "100%" }} />
    <h3>{title}</h3>
    <p><strong>{price} грн</strong></p>
    <button>Купити</button>
  </div>
);

export default ProductCard;