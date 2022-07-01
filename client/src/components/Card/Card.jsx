import './Card.css';

const Card = ({ item }) => (
  <div className="card" key={item.id}>
    <div className="card-content">
      <img className="pizza-picture" src="./pizzasample.png" alt="pizza" />
      <div className="text-block">
        <h2 className="title">{item.title}</h2>
        <p className="description">
          {item.text}
        </p>
      </div>
      <div className="price-block">
        <img className="coin" src="./coin.png" alt="coin" />
        <p className="price">{item.price}</p>
      </div>
      <button type="button" className="cart-button">В корзину</button>
    </div>
  </div>
);

export default Card;
