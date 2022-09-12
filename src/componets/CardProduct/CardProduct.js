import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import Panel from '../Panel/Panel';

const CardProduct = ({data,key}) => {
    return (
        <>
            <Card sx={{ maxWidth: 345 }} className="cardProduct" >
                <Box sx={{ width: '100%' }} className='padding'>
                    {data.meat.map((i)=>{
                        return <Panel key={i.id} data={i} />
                    })}
                </Box>
            </Card>
            <br />
        </>
    )
}

export default CardProduct
