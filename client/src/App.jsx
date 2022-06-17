import { Routes, Route } from 'react-router-dom';
import './App.css';
import Mainpage from './components/Mainpage/Mainpage';
import AboutPage from './components/AboutPage/AboutPage';
import MenuPage from './components/MenuPage/MenuPage';
import ContactsPage from './components/ContactsPage/ContactsPage';

const App = () => (
  <div className="App">
    <Routes>
      <Route path="/" element={<Mainpage />} />
      <Route path="about" element={<AboutPage />} />
      <Route path="menu" element={<MenuPage />} />
      <Route path="contacts" element={<ContactsPage />} />
    </Routes>
  </div>
);

export default App;
