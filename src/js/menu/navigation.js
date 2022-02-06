const watchedNav = document.getElementById('watched-btn');
watchedNav.addEventListener('click', () => {
  window.location.hash = 'watched';
});
const queuedNav = document.getElementById('queue-btn');
queuedNav.addEventListener('click', () => {
  window.location.hash = 'queued';
});
const libraryNav = document.getElementById('library-btn');
libraryNav.addEventListener('click', () => {
  window.location.hash = 'library';
});
const homeNav = document.getElementById('home-btn');
homeNav.addEventListener('click', () => {
  window.location.hash = 'home';
});
const logoNav = document.querySelector('.logo');
logoNav.addEventListener('click', () => {
  window.location.hash = 'home';
});

if (window.location.hash == '#watched') {
  libraryNav.click();
  watchedNav.click();
}

switch (window.location.hash) {
  case '#watched':
    libraryNav.click();
    watchedNav.click();
    break;
  case '#queued':
    libraryNav.click();
    queuedNav.click();
    break;
  case '#library':
    libraryNav.click();
    break;
  default:
  case '#home':
    homeNav.click();
    break;
}
