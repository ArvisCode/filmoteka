import Pagination from 'tui-pagination';


const pagination = new Pagination(document.getElementById('tui-pagination-container'), {
    totalItems: 500,
    itemsPerPage: 10,
    visiblePages: 5,
    centerAlign: true
});

// const container = document.getElementById('tui-pagination-container');
// const options = {
//     totalItems: 10,
//     itemsPerPage: 10,
//     visiblePages: 10,
//     page: 1,
//     centerAlign: false,
//     firstItemClassName: 'tui-first-child',
//     lastItemClassName: 'tui-last-child',
//     template: {
//         page: '<a href="#" class="tui-page-btn">{{page}}</a>',
//         currentPage: '<strong class="tui-page-btn tui-is-selected">{{page}}</strong>',
//         moveButton:
//             '<a href="#" class="tui-page-btn tui-{{type}}">' +
//                 '<span class="tui-ico-{{type}}">{{type}}</span>' +
//             '</a>',
//         disabledMoveButton:
//             '<span class="tui-page-btn tui-is-disabled tui-{{type}}">' +
//                 '<span class="tui-ico-{{type}}">{{type}}</span>' +
//             '</span>',
//         moreButton:
//             '<a href="#" class="tui-page-btn tui-{{type}}-is-ellip">' +
//                 '<span class="tui-ico-ellip">...</span>' +
//             '</a>'
//     }
// };

// const pagination = new Pagination(container, options);
