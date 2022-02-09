import { spinner, startSpinner, hideLoader } from '../spinner';
import renderMarkupMovieCard from '../movie-card';
import fetch from './fetch';
import { getGenresNames } from '../getGenresName';

const gallery = document.querySelector('.movie-card__list');

async function renderPopularMoviesList(pageNumber) {
  let page = pageNumber;
  await startSpinner();
  const selectedGenre = localStorage.getItem('selectedGenre');
  await fetch(page, selectedGenre)
    .then(res => {
      res.results.forEach(movie => {
        movie.genre_ids = getGenresNames(movie.genre_ids);
      });

      gallery.innerHTML = '';
      renderMarkupMovieCard(res, false);
    })
    .catch(err => console.log(err));
  hideLoader();
}
export { renderPopularMoviesList };

renderPopularMoviesList(1);
