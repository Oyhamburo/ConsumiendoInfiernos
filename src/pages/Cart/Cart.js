import CartProductList from "../../componets/CartProduct/CartProductList"
import { useContext } from "react"
import { CartContext } from '../../store/CartContext/CartContext';
import Divider from '@mui/material/Divider';
import './Cart.scss'
import PriceTotal from "../../componets/PriceTotal/PriceTotal";

const Cart = () => {
    const {cartProducts} = useContext(CartContext)

    return(
        <div>
            <div className="Cart">
                <h1 >Tu Pedido</h1>
            </div>
            <Divider />
            <CartProductList data={cartProducts}/>
            <PriceTotal />
        </div>
    )
}

export default Cart