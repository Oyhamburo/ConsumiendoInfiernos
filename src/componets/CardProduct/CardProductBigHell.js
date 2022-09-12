import './CardProduct.scss'
import Count from '../Count/Count';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { useState } from 'react';
import { useContext } from 'react';
import { CartContext } from '../../store/CartContext/CartContext';
import Modal from '../Modal/Modal';
import * as React from 'react';

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

const CardProductBigHell = ({data}) => {
    const {type,meat} = data

    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const [open, setOpen] = useState(false);
    const [info, setInfo] = useState(meat[0]);
    const handleClickOpen = (i) => {
        setOpen(true);
        setInfo(i)
    };

    return (
        <>
            <Card sx={{ maxWidth: 345 }} className="cardProduct" >
                <Box sx={{ width: '100%' }} className='padding'>
                   {open ? <Modal setOpen={setOpen} data={info} /> : ''}
                    <TabPanel value={value} index={0} >

                        <CardMedia
                            component="img"
                            height="160"
                            image={meat[0].src}
                            alt="foto hamburguesa"
                            onClick={()=>handleClickOpen(meat[0])}
                        />
                        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                            <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                                <Tab label="x2" {...a11yProps(0)} />
                                <Tab label="x3" {...a11yProps(1)} />
                            </Tabs>
                        </Box>
                        <CardContent >
                            <Typography gutterBottom variant="h5" component="div">
                                {meat[0].name}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                {meat[0].descrip}
                            </Typography>
                        </CardContent>
                        <CardActions  >
                            <Count data={meat[0]} />
                        </CardActions>
                    </TabPanel>


                    <TabPanel value={value} index={1} >

                        <CardMedia
                            component="img"
                            height="160"
                            image={meat[1].src}
                            alt="foto hamburguesa"
                            onClick={()=>handleClickOpen(meat[1])}
                        />
                        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                            <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                                <Tab label="x2" {...a11yProps(0)} />
                                <Tab label="x3" {...a11yProps(1)} />

                            </Tabs>
                        </Box>
                        <CardContent >
                            <Typography gutterBottom variant="h5" component="div">
                                {meat[1].name}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                {meat[1].descrip}
                            </Typography>
                        </CardContent>
                        <CardActions  >
                            <Count data={meat[1]} />
                        </CardActions>
                    </TabPanel>

                </Box>
            </Card>
            <br />
        </>
    )
}

export default CardProductBigHell
