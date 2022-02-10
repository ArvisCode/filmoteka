import { spinner, startSpinner, hideLoader } from '../spinner';
import renderMarkupMovieCard from '../movie-card';
import fetch from './fetch';
import { getGenresNames } from '../getGenresName';
import { unobserverForSearchInput } from '../input-search/input-search';

const options = {
  root: null,
  rootMargin: '700px',
  threshold: 0,
};
const observerForPopularMovies = new IntersectionObserver(updatePopularMoviesList, options);
const target = document.querySelector('.target');

let currentPage = 1;

const gallery = document.querySelector('.movie-card__list');

async function renderPopularMoviesList(pageNumber = 1) {
  unobserverForSearchInput();
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
      observerForPopularMovies.observe(target);
    })
    .catch(err => console.log(err));
  hideLoader();
}
export { renderPopularMoviesList };

renderPopularMoviesList(1);

export const unobservePopularMovies = () => observerForPopularMovies.unobserve(target);

/////////////////infinitive scroll

function updatePopularMoviesList(entries) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      currentPage += 1;

      fetch(currentPage)
        .then(response => {
          if (response.results.length === 0) {
            Notiflix.Notify.warning("We're sorry, but you've reached the end of search results.");
          }

          response.results.forEach(movie => {
            movie.genre_ids = getGenresNames(movie.genre_ids);
          });
          renderMarkupMovieCard(response);
        })
        .catch(error => console.log(error));
    }
  });
}
