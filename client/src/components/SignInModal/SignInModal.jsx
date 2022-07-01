import './SignInModal.css';
import { useState } from 'react';

const SignInModal = ({ setModalOpen }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (event) => {
        console.log(email, password);
        event.preventDefault();
    };

    return (
        <div className="signInModalBackground">
            <div className="signInModalContainer">
                <button
                    className="signInTitleCloseBtn"
                    onClick={() => {
                        setModalOpen(false);
                    }}
                >
                    x
                </button>
                <h1>Sign Up</h1>
                <form>
                    <label className="label">Email Address</label>
                    <input type="email" name="email" onChange={(event) => setEmail(event.target.value)} />
                    <label className="label">Password</label>
                    <input type="password" name="password" onChange={(event) => setPassword(event.target.value)} />
                </form>
                <div className="SignInButtonsContainer">
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

export default SignInModal;
