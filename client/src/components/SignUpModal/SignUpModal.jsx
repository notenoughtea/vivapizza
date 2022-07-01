import './SignUpModal.css';
import { useState } from 'react';

const SignUpModal = ({ setModalOpen }) => {
  const [email, setEmail] = useState('');
  const [login, setLogin] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    console.log(email, login, firstName, lastName, password);
    event.preventDefault();
  };

  return (
    <div className="signUpModalBackground">
      <div className="signUpModalContainer">
        <button
          className="signUpTitleCloseBtn"
          onClick={() => {
            setModalOpen(false);
          }}
        >
          X
        </button>
        <h1>Sign Up</h1>
        <form>
          <label className="label">Email Address</label>
          <input type="email" name="email" onChange={(event) => setEmail(event.target.value)} />
          <label className="label">Login</label>
          <input type="text" name="login" onChange={(event) => setLogin(event.target.value)} />
          <label className="label">First Name</label>
          <input type="text" name="firstname" onChange={(event) => setFirstName(event.target.value)} />
          <label className="label">Last Name</label>
          <input type="text" name="lastname" onChange={(event) => setLastName(event.target.value)} />
          <label className="label">Password</label>
          <input type="password" name="password" onChange={(event) => setPassword(event.target.value)} />
        </form>
        <div className="signUpButtonsContainer">
          <button
            onClick={() => { setModalOpen(false); }}
          >
            Cancel
          </button>
          <button onClick={handleSubmit}>Continue</button>
        </div>
      </div>
    </div>
  );
};

export default SignUpModal;
