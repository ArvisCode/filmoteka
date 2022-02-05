// import  './buttonWatched';
import renderMarkupMovieCard from './movie-card.js';
import { getGenresNames } from './getGenresName';
import genres from './DATA/genres';
import imagePing from 'tui-pagination';
import { LOCAL_STORAGE_WATCHED } from './buttonWatched.js';
import Swal from 'sweetalert2';
import swal from 'sweetalert';

const watchedButton = document.querySelector('#watched-btn');
const gallery = document.querySelector('.movie-card__list');

watchedButton.addEventListener('click', getWatchedFilms);

export default function getWatchedFilms() {
    const getFilms = localStorage.getItem(LOCAL_STORAGE_WATCHED);
    const data = JSON.parse(getFilms);
    gallery.innerHTML = '';
    console.log(data);
    const numOfWatched = data.length;
    if (numOfWatched === 1) {
        swal({ className: "sweetAlert-note", 
  title: "Nice start!",
  text: `You have already watched ${numOfWatched} movies!`,
            icon: "info",
            buttons: false,
  timer:2000,
});
    }
    if (numOfWatched === 2) {
        swal({ className: "sweetAlert-note-2", 
  title: "You are on the right way!",
  text: `You have already watched ${numOfWatched} movies!`,
            icon: "info",
            buttons: false,
  timer:2000,
});
    }
    if (numOfWatched >= 3) {
        swal({
            className: "sweetAlert-note-3",
            title: "You are a movie Boss, now!",
            text: `You have already watched ${numOfWatched} movies!`,
            icon: "info",
            buttons: false,
            timer: 2000,
        });
    }
    renderMarkupMovieCard({ results: data });
}

// function render (array) {
//   const markup = array
//     .map(({ id, poster_path, genre_ids, original_language, vote_average, title, release_date }) => {
//       return `
//       <li class="movie-card__item" data-id="${id}">
//                 <div class="movie-card">
//                  ${
//                   poster_path
//                     ? `<img src="https://image.tmdb.org/t/p/w500${poster_path}"`
//                     : `<img src="https://yt3.ggpht.com/AAKF_677TIvjFz_9xFF0R6PgiVd0kRpEtY6APSxSDRP65nXg8hkn9NFsz2bRd9_Z37DJ9D_b=s900-c-k-c0x00ffffff-no-rj"`
//                 //  :`<img src="https://www.csaff.org/wp-content/uploads/csaff-no-poster.jpg"`
//                  }
//                         class="movie-card__poster"
//                         alt="${title}"
//                         loading="lazy"
//                     />
//                     <h2 class="movie-info-title"> ${title}</h2>
//                     <div class="movie-card__thumb">
//                     <div class="movie-info-list">
//                         <p class="info-item"> ${genre_ids}</p>
//                         <span>&#127871;</span>
//               <p class="info-item-year">${release_date?.slice(0, 4)}</p>
//               </div>
//               <div class="second-thumb">
//               <span class="info-item-language"> ${original_language}
//               </span>          
//               <p class="info-item-rating"><span>&#9733;</span> ${vote_average}</p>
//                     </div>
//                     </div>
//                 </div>
//     </li> `;
//     })
//     .join("");

//   gallery.insertAdjacentHTML("beforeend", markup);
// }