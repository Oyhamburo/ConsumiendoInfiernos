import ListItemText from '@mui/material/ListItemText';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import DeleteIcon from '@mui/icons-material/Delete';
import { Button } from '@mui/material';
import { CartContext } from '../CartContext/CartContext';
import { useContext } from 'react';



const ListDialog = ({combo,index}) => {
    // const {removeI} = useContext(CartContext)

    // const removeIndex = () => {
    //     console.log("indice", index)
    //     removeI(index)
    // }
    const {name, id, price} = combo.data;
    return(
        <>
            <ListItem button>
                <ListItemText
                primary={name}
                secondary={price}
                />
                <Button >
                    <DeleteIcon  />
                </Button>
            </ListItem>
            <Divider />

        </>
    )
}

export default ListDialog