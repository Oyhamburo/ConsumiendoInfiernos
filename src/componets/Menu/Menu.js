import './Menu.scss'
import ListCardProduct from '../ListCardProduct/ListCardProduct'
import combos from '../utils/mock'
import { useState } from 'react'
import { useEffect } from 'react'

const Menu = () => {

    const [ listCombos, setListCombos] = useState([])

    const getCombos = new Promise( (resolve,reject) => {
        setTimeout( () => {
            resolve(combos)
        }, 300)
    })

    useEffect(() => {
        getCombos
        .then( (res) => {
            setListCombos(res)
        })
        .catch( (error) => {
            console.log("la llamada fallo")
        })
        .finally( () => {

        })
    }, [])

    return(
        <>
            <h1 className='menu__title'>Nuestro Menu</h1>
            <br/>
            <main className='menu__combo'>
                <section className='container__combo'>
                    <ListCardProduct dataCombos={listCombos}/>
                </section>
            </main>
        </>
    )
}

export default Menu