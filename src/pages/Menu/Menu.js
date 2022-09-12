import './Menu.scss'
import ListCardProduct from '../../componets/ListCardProduct/ListCardProduct'
import { useState } from 'react'
import { useEffect } from 'react'
import { collection, getDocs } from 'firebase/firestore'
import db from '../../componets/utils/firebaseConfing'
import SelectCategory from '../../componets/Category/Category'
import { useParams } from 'react-router-dom'
import { CircularProgress } from '@mui/material'
const Menu = () => {

    const [listCombos, setListCombos] = useState([])
    const { category } = useParams();
    console.log({category})
    const [loading , setLoading] = useState(true)

    const getProducts = async () => {
        const productCollection = collection(db, 'combos')
        const productSnapshot = await getDocs(productCollection)
        const productList = productSnapshot.docs.map((doc) => {
            let product = doc.data()
            product.id = doc.id
            return product
        })
        return productList
    }

    useEffect(() => {
        setListCombos([])
        setLoading(true)
        getProducts().then( (combos) => {
            setLoading(false)
            category ? filterProductByCategory(combos, category) : setListCombos(combos)
        })
    }, [category])

    const filterProductByCategory = (array , category) => {
        return array.map( (combo, i) => {
            if(combo.category === category) {
               return setListCombos(listCombos => [...listCombos, combo]);
            }
        })
    }

    return (
        <>
            <SelectCategory />
            <h1 className='menu__title'>Nuestro Menu</h1>
            <br />

            <main className='menu__combo'>
                <section className='container__combo'>
                    {loading ?
                        (<div className='container-progress'><CircularProgress /></div>)
                        :
                        (<> <ListCardProduct dataCombos={listCombos} /> </>)
                    }
                    
                </section>
            </main>
        </>
    )
}

export default Menu