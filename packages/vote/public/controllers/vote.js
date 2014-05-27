'use strict';

angular.module('mean.vote').controller('VoteController', ['$scope', 'Global', 'Vote',
    function($scope, Global, Vote) {
        $scope.global = Global;
        $scope.package = {
            name: 'vote'
        };
    }
]);
