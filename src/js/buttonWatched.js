export const LOCAL_STORAGE_WATCHED = 'movies';
export const LOCAL_STORAGE_QUEUE = 'queueMovie';

export function getWatchedList() {
  let watchedList = JSON.parse(localStorage.getItem(LOCAL_STORAGE_WATCHED));
  if (watchedList === null) {
    watchedList = [];
  }
  return watchedList;
}
function removeMovieFromWatched(modal, movie) {
  let watchedList = getWatchedList();
  watchedList = watchedList.filter(film => film.id !== movie.id);
  localStorage.setItem('movies', JSON.stringify(watchedList));
  const buttonWatch = modal.element().querySelector('.watched');
  buttonWatch.textContent = 'Add to watched';
  // document.querySelector('.queue').disabled = false;
}
function addMovieToWatched(modal, movie) {
  let watchedList = getWatchedList();
  watchedList.push(movie);
  localStorage.setItem(LOCAL_STORAGE_WATCHED, JSON.stringify(watchedList));
  const buttonWatch = modal.element().querySelector('.watched');
  buttonWatch.textContent = 'Remove from watched';
  // document.querySelector('.queue').disabled = true;
}
export function onWatchedClick(modal, movie) {
  let watchedList = getWatchedList();
  if (watchedList.find(film => film.id === movie.id)) {
    removeMovieFromWatched(modal, movie);
  } else {
    removeMovieFromQueue(modal, movie);
    addMovieToWatched(modal, movie);
  }
}

export function getQueueList() {
  let queueList = JSON.parse(localStorage.getItem('queueMovie'));
  if (queueList === null) {
    queueList = [];
  }
  return queueList;
}
function removeMovieFromQueue(modal, movie) {
  let queueList = getQueueList();
  queueList = queueList.filter(film => film.id !== movie.id);
  localStorage.setItem('queueMovie', JSON.stringify(queueList));
  const buttonQueue = modal.element().querySelector('.queue');
  buttonQueue.textContent = 'Add to queue';
  // document.querySelector('.watched').disabled = false;
}
function addMovieFromQueue(modal, movie) {
  let queueList = getQueueList();
  queueList.push(movie);
  localStorage.setItem(LOCAL_STORAGE_QUEUE, JSON.stringify(queueList));
  const buttonQueue = modal.element().querySelector('.queue');
  buttonQueue.textContent = 'Remove from queue';
  // document.querySelector('.watched').disabled = true;
}
export function onQueueClick(modal, movie) {
  let queueList = getQueueList();
  if (queueList.find(film => film.id === movie.id)) {
    removeMovieFromQueue(modal, movie);
  } else {
    removeMovieFromWatched(modal, movie);
    addMovieFromQueue(modal, movie);
  }
}
