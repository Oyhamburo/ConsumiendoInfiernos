import './CountModal.scss'
import ButtonGroup from '@mui/material/ButtonGroup'
import Button from '@mui/material/Button'
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import Badge from '@mui/material/Badge';
import LunchDiningIcon from '@mui/icons-material/LunchDining';
import { useState } from 'react';
import { CartContext } from '../../store/CartContext/CartContext';
import { useContext } from 'react';

const CountModal = ({data,handleCloseAgree,handleClose,listIngredients}) => {

    const [ count, setCount] = useState(1);
    const {addProductToCart} = useContext(CartContext)


    const addCart = () => {
        for (let index = 0; index < count; index++) {
            data.cant = count;
            let cartData = {...data, listIngredients}
            addProductToCart(cartData)
        }
        setCount(0)
        handleCloseAgree()
    }
    return(
        <div className='count'>
            <Button onClick={handleClose} variant="contained"  color="secondary"><RemoveIcon /></Button>
            <Badge badgeContent={count} color="secondary">
                <LunchDiningIcon color="primary" className='count__icon'/>
            </Badge>
            
            <Button variant="contained" onClick={addCart} color="secondary">Añadir</Button>

            
        </div>
    )
}   

export default CountModal


