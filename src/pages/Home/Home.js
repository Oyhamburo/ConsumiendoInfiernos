import './Home.scss'
import { Button } from '@mui/material'
import DialogCheckOut from '../../componets/Dialog/DialogCheckOut'
import Menu from '../Menu/Menu'
const Home = () => {
    return (
        <>
            <header className='home'>
                <article className='home__header'>
                    <h1>LAS MEJORES HAMBURGUESAS DE AVELLANEDA</h1>
                    <hr />
                    <Button variant="contained" color='secondary'>
                        Nuestro Menu
                    </Button>
                </article>
            </header>
            <body>
                <DialogCheckOut />
                <Menu />
            </body>
        </>

    )
}

export default Home