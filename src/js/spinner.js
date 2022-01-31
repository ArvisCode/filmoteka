// import inputSearch from './input-search';
const spinner = document.querySelector('.loadingSpinner');

async function startSpinner() {
    spinner.style.display = "block";
    await new Promise(r => setTimeout(r, 3000));
}

function hideLoader() {
    spinner.style.display = "none";
}

module.exports = { spinner, startSpinner, hideLoader };