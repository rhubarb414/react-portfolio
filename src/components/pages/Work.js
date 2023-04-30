import Project from '../Project';

export default function Work() {
  return (
    <div className='container'>
      <h1>Work</h1>
      <Project
        title='Yardsale – C2C Sales (SQL DB)'
        image='./yardsale.png'
        url='https://yardsale-application.herokuapp.com/'
      />
    </div>
  );
}
