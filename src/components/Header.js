import Navigation from './Navigation.js';

export default function Header({ handlePageChange }) {
  return (
    <div className='App'>
      {/* Can probably delete className='App' */}

      <nav className='nav-extended color-primary '>
        <div className='container'>
          <div className='nav-wrapper'>
            <a href='#' className='brand-logo left'>
              Christopher DuBois
            </a>
          </div>
          <div className='nav-content'>
            <Navigation handlePageChange={handlePageChange} />
          </div>
        </div>
      </nav>
    </div>
  );
}
