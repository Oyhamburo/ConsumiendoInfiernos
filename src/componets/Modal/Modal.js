import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import * as React from 'react';
import DialogTitle from '@mui/material/DialogTitle';
import './Modal.scss'
import { FormGroup } from '@mui/material';
import { useState } from 'react';
import { useEffect } from 'react';
import ingredients from '../utils/mockIngredientes'
import Ingredients from '../Ingredients/Ingredients';
import { useContext } from 'react';
import { CartContext } from '../../store/CartContext/CartContext';
import CountModal from '../CountModal/CountModal';

export default function Modal({ setOpen, data }) {
    const { name, src, type } = data

    const handleCloseAgree = () => {
        setOpen(false);
    };

    const [listIngredients, setListIngredients] = useState([])
    let open = true

    const handleClose = () => {
        setOpen(false);
    };

    const getIngredients = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(ingredients)
        }, 150)
    })
    useEffect(() => {
        getIngredients
            .then((res) => {
                setListIngredients(res.find((i) => i.type == type).ingredients)
            })
            .catch((error) => {
                console.log("la llamada fallo")
            })
            .finally(() => {

            })
    },[])

    
    const handleChange = (event) => {
        const nuevoArray = listIngredients.map((ing) => {
            if(ing.name == event.target.name){
                return {...ing, estado: event.target.checked}
            }else{
                return ing
            }
        }) 
        setListIngredients(nuevoArray)
    }






    if(listIngredients.length == 0){
        return null
    }    


    return (
        <div>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <img src={src} className='test' />
                <DialogTitle id="alert-dialog-title">
                    {"Use Google's location service?"}
                </DialogTitle>
                <DialogContent>
                    <FormGroup>
                        {<Ingredients data={listIngredients} type={type} handleChange={handleChange}/>}
                    </FormGroup>
                </DialogContent>
                <DialogActions>

                    <CountModal data={data} handleCloseAgree={handleCloseAgree} handleClose={handleCloseAgree} listIngredients={listIngredients} />
                </DialogActions>
            </Dialog>
        </div>
    );
}
