import { useRouter } from 'next/router';

const ProductItem = () => {
    // Hook de nextJS para capturar variables y usar datos con el Routing
    const {
        query: {productId, color, value} 
    } = useRouter();

    // Todas las propiedades y valores que tiene nuestro objeto router.query
    const router = useRouter();
    console.log(router.query);

    //Funcion para regresar a la Home page
    
    const backHome = () => {
        router.push('/')
    }
    return (
        <div>
            <p>Este es el id del producto solicitado: {productId} </p>
            <ul>
                <li> Color: {color} </li>
                <li> Valor: ${value} </li>
            </ul>
            <button onClick={backHome}>Back to Home page</button>
        </div>
    )
}

export default ProductItem
