/// <reference path='../../../_all.ts' />

namespace app.flickr {

    var module: angular.IModule = angular.module('app.flickr');

    module.config([
        '$locationProvider', '$routeProvider', '$sceDelegateProvider',
        ($locationProvider: ng.ILocationProvider, $routeProvider: ng.route.IRouteProvider, $sceDelegateProvider: any) => {
            $locationProvider.hashPrefix('!');

            $sceDelegateProvider.resourceUrlWhitelist([
                'self',
                'http://api.flickr.com/**',
                'http://*.staticflickr.com/**',
                'http://*.flickr.com/**'
            ]);

            $routeProvider
                .when('/', {
                    template: () => {
                        return '<photo-list></photo-list>'
                    }
                })
                .when('/photo/:photoId', {
                    template: () => {
                        return '<photo-details></photo-details>'
                    }
                })
                .otherwise({
                    redirectTo: '/'
                });
        }
    ]);
}


