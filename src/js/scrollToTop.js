export const btnScrollTop = document.querySelector('#scrollTop');

btnScrollTop.addEventListener('click', function (e) {
  e.preventDefault();
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
});

const body = document.body;
const gallery = document.querySelector('.movie-card__list');

(function positionBtnScrollTop() {
  const right = (body.clientWidth - gallery.clientWidth) / 2 - 100;
  if (right > 3) {
    document.getElementById('scrollTop').style.right = `${right}px`;
  } else {
    document.getElementById('scrollTop').style.right = `3px`;
  }
  console.log(right);
})();

setInterval(function displayBtnScrollTop() {
  if (window.scrollY >= 100) {
    btnScrollTop.style.display = 'inline-block';
  } else {
    btnScrollTop.style.display = 'none';
  }
}, 250);
