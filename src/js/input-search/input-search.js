import debounce from 'lodash.debounce';
import renderMarkupMovieCard from '../movie-card';
import Notiflix from 'notiflix';
import { spinner, startSpinner, hideLoader } from '../spinner';
import { getGenresNames } from '../getGenresName';
import { fetchQuery } from '../input-search/fetch-by-query';
import { renderPopularMoviesList, unobservePopularMovies } from '../fetches/renderPopularMovieList';

Notiflix.Notify.init({
  distance: '24px',
  timeout: 2000,
});

const inputEl = document.querySelector('.search-field__input');
const movieCardList = document.querySelector('.movie-card__list');
const target = document.querySelector('.target');

const DEBOUNCE_DELAY = 300;
let pageNumber = 0;
inputEl.addEventListener('input', debounce(handleInputSearch, DEBOUNCE_DELAY));

async function handleInputSearch(e) {
  observerForSearchInput.unobserve(target);

  const searchQuery = e.target.value.trim();

  pageNumber = 1;

  await startSpinner();

  if (searchQuery === '') {
    observerForSearchInput.unobserve(target);
    renderPopularMoviesList();
    hideLoader();
    return;
  }

  fetchQuery(searchQuery, pageNumber)
    .then(response => {
      if (response.total_pages === 0) {
        Notiflix.Notify.failure(
          'Search result not successful. Enter the correct movie name and try again!',
        );
        hideLoader();
        return;
      }
      movieCardList.innerHTML = '';
      getGenres(response);
      renderMarkupMovieCard(response);
      hideLoader();
      observerForSearchInput.observe(target);
      unobservePopularMovies();
    })
    .catch(err => console.log(err));
}

function getGenres(response) {
  response.results.forEach(movie => {
    movie.genre_ids = getGenresNames(movie.genre_ids);
  });
}
/////////////////infinitive scroll

export const unobserverForSearchInput = () => observerForSearchInput.unobserve(target);

const options = {
  root: null,
  rootMargin: '700px',
  threshold: 0,
};

function updateSearchInputList(entries) {
  const searchQuery = inputEl.value;

  entries.forEach(entry => {
    if (entry.isIntersecting) {
      pageNumber += 1;
      fetchQuery(searchQuery, pageNumber).then(response => {
        if (response.results.length === 0) {
          Notiflix.Notify.warning("We're sorry, but you've reached the end of search results.");
        }

        getGenres(response);
        renderMarkupMovieCard(response);
      });
      // .catch(error => console.log(error));
    }
  });
}

const observerForSearchInput = new IntersectionObserver(updateSearchInputList, options);
