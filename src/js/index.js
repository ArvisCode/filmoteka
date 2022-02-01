import '../sass/main.scss';
import './modal/modal';
import fetch from './fetches/fetch';
import header from './header';
import { getGenresNames } from './getGenresName';
import scrollTop from './scrollToTop';
import './input-search/input-search';
import { spinner, startSpinner, hideLoader } from './spinner';
import movieCard from '../handlebars/movie-card.hbs';
import renderMarkupMovieCard from './movie-card';
import { team } from './team';

import Pagination from 'tui-pagination';

let page = 1;

const gallery = document.querySelector('.movie-card__list');

const fetchPopularMoviesList = () => {
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
export { fetchPopularMoviesList };

fetchPopularMoviesList(page);

//const container = document.querySelector('tui-pagination');
//const options = {};
//const pagination = new Pagination(container, options);

//(function renderMarkupMovieCard(data) {
//  gallery.insertAdjacentHTML('beforeend', movieCard(data));
//})();
console.log('About developers');
console.log(team);
