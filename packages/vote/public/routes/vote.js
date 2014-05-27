'use strict';

angular.module('mean.vote').config(['$stateProvider',
    function($stateProvider) {
        $stateProvider.state('vote example page', {
            url: '/vote/example',
            templateUrl: 'vote/views/index.html'
        });
    }
]);
