const movieCardList = document.querySelector('.movie-card__list');

export function myLibraryPage() {
    document.querySelector('.tui-pagination').classList.add('is-hidden');
     movieCardList.innerHTML =
       `<div class="library">
       <div class="library-bg">
        <div class="library-bg__image"></div>
        <p class="library-bg__message">Don't forget to add some movie to the queue!</p>
      </div>
      </div>`
  movieCardList.classList.replace('movie-card__list', 'library');
}