import {fetchData} from '../APIUtils';

export function BookDetailsAPI(id) {
    const endpoint = `api/v1/books/${id}`;

    const requestOptions = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    };

    return fetchData(endpoint, requestOptions);
}

