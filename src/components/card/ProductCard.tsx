import './ProductCard.css';

interface Products {
  title: string;
  price: number;
  image: string;
}

const ProductCard = ({ title, price, image }: Products) => (
  <div className="card product-card h-100 mx-0">
    <div className="product-image-wrapper">
      <img src={image} alt={title} className="card-img-top product-image" />
    </div>
    <div className="card-body">
      <h5 className="card-title">{title}</h5>
      <div className="d-flex justify-content-between align-items-center pt-2 mt-2">
        <span className='fs-5'>{price} грн</span>
        <a href="#" className="btn btn-info btn-sm px-3">Купити</a>
      </div>
    </div>
  </div>
);

export default ProductCard;