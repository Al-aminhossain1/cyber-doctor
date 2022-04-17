import logo from './logo.svg';
import './App.css';
import Header from './Component/Header/Header';
import { Route, Routes } from 'react-router-dom';
import Home from './Component/Home/Home';
import NotFound from './Component/NotFound/NotFound';
import Footer from './Component/Footer/Footer';
import Checkout from './Component/Checkout/Checkout';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <h1 className='mt-4'>Welcome to Cyber Doctor</h1>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/' element={<p></p>}></Route>
        <Route path='/' element={<p></p>}></Route>
        <Route path='/checkout' element={<Checkout></Checkout>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
