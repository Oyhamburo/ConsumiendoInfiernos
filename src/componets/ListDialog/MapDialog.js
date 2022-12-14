import ListDialog from "./ListDialog"
import List from '@mui/material/List';

const MapDialog = ({data}) => {
    return(
        <>
            <List>
                {data.map( (combo,index) => {
                    return <ListDialog data={combo} index={index} />
                })}
            </List>
        </>
    )
}

export default MapDialog