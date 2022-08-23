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

const CardProductInfierno = (combo) => {
    const { name, descrip } = combo.data;

    
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <>
            <Card sx={{ maxWidth: 345 }} className="cardProduct" >
                <Box sx={{ width: '100%' }} className='padding'>
                    <TabPanel value={value} index={0} >
                        <CardMedia
                            component="img"
                            height="160"
                            image='argentaTriple.jpg'
                            alt={name}
                        />
                    </TabPanel>
                    <TabPanel value={value} index={1} >
                        <CardMedia
                            component="img"
                            height="160"
                            image='argentaTriple.jpg'
                            alt={name}
                        />
                    </TabPanel>
                    <TabPanel value={value} index={2}>
                        <CardMedia
                            component="img"
                            height="160"
                            image='argentaTriple.jpg'
                            alt={name}
                        />
                    </TabPanel>

                    <TabPanel value={value} index={2}>
                        <CardMedia
                            component="img"
                            height="160"
                            image='argentaTriple.jpg'
                            alt={name}
                        />
                    </TabPanel>

                    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                            <Tab label="x1" {...a11yProps(0)} />
                            <Tab label="x2" {...a11yProps(1)} />
                            <Tab label="x3" {...a11yProps(2)} />
                            <Tab label="x4" {...a11yProps(3)} />
                            <Tab label="x5" {...a11yProps(4)} />
                        </Tabs>
                    </Box>
                </Box>


                <CardContent >
                    <Typography gutterBottom variant="h5" component="div">
                        {name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {descrip}
                    </Typography>
                </CardContent>
                <CardActions  >
                    <Count data={combo} />
                </CardActions>
            </Card>
            <br />
        </>
    )
}

export default CardProductInfierno
