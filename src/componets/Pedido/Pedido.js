import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import PrepareOrder from './PrepareOrder';
import { CartContext } from "../../store/CartContext/CartContext"
import { useContext } from "react"

const Pedido = () => {
    const [open, setOpen] = React.useState(false);
    const { cartProducts } = useContext(CartContext)

    const total = () => {
        let total = 0;
        cartProducts.map((i) => {
            total += i.cant * i.price
            console.log(i)
            console.log(total)
        })
        return total
    }

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    return (
        <>
            <Button variant="contained" onClick={handleClickOpen}>
                ver Pedido
            </Button>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">
                    {"Tu Pedido: "}
                </DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        Pedido:
                        <br/>
                        <PrepareOrder />
                        <br/>
                        Total: {total()}
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} autoFocus>
                        Aceptar
                    </Button>
                </DialogActions>
            </Dialog>
        </>
    )
}

export default Pedido


