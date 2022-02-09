import genres from './DATA/genres';
import { getGenresNames } from './getGenresName';
import { renderPopularMoviesList } from './fetches/renderPopularMovieList';
const genresBtn = document.querySelector('.dropdown-genres-btn');
const genresList = document.getElementById('genres-list');

/*dropdown*/
genresBtn.addEventListener('click', myFunction);
function myFunction() {
  document.getElementById('genres-list').classList.toggle('show');
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function (event) {
  if (!event.target.matches('.dropdown-toggle')) {
    const dropdowns = document.getElementsByClassName('dropdown-menu');
    let i = 0;
    for (i = 0; i < dropdowns.length; i++) {
      const openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
};

genresList.addEventListener('click', onGenresSelected);
function onGenresSelected(e) {
  if (e.target.tagName === 'A') {
    localStorage.setItem('selectedGenre', e.target.id);
  }
  renderPopularMoviesList();
}

// genresBtn.addEventListener('click', onGenresButtonClick);

// function onGenresButtonClick(movie) {
//   let genresSearchList = [];
//   genresSearchList.filter(movie => movie.genre_ids === movie.id);
//   movie.genre_ids = getGenresNames(movie.genre_ids);
//   if (movie.genre_ids === movie.id) {
//   }
// }
// URL: /discover/movie/?with_genres={genre_id}&sort_by=popularity.desc

// export function onSearchFilmsByGenre(event) {
//   event.preventDefault();
//   let movieGenreId = event.target.id;
//   getGenresNames(movieGenreId).then(results => {
//     Utils.clearFoo();
//     getGenresArray(Utils.genresName);
//     saveArrMoviesToLocalStorage(results);
//     const data = getArrMoviesFromLocalStorage();
//     Utils.renderMarkup(data);
//     listenModalClick(onGalleryModalOpen);
//     pagination.then(res => {
//       settings.movieGenreId = movieGenreId;
//       settings.type = 'films-by-genre';
//       res.reset(data.total_pages);
//       /* res.movePageTo(1); */
//     });
//   });
// }

// function hideFilterList() {
//   refs.filterHiddenContainer.classList.add('visually-hidden');
//   refs.filterBox.innerHTML = '';
//   refs.filterBtn.classList.remove('filters-menu--open');
// }

// function onGenresButtonClick() {
//   if (refs.filterBtn.classList.contains('filters-menu--open')) {
//     hideFilterList();
//     return;
//   }
//   refs.filterBtn.classList.add('filters-menu--open');
//   refs.filterHiddenContainer.classList.remove('visually-hidden');
//   renderGenresListMarkup(genresArray);
//   refs.filterBox.addEventListener('click', onGenreChoosed);
//   refs.filterChooseAll.addEventListener('click', onAllGenresChoosed);
//   document.addEventListener('keydown', onEscPress);
// }

// function onGenreChoosed(event) {
//   onSearchFilmsByGenre(event);
//   hideFilterList();
// }

// function onAllGenresChoosed() {
//   onClickPageHome();
//   hideFilterList();
// }

// function onEscPress(event) {
//   const ESC_KEY_CODE = 'Escape';
//   if (event.code === ESC_KEY_CODE) {
//     document.removeEventListener('keydown', onEscPress);
//     hideFilterList();
//   }
// }

// const clickBody = document.querySelector('main');
// clickBody.addEventListener('click', event => {
//   event.stopPropagation();

//   if (hideFilterList) {
//     document.removeEventListener('keydown', hideFilterList);
//     hideFilterList();
//   }
// });

// export function showGenresFilter() {
//   refs.filterBtn.classList.remove('visually-hidden');
// }

// export function hideGenresFilter() {
//   refs.filterBtn.classList.add('visually-hidden');
// }

// function renderGenresListMarkup(genres) {
//   const markup = genres
//     .map(({ id, name }) => {
//       return `
//         <li class="genres-menu--list-item">
//             <a class="genres-menu--link" id=${id}>${name}</a>
//         </li>`;
//     })

//     .join('');

//   refs.filterBox.insertAdjacentHTML('beforeend', markup);
// }
