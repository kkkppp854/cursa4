interface ProductDetailsProps {
  product: {
    id: number;
    title: string;
    category: string;
    price: number;
    material: string;
    description: string;
    image: string;
  };
}

const ProductDetails = ({ product }: ProductDetailsProps) => {
  return (
    <div className="container mt-5">
      <div>
        <nav aria-label="breadcrumb">
        <ol className="breadcrumb ms-5">
            <li className="breadcrumb-item"><a href="../../" className="text-decoration-none text-dark">Diamond</a></li>
            <li className="breadcrumb-item"><a href="#" className="text-decoration-none text-dark"> {product.category}</a></li>
            <li className="breadcrumb-item active" aria-current="page">{product.title}</li>
        </ol>
        </nav>
      </div>
      <div className="row">        
        <div className="col-6 text-center">
          <img src={product.image} className="img-fluid" style={{ maxHeight: "500px", objectFit: "contain" }}/>
        </div>

        <div className="col-6"><br/>
          <h2 className="mb-3">{product.title}</h2>
          <p><strong>Опис:</strong> {product.description}</p>
          <p><strong>Тип:</strong> {product.category}</p>
          <p><strong>Матеріал:</strong> {product.material}</p><br/>
          <div className="d-flex pt-2 mt-2">
            <p className="h4 me-5"><strong> Ціна:</strong> {product.price} грн</p>
            <button className="btn btn-info ms-5 px-4">Купити</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
