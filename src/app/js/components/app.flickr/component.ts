/// <reference path='../../_all.ts' />

namespace app.flickr {

    var module: angular.IModule = angular.module('app.flickr');

    module.service('app.flickr.PhotoListRefService', [
        '$http', '$q',
        ($http, $q) => new app.flickr.PhotoListRefService($http, $q)
    ]);

}