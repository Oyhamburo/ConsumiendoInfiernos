import './NavBar.scss'
import {Link} from 'react-router-dom'
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import TwitterIcon from '@mui/icons-material/Twitter';
import { useContext } from 'react';
import { CartContext } from '../CartContext/CartContext';
import FullScreenDialog from '../Dialog/Dialog';

const NavBar = () => {

    return(
        <nav>
            <div className='nav__icon'>
                <InstagramIcon className='nav__icon__i'/>
                <WhatsAppIcon className='nav__icon__i'/>
                <TwitterIcon className='nav__icon__i'/>
            </div>
            <div className='nav__img'>
                <img src='logo.jpg'/>
            </div>
            <div className='nav__li'>
                
                <Link className='nav__li__link' to="/">Home</Link>
                <Link className='nav__li__link' to="/menu">Menu</Link>
                <Link className='nav__li__link' to="/reserva">Reservas</Link>
                <Link className='nav__li__link' to="/contacto">Coctacto</Link>
                <Link className='nav__li__link' to="/about">About us</Link>
                <FullScreenDialog />
            </div>
        </nav>
    )
}

export default NavBar



