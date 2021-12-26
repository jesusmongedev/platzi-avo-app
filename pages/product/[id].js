import { useState, useEffect } from "react/cjs/react.development"
import { useRouter } from 'next/router'


const ProductPage = () => {
    const [product, setProduct] = useState()
    
    // console.log(product)

    const { query: { id } } = useRouter();

    useEffect(() => {
        window
        .fetch(`/api/avo/${id}`)
        .then((response) => response.json())
        .then(({data}) => {
            setProduct(data)
        })
        .catch(err => console.log(err.message))
    }, [id])
        
    return (
        <div>
            <h1>Avo name:</h1>
            <h2>{product?.name}</h2>
            <p>{product?.attributes.description}</p>
        </div>
    )
}

export default ProductPage
