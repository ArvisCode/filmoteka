import renderMarkupMovieCard from '../movie-card';
import fetch from './fetch';
import { getGenresNames } from '../getGenresName';

let page = 2;

const gallery = document.querySelector('.movie-card__list');

const renderPopularMoviesList = () => {
  fetch(page)
    .then(res => {
      res.results.forEach(movie => {
        movie.genre_ids = getGenresNames(movie.genre_ids);
      });
      gallery.innerHTML = '';
      renderMarkupMovieCard(res);
    })
    .catch(err => console.log(err));
};
export { renderPopularMoviesList };

renderPopularMoviesList(page);
