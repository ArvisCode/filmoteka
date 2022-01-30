export const getGenresNames = function (genreIds) {

    const genresNames = [];
    for (let genreId of genreIds) {
        genres.genres.forEach((genre) => {
            if (genreId === genre.id) {
                genresNames.push(genre.name);
            }
        });
    }
    const genre2 = genresNames.slice(0, 2);
    if (genresNames.length > 2) {
        genre2.push('Others');
    }
    return genre2.join(', ');
}