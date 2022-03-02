import React, { useEffect, useState } from "react"

export const ProductList = () => {
    const [products, setProduct] = useState([])

    useEffect(
        () => {
            fetch("http://localhost:8088/products?_expand=productType")
                .then(res => res.json())
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
                        <dd> Candy Type: {product.productTypeId} </dd>
                        </dl>

                    )
                }
        </>
    )
}