const Project = ({ title, image, url }) => {
  return (
    <div className='row'>
      <div className='col s12 m7'>
        <div className='card'>
          <div className='card-image'>
            <a href={url}>
              <img src={image}></img>
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
            <a href={url}>{title}</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
