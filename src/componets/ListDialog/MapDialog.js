import ListDialog from "./ListDialog"
import List from '@mui/material/List';

const MapDialog = ({data}) => {
    return(
        <>
            <List>
                {data.map( (combo) => {
                    return <ListDialog data={combo.data} key={combo} />
                })}
            </List>
        </>
    )
}

export default MapDialog