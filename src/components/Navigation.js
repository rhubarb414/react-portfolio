export default function Navigation({ handlePageChange }) {
  return (
    <ul id='nav-mobile' className='tabs tabs-transparent'>
      <li className='tab'>
        {/* handlePageChange() is passed in as a prop in PortfolioContainer.js */}
        <a
          href='#about'
          className='left-align'
          onClick={() => handlePageChange('About')}
        >
          About
        </a>
      </li>
      <li className='tab'>
        <a
          href='#work'
          className='left-align'
          onClick={() => handlePageChange('Work')}
        >
          Work
        </a>
      </li>
      <li className='tab'>
        <a
          href='#contact'
          className='left-align'
          onClick={() => handlePageChange('Contact')}
        >
          Contact
        </a>
      </li>
      <li className='tab'>
        <a
          href='#resume'
          className='left-align'
          onClick={() => handlePageChange('Resume')}
        >
          Resume
        </a>
      </li>
    </ul>
  );
}
