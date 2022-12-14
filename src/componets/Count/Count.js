import './Count.scss'
import ButtonGroup from '@mui/material/ButtonGroup'
import Button from '@mui/material/Button'
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import Badge from '@mui/material/Badge';
import LunchDiningIcon from '@mui/icons-material/LunchDining';
import { useState } from 'react';
import { CartContext } from '../../store/CartContext/CartContext';
import { useContext } from 'react';

const Count = ({data}) => {
    const [ count, setCount] = useState(0);
    const {addProductToCart} = useContext(CartContext)

    const addCount = () => {
        if(count >= 0){
            setCount( count + 1 )
        }
    }

    const removeCount = () => {
        if(count>0){
            setCount( count - 1 )
        }
    }
    const addCart = () => {
        addProductToCart({...data, cant: count})
        setCount(0)
    }
    return(
        <div className='count'>
            <ButtonGroup disableElevation variant="contained" size="small" >
                <Button onClick={removeCount} color="secondary"><RemoveIcon /></Button>
                <Button onClick={addCount} color="secondary"><AddIcon /></Button>
            </ButtonGroup>

            <Badge badgeContent={count} color="secondary">
                <LunchDiningIcon color="primary" className='count__icon'/>
            </Badge>
            
            <Button variant="contained" onClick={addCart} color="secondary">Añadir</Button>

            
        </div>
    )
}   

export default Count


