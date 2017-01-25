'use strict';
let PagesFactory = () => {
    'ngInject';

    function pages() {
        return [
            {link:'about', title:'about'},
            {link:'start-content', title:'start content'},
            {link:'todo-list', title:'todo list'},
            {link:'layout', title:'layout'},
            {link:'sign-in', title:'sign in'}
        ];
    }

    return {pages};
};

export default PagesFactory;
