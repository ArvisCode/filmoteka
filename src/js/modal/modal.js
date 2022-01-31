import * as basicLightbox from 'basiclightbox';
import 'basiclightbox/dist/basicLightbox.min.css';
import previewTemplate from '../../handlebars/preview-template.hbs';
import fetchById from './fetch-by-id';

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
  const closeBtn = modal.element().querySelector('[data-close]');
  closeBtn.addEventListener('click', () => modal.close());
  modal.show();

  if (modal.visible) {
    window.addEventListener('keydown', onPressKeyESC);
  }

  function onPressKeyESC(e) {
    if (e.code === 'Escape') {
      modal.close();
      window.removeEventListener('keydown', onPressKeyESC);
    }
  }
}
