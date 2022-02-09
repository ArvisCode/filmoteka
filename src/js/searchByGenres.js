import genres from './DATA/genres';
import { getGenresNames } from './getGenresName';
import { renderPopularMoviesList } from './fetches/renderPopularMovieList';
const genresBtn = document.querySelector('.dropdown-genres-btn');
const genresList = document.getElementById('genres-list');
document.querySelector('.logo').addEventListener('click', onLogoClickClearGenres);
/*dropdown*/
genresBtn.addEventListener('click', myFunction);
function myFunction() {
  document.getElementById('genres-list').classList.toggle('show');
}

// Close the dropdown menu if the user clicks outside of it
document.onclick = function (event) {
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
    genresBtn.textContent = e.target.textContent;
  }
  renderPopularMoviesList();
}

function onLogoClickClearGenres() {
  localStorage.removeItem('selectedGenre');
}

const libraryNav = document.getElementById('library-btn');
libraryNav.addEventListener('click', () => {
  genresBtn.style.display = 'none';
});
