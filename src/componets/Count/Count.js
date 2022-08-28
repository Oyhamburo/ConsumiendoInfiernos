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
        for (let index = 0; index < count; index++) {
            data.cant = count;
            addProductToCart(data)
        }
        setCount(0)
    }
    return(
        <div>
            <Badge badgeContent={count} color="primary">
                <LunchDiningIcon color="action" className='iconHombur'/>
            </Badge>
            <br/>
            <ButtonGroup disableElevation variant="contained" size="small" >
                <Button onClick={removeCount} color="secondary"><RemoveIcon /></Button>
                <Button onClick={addCount} color="secondary"><AddIcon /></Button>
            </ButtonGroup>
            <br/>
            <Button variant="contained" onClick={addCart} color="secondary">Añadir</Button>
            
        </div>
    )
}

export default Count


