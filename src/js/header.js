'use strict';

const refs = {
	header: document.querySelector('.header'),
	logo: document.querySelector('.logo'),
	homeBtn: document.querySelector('#home-btn'),
	libraryBtn: document.querySelector('#library-btn'),
	searchInput: document.querySelector('.search-field'),
	libraryBtnsContainer: document.querySelector('.library-btns-container'),
	watchedBtn: document.querySelector('#watched-btn'),
	queueBtn: document.querySelector('#queue-btn'),
}

refs.libraryBtn.addEventListener('click', onLibraryBtnClick);
refs.homeBtn.addEventListener('click', onHomeBtnClick);
refs.logo.addEventListener('click', onHomeBtnClick);
refs.watchedBtn.addEventListener('click', onWatchedBtnClick);
refs.queueBtn.addEventListener('click', onQueueBtnClick);

function onLibraryBtnClick() {
	if (refs.header.classList.contains('header--home')) {
		refs.header.classList.toggle('header--library');
		refs.homeBtn.classList.toggle('navigation__btn--current');
		refs.libraryBtn.classList.toggle('navigation__btn--current');
		refs.searchInput.classList.toggle('on-library-none');
		refs.libraryBtnsContainer.classList.toggle('on-home-none')
	}
}

function onHomeBtnClick() {
	if (refs.header.classList.contains('header--library')) {
		refs.header.classList.toggle('header--library');
		refs.libraryBtn.classList.toggle('navigation__btn--current');
		refs.homeBtn.classList.toggle('navigation__btn--current');
		refs.searchInput.classList.toggle('on-library-none');
		refs.libraryBtnsContainer.classList.toggle('on-home-none');
	}
}

function onWatchedBtnClick() {
	if (refs.queueBtn.classList.contains('library-btn--current')) {
		refs.watchedBtn.classList.toggle('library-btn--current')
		refs.queueBtn.classList.toggle('library-btn--current')
	}
}
function onQueueBtnClick() {
	if (refs.watchedBtn.classList.contains('library-btn--current')) {
		refs.queueBtn.classList.toggle('library-btn--current')
		refs.watchedBtn.classList.toggle('library-btn--current')
	}
}