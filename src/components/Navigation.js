export default function Navigation({ handlePageChange }) {
  return (
    <ul id='nav-mobile' className='tabs tabs-transparent'>
      <li className='tab'>
        {/* handlePageChange() will be passed in as a prop in PortfolioContainer.js */}
        <a href='#about' onClick={() => handlePageChange('About')}>
          About
        </a>
      </li>
      <li className='tab'>
        <a href='#work' onClick={() => handlePageChange('Work')}>
          Work
        </a>
      </li>
      <li className='tab'>
        <a href='#contact' onClick={() => handlePageChange('Contact')}>
          Contact
        </a>
      </li>
      <li className='tab'>
        <a href='#resume' onClick={() => handlePageChange('Resume')}>
          Resume
        </a>
      </li>
    </ul>
  );
}
