import CardProduct from "../CardProduct/CardProduct";

const ListCardProduct = ({dataCombos}) => {
    return(
        <>
            {dataCombos.map( (combo) => {
                return <CardProduct key={combo.id} data={combo} />
            })}
        </>
    )
}

export default ListCardProduct