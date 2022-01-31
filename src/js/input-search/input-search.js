import debounce from 'lodash.debounce';
import renderMarkupMovieCard from '../movie-card';
import Notiflix from 'notiflix';
import { spinner, startSpinner, hideLoader } from '../spinner';
import { getGenresNames } from '../getGenresName';
import { fetchQuery } from '../input-search/fetch-by-query';

Notiflix.Notify.init({
  distance: '24px',
  timeout: 2000,
});

const inputEl = document.querySelector('.search-field__input');
const movieCardList = document.querySelector('.movie-card__list');

const DEBOUNCE_DELAY = 300;
let pageNumber = 0;
inputEl.addEventListener('input', debounce(handleInputSearch, DEBOUNCE_DELAY));

async function handleInputSearch(e) {
  // await startSpinner();
  const searchQuery = e.target.value.trim();

  pageNumber = 1;

  if (searchQuery === '') {
    // hideLoader();
    return;
  }

  fetchQuery(searchQuery, pageNumber)
    .then(response => {
      if (response.total_pages === 0) {
        Notiflix.Notify.failure(
          'Search result not successful. Enter the correct movie name and try again!',
        );
        // hideLoader();
        return;
      }
      movieCardList.innerHTML = '';
      response.results.forEach(movie => {
        movie.genre_ids = getGenresNames(movie.genre_ids);
      });
      renderMarkupMovieCard(response);
      // hideLoader();
    })
    .catch(err => console.log(err));
}
