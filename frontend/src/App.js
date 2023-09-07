import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Home';
import About from './About';
import Instructions from './Instructions';

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
