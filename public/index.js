console.log('index.js is loaded');
var myApp = angular.module('myApp', []);

myApp.controller('homeController', ['$http', function($http){
    console.log('homeController loaded');
    var vm = this;
    vm.title = 'Game on API test';

    $http({
        url: '/hot',
        method: 'GET'
    }).then(function (response) {
        // var sendObject = JSON.parse(response);
        // console.log('Hot response: ', response.data);
        vm.hotList = response.data;
    })

}]); // end homeController