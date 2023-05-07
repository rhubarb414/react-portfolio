import Header from '../Header';

export default function Resume() {
  return (
    <div className='container'>
      <h1>Resume</h1>
      <a href='./assets/sample-resume.pdf' download='sample-resume.pdf'>
        Download My Resume
      </a>

      <h3>Technologies</h3>
      <ul>
        <li>Javascript</li>
        <li>React</li>
        <li>Node</li>
        <li>Mongo DB</li>
        <li>SQL</li>
        <li>CSS</li>
        <li>HTML</li>
      </ul>
    </div>
  );
}
