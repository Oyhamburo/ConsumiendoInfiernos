import './App.css';
import NavBar from './componets/NavBar/NavBar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Menu from './pages/Menu/Menu';
import Cart from './pages/Cart/Cart';
import Booking from './pages/Booking/Booking';
import CartProvider from './store/CartContext/CartContext';
import { createTheme, ThemeProvider } from '@mui/material/styles'
import Contact from './pages/Contact/Contact';
import { Category } from '@mui/icons-material';
const theme = createTheme({
  palette: {
    primary: {
      main: '#272727',
    },
    secondary: {
      main: '#da0003',
    },
    white: {
      main: '#ffffff',
    },
    blue: {
      main: '#0000ff',
    },
    background: {
      default: '#640e0e',
      paper: '#ffffff',
    },
  },
});




function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <ThemeProvider theme={theme} >
          <body className='body'>
            <NavBar />
            <Routes>
              <Route path="/ConsumiendoInfiernos" element={<Home />} />
              <Route path="/contact" element={<Contact />} />
              {/* <Route path="/menu" element={<Menu />} /> */}
              <Route path="/cart" element={<Cart />}/>
              <Route path="/booking" element={<Booking />}/>
              <Route path='/ConsumiendoInfiernos/:category' element={<Home  />} />
            </Routes>
          </body>
        </ThemeProvider>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
