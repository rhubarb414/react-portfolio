import Header from '../Header';
import { useState } from 'react';

export default function Contact() {
  const [input, setInput] = useState('');

  // Triggered in name field on mouse out if field is empty.
  const emptyNameAlert = (event) => {
    if (!event.target.value) {
      alert('Name cannot be empty');
    }
  };
  const handleChange = (event) => {
    setInput(event.target.value);
  };

  return (
    <div className='container'>
      <h1>Contact</h1>
      <p className='red'>***This form is currently non-functioning!***</p>
      <div class='row'>
        <form class='col s12'>
          <div class='row'>
            <div class='input-field col s6'>
              <input
                // Alert user if name field is empty when they move cursor out of field
                onMouseOut={emptyNameAlert}
                placeholder='Your Name'
                id='user-name'
                type='text'
                class=''
                value={input}
                onChange={handleChange}
              ></input>
              {/* <label for='first_name'></label> */}
            </div>
          </div>
          <div class='row'>
            <div class='input-field col s6'>
              <input
                id='user-email'
                placeholder='Email'
                type='email'
                class=''
              ></input>
            </div>
          </div>
          <div class='row'>
            <div class='input-field col s6'>
              <textarea
                id='textarea'
                placeholder='Your Message'
                class='materialize-textarea'
              ></textarea>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
