import { CartContext } from "../../store/CartContext/CartContext"
import { useContext } from "react"
const PrepareOrder = () => {
    const { cartProducts } = useContext(CartContext)
    return (
        <>
            {cartProducts.map((i) => <p>{`${i.name}: ${i.cant} precio: ${i.price * i.cant}`}</p>)}
        </>
    )
}

export default PrepareOrder