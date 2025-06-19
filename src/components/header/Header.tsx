import './Header.css';
import banner from '../../assets/banner.jpg';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const trimmed = query.trim();
    if (trimmed) {
      navigate(`/search/${encodeURIComponent(trimmed)}`);
    }
  };

  return (
    <header className="header">
      <img src={banner} alt="banner" />
      <div className="header-container">
        <h1 className="fancy-text logo-text">Diamond</h1>
        <form className="header-search d-flex my-4" onSubmit={handleSubmit}>
          <input
            className="form-control me-2 form-control-sm"
            type="search"
            placeholder="Search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            aria-label="Знайти..."
          />
          <button className="btn btn-primary px-3 btn-sm" type="submit">Пошук</button>
        </form>
      </div>
    </header>
  );
};

export default Header;
