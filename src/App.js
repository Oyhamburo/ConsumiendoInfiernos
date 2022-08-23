import './App.css';
import NavBar from './componets/NavBar/NavBar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './componets/Home/Home';
import Menu from './componets/Menu/Menu';
import CartProvider from './componets/CartContext/CartContext';
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
      default: '#263238',
    },
  },
});



function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <ThemeProvider theme={theme}>
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
