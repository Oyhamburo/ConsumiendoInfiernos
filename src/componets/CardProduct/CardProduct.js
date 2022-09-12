import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import Panel from '../Panel/Panel';
import Typography from '@mui/material/Typography';
import PropTypes from 'prop-types';
import { useState } from 'react';
import Modal from '../Modal/Modal';
import './CardProduct.scss'

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}
TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};


function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}


const CardProduct = ({ data, key }) => {
    const { type, meat } = data

    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    const [info, setInfo] = useState();
    const handleClickOpen = (i) => {
        setOpen(true);
        setInfo(i)
    };

    const [open, setOpen] = useState(false);


    return (
        <>
            <Card sx={{ maxWidth: 345 }} className="cardProduct" >
                <Box sx={{ width: '100%' }} className='padding'>
                    {open ? <Modal setOpen={setOpen} data={info} /> : ''}
                    {data.meat.map((e, index) => {
                        return <Panel data={e} TabPanel={TabPanel} handleClickOpen={handleClickOpen} a11yProps={a11yProps} value={value} handleChange={handleChange} index={index} cant={meat} />
                    })}
                </Box>
            </Card>
            <br />
        </>
    )
}

export default CardProduct
