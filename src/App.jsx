import './App.css'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Navbar from './components/Navbar'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Home from './pages/Home';
import Footer from './components/Footer';
import Today from './pages/Today';
import Electronics from './pages/Electronics';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import Upload from './admin/Upload';
import Update from './admin/Update';
import Edit from './admin/Edit';
import UserLogin from './user/UserLogin';


function App() {

  return (
    <>
    <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path='/' element = {<Home/>} />
      <Route path='/user' element={<UserLogin/>} />
      <Route path='/today' element = {<Today/>}/>
      <Route path='/electronics' element = {<Electronics/>} />
      <Route path='/cart' element={<Cart/>} />
      <Route path='/check' element={<Checkout/>} />
      <Route path='/upload' element={<Upload/>} />
      <Route path='/update' element={<Update/>} />
      <Route path='/edit/:id' element={<Edit/>} loader={({params})=>
      fetch(`http://localhost:5001/list/${params.id}`)
      } />
    </Routes>
    <Footer />
    </BrowserRouter>
    </>
  )
}

export default App

