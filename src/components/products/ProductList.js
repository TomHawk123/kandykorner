import React, { useEffect, useState } from "react"
import { fetchProducts } from "../ApiManager"

export const ProductList = () => {
    const [products, setProduct] = useState([])

    useEffect(
        () => {
            fetchProducts()
                .then((productArray) => {
                    setProduct(productArray)
                })
        },
        []
    )

    return (
        <>
            <h2>Product List</h2>
            {
                products.map(product =>
                    <dl key={`product--${product.id}`}>
                        <dt> <b> {product.name} </b> </dt>
                        <dd> Price: ${product.price} </dd>
                        <dd> Candy Type: {product.productType.candyCategory} </dd>
                    </dl>
                )
            }
        </>
    )
}


// ¿Ask how to use the _sort query string parameter feature of json-server to group the list of products by type.
// Answer: 