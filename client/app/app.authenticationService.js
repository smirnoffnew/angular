"use strict";
let AuthenticationService = (UserService, $state, $timeout) => {
    'ngInject';

        function login (login, password, callback) {

        $timeout(function(){
            var response = { success: login === 'test' && password === 'test' };
            if(response.success) {
                UserService.set(login, password);
                $state.go('start-content');
            } else {
                response.message = 'Username or password is incorrect';
            }
            callback(response);
        }, 1000);

        //$http.post('/api/authenticate', { username: username, password: password })
        //    .success(function (response) {
        //        callback(response);
        //    });
    };

    function logout() {
        UserService.credentials.clear();
    };


    return {login, logout};
};

export default AuthenticationService;
