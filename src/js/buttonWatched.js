const refs = {
    watched: document.querySelector('.preview__button')
}

export function onWatchedClick(movie) {
    let watchedList = JSON.parse(localStorage.getItem('movies'));
    if (watchedList === null) {
        watchedList = [];
    }
    watchedList.push(movie);
    localStorage.setItem('movies', JSON.stringify(watchedList));
    console.log(watchedList);
    // localStorage.removeItem(movies);
    // localStorage.clear();

}



