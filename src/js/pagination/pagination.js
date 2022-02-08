import Pagination from 'tui-pagination';

import { renderPopularMoviesList } from '../fetches/renderPopularMovieList';

// ! import svg
import sprite from '../../images/sprite.svg';
const arrowIcon = `${sprite}#icon-arrow`;
const dotsIcon = `${sprite}#icon-dots`;

const pagination = new Pagination('#tui-pagination-container', {
  totalItems: 800,
  itemsPerPage: 20,
  visiblePages: 5,
  page: 1,
  centerAlign: true,

  firstItemClassName: 'tui-first-child',
  lastItemClassName: 'tui-last-child',
  template: {
    page: '<a href="#" class="tui-page-btn">{{page}}</a>',
    currentPage: '<strong class="tui-page-btn tui-is-selected">{{page}}p</strong>',
    currentPage: '<a href="#" class="tui-page-btn tui-is-selected">{{page}}</a>',
    moveButton:
      '<a href="#" class="tui-page-btn tui-{{type}} hide-{{type}}">' +
      `<svg class="tui-ico-{{type}}" width="16" height="16"><use href="${arrowIcon}-{{type}}"></use></svg>` +
      '</a>',
    disabledMoveButton:
      '<span class="tui-page-btn tui-is-disabled tui-{{type}}">' +
      '<span class="tui-ico-{{type}}"></span>' +
      '</span>',
    moreButton:
      '<a href="#" class="tui-page-btn tui-{{type}}-is-ellip change-{{type}}">' +
      `<svg class="tui-ico-ellip" width="14" height="14"><use href="${dotsIcon}"></use></svg>` +
      '</a>',
  },
});

//const page = pagination.getCurrentPage();
//fetchImages(page).then(data => {
//  pagination.reset(data.total);
//  renderImages(data.images);
//});

pagination.on('afterMove', popular);

function popular(event) {
  const currentPage = event.page;
  console.log(currentPage);
  renderPopularMoviesList(currentPage);

  window.scrollTo({
    top: 0,
  });

  //fetchImages(currentPage).then(data => renderImages(data.images));
}
//function fetchImages(page) {
//    return fetch(
//    `https://pixabay.com/api/?key=4823621-792051e21e56534e6ae2e472f&q=sun&page=${page}&per_page=20`,
//    )
//    .then(res => res.json())
//    .then(data => ({ images: data.hits, total: data.totalHits }));
//}

//function renderImages(images) {
//    console.log('RENDER');
//    console.log(images);
//}
