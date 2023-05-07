import { useState } from 'react';

export default function Contact() {
  const [name, setName] = useState();
  const [email, setEmail] = useState();

  //To implement with future back-end code
  const [message, setMessage] = useState();

  // Triggered on name field mouse out and alerts if field is empty.
  const emptyNameAlert = (event) => {
    if (!event.target.value) {
      alert('Name cannot be empty');
    }
  };

  // Triggered on email field mouse out and alerts if email doesn't match regex.
  const invalidEmailAlert = (event) => {
    const emailRegex = /^[\w-\.\+]+@([\w-]+\.)+[\w-]{2,4}$/;
    const userEmail = event.target.value;
    if (userEmail) {
      if (!userEmail.match(emailRegex)) {
        alert('Email is invalid');
        // Clear email state variable if email is invalid.
        setEmail('');
      }
    }
  };

  const handleNameChange = (event) => {
    setName(event.target.value.trim());
  };
  const handleEmailChange = (event) => {
    setEmail(event.target.value.trim());
  };

  //To implement with future back-end code
  const handleMessageChange = (event) => {
    setMessage(event.target.value);
  };
  return (
    <div className='container'>
      <h1>Contact</h1>
      <p className='red'>***This form is currently non-functioning!***</p>
      <div className='row'>
        <form className='col s12'>
          <div className='row'>
            <div className='input-field col s6'>
              <input
                placeholder='Your Name'
                id='user-name'
                type='text'
                className=''
                // value={input.name}
                onChange={handleNameChange}
                // Alert user if name field is empty when they move cursor out of field
                onMouseOut={emptyNameAlert}
              ></input>
              {/* <label for='first_name'></label> */}
            </div>
          </div>
          <div className='row'>
            <div className='input-field col s6'>
              <input
                id='user-email'
                placeholder='Email'
                type='email'
                className=''
                // value={input.email}
                onChange={handleEmailChange}
                // Alert user if email is invalid
                onMouseOut={invalidEmailAlert}
              ></input>
            </div>
          </div>
          <div className='row'>
            <div className='input-field col s6'>
              <textarea
                id='textarea'
                placeholder='Your Message'
                className='materialize-textarea'
                onChange={handleMessageChange}
              ></textarea>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
