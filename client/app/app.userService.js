"use strict";
let UserService = (CipherService, $http, $cookieStore ) => {
    'ngInject';

    var user = {};

    function set(login, password ) {
        var authData = CipherService.encode(login + ':' + password);
        user.login = login;
        user.authdata = authData;

        $http.defaults.headers.common['Authorization'] = 'Basic ' + authData;
        $cookieStore.put('globals', { currentUser:user });
    };

    function clear() {
        user = {};
        $cookieStore.remove('globals');
        $http.defaults.headers.common.Authorization = 'Basic ';
    };

    return {user, set, clear};
};

export default UserService;
