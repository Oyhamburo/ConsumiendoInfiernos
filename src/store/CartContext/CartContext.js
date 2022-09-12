import { createContext, useState } from "react"

const CartContext = createContext()

const CartProvider = ({ children }) => {

    const [cartProducts, setCartProducts] = useState([])

    const addProductToCart = (product) => {
        if (product.listIngredients && product.listIngredients.find((i) => i.estado == false)) {
            product.name += "!"
            setCartProducts([...cartProducts, product]);
        } else {
            const indice = cartProducts.findIndex(p => p.name === product.name)
            if (indice !== -1) {
                setCartProducts(
                    cartProducts.map((i) => {
                        // CartProduct viene con cantidad 1
                        if (i.name === product.name) {
                            return { ...i, cant: i.cant + product.cant }
                        }
                        else {
                            return i
                        }
                    })
                )
            } else {
                //Guardo CartProduct con cantidad elegida
                setCartProducts([product, ...cartProducts]);
            }
        }
    }

    const removeProduct = (id) => {
        setCartProducts(cartProducts.filter(i => i.id !== id))
    }

    const clear = () => {
        setCartProducts([]);
    }


    const data = {
        cartProducts,
        setCartProducts,
        addProductToCart,
        removeProduct,
        clear
    }
    return (
        <CartContext.Provider value={data}>
            {children}
        </CartContext.Provider>
    );
}

export default CartProvider

export { CartContext }