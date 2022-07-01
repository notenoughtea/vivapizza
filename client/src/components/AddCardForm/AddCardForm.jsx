import './AddCardForm.css';
import { useState } from 'react';

const AddCardForm = ({ setModalOpen }) => {
    const [title, setTitle] = useState('');
    const [text, setText] = useState('');
    const [price, setPrice] = useState('');

    const handleSubmit = (event) => {
        console.log(title, text, price);
        event.preventDefault();
    };

    return (
        <div className="addCardFormBackground">
            <div className="addCardFormContainer">
                <button
                    className="addCardFormTitleCloseBtn"
                    onClick={() => {
                        setModalOpen(false);
                    }}
                >
                    x
                </button>
                <h1>Add Card</h1>
                <form>
                    <label className="label">Title</label>
                    <input type="text" name="title" onChange={(event) => setTitle(event.target.value)} />
                    <label className="label">Description</label>
                    <input type="text" name="text" onChange={(event) => setText(event.target.value)} />
                    <label className="text">Price</label>
                    <input type="text" name="price" onChange={(event) => setPrice(event.target.value)} />
                </form>
                <div className="AddCardFormButtonsContainer">
                    <button
                        onClick={() => { setModalOpen(false); }}
                    >
                        Cancel
                    </button>
                    <button onClick={handleSubmit}>Complete</button>
                </div>
            </div>
        </div>
    );
};

export default AddCardForm;
