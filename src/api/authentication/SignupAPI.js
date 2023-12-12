
import { fetchData } from '../APIUtils';

export function signupUser(firstName, lastName, email, password) {
  const endpoint = 'api/v1/authentication/signup/';

  const requestBody = {
    first_name: firstName,
    last_name: lastName,
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
