const Project = (props) => {
  return (
    <div className='row'>
      <div className='col s12 m7'>
        <div className='card'>
          <div className='card-image'>
            <a href='https://yardsale-application.herokuapp.com/'>
              <img src='https://github.com/rhubarb414/portfolio/blob/main/assets/images/yardsale.png?raw=true'></img>
            </a>
          </div>
          {/* <div className='card-content'>
            <p>
              I am a very simple card. I am good at containing small bits of
              information. I am convenient because I require little markup to
              use effectively.
            </p>
          </div> */}
          <div className='card-action'>
            <a href='https://yardsale-application.herokuapp.com/'>
              Yardsale – C2C Sales (SQL DB){' '}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
