import '../sass/main.scss';
import './modal/modal';
import './getFromLocalStorageWatchedList';
import './getfromLocalStorageQueueList';
import './modal/modal-footer';
import fetch from './fetches/fetch';
import './pagination/pagination';
import 'tui-pagination/dist/tui-pagination.css';

import header from './header';
import scrollTop from './scrollToTop';
import './input-search/input-search';
import { spinner, startSpinner, hideLoader } from './spinner';
import { team } from './team';

import './menu/navigation';

//(function renderMarkupMovieCard(data) {
//  gallery.insertAdjacentHTML('beforeend', movieCard(data));
//})();
console.log('About developers');
console.log(team);
