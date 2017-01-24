/// <reference path='../../../_all.ts' />

namespace app.flickr {

    export interface IPhotoListRefService {
        getPhotoList(query: IPhotoListRefServiceQuery): angular.IPromise<IFlickrPhotoSearchResultResource>;
    }

    export interface IPhotoListRefServiceQuery {
        tags?: string;
    }

    export class PhotoListRefService implements IPhotoListRefService {

        private searchUri: string = 'http://api.flickr.com/services/feeds/photos_public.gne';

        constructor(private $http : ng.IHttpService, private $q : ng.IQService) {}

        public getPhotoList(query: IPhotoListRefServiceQuery): angular.IPromise<IFlickrPhotoSearchResultResource> {
            let config: ng.IRequestShortcutConfig = {
                params: {
                    format: 'json',
                    tags: query.tags,
                    tagmode: 'any',
                    jsoncallback: 'JSON_CALLBACK'
                }
            };

            return this.$http.jsonp(this.searchUri, config);

            /*

            let d = this.$q.defer();
            this.$http.jsonp(this.searchUri, config)
                .success((data) => {
                    d.resolve(data);
                })
                .error((data) => {
                    d.reject(data);
                });

            return d.promise;

            */

            /*

            let d = this.$q.defer();
            this.$http.jsonp(uri)
                .success((data) => {
                    d.resolve(data);
                });

            return d.promise;*/
        }

    }

}