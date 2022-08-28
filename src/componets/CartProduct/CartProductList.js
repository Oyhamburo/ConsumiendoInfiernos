import List from '@mui/material/List';
import CartProduct from './CartProduct';
const CartProductList = ({data}) => {
    
    return(
        <List>
            {data.map( (combo) => {
                return <CartProduct data={combo} key={combo.id} />
            })}
        </List>
    )
}
export default CartProductList