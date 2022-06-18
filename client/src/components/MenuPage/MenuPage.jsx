import './MenuPage.css';
import Card from '../Card/Card';
import { useEffect, useState } from "react";
import axios from "axios";

const MenuPage = () => {
const [cards, setCards] = useState(null);
useEffect(() => {
    axios.get("/cards").then((res) => setCards(res.data));
}, []);
return (
  <div className="MenuPage">
    <h1 className="menuTitle">Наше меню</h1>
    <div className="menuPageStick" />
    <div className="menubox">
        {
        cards?.map((item) => (
            <Card item={item} />
        ))
        }
    </div>
  </div>
);
}

export default MenuPage;
