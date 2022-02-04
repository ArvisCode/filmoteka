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

// !===============================

// const openModals = document.querySelectorAll('[data-modal-open-contacts]');
// const closeModal = document.querySelectorAll('[data-modal-close-contacts]');
// const body = document.querySelector('body');

// let unlock = true;

// const timeout = 800; // transition

// if (openModals.length > 0) {
//   for (let index = 0; index < openModals.length; length++) {
//     const openModal = openModals[index];
//     openModal.addEventListener('click', function (e) {
//       const currentModal = document.getElementById(modalName);
//       modalOpen(currentModal);
//       e.preventDefault();
//     });
//   }
// }

// const closeModalIcon = document.querySelectorAll('.modal__close');
// if (closeModalIcon.length > 0) {
//   for (let index = 0; index < closeModalIcon.length; index++) {
//     const el = closeModalIcon[index];
//     el.addEventListener('click', function (e) {
//       closeModalBtn(el.closest('.backdrop__modal'));
//       e.preventDefault();
//     });
//   }
// }

// function openModalBtn(currentModal) {
//   if (currentModal && unlock) {
//     const openModalActive = document.querySelector('[data-modal-open-contacts]');
//   }
// }
