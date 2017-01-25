'use strict';
let todoListFactory = () => {
    'ngInject';

    function getItems() {
        return [
            {title:'first title', description:'first description', theme: 'indigo'},
            {title:'second title', description:'second description', theme: 'pink'},
            {title:'third title', description:'third description', theme: 'grey'}
        ];
    }

    let items =  getItems();

    return {items};
};

export default todoListFactory;