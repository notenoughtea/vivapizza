import "./MenuPage.css"
import Card from '../Card/Card'

const MenuPage = () => (
    <div className="MenuPage">
        <h1 className="menuTitle">Наше меню</h1>
        <div className="menuPageStick"/>
        <div className="menubox">
        <Card/>
        </div>
    </div>
);

export default MenuPage;