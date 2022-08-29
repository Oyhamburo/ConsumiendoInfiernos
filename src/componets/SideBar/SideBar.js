import * as React from 'react';
import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import LunchDiningIcon from '@mui/icons-material/LunchDining';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import MapIcon from '@mui/icons-material/Map';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import GitHubIcon from '@mui/icons-material/GitHub';
import { Avatar } from '@mui/material';
import { Link } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import './SideBar.scss';

import { CartContext } from '../../store/CartContext/CartContext';
import { useContext } from 'react';


export default function SwipeableTemporaryDrawer() {
    const { cartProducts } = useContext(CartContext)

    const [state, setState] = React.useState({
        left: false
    });

    const toggleDrawer = (anchor, open) => (event) => {
        if (
            event &&
            event.type === 'keydown' &&
            (event.key === 'Tab' || event.key === 'Shift')
        ) {
            return;
        }

        setState({ ...state, [anchor]: open });
    };

    const list = (anchor) => (
        <Box
            sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
            color="default"
        >
            <List className='sidebar__menu'>
                <ListItem>
                    <ListItemButton>
                        <ListItemText >
                            <h2>Consumiendo Infiernos</h2>
                        </ListItemText >
                    </ListItemButton>
                </ListItem>
                <Divider />
                <Link className='nav__li__link' to="/ConsumiendoInfiernos" >
                    <ListItem disablePadding >
                        <ListItemButton>
                            <ListItemIcon >
                                <LunchDiningIcon color='primary' />
                            </ListItemIcon>
                            <ListItemText className='sidebar__menu__text'>
                                Menu
                            </ListItemText >
                        </ListItemButton>
                    </ListItem>
                </Link>

                <Link className='nav__li__link' to="/booking">
                    <ListItem disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                <MenuBookIcon color='primary' />
                            </ListItemIcon>
                            <ListItemText className='sidebar__menu__text'>
                                Reservas
                            </ListItemText >
                        </ListItemButton>
                    </ListItem>
                </Link>

                <Link className='nav__li__link' to="/cart">
                    <ListItem disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                <ShoppingCartIcon color='primary' />
                            </ListItemIcon>
                            <ListItemText className='sidebar__menu__text'>
                                Carrito
                            </ListItemText >
                        </ListItemButton>
                    </ListItem>
                </Link>

                {/* <Link className='nav__li__link' to="/contact">
                    <ListItem disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                <MapIcon color='primary'/>
                            </ListItemIcon>
                            <ListItemText   className='sidebar__menu__text'>
                                Mapa
                            </ListItemText >
                        </ListItemButton>
                    </ListItem>
                </Link> */}

                <Link className='nav__li__link' to="/contact">
                    <ListItem disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                <WhatsAppIcon color='primary' />
                            </ListItemIcon>
                            <ListItemText className='sidebar__menu__text'>
                                Contacto
                            </ListItemText >
                        </ListItemButton>
                    </ListItem>
                </Link>

                <Divider />

                <ListItem >
                    <ListItemText>
                        <h3>Social</h3>
                    </ListItemText>
                </ListItem>

                <ListItem >
                    <ListItemText className='social'>
                        <WhatsAppIcon />
                    </ListItemText>
                    <ListItemText className='social'>
                        <a href='https://www.instagram.com/consumiendoinfiernos.burgers/' target='_blank'>
                            <InstagramIcon />
                        </a>
                    </ListItemText>
                </ListItem>

                <ListItem >
                    <ListItemText>
                        <h3>Mis Redes</h3>
                    </ListItemText>
                </ListItem>
                <ListItem >
                    <ListItemText className='sidebar__avatar'>
                        <Avatar alt="J" src="../../../public/logo.jpg" />
                    </ListItemText>
                </ListItem>
                <ListItem >
                    <ListItemText className='sidebar__container'>
                        <a href='https://github.com/Oyhamburo' target='_blank'  >
                            <GitHubIcon color='primary' />
                        </a>
                    </ListItemText>
                    <ListItemText className='sidebar__container'>
                        <a href='https://www.linkedin.com/in/oyhamburo-30a058156/' target='_blank' >
                            <LinkedInIcon color='blue' />
                        </a>
                    </ListItemText>
                    <ListItemText className='sidebar__container'>
                        <a href='https://oyhamburo.github.io/Portfolio/' target='_blank' >
                            <NewspaperIcon color='secondary' />
                        </a>
                    </ListItemText>
                </ListItem>
            </List>

        </Box>
    );
    const anchor = "left"
    return (
        <div>

            <React.Fragment key={anchor}>
                <Button onClick={toggleDrawer(anchor, true)} color="inherit" ><MenuIcon /></Button>
                <SwipeableDrawer
                    anchor={anchor}
                    open={state[anchor]}
                    onClose={toggleDrawer(anchor, false)}
                    onOpen={toggleDrawer(anchor, true)}
                >
                    {list(anchor)}
                </SwipeableDrawer>
            </React.Fragment>

        </div>
    );
}



