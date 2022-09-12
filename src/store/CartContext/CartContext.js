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
                        if (i.name === product.name) {
                            return { ...i, cant: i.cant + product.cant }
                        }
                        else {
                            return i
                        }
                    })
                )
            } else {
                setCartProducts([product, ...cartProducts]);
            }
        }
    }

    const removeProduct = (data) => {
        let pFiltrado = cartProducts.filter(i=> JSON.stringify(i) !== JSON.stringify(data))
        setCartProducts(pFiltrado)
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