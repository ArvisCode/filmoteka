import * as basicLightbox from 'basiclightbox';
import 'basiclightbox/dist/basicLightbox.min.css';
import previewTemplate from '../../handlebars/preview-template.hbs';
import fetchById from './fetch-by-id';
import { onWatchedClick, onQueueClick } from '../buttonWatched';

const movieList = document.querySelector('.movie-card__list');
movieList.addEventListener('click', onClickList);

function onClickList(e) {
  const currentId = e.target.closest('.movie-card__item').dataset.id;

  fetchById(currentId)
    .then(data => {
      modal(data);
    })
    .catch(error => console.log(error));
}

function modal(data) {
  const modal = basicLightbox.create(previewTemplate(data));
  modal.show();

  const closeBtn = modal.element().querySelector('[data-close]');
  const backdrop = modal.element().querySelector('.modal');

  backdrop.addEventListener('click', onClickBackdrop);
  closeBtn.addEventListener('click', onCloseClickBtn);

  let scrollX = window.scrollX;
  let scrollY = window.scrollY;
  window.onscroll = function () {
    window.scrollTo(scrollX, scrollY);
  };

  if (modal.visible) {
    window.addEventListener('keydown', onPressKeyESC);
  }

  function onPressKeyESC(e) {
    if (e.code === 'Escape') {
      modal.close();
      window.removeEventListener('keydown', onPressKeyESC);
      window.onscroll = function () {
        window.scrollTo();
      };
    }
  }

  function onCloseClickBtn() {
    modal.close();
    window.onscroll = function () {
      window.scrollTo();
    };
  }

  function onClickBackdrop() {
    modal.close();
    window.onscroll = function () {
      window.scrollTo();
    };
  }

  const watched = modal.element().querySelector('.watched');
  watched.addEventListener('click', () => onWatchedClick(data), { once: true });
  const queue = modal.element().querySelector('.queue');
  queue.addEventListener('click', () => onQueueClick(data), { once: true });
}
