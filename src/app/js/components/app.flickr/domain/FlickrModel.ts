/// <reference path='../../../_all.ts' />

namespace app.flickr {

    export interface IFlickrPhotoSearchItem {
        title?: string;
        link?: string,
        media?: IFlickrPhotoSearchItemMedia
        description?: string;
        date_taken?: string;
        published?: string;
        author?: string;
        author_id?: string;
        tags?: string;
        [name: string]: any;
    }

    export interface IFlickrPhotoSearchItemMedia {
        m?: string;
        [name: string]: any;
    }

    export interface IFlickrPhotoSearchResult {
        title?: string;
        link?: string;
        description?: string;
        modified?: string;
        generator?: string;
        items?: IFlickrPhotoSearchItem[];
    }

    export interface IFlickrPhotoSearchResultRef extends ng.resource.IResource<IFlickrPhotoSearchResult> {}

    export interface IFlickrPhotoSearchResultResource extends ng.resource.IResourceClass<IFlickrPhotoSearchResultRef> {}

}