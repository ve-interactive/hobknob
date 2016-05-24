'use strict';

featureToggleFrontend.controller('LoginController', ['$scope','$window','ENV', function ($scope, $window, ENV) {
    if(ENV.RequiresAuth) {
        $scope.authProvider = ENV.AuthProvider;
    }
    else {
        $window.location.href = '/';
    }
    
}]);
