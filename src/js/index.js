import '../sass/main.scss';
import './modal-window/index';
import fetch from './fetch';

let page = 2;

const fetchPopularMoviesList = () => {
  fetch(page)
    .then(res => {
      if (res.results.length === 0) {
        console.log('null result');
      }
      res.results.forEach(movie => {
        console.log(movie.title, movie.id);
      });
    })
    .catch(err => console.log(err));
};

fetchPopularMoviesList(page);
