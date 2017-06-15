'use strict';

angular.module('SoftOne.resource.operator', ['SoftOne.resource.base', 'SoftOne.config'])
    .factory('Operator', [
        'Resource', 'environment',
        function ($resource, environment) {
            var resourceUrl = environment.baseUrl  + "operators/:action/:id"
            var resource = $resource(
                resourceUrl,
                {id: '@id'},
                {
                    enable: {
                    	method: 'POST',
                    	params: {action:'enable', id:'@id'}
                    },
                    disable: {
                    	method: 'POST',
                    	params: {action:'disable', id:'@id'}
                    },
                    toggleStatus: {
                        method: 'POST',
                        params:{action: 'toggleStatus', id:'@id'}
                    }
                }
            );
            
            return resource;
        }
    ]);