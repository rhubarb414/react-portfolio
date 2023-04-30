const Footer = () => {
  return (
    <footer class='page-footer'>
      {/* <div class='container'> */}
      <div class='row'>
        {/* <div class='col l4  s12'> */}
        <h5 class='white-text'>Links</h5>
        <ul>
          <li>
            <a
              class='grey-text text-lighten-3'
              target='_blank'
              href='https://www.linkedin.com/in/christopher-dubois-0a55aa10b/'
            >
              LinkedIn
            </a>
          </li>
          <li>
            <a
              class='grey-text text-lighten-3'
              target='_blank'
              href='https://github.com/rhubarb414'
            >
              GitHub
            </a>
          </li>
          <li>
            <a
              class='grey-text text-lighten-3'
              target='_blank'
              href='https://stackoverflow.com/users/20661917/rhubarb414'
            >
              Stack Overflow
            </a>
          </li>
        </ul>
        {/* </div> */}
      </div>
      {/* </div> */}
      <div class='footer-copyright'>
        <div class='container'>© 2023 MIT License</div>
      </div>
    </footer>
  );
};

export default Footer;
