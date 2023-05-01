import Header from '../Header';
export default function Contact() {
  return (
    <div className='container'>
      <h1>Contact</h1>
      <p className='red'>***This form is currently non-functioning!***</p>
      <div class='row'>
        <form class='col s12'>
          <div class='row'>
            <div class='input-field col s6'>
              <input
                placeholder='First Name'
                id='first_name'
                type='text'
                class=''
              ></input>
              {/* <label for='first_name'></label> */}
            </div>
            <div class='input-field col s6'>
              <input
                placeholder='Last Name'
                id='last_name'
                type='text'
                class=''
              ></input>
            </div>
          </div>
          <div class='row'>
            <div class='input-field col s6'>
              <input
                id='email'
                placeholder='Email'
                type='email'
                class=''
              ></input>
            </div>
          </div>
          <div class='row'>
            <div class='input-field col s12'>
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
