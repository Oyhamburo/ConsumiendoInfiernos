import CardProduct from "../CardProduct/CardProduct";
const ListCardProduct = ({ dataCombos }) => {
    return (
        <>
            {dataCombos.map((combo) => {
                return <CardProduct data={combo} />
            })}
        </>
    )
}

export default ListCardProduct

