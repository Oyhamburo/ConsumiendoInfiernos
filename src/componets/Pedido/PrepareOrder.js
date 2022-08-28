import { CartContext } from "../../store/CartContext/CartContext"
import { useContext } from "react"
const PrepareOrder = () => {
    const { cartProducts } = useContext(CartContext)
    let order ="";
    return (
        <>
            {cartProducts.map((i) => {
                order = `${i.name}: ${i.cant} precio: ${i.price * i.cant}` 
                return <p>{order}</p>                 
            })}
        </>
    )
}

export default PrepareOrder