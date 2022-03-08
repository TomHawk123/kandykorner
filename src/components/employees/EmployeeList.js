import React, { useEffect, useState } from "react"
import { fetchEmployees, fetchEmployeesWithLocations } from "../ApiManager"
import { useHistory } from "react-router-dom"

export const EmployeeList = () => {

    const history = useHistory()

    const [employees, setEmployee] = useState([])

    useEffect(
        () => {
            fetchEmployeesWithLocations()
                .then((employeeArray) => {
                    setEmployee(employeeArray)
                })
        },
        [employees]
    )

    return (
        <>
            <h2>Employee List</h2>
            <button onClick={() => history.push("/employees/create")}>Hire Employee</button>

            {
                employees.map(employee =>
                    <p key={`employee--${employee.id}`}>
                        {employee.name} works at {employee.location.name}.
                    </p>)
            }
        </>
    )
}