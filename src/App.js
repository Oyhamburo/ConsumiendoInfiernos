import './App.css';
import NavBar from './componets/NavBar/NavBar';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './componets/Home/Home';
import Menu from './componets/Menu/Menu';
import CartProvider from './componets/CartContext/CartContext';

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
          <body className='body'>
            <NavBar />
            <Routes>
              <Route path="/" element={<Home/>} />
              <Route path="/contacto" />
              <Route path="/menu" element={<Menu/>} />
              <Route path="/about"/>
              <Route path="/reserva"/>
            </Routes>
          </body>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
