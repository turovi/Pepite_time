
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Home from './pages';
import SigninPage from './pages/signin';

function App() {
  return (
    <Router>
      {/* <Navbar/> */}
      <Routes>
        <Route path="/" element={<Home/>} exact />
        <Route path="/signin" element={<SigninPage/>} exact />
      </Routes>
      
    </Router>
  );
}

export default App;
