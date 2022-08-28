import './App.css';
import NavBar from './componets/NavBar/NavBar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Menu from './pages/Menu/Menu';
import CartProvider from './store/CartContext/CartContext';
import { createTheme, ThemeProvider } from '@mui/material/styles'

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
              <Route path="/" element={<Home />} />
              <Route path="/contacto" />
              <Route path="/menu" element={<Menu />} />
              <Route path="/about" />
              <Route path="/reserva" />
            </Routes>
          </body>
        </ThemeProvider>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
