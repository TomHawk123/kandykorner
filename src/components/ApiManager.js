const API = "http://localhost:8088"

export const fetchCustomers = () => {
    return fetch(`${API}/customers`)
        .then(r => r.json())
}

export const fetchEmployees = () => {
    return fetch(`${API}/employees?_expand=location`)
        .then(r => r.json())
}

export const fetchProducts = () => {
    return fetch(`${API}/products?_expand=productType`)
        .then(r => r.json())
}