import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';
import Slide from '@mui/material/Slide';
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';
import Badge from '@mui/material/Badge';
import { useContext } from 'react';
import { CartContext } from '../CartContext/CartContext';
import MapDialog from '../ListDialog/MapDialog';


const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function FullScreenDialog() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const {cartProducts} = useContext(CartContext)
  const totalNumber = () => {
    let count = 0
    cartProducts.forEach(element => {
        count = count + element.cant
    });
    return count
  };
  return (
    <div>

      <Button color="error">
        <Badge badgeContent={totalNumber()} color="error" onClick={handleClickOpen}>
            <LocalGroceryStoreIcon color="error"/>
        </Badge>
        </Button>
      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <AppBar sx={{ position: 'relative' }} color="error">
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleClose}
              aria-label="close"
            >
            <CloseIcon />
            </IconButton>
            <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
              TITULO
            </Typography>
            <Button autoFocus color="inherit" onClick={handleClose}>
              BOTON
            </Button>
          </Toolbar>
        </AppBar>
        <MapDialog data={cartProducts} />

      </Dialog>
    </div>
  );
}
