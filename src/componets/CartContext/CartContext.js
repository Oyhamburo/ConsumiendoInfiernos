import { createContext, useState } from "react"

const CartContext = createContext()

const CartProvider = ({children}) => {
    const [numeroCarrito, setNumeroCarrito] = useState(0)

    const [cartProducts, setCartProducts] = useState([])

    const addProductToCart = (product) => {
        // cartProducts.forEach(e => {
        //     console.log("product.data.id: ", product.data.id)
        //     console.log("e.data.id: ",e.data.id)
        //     if(product.data.id == e.data.id){
        //         e.data.cant += 1
        //     }else{
        //     }
        // });
        setCartProducts(cartProducts => [...cartProducts, product])
    }
    const addNumeroCarrito = (count) => {
        setNumeroCarrito(numeroCarrito + count)
    }
    
    const data = {
        numeroCarrito,
        setNumeroCarrito,
        addNumeroCarrito,
        cartProducts,
        setCartProducts,
        addProductToCart,
        // removeI
    }
    return (
        <CartContext.Provider value={data}>
            {children}
        </CartContext.Provider>
    );
}

export default CartProvider

export { CartContext }