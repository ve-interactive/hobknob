'use strict';

featureToggleFrontend.controller('LoginController', ['$scope', function ($scope, $location) {
    $scope.authProvider = getUrlParameter('authProvider');
    
    function getUrlParameter(name){
        var results = new RegExp('[\\?&]' + name + '=([^&#]*)').exec(window.location.href);
        if (!results) { return 0; }
        return decodeURIComponent(results[1].replace(/\+/g, " ")) || 0;
    }
    
}]);
