const BASE_URL = 'http://127.0.0.1:8000'; // Base URL should be in .env file


async function handleErrors(response) {
  if (!response.ok) {
    throw new Error(response.statusText);
  }
  return response;
}

export async function fetchData(endpoint, options) {
  const url = `${BASE_URL}/${endpoint}`;

  try {
    const response = await fetch(url, options);
    await handleErrors(response);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error in fetchData:', error.message);
    throw error;
  }
}
