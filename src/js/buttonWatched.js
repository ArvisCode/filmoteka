import Notiflix from 'notiflix';

export const LOCAL_STORAGE_WATCHED = 'movies';
export const LOCAL_STORAGE_QUEUE = 'queueMovie';

export function onWatchedClick(movie) {
    let watchedList = JSON.parse(localStorage.getItem(LOCAL_STORAGE_WATCHED));
    if (watchedList === null) {
        watchedList = [];
    }
    if (
        watchedList.find(film => film.id === movie.id)) {
        Notiflix.Notify.failure('Sorry, this movie has already watched');
    } else {
        watchedList.push(movie);
        localStorage.setItem(LOCAL_STORAGE_WATCHED, JSON.stringify(watchedList));
        console.log(watchedList);
    }
}


export function onQueueClick(movie) {
    let queueList = JSON.parse(localStorage.getItem(LOCAL_STORAGE_QUEUE));
    if (queueList === null) {
        queueList = [];
    }
    if (
        queueList.find(film => film.id === movie.id)) {
        Notiflix.Notify.failure('Sorry, this movie has already added');
    } else {
        queueList.push(movie);
        localStorage.setItem(LOCAL_STORAGE_QUEUE, JSON.stringify(queueList));
        console.log(queueList);
    }
}


