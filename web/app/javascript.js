var users = [];
        var app = angular.module('MyApp', ['ngRoute']);
        app.controller("UserController", function ($http, $routeParams) {
        var self = this;
                dob = $routeParams.dob;
                if (users.length === 0) {
        $http.get("data/data.json").success(function (data) {
        users = data.users;
                self.users = users;
        })
        }
        else { //We used the cache property on the http request instead
        self.users = users;
        }
        if (users != null) {
        console.log("Adding user: " + $routeParams.id)
                self.user = users[$routeParams.id];
        }




        }).config(['$routeProvider', function ($routeProvider) {
$routeProvider
        .when('/allpersons', {
        templateUrl: 'templates/allpersons.html'
        })
        .when('/detailed', {
        templateUrl: 'templates/detailed.html'
        })
        .when('/detailed/:dob/:gender/:first/:last/:street/:city/:zip/:phone/:cell/:email', {
        templateUrl: 'templates/detailed.html',
                controller: ['$routeParams', function ($routeParams) {
                this.dob = $routeParams.dob;
                this.gender = $routeParams.gender;
                this.first = $routeParams.first;
                this.last = $routeParams.last;
                this.street = $routeParams.street;
                this.city = $routeParams.city;
                this.zip = $routeParams.zip;
                this.phone = $routeParams.phone;
                this.cell = $routeParams.cell;
                this.email = $routeParams.email;
               //I don't know how to parse a picture via $routeParams
                
                }],
            controllerAs: 'urlCtrl'
        })


        .otherwise({redirectTo: '/'});
}]);
//        .when('/details/:requestId', {
//        template: 'asd',
//                //controller: ['$routParams', function($routeParams){}],
//                this.detailId = $routeParams.requestId;
//                this.qStr = $routeParams.q; 
//                }],
//                controllerAs: 'extCtrl'
//})
//
//"gender": "female",
// "title": "mrs",
// "first": "sherry",
// "last": "elliott",
// "street": "3251 brown terrace",
// "city": "wichita falls",
// "state": "washington",
// "zip": "79455",
// "email": "sherry.elliott17@example.com",
// "dob": "224238139",
// "phone": "(225)-793-2067",
// "cell": "(968)-555-1402",
// "picture": {
// "large": "http://api.randomuser.me/portraits/women/37.jpg",
// "thumbnail": "http://api.randomuser.me/portraits/thumb/women/37.jpg"