import React, { useEffect, useState } from "react"
import { fetchCustomers } from "../ApiManager"

export const CustomerList = () => {
    const [customers, setCustomers] = useState([])

    useEffect(
        () => {
            fetchCustomers()
                .then((customerArray) => {
                    setCustomers(customerArray)
                })
        },
        []
    )

    return (
        <>
            <h2>Customer List</h2>
            {
                customers.map(customer =>
                    <ul key={`customer--${customer.id}`}>
                        <li><b>{customer.name}</b></li>
                    </ul>)
            }
        </>
    )
}