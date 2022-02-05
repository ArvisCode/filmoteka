import * as basicLightbox from 'basiclightbox';
import 'basiclightbox/dist/basicLightbox.min.css';
import previewTemplate from '../../handlebars/preview-template.hbs';
import fetchById from './fetch-by-id';
import { onWatchedClick, onQueueClick, getWatchedList, getQueueList } from '../buttonWatched';


const movieList = document.querySelector('.movie-card__list');
movieList.addEventListener('click', onClickList);

function onClickList(e) {
    const currentId = e.target.closest('.movie-card__item').dataset.id;

    fetchById(currentId)
        .then(data => {
            // data.genre_ids = data.genres.map(film => film.name);
            modal(data);
        })
        .catch(error => console.log(error));
}

function modal(data) {

    const updatedData = {
        ...data,
        popularity: Number(data.popularity.toFixed(1)),
        genres: data.genres.map(genre => genre.name).join(', '),
    };

    const modal = basicLightbox.create(previewTemplate(data),
        // { onClose: (instance) => location.reload() }
    );

    //логіка кнопки "Watched"
    let watchedList = getWatchedList();
    const watchedBtn = modal.element().querySelector('.watched'); //достаємо кнопку "Watched"
    const queueBtn = modal.element().querySelector('.queue');
    if (!watchedList.find(film => film.id === data.id)) {
        watchedBtn.textContent = "Add to watched";
        queueBtn.disabled = false;
    } else {
        queueBtn.disabled = true;
        watchedBtn.textContent = "Remove from watched";
    }
    watchedBtn.addEventListener('click', (e) => onWatchedClick(e, data));

    //логіка кнопки "Queue"
    let queueList = getQueueList()

    if (!queueList.find(film => film.id === data.id)) { //перевірка наявності фільма в списку
        queueBtn.textContent = "Add to queue";
        watchedBtn.disabled = false;
    } else {
        queueBtn.textContent = "Remove from queue";
        watchedBtn.disabled = true;
    }
    queueBtn.addEventListener('click', (e) => onQueueClick(e, data));

    modal.show();

    const closeBtn = modal.element().querySelector('[data-close]');
    const backdrop = modal.element().querySelector('.modal');

    backdrop.addEventListener('click', onClickBackdrop);
    closeBtn.addEventListener('click', onCloseClickBtn);

    let scrollX = window.scrollX;
    let scrollY = window.scrollY;
    window.onscroll = function() {
        window.scrollTo(scrollX, scrollY);
    };

    if (modal.visible) {
        window.addEventListener('keydown', onPressKeyESC);
    }

    function onPressKeyESC(e) {
        if (e.code === 'Escape') {
            modal.close();
            window.removeEventListener('keydown', onPressKeyESC);
            window.onscroll = function() {
                window.scrollTo();
            };
        }
    }

    function onCloseClickBtn() {
        modal.close();
        window.onscroll = function() {
            window.scrollTo();
        };
    }

    function onClickBackdrop(e) {
        if (e.target === e.currentTarget) {
            modal.close();
            window.onscroll = function() {
                window.scrollTo();
            };
        }
    }
}