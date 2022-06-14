import { Routes, Route } from 'react-router-dom';
import './App.css';
import Mainpage from './components/Mainpage/Mainpage';
import AboutPage from './components/AboutPage/AboutPage';

const App = () => (
  <div className="App">
    <Routes>
      <Route path="/" element={<Mainpage />} />
      <Route path="about" element={<AboutPage />} />
    </Routes>
  </div>
);

export default App;
