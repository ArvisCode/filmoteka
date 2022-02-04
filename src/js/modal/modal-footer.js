const refs = {
  openModalBtn: document.querySelector('[data-modal-open-contacts]'),
  closeModalBtn: document.querySelector('[data-modal-close-contacts]'),
  backdrop: document.querySelector('.backdrop__modal'),
};

refs.openModalBtn.addEventListener('click', onOpenModal);
refs.closeModalBtn.addEventListener('click', onCloseModal);
refs.backdrop.addEventListener('click', onClickBackdrop);

function onOpenModal() {
  refs.backdrop.classList.remove('is-hidden');
  window.addEventListener('keydown', onPressESC);
}

function onCloseModal() {
  refs.backdrop.classList.add('is-hidden');
  window.removeEventListener('keydown', onPressESC);
}

// function onClickBackdrop(e) {
//   if (!e.target.classList.contains('.modal__content')) {
//     onCloseModal();
//   }
// }

function onClickBackdrop(e) {
  if (e.target === e.currentTarget) {
    modal.close();
    window.onscroll = function () {
      window.scrollTo();
    };
  }
}

// overlay.addEventListener('click', function () {
//   document.querySelector('.backdrop__modal.active').classList.remove('active');
//   this.classList.remove('active');
// });

function onPressESC(e) {
  if (e.code === 'Escape') {
    onCloseModal();
  }
}
