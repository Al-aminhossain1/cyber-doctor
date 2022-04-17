
import './App.css';
import Header from './Component/Header/Header';
import { Route, Routes } from 'react-router-dom';
import Home from './Component/Home/Home';
import NotFound from './Component/NotFound/NotFound';
import Footer from './Component/Footer/Footer';
import Checkout from './Component/Checkout/Checkout';
import Login from './Component/Login/Login';
import RequireAuth from './Component/RequireAuth/RequireAuth';
import SignUp from './Component/SignUp/SignUp';

function App() {
  return (
    <div >
      <Header></Header>
      <h1 className='mt-4 text-center'>Welcome to Cyber Doctor</h1>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/signup' element={<SignUp></SignUp>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/checkout' element={<RequireAuth>
          <Checkout></Checkout>
        </RequireAuth>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
