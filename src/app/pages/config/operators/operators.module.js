'use strict';

angular.module('SoftOne.pages.config.operator', ['SoftOne.resources'])
    .config(function ($stateProvider) {
        $stateProvider
            .state('config.operators', {
                url: '/operators',
                parent: 'home',
                templateUrl: 'app/pages/config/operators/list.html',
                controller: 'OperatorsListCtrl',
                title: 'Operadores',
                sidebarMeta: {
                    order: 1,
                    icon: 'fa fa-feed'
                }
            });
    })
    .controller('OperatorsListCtrl', ['$scope', 'Operator', '$uibModal', 'toastr', 'toastrConfig','$filter', function ($scope, Operator, $uibModal, toastr, toastrConfig,$filter) {

        $scope.totalCount = 0;
        $scope.currentPage = 1;
        $scope.max = 10;

        $scope.load = function () {
            Operator.list({max: $scope.max, offset: ($scope.max * ($scope.currentPage - 1))}, function (response) {
                $scope.operators = response.data;
                $scope.totalCount = response.paging.totalCount;
            })
        };

        $scope.load();

        $scope.search = function(){
            if($scope.query){
                Operator.search({query:$scope.query}, function (response) {
                    $scope.operators = response;
                    $scope.totalCount = response.length;
                });                
            } else {
                $scope.load();
            }
        };

        $scope.createOrEdit = function (op) {
            var instance = $uibModal.open({
                animation: true,
                controller: 'OperatorsCreateEditCtrl',
                backdrop: 'static',
                templateUrl: 'app/pages/config/operators/create.html',
                size: 'md',
                resolve: {
                    operatorInstance: function () {
                        return op;
                    }
                }
            });

            instance.result.then(function (response) {
                if (response) {
                    if (!op) {
                        $scope.operators.push(response);
                    } else {
                        var edited = $filter('filter')($scope.operators, {id: response.id})[0];
                        angular.copy(response, edited);
                    }
                    toastr.info('El tipo de Operador fue guardado con exito', 'Exito', {
                        "autoDismiss": false,
                        "positionClass": "toast-top-right",
                        "type": "success",
                        "timeOut": "3000",
                        "tapToDismiss": true,
                        "newestOnTop": true,
                        "maxOpened": 0,
                    });

                } else {
                    toastr.error('No se pudo guardar el tipo de Operador', 'Error', {
                        "type": "error",
                        "timeOut": "5000",
                        "tapToDismiss": true,
                        "newestOnTop": true,
                        "maxOpened": 0,
                    });
                }
            }, function () {
            });
        };
        $scope.labels = {"true":"SI", "false":"NO"};
    }])
    .controller('OperatorsCreateEditCtrl',
        ['$scope', 'Operator', '$uibModalInstance', 'operatorInstance', function ($scope, Operator, $uibModalInstance, operatorInstance) {

            $scope.operator = {enabled:true};

            if (operatorInstance) {
                angular.copy(operatorInstance, $scope.operator);
            }

            $scope.save = function () {
                var op = new Operator($scope.operator);
                op.save(function (data) {
                    $scope.operator.id = data.id;
                    $uibModalInstance.close($scope.operator);
                }, function (error) {
                    $uibModalInstance.close(false);
                });
            };

            $scope.close = function () {
                $uibModalInstance.dismiss();
            };
        }


        ]);