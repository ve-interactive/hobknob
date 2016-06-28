'use strict';

angular.module('featureToggleFrontend')
    .factory('CurrentUser', function ($window, ENV) {
        function CurrentUser() {
            if (ENV.RequiresAuth === true) {
                var data = $window.user._json;
                angular.extend(this, data);
            }
        }

        // todo: what does this do?
        CurrentUser.create = function (data) {
            return new CurrentUser(data);
        };

        CurrentUser.prototype = {

          getPicture: function () {
            if (!ENV.RequiresAuth) {
              return '/img/user-blue.jpeg';
            }

    				if (ENV.AuthProviders.AzureAuth) {
    					return 'data:image/png;base64,' + this.picture;
    				}

            if (this.picture) {
    					return this.picture;
            }

            return '/img/user-blue.jpeg';
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
