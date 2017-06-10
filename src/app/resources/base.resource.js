'use strict';
angular.module('softOne.resource.base', ['ngResource'])
    .factory('Resource', [
        '$resource',
        function ($resource) {
            return function (url, params, methods) {
                var defaults = {
                    get: {
                        method: 'GET'
                    },
                    list: {
                        method: 'GET'
                    },
                    create: {
                        method: 'POST'
                    },
                    update: {
                        method: 'PUT',
                    },
                    delete: {
                        method: 'DELETE'
                    },
                    byDefault: {
                        method: 'GET',
                        params: {action:'byDefault'}
                    },
                    available : {
                        method: 'GET',
                        params: {action: 'available'},
                        isArray : true
                    },
                    search : {
                    	method: 'POST',
                    	params: {action: 'search'},
                        isArray : true
                    },
                    searchAvailable : {
                        method: 'POST',
                        params: {action: 'searchAvailable'},
                        isArray : true
                    }
                };

                methods = angular.extend(defaults, methods);

                var resource = $resource(url, params, methods);

                resource.prototype.save = function (successCallback, errorCallback) {
                    if (!this.id) {
                        return this.$create(successCallback, errorCallback);
                    }
                    return this.$update(successCallback, errorCallback);
                };
                
                resource.prototype.search = function (query, successCallback, errorCallback) {
                	this["query"] = query;
                	return this.$search(successCallback, errorCallback);
                };

                return resource;
            };
        }
    ]);
