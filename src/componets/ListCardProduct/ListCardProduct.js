import CardProductInfierno from "../CardProduct/CardProductInfierno";
import CardProductBigHell from "../CardProduct/CardProductBigHell";
import CardProductParadise from "../CardProduct/CardProductParadise";

const ListCardProduct = ({dataCombos}) => {
    return(
        <>
            {dataCombos.map( (combo) => {
                if (combo.type == 'Combo Big Hell' ) {
                    return <CardProductBigHell key={combo.id} data={combo} />
                }
                if (combo.type == 'Combo Paradise' ) {
                    return <CardProductParadise key={combo.id} data={combo} />
                }
                if (combo.type == 'Combo Infierno' ) {
                    return <CardProductInfierno key={combo.id} data={combo} />
                }
            })}
        </>
    )
}

export default ListCardProduct