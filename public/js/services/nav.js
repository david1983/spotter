var app = angular.module('navigation',[]);
app.factory('navLinks', function($location,$timeout){
    var arr = [
        {name: 'Home', href:'/'},
        {name: 'News', href:'/news'},
        {name: 'Browse', href:'/browse'},
        {name: 'About', href:'/about'}
    ]

    return {
        links: arr,
        goTo: function(path,menu){
            console.log(path)
            menu.menu_state=false;
            $timeout(function(){
                $location.path(path)
            },600)

        }
    }
})

app.service('menu', function(){
    return {
        menu_state: false,
        menu_btn: function(){
            console.log('dsa')
            this.menu_state = !this.menu_state
        }
    }


});