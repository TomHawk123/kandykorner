const API = "http://localhost:8088"

export const fetchCustomers = () => {
    return fetch(`${API}/customers`)
        .then(r => r.json())
}

export const fetchEmployeesWithLocations = () => {
    return fetch(`${API}/employees?_expand=location`)
        .then(r => r.json())
}

export const fetchEmployees = () => {
    return fetch(`${API}/employees`)
}

export const fetchProducts = () => {
    return fetch(`${API}/products?_expand=productType`)
        .then(r => r.json())
}

export const fetchLocations = () => {
    return fetch(`${API}/locations`)
            .then(res => res.json())
}

export const sendEmployee = (newEmployee) => {
    const fetchOption = {
        method: "POST",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify(newEmployee)
    }

    return fetch(`${API}/employees`, fetchOption)
        .then(r => r.json())
}