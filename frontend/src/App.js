import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import About from './pages/About';
import Instructions from './pages/Instructions';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={ <Home/> }/>
        <Route path='/about' element= { <About/> } />
        <Route path='/how-to-use' element= { <Instructions/> } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
