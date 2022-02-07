// import  './buttonWatched';
import renderMarkupMovieCard from './movie-card.js';
import { getGenresNames } from './getGenresName';
import genres from './DATA/genres';
import imagePing from 'tui-pagination';
import { LOCAL_STORAGE_WATCHED } from './buttonWatched.js';


const watchedButton = document.querySelector('#watched-btn');
const gallery = document.querySelector('.movie-card__list');

watchedButton.addEventListener('click', getWatchedFilms);

export default function getWatchedFilms() {
  const getFilms = localStorage.getItem(LOCAL_STORAGE_WATCHED);
  const data = JSON.parse(getFilms);

  if (data === null) {
    data = [];
  }
  gallery.innerHTML = '';
  gallery.classList.remove('library');

  renderMarkupMovieCard({ results: data }, true);

}

