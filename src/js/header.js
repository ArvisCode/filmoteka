'use strict';
import { renderPopularMoviesList } from './fetches/renderPopularMovieList';
import { myLibraryPage } from './myLibraryPage';
import getWatchedFilms from './getFromLocalStorageWatchedList';
import getQueueFilms from './getfromLocalStorageQueueList';
import { getWatchedList } from './buttonWatched';
import { getQueueList } from './buttonWatched';
import { unobservePopularMovies } from './fetches/renderPopularMovieList';
import { unobserverForSearchInput } from './input-search/input-search';
const genresBtn = document.querySelector('.dropdown-genres-btn');
const refs = {
  header: document.querySelector('.header'),
  logo: document.querySelector('.logo'),
  homeBtn: document.querySelector('#home-btn'),
  libraryBtn: document.querySelector('#library-btn'),
  searchInput: document.querySelector('.search-container'),
  searchInputField: document.querySelector('.search-field__input'),
  libraryBtnsContainer: document.querySelector('.library-btns-container'),
  watchedBtn: document.querySelector('#watched-btn'),
  queueBtn: document.querySelector('#queue-btn'),
  movieCardList: document.querySelector('.movie-card__list'),
};

refs.libraryBtn.addEventListener('click', onLibraryBtnClick);
refs.homeBtn.addEventListener('click', onHomeBtnClick);
refs.logo.addEventListener('click', onHomeBtnClick);
refs.watchedBtn.addEventListener('click', onWatchedBtnClick);
refs.queueBtn.addEventListener('click', onQueueBtnClick);

function onLibraryBtnClick() {
  unobservePopularMovies();
  unobserverForSearchInput();
  createHeaderLibrary();
  if (getWatchedList().length === 0) {
    myLibraryPage();
  } else {
    getWatchedFilms();
  }
}

function onHomeBtnClick() {
  localStorage.removeItem('selectedGenre');
  genresBtn.textContent = 'Search by genres';
  genresBtn.style.display = 'inline-block';
  renderHeaderHome();
  refs.movieCardList.classList.remove('library');

  renderPopularMoviesList();
  refs.searchInputField.value = '';

  onWatchedBtnClick();
}

function renderHeaderHome() {
  if (refs.header.classList.contains('header--library')) {
    // refs.homeBtn.setAttribute('disabled', true);
    // refs.logo.setAttribute('disabled', true);
    refs.libraryBtn.removeAttribute('disabled');
    refs.header.classList.toggle('header--library');
    refs.header.classList.toggle('header--home');
    refs.libraryBtn.classList.toggle('navigation__btn--current');
    refs.homeBtn.classList.toggle('navigation__btn--current');
    refs.searchInput.classList.toggle('on-library-none');
    refs.libraryBtnsContainer.classList.toggle('on-home-none');
  }
}

function createHeaderLibrary() {
  if (refs.header.classList.contains('header--home')) {
    refs.libraryBtn.setAttribute('disabled', true);
    // refs.logo.removeAttribute('disabled');
    // refs.homeBtn.removeAttribute('disabled');
    refs.header.classList.toggle('header--library');
    refs.header.classList.toggle('header--home');
    refs.homeBtn.classList.toggle('navigation__btn--current');
    refs.libraryBtn.classList.toggle('navigation__btn--current');
    refs.searchInput.classList.toggle('on-library-none');
    refs.libraryBtnsContainer.classList.toggle('on-home-none');
  }
}

function onWatchedBtnClick() {
  if (refs.queueBtn.classList.contains('library-btn--current')) {
    refs.watchedBtn.classList.toggle('library-btn--current');
    refs.queueBtn.classList.toggle('library-btn--current');
  }
  if (getWatchedList().length === 0) {
    myLibraryPage();
  }
}

function onQueueBtnClick() {
  if (refs.watchedBtn.classList.contains('library-btn--current')) {
    refs.queueBtn.classList.toggle('library-btn--current');
    refs.watchedBtn.classList.toggle('library-btn--current');
  }
  if (getQueueList().length === 0) {
    myLibraryPage();
  }
}

class Search {
  constructor(element) {
    this._element = element;
    this._input = element.querySelector('.search-input');
    this._cross = element.querySelector('.cross');
    this._opened = false;

    this._bindEventListeners();
  }

  _bindEventListeners() {
    this._input.addEventListener('focus', e => {
      if (!this._opened) {
        this._input.blur();
      }
    });

    this._input.addEventListener('blur', e => {
      if (this._opened && this._input.value === '') {
        this._close();
      }
    });

    this._element.addEventListener('click', () => {
      if (!this._opened) {
        this._open();
      }
    });

    this._cross.addEventListener('click', e => {
      if (this._opened) {
        e.stopPropagation();
        this._clearValue();
        this._close();
      }
    });
  }

  _open() {
    this._element.classList.add('opened');
    this._opened = true;

    setTimeout(() => {
      this._input.focus();
    }, 900);
  }

  _close() {
    this._element.classList.remove('opened');
    this._opened = false;
    this._input.blur();
    renderPopularMoviesList();
  }

  _clearValue() {
    this._input.value = '';
  }
}

document.querySelectorAll('.search').forEach(element => {
  new Search(element);
});
