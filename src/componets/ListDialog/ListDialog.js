import ListItemText from '@mui/material/ListItemText';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import DeleteIcon from '@mui/icons-material/Delete';
import FastfoodIcon from '@mui/icons-material/Fastfood';
import { Button } from '@mui/material';
import './ListDialog.scss'
import Badge from '@mui/material/Badge';
import { CartContext } from '../CartContext/CartContext';
import { useContext } from 'react';

const ListDialog = ( combo,key ) => {
    const { name, id, price, src, cant } = combo.data;
    const {removeProduct} = useContext(CartContext)
    return (
        <>
            <ListItem button>
                <img src={src} className='ListDialog__img' />
                <ListItemText
                    primary={name}
                    secondary={price}
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