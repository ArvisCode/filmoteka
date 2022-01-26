const refs = {
  openModalBtn: document.querySelector('[data-open]'),
  closeModalBtn: document.querySelector('[data-close]'),
  backdrop: document.querySelector('.backdrop'),
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

function onClickBackdrop(e) {
  if (e.target === e.currentTarget) {
    onCloseModal();
  }
}

function onPressESC(e) {
  if (e.code === 'Escape') {
    onCloseModal();
  }
}
