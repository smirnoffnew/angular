'use strict';
let PagesFactory = () => {
    'ngInject';

    function pages() {
        return [
            {link:'start-content', title:'start content'},
            {link:'todo-list', title:'todo list'}
        ];
    }

    return {pages};
};

export default PagesFactory;
