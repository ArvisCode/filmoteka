// import inputSearch from './input-search';
const spinner = document.querySelector('.loadingSpinner');
const backdrop = document.querySelector('.backdrop');

async function startSpinner() {
    spinner.style.display = "block";
    toggleModal();
    await new Promise(r => setTimeout(r, 1000));
}

function hideLoader() {
    toggleModal()
    spinner.style.display = "none";
}
function toggleModal() {
    backdrop.classList.toggle('is-hidden');
}


module.exports = { spinner, startSpinner, hideLoader, toggleModal };