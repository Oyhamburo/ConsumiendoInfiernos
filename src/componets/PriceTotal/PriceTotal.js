import { Button } from "@mui/material"
import './PriceTotal.scss'
import { CartContext } from "../../store/CartContext/CartContext"
import { useContext } from "react"
import { Link } from 'react-router-dom';

const PriceTotal = () => {
    const { cartProducts } = useContext(CartContext)
    const totalPrice = () => {
        let total = 0;
        cartProducts.map((i) => {
            total += i.price * i.cant;
        })
        return total;
    }
    totalPrice()
    return (
        <div className="priceTotal">
            <Link to="/contact" className="priceTotal__link">
                <Button variant="contained" color="secondary">
                    Total
                    <span >
                        {":  $" + totalPrice()}
                    </span>
                </Button>
            </Link>
        </div>
    )
}
export default PriceTotal