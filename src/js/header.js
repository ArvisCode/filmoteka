'use strict';
import { renderPopularMoviesList } from './fetches/renderPopularMovieList';
import { myLibraryPage } from './myLibraryPage';
import getWatchedFilms from './getFromLocalStorageWatchedList';
import getQueueFilms from './getfromLocalStorageQueueList';
import { LOCAL_STORAGE_WATCHED } from './buttonWatched';
import { LOCAL_STORAGE_QUEUE } from './buttonWatched';

const refs = {
	header: document.querySelector('.header'),
	logo: document.querySelector('.logo'),
	homeBtn: document.querySelector('#home-btn'),
	libraryBtn: document.querySelector('#library-btn'),
	searchInput: document.querySelector('.search-field'),
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
	createHeaderLibrary();
  if (!localStorage.getItem(LOCAL_STORAGE_WATCHED)) {
	myLibraryPage();
  } else {
	getWatchedFilms();
  }
}

function onHomeBtnClick() {
	renderHeaderHome();
	refs.movieCardList.classList.remove('library');
	renderPopularMoviesList();
	onWatchedBtnClick()
}

function renderHeaderHome() {
	if (refs.header.classList.contains('header--library')) {
		refs.homeBtn.setAttribute('disabled', true);
		refs.logo.setAttribute('disabled', true);
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
		refs.logo.removeAttribute('disabled');
		refs.homeBtn.removeAttribute('disabled');
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
  if (!localStorage.getItem(LOCAL_STORAGE_WATCHED)) {
	myLibraryPage();
  } 
}

function onQueueBtnClick() {
  if (refs.watchedBtn.classList.contains('library-btn--current')) {
    refs.queueBtn.classList.toggle('library-btn--current');
    refs.watchedBtn.classList.toggle('library-btn--current');
  }
  if (!localStorage.getItem(LOCAL_STORAGE_QUEUE)) {
	myLibraryPage();
  }
}
