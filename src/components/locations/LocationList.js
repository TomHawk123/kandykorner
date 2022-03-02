import React, { useEffect, useState } from "react"

export const LocationList = () => {
    const [locations, setLocation] = useState([])

    useEffect(
        () => {
            fetch("http://localhost:8088/locations")
                .then(res => res.json())
                .then((locationArray) => {
                    setLocation(locationArray)
                })
        },
        []
    )

    return (
        <>
            <h2>Location List</h2>
            {
                locations.map(location => <p key={`location--${location.id}`}>{location.name}</p>)
            }
        </>
    )
}