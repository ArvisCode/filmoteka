import axios from 'axios';

export default async function fetch(page) {
  const url = 'https://api.themoviedb.org/';
  const filter = `3/movie/popular`;
  const key = 'api_key=d783920aea034ba2adae6031a0bf96c0';
  return await axios.get(`${url}${filter}?${key}&page=${page}`).then(response => response.data);
}
