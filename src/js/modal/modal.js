import * as basicLightbox from 'basiclightbox';
import 'basiclightbox/dist/basicLightbox.min.css';
import previewTemplate from '../../handlebars/preview-template.hbs';
import fetchById from './fetch-by-id';

const movieList = document.querySelector('.movie-card__list');
movieList.addEventListener('click', onClickList);

function onClickList(e) {
  e.preventDefault();
  const currentId = e.target.closest('.movie-card__link').id;

  fetchById(currentId)
    .then(data => {
      const modal = basicLightbox.create(previewTemplate(data));
      console.log(data);
      const closeBtn = modal.element().querySelector('[data-close]');
      closeBtn.addEventListener('click', () => modal.close());
      modal.show();

      function onPressKeyESC(e) {
        if (e.code === 'Escape') {
          modal.close();
          window.removeEventListener('keydown', onPressKeyESC);
        }
      }

      if (modal.visible) {
        window.addEventListener('keydown', onPressKeyESC);
      }
    })
    .catch(console.log(error));
}
