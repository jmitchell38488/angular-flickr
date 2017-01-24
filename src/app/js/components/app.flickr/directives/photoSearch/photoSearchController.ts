/// <reference path='../../../../_all.ts' />

namespace app.flickr {

    angular.module('app.flickr').directive('photoSearch', () => {
        return {
            restrict: 'AE',
            controller: [
                '$scope',
                PhotoSearchController
            ],
            controllerAs: 'searchController',
            templateUrl: 'js/components/app.flickr/directives/photoSearch/photoSearchView.html',
            link: ($scope: ng.IScope, element: ng.IAugmentedJQuery, $attrs: ng.IAttributes, controller: PhotoListController) => {
                $scope.$watch('query', (data) => {
                    console.log('query data: ' + data);
                })
            }
        }
    });

    export class PhotoSearchController {

        public query: string;

        constructor() {
        }

    }

}