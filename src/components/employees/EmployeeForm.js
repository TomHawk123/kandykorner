// import React, {useState} from "react"
// import { useHistory } from "react-router-dom"







import React, { useState, useEffect } from "react"
import { useHistory } from "react-router-dom";
import { fetchLocations, sendEmployee } from "../ApiManager";


export const EmployeeForm = () => {

    const history = useHistory()

    const [employee, update] = useState({
        "name": "",
        "manager": false,
        "fullTime": false,
        "hourlyRate": 0,
        "locationId": ""
    })

    const [locations, updateLocations] = useState([])
    useEffect(() => {
        fetchLocations()
            .then(
                (location) => {
                    updateLocations(location)
                }
            )
    }, [])


    const submitEmployee = e => {
        e.preventDefault()

        const newEmployee = {
            name: employee.name,
            manager: employee.manager,
            fullTime: employee.fullTime,
            hourlyRate: employee.hourlyRate,
            locationId: parseInt(employee.locationId)

        }

        return sendEmployee(newEmployee)
            .then(() => {
                history.push("/employees")
            })
    }


    return (
        <form className="employeeForm">
            <h2 className="employeeForm__title">New Employee</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="description">Employee Name:</label>
                    <input
                        required autoFocus
                        type="text"
                        className="form-control"
                        placeholder="Full Name"
                        onChange={
                            (e) => {
                                const copy = { ...employee }
                                copy.name = e.target.value
                                update(copy)
                            }

                        } />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="name">Location</label>
                    <select name="location" type="select"
                        required autoFocus
                        onChange={
                            e => {
                                const copy = { ...employee }
                                copy.locationId = e.target.value
                                update(copy)
                            }
                        }>

                        <option value="" disabled selected hidden>Location applying for...</option>
                        {locations.map(location => <option value={location.id}>{location.name}</option>)}

                    </select>
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="name">Manager</label>
                    <input type="checkbox"
                        required autoFocus
                        className="form-control"
                        onChange={
                            e => {
                                const copy = { ...employee }
                                copy.manager = Boolean(e.target.value)
                                update(copy)
                            }
                        }
                    />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="name">Full-Time</label>
                    <input type="checkbox"
                        required autoFocus
                        className="form-control"
                        onChange={
                            e => {
                                const copy = { ...employee }
                                copy.fullTime = e.target.checked
                                update(copy)
                            }
                        }
                    />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="name">Hourly Rate $</label>
                    <input inputmode="numeric" min="7.25" max="25"
                        required autoFocus
                        className="form-control"
                        onChange={
                            e => {
                                const copy = { ...employee }
                                copy.hourlyRate = e.target.value
                                update(copy)
                            }
                        }
                    />
                </div>
            </fieldset>
            {/* <fieldset> */}
            {/* <div className="form-group">
                    <label htmlFor="name">Location</label>
                    <select name="location" type="select"
                        onChange={
                            e => {
                                const copy = { ...employee }
                                copy.locationId = e.target.value
                                update(copy)
                            }
                        }>
                        <option value="" disabled selected hidden>Choose a location...</option>
                        {locations.map(location => <option value={location.id}>{location.name}</option>)}


                    </select>

                </div> */}
            {/* </fieldset> */}
            <button className="btn btn-primary" onClick={submitEmployee}>
                Submit Employee
            </button>
        </form>
    )
}