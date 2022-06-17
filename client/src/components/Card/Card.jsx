import './Card.css';

const Card = () => (
  <div className="card">
    <div className="card-content">
      <img className="pizza-picture" src="./pizzasample.png" alt="pizza" />
      <div className="text-block">
        <h2 className="title">PEPPERONI</h2>
        <p className="description">
          Lorem ipsum dolor sit amet. Vel tempora eveniet ut porro voluptate
          33 consectetur reiciendis vel consequuntur nihil ea distinctio cumque.
          Qui quam velit eos rerum blanditiis sed.
        </p>
      </div>
      <div className="price-block">
        <img className="coin" src="./coin.png" alt="coin" />
        <p className="price">10$</p>
      </div>
      <button type="button" className="cart-button">В корзину</button>
    </div>
  </div>
);

export default Card;
