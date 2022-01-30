// import inputSearch from './input-search';
const spinner = document.querySelector('.loading-container');

async function startSpinner() {
    spinner.style.display = "block";
    await new Promise(r => setTimeout(r, 3000));

    // if (handleInputSearch) {
    //     spinner.hidden = false;
    // }
}

function hideLoader() {
    spinner.style.display = "none";
}


module.exports = { spinner, startSpinner, hideLoader };