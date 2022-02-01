import Notiflix from 'notiflix';


export function onWatchedClick(movie) {
    let watchedList = JSON.parse(localStorage.getItem('movies'));
    if (watchedList === null) {
        watchedList = [];
    }
    if (
        watchedList.find(film => film.id === movie.id)) {
        Notiflix.Notify.failure('Sorry, this movie has already watched');
    } else {
        watchedList.push(movie);
        localStorage.setItem('movies', JSON.stringify(watchedList));
        console.log(watchedList);
    }
}


export function onQueueClick(movie) {
    let queueList = JSON.parse(localStorage.getItem('queueMovie'));
    if (queueList === null) {
        queueList = [];
    }
    if (
        queueList.find(film => film.id === movie.id)) {
        Notiflix.Notify.failure('Sorry, this movie has already added');
    } else {
        queueList.push(movie);
        localStorage.setItem('queueMovie', JSON.stringify(queueList));
        console.log(queueList);
    }
}


