import {fetchData} from '../APIUtils';

export function BookListAPI(page = 1, pageSize = 10, title, publication_year, author) {
    const endpoint = 'api/v1/books/?page={page}&pageSize={pageSize}&title={title}&publication_year={publication_year}&author={author}';

    const requestOptions = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    };

    return fetchData(endpoint, requestOptions);
}

