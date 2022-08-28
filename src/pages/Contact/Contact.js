import './Contact.scss'
import { TextField } from '@mui/material'
import { styled } from "@mui/material/styles";
import { Button } from '@mui/material';
import Pedido from '../../componets/Pedido/Pedido';
const Contact = () => {
    const ValidationTextField = styled(TextField)({
        "& input:valid + fieldset": {
            borderColor: "black",
            borderWidth: 2
        },
        "& input:invalid + fieldset": {
            borderColor: "red",
            borderWidth: 2
        },
        "& input:valid:focus + fieldset": {
            borderLeftWidth: 6,
            padding: "4px !important" // override inline-style
        }
    });
    return (
        <main className='contact'>
            <section className='contact__container'>
                <h1>Contacto</h1>
                <ValidationTextField
                    label="Nombre"
                    required
                    variant="outlined"
                    defaultValue="Nombre"
                    id="validation-outlined-input"
                    color='blue'
                    className="contact__container__validationTextField"
                />
                <ValidationTextField
                    label="Direccion"
                    required
                    variant="outlined"
                    defaultValue="Direccion"
                    id="validation-outlined-input"
                    color='blue'
                    className="contact__container__validationTextField"
                />
                <div className='contact__container__btn'>
                    <Pedido />
                </div>
                <div>
                    <Button variant='contained' color='secondary' className='contact__container__btn__2'>
                        Hacer Pedido
                    </Button>
                </div>
            </section>

        </main>
    )
}
export default Contact