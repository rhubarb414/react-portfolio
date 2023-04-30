import Nav from './Navigation.js';

export default function Header() {
  return (
    <div className='App'>
      {/* Can probably delete className='App' */}
      <nav className='nav-extended'>
        <div className='nav-wrapper'>
          <a href='#' className='brand-logo left'>
            Christopher DuBois
          </a>
        </div>
        <div className='nav-content'>
          <Nav />
        </div>
      </nav>
    </div>
  );
}
