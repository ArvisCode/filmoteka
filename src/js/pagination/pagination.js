import Pagination from 'tui-pagination';


const pagination = new Pagination('#tui-pagination-container', {
    totalItems: 0,
    itemsPerPage: 20,
    visiblePages: 5,
    page: 1,
});

const page = pagination.getCurrentPage();
fetchImages(page).then(data => {
    pagination.reset(data.total);
    renderImages(data.images);
});

pagination.on('afterMove', popular);

function popular(event) {
    const currentPage = event.page;
    fetchImages(currentPage).then(data => renderImages(data.images));
}
function fetchImages(page) {
    return fetch(
    `https://pixabay.com/api/?key=4823621-792051e21e56534e6ae2e472f&q=sun&page=${page}&per_page=20`,
    )
    .then(res => res.json())
    .then(data => ({ images: data.hits, total: data.totalHits }));
}

function renderImages(images) {
    console.log('RENDER');
    console.log(images);
}

