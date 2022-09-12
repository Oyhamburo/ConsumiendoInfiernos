import Count from '../Count/Count';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import * as React from 'react';


const Panel = ({ key, data, TabPanel, a11yProps, value , handleChange , index, cant, handleClickOpen}) => {
    const { name, id, price, descrip, src } = data
    
    return (
        <>
            <TabPanel value={value} index={index} >

                <CardMedia
                    component="img"
                    height="160"
                    image={src}
                    alt="foto hamburguesa"
                    onClick={()=>handleClickOpen(data)}
                />
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                        {   
                            cant.map((e,i) =>  <Tab label={"X"+(i+1)} {...a11yProps(i)} />)
                        }

                    </Tabs>
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
                    <Count data={data} />
                </CardActions>
            </TabPanel>
        </>
    )
}

export default Panel