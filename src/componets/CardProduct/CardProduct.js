import './CardProduct.scss'
import Count from '../Count/Count';
const CardProduct = (combo) => {
    const {name,price,src} = combo.data;
    return(
        <article className='combo'>
            <img src={src} />
            <div>
                <h2>{name}</h2>
                <p>Descripcion</p>
                <Count data={combo} />
            </div>
        </article>
    )
}

export default CardProduct