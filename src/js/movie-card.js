export default function renderMarkupMovieCard({ results }) {
    const gallery = document.querySelector('.movie-card__list')
  const markup = results
    .map(({ id, poster_path, original_title, genre_ids, original_language, vote_average, title, release_date }) => {
      return `
      <li class="movie-card__item">
          <a class="movie-card__link" href="" id="${id}">
                <div class="movie-card">
                <img src="https://image.tmdb.org/t/p/w342${poster_path}"
            
                        class="movie-card__poster"width="305"
                        height="205"
                        alt="${title}"
                        loading="lazy"
                    />
                    <div class="movie-card__thumb">
                    <h2 class="movie-info-title"> ${original_title}</h2>
                    <div class="movie-info-list">
                     
                        <p class="info-item"> ${genre_ids}</p>
                        
                        <span>&#127871;</span>
              <p class="info-item-year"${release_date}>year</p>
              </div>
              <div class="right-thumb">
              <span class="info-item-language"> ${original_language}
              </span>          
              <p class="info-item-rating"><span>&#9733;</span> ${vote_average}</p>
                    </div>
                    </div>
                </div>
          </a>
    </li> `;
    })
    .join("");

  gallery.insertAdjacentHTML("beforeend", markup);
}

// function renderMarkupMovieCard(data) {
//   gallery.insertAdjacentHTML('beforeend', movieCard(data));
// }
 