import { Routes, Route } from 'react-router-dom';
import './App.css';
import Mainpage from './components/Mainpage/Mainpage';

const App = () => (
  <div className="App">
    <Routes>
      <Route path="/" element={<Mainpage />} />
      <Route path="about" element={<About />} />
    </Routes>
  </div>
);

const About = () => <h1>About</h1>;

export default App;
