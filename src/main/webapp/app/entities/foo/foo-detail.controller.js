(function() {
    'use strict';

    angular
        .module('notransApp')
        .controller('FooDetailController', FooDetailController);

    FooDetailController.$inject = ['$scope', '$rootScope', '$stateParams', 'previousState', 'entity', 'Foo'];

    function FooDetailController($scope, $rootScope, $stateParams, previousState, entity, Foo) {
        var vm = this;

        vm.foo = entity;
        vm.previousState = previousState.name;

        var unsubscribe = $rootScope.$on('notransApp:fooUpdate', function(event, result) {
            vm.foo = result;
        });
        $scope.$on('$destroy', unsubscribe);
    }
})();
