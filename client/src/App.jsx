import { Routes, Route } from 'react-router-dom';
import './App.css';
import Mainpage from './components/Mainpage/Mainpage';
import AboutPage from './components/AboutPage/AboutPage';
import MenuPage from './components/MenuPage/MenuPage'

const App = () => (
  <div className="App">
    <Routes>
      <Route path="/" element={<Mainpage />} />
      <Route path="about" element={<AboutPage />} />
      <Route path="menu" element={<MenuPage />} />
    </Routes>
  </div>
);

export default App;
