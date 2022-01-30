import '../sass/main.scss';
//import './modal-window/index';
import fetch from './fetch';
import header from './header';
import Pagination from 'tui-pagination';

import genres from '../data/genres';
import './input-search';
// import movieCard from '../handlebars/movie-card.hbs'

import renderMarkupMovieCard from './movie-card';
let page = 2;
const gallery = document.querySelector('.movie-card__list');
const fetchPopularMoviesList = () => {
	fetch(page)
		.then(res => {
			if (res.results.length === 0) {
				console.log('null result');
			}
			// res.results.forEach(movie => {
			//   console.log(movie.title, movie.id);
			// });
			res.results.forEach(movie => {
				movie.genre_ids = get_genres_names(movie.genre_ids);
			});
			renderMarkupMovieCard(res);
		})
		.catch(err => console.log(err));
};

fetchPopularMoviesList(page);

// const container = document.querySelector('tui-pagination');
// const options = {
// };
// const pagination = new Pagination(container, options);

const get_genres_names = function (genre_ids) {

	const genresNames = [];
	for (let genre_id of genre_ids) {
		genres.genres.forEach((genre) => {
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
}


// function renderMarkupMovieCard(data) {
//   gallery.insertAdjacentHTML('beforeend', movieCard(data));
// }
