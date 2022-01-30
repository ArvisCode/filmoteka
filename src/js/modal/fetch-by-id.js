import axios from 'axios';

export default async function fetchById(id) {
  const url = 'https://api.themoviedb.org/';
  const filter = `3/movie/${id}`;
  const key = 'api_key=d783920aea034ba2adae6031a0bf96c0';
  return await axios.get(`${url}${filter}?${key}&language=en-US`).then(response => response.data);
}
