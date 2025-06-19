import './Header.css';
import banner from '../../assets/banner.jpg';

const Header = () => {
  return ( 
    <header className="header"> 
      <img src={banner}/>
      <div className="header-container">
        <h1 className="fancy-text logo-text">Diamond</h1>
        <form className="header-search d-flex my-4">
          <input className="form-control me-2 form-control-sm" type="search" placeholder="Search" aria-label="Знайти..."/>
          <button className="btn btn-primary px-3 btn-sm" type="submit">Пошук</button>
        </form>     
      </div>
    </header>
  );
};

export default Header;
