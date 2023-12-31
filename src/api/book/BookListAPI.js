import {fetchData} from '../APIUtils';

export function BookListAPI(title, publication_year, author) {
    let endpoint = `api/v1/books/?`;
    if (title) {
        endpoint += `&title=${title}`;
    }

    const requestOptions = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    };

    return fetchData(endpoint, requestOptions);
}

