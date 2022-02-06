import { spinner, startSpinner, hideLoader } from '../spinner';
import renderMarkupMovieCard from '../movie-card';
import fetch from './fetch';
import { getGenresNames } from '../getGenresName';

let page = 1;

const gallery = document.querySelector('.movie-card__list');

async function renderPopularMoviesList() {
  await startSpinner();
  await fetch(page)
    .then(res => {
      res.results.forEach(movie => {
        movie.genre_ids = getGenresNames(movie.genre_ids);
      });
      gallery.innerHTML = '';
      renderMarkupMovieCard(res);
    })
    .catch(err => console.log(err));
  hideLoader();
}
export { renderPopularMoviesList };

renderPopularMoviesList(page);
