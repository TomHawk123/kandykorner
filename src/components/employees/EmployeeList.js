import React, { useEffect, useState } from "react"
import { fetchEmployees } from "../ApiManager"

export const EmployeeList = () => {
    const [employees, setEmployee] = useState([])

    useEffect(
        () => {
            fetchEmployees()
                .then((employeeArray) => {
                    setEmployee(employeeArray)
                })
        },
        []
    )

    return (
        <>
            <h2>Employee List</h2>
            {
                employees.map(employee =>
                    <p key={`employee--${employee.id}`}>
                        {employee.name} works at {employee.location.name}.
                    </p>)
            }
        </>
    )
}