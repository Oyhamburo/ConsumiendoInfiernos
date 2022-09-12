import './Home.scss'
import { Button } from '@mui/material'
import DialogCheckOut from '../../componets/Dialog/DialogCheckOut'
import Menu from '../Menu/Menu'
const Home = () => {
    return (
        <>
            <section className='home'>
                <article className='home__header'>
                    <h1>LAS MEJORES HAMBURGUESAS DE AVELLANEDA</h1>
                    <hr />
                    <Button variant="contained" color='secondary'>
                        Nuestro Menu
                    </Button>
                </article>
            </section>
            <div className='bodyMenu'>
                <DialogCheckOut />
                <Menu />
            </div>
        </>

    )
}

export default Home