import { fetchData } from '../APIUtils';

export function loginUser(email, password) {
  const endpoint = 'api/v1/authentication/login/';

  const requestBody = {
    email,
    password,
  };

  const requestOptions = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(requestBody),
  };

  return fetchData(endpoint, requestOptions);
}


