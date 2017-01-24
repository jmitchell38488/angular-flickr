/// <reference path='../../../_all.ts' />

namespace app.core {

    var module: angular.IModule = angular.module('app.core');

    module.filter('checkmark', () => {
        return (input: string) => {
            return input ? '\u2713' : '\u2718';
        };
    });

}