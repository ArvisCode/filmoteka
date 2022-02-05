export function getWatchedList() {
    let watchedList = JSON.parse(localStorage.getItem('movies'));
    if (watchedList === null) {
        watchedList = [];
    }
    return watchedList;
}
export function onWatchedClick(e, movie) {
    let watchedList = getWatchedList();

    if (
        watchedList.find(film => film.id === movie.id)) {
        watchedList = watchedList.filter(film => film.id !== movie.id);
        localStorage.setItem('movies', JSON.stringify(watchedList));
        const buttonWatch = e.target;
        buttonWatch.textContent = "Add to watched";
        document.querySelector('.queue').disabled = false;

        // Notiflix.Notify.failure('Sorry, this movie has already watched');
    } else {
        watchedList.push(movie);
        localStorage.setItem('movies', JSON.stringify(watchedList));
        const buttonWatch = e.target;
        buttonWatch.textContent = "Remove from watched";
        document.querySelector('.queue').disabled = true;
    }
}

export function getQueueList() {
    let queueList = JSON.parse(localStorage.getItem('queueMovie'));
    if (queueList === null) {
        queueList = [];
    }
    return queueList;
}

export function onQueueClick(e, movie) {
    let queueList = getQueueList()
    if (
        queueList.find(film => film.id === movie.id)) {
        // видалення фільма з черги
        queueList = queueList.filter(film => film.id !== movie.id);
        localStorage.setItem('queueMovie', JSON.stringify(queueList));
        const buttonQueue = e.target;
        buttonQueue.textContent = "Add to queue";
        document.querySelector('.watched').disabled = false;

    } else {
        queueList.push(movie);
        localStorage.setItem('queueMovie', JSON.stringify(queueList));
        const buttonQueue = e.target;
        buttonQueue.textContent = "Remove from queue";
        document.querySelector('.watched').disabled = true;
    }
}