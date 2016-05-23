'use strict';

angular.module('featureToggleFrontend')
    .factory('CurrentUser', function ($window, ENV) {
        function CurrentUser() {
            if (ENV.RequiresAuth === true) {
                var data = null;
                if($window.user.provider == "azure_ad_oauth2"){
                    var decrypted = parseJwt($window.user.accessToken);
                    data = {
                        name: decrypted.given_name,
                        fullName: decrypted.name,
                        email: decrypted.upn 
                    };
                } else {
                    data = $window.user._json;
                }
                angular.extend(this, data);
            }
        }
        function parseJwt(token) {
            var base64Url = token.split('.')[1];
            var base64 = base64Url.replace('-', '+').replace('_', '/');
            return JSON.parse($window.atob(base64));
        }
        // todo: what does this do?
        CurrentUser.create = function (data) {
            return new CurrentUser(data);
        };

        CurrentUser.prototype = {

            getPicture: function () {
                return this.picture || '/img/user-blue.jpeg';
            },

            getUser: function () {
                return this;
            },

            getFullName: function () {
                return this.name || 'Anonymous';
            },

            requiresAuthentication: function () {
                return ENV.RequiresAuth;
            }

        };

        return new CurrentUser();
    });
