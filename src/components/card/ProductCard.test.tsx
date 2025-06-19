import { render } from '@testing-library/react';
import ProductCard from './ProductCard';
import '@testing-library/jest-dom';

const mockProduct = {
  title: "Каблучка з фінітами",
  price: 10000,
  image: "",
  description: "Опис тестового товару"
};

describe('ProductCard', () => {
  it('renders correctly and matches snapshot', () => {
    const { asFragment } = render(<ProductCard {...mockProduct} />);
    expect(asFragment()).toMatchSnapshot();
  });
});
