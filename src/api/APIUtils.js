const BASE_URL = 'http://127.0.0.1:8000';


function handleErrors(response) {
    if (!response.ok) {
        throw Error(response.statusText);
    }
    return response;
}

export function fetchData(endpoint, options) {
    const url = `${BASE_URL}/${endpoint}`;
    return fetch(url, options)
        .then(handleErrors)
        .then(response => response.json());
}
