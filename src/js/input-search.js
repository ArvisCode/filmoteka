import debounce from 'lodash.debounce';
import renderMarkupMovieCard from './movie-card';
import genres from '../data/genres';
import Notiflix from 'notiflix';

const inputEl = document.querySelector('.search-field__input');
const movieCardList = document.querySelector('.movie-card__list');

const DEBOUNCE_DELAY = 300;
let pageNumber = null;
inputEl.addEventListener('input', debounce(handleInputSearch, DEBOUNCE_DELAY));

function handleInputSearch(e) {
  const searchQuery = e.target.value.trim();
  console.log(searchQuery);

  pageNumber = 1;

  if (searchQuery === '') {
    // galleryEl.innerHTML = '';
    return;
  }

  fetchQuery(searchQuery, pageNumber)
    .then(response => {
      if (response.total_pages === 0) {
        // console.log('There are nothing');
        Notiflix.Notify.failure(
          'Search result not successful. Enter the correct movie name and try again',
        );
        return;
      }
      movieCardList.innerHTML = '';
      response.results.forEach(movie => {
        movie.genre_ids = GetGenresNames(movie.genre_ids);
      });
      renderMarkupMovieCard(response);
    })
    .catch(err => console.log(err));
}

async function fetchQuery(searchQuery, pageNumber) {
  const response = await fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=d783920aea034ba2adae6031a0bf96c0&query=${searchQuery}&language=en-US&page=${pageNumber}`,
  );
  return response.json();
}

const GetGenresNames = function (genre_ids) {
  const genresNames = [];
  for (let genre_id of genre_ids) {
    genres.genres.forEach(genre => {
      if (genre_id === genre.id) {
        genresNames.push(genre.name);
      }
    });
  }
  const genre2 = genresNames.slice(0, 2);
  if (genresNames.length > 2) {
    genre2.push('Others');
  }
  return genre2.join(', ');
};
