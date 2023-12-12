import { fetchData } from '../APIUtils';

export function logoutUser(refreshToken, accessToken) {
  const endpoint = 'api/v1/authentication/logout/';

  const requestBody = {
    refresh_token: refreshToken,
  };

  const requestOptions = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + accessToken,
    },
    body: JSON.stringify(requestBody),
  };

  return fetchData(endpoint, requestOptions);
}