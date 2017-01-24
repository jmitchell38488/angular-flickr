/// <reference path='../../../../_all.ts' />

namespace app.flickr {

    angular
        .module('app.flickr')
        .directive('photoList', () => {
        return {
            restrict: 'AE',
            controller: [
                '$scope',
                'app.flickr.PhotoListRefService',
                PhotoListController
            ],
            controllerAs: 'photoController',
            templateUrl: 'js/components/app.flickr/directives/photoList/photoListView.html',
            link: ($scope: ng.IScope, element: ng.IAugmentedJQuery, $attrs: ng.IAttributes, controller: PhotoListController) => {
                $scope.$watch('query', (query) => {
                    console.log(query);
                    controller.fetch();
                });
            }
        }
    });

    export class PhotoListController {

        public photoList: IFlickrPhotoSearchItem[];

        constructor(private $scope, private photoSearchService: IPhotoListRefService) {
            this.fetch();
        }

        public fetch(): void {
            this.photoSearchService
                .getPhotoList({tags: this.$scope.query})
                .then((data: any) => {
                    this.photoList = data.data.items;
                })
                .catch((reason: any) => {
                    console.log('Couldn\'t load for reason...');
                    console.log(reason);
                });
        }

    }

}