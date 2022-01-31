const refs = {
    watched: document.querySelector('.preview__button')
}

function onWatchedClick() {
    const watchedList = JSON.parse(window.localStorage.getItem('movies'));
    const currentMovieId = e.target.dataset.id;
    watchedList.push(currentMovieId);
    localStorage.setItem('movies')

    // localStorage.removeItem(movies);
    // localStorage.clear();

}

refs.watched.addEventListener('click', onWatchedClick, { once: true });