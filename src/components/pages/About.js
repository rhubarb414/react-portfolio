import Header from '../Header';

export default function About({ avatar }) {
  return (
    <div className='container'>
      <h1>About</h1>
      <img className='avatar circle' src={avatar}></img>
      <p>Hello, this is me.</p>
      <p>
        I've been in tech for over 6 years – testing, iterating, learning and
        solving problems as a senior creative, manager, and now, a full stack
        developer.
      </p>
    </div>
  );
}
