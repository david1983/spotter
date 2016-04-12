var app = angular.module('app', ['firebase', 'ui.router', 'navigation','ngAnimate']);

app.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');

    $stateProvider
        .state('root',{
            url: '',
            abstract: true,
            views: {
                'menu' : {
                    templateUrl : 'tmpls/menu.tmpl.html',
                    controller: 'NavController'
                }
            }
        })
        .state('root.home', {
            url:'/',
            views: {
                'container@': {
                    templateUrl: 'tmpls/home.tmpl.html',
                    controller: 'HomeController'
                }
            }
        })
        .state('root.about', {
            url:'/about',
            views: {
                'container@':{
                    templateUrl: 'tmpls/about.tmpl.html',
                    controller: 'AboutController'
                }
            }


        })

}]);


