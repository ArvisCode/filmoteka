const axios = require('axios');

export async function fetchQuery(searchQuery, pageNumber) {
  const response = await axios.get(
    `https://api.themoviedb.org/3/search/movie?api_key=d783920aea034ba2adae6031a0bf96c0&query=${searchQuery}&language=en-US&page=${pageNumber}`,
  );
  return response.data;
}