app.controller('NavController', ['$scope','navLinks', 'menu',function($scope,navLinks, menu){
    $scope.navigation = navLinks;
    $scope.menu = menu;

}])
