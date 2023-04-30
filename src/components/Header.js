import Nav from './Navigation.js';

export default function Header() {
  return (
    <div className='App'>
      <nav>
        <div className='nav-wrapper'>
          <a href='#' className='brand-logo center'>
            Christopher DuBois
          </a>
          <Nav />
        </div>
      </nav>
    </div>
  );
}
