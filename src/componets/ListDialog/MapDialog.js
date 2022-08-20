import ListDialog from "./ListDialog"
import List from '@mui/material/List';

const MapDialog = ({data}) => {
    return(
        <>
            <List>
                {data.map( (combo) => {
                    return <ListDialog combo={combo} key={combo.id} />
                })}
            </List>
        </>
    )
}

export default MapDialog