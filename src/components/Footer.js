const Footer = () => {
  return (
    <footer className='page-footer color-primary'>
      <div className='container'>
        <div className='row  '>
          {/* <div class='col l4  s12'> */}
          <h5 className='white-text'>Links</h5>
          <ul>
            <li>
              <a
                className='grey-text text-lighten-3'
                target='_blank'
                href='https://www.linkedin.com/in/christopher-dubois-0a55aa10b/'
              >
                LinkedIn
              </a>
            </li>
            <li>
              <a
                className='grey-text text-lighten-3'
                target='_blank'
                href='https://github.com/rhubarb414'
              >
                GitHub
              </a>
            </li>
            <li>
              <a
                className='grey-text text-lighten-3'
                target='_blank'
                href='https://stackoverflow.com/users/20661917/rhubarb414'
              >
                Stack Overflow
              </a>
            </li>
          </ul>
          {/* </div> */}
        </div>
      </div>
      <div className='footer-copyright'>
        <div className='container'>© 2023 MIT License</div>
      </div>
    </footer>
  );
};

export default Footer;
