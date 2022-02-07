import { getGenresNames } from '../js/getGenresName';
import genres from '../js/DATA/genres';
import renderMarkupMovieCard from './movie-card.js';
import imagePing from 'tui-pagination';
import { LOCAL_STORAGE_QUEUE } from './buttonWatched';

const queueButton = document.querySelector('#queue-btn');
const gallery = document.querySelector('.movie-card__list');

queueButton.addEventListener('click', getQueueFilms);

export default function getQueueFilms() {
  const getFilms = localStorage.getItem(LOCAL_STORAGE_QUEUE);
  const data = JSON.parse(getFilms);
  
  if (data === null) {
    data = [];
  }
  gallery.innerHTML = '';
  gallery.classList.remove('library');
  renderMarkupMovieCard({ results: data }, true);
}
