import ListItemText from '@mui/material/ListItemText';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import DeleteIcon from '@mui/icons-material/Delete';
import FastfoodIcon from '@mui/icons-material/Fastfood';
import { Button } from '@mui/material';
import './ListDialog.scss'
import Badge from '@mui/material/Badge';
import { CartContext } from '../../store/CartContext/CartContext';
import { useContext } from 'react';
import Modal from '../Modal/Modal';
import { useState } from 'react';
import MailIcon from '@mui/icons-material/Mail'
const ListDialog = ({ data, key }) => {
    const { name, id, price, src, cant, type } = data;
    const { removeProduct } = useContext(CartContext)
    const [open, setOpen] = useState(false);
    const handleClickOpen = () => {
        setOpen(true);
    };



    return (
        <>
            <ListItem >
                <img src={src} className='ListDialog__img' onClick={handleClickOpen} />
                {open ? <Modal setOpen={setOpen} src={src} type={type} name={name} /> : ''}
                <ListItemText
                    primary={name}
                    secondary={ data.listIngredients ? "Precio: "+price+" Modificada" : "Precio: "+price} 
                />                
                <Badge badgeContent={cant} color="secondary">
                    <FastfoodIcon color="primary" />
                </Badge>
                <Button onClick={() => removeProduct(id)}>
                    <DeleteIcon />
                </Button>
            </ListItem>
            <Divider />

        </>
    )
}

export default ListDialog