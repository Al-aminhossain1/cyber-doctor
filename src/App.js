import logo from './logo.svg';
import './App.css';
import Header from './Component/Header/Header';
import { Route, Routes } from 'react-router-dom';
import Home from './Component/Home/Home';
import NotFound from './Component/NotFound/NotFound';

function App() {
  return (
    <div className="App">
      <Header></Header>

      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/' element={<p></p>}></Route>
        <Route path='/' element={<p></p>}></Route>
        <Route path='/' element={<p></p>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
    </div>
  );
}

export default App;
