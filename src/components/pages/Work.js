import Project from '../Project';

export default function Work() {
  return (
    <div className='container'>
      <h1>Work</h1>
      <Project
        title='MERN Arcade'
        image='./assets/game-app.png'
        url='https://whispering-beach-93510.herokuapp.com/'
      />
      <Project
        title='Yardsale – C2C E-Commerce'
        image='./assets/yardsale.jpg'
        url='https://yardsale-application.herokuapp.com/'
      />
      <Project
        title='Org Chart CMS'
        image='./assets/employee-tracker.jpg'
        url='https://github.com/rhubarb414/employee-tracker-cms'
      />
      <Project
        title='Note Taker'
        image='./assets/note-taker.gif'
        url='https://infinite-shelf-68467.herokuapp.com/'
      />
    </div>
  );
}
