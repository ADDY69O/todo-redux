
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Counter from './Counter';
import Home from './Home';



function App() {
  return <>
  
  <BrowserRouter>
  
  <Routes>

  <Route exact path='/' element={<Home/>} />
  
  <Route exact path='/counter' element={<Counter/>} />

  </Routes>

  </BrowserRouter>
  </>;
}

export default App;
