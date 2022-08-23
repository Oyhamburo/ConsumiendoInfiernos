import CardProductInfierno from "../CardProduct/CardProductInfierno";
import CardProductBigHell from "../CardProduct/CardProductBigHell";

const ListCardProduct = ({dataCombos}) => {
    return(
        <>
            {dataCombos.map( (combo) => {
                switch (combo.name) {
                    case 'Combo Infierno':
                        return <CardProductInfierno key={combo.id} data={combo} />
                    break;
                    case 'Combo Big Hell':
                        return <CardProductBigHell key={combo.id} data={combo} />
                    break;
                    default:
                    break;
                }
            })}
        </>
    )
}

export default ListCardProduct