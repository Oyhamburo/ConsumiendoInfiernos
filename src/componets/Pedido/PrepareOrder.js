import { CartContext } from "../../store/CartContext/CartContext"
import { useContext } from "react"
const PrepareOrder = () => {
    const { cartProducts } = useContext(CartContext)
    return (
        <>
            {cartProducts.map((i) =>  {
                let order = `${i.name}: ${i.cant} precio: ${i.price * i.cant}`
                if(i.listIngredients && i.listIngredients.find((i) => i.estado == false)){
                    i.listIngredients.map((e)=>{
                        if(!e.estado){
                            order += " "+" "+"Sin: "+e.name+", "
                        }
                    })
                }
                return <p>{order}</p>
            }
            )}
        </>
    )
}

export default PrepareOrder