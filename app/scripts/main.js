/* jshint devel:true */

'use strict'

var app = angular.module('theYogiMe', [
    'ui.router',
    'uiGmapgoogle-maps',
    'firebase'
])
app.config(function ($urlRouterProvider, $stateProvider) {
    $urlRouterProvider.otherwise('/');

    $stateProvider
    //        .state('login', {
    //            url: '/',
    //            templateUrl: 'templates/login.html',
    //            controller: 'loginCtrl',
    //            controllerAs: 'login'
    //        })
        .state('home', {
            url: '/',
            templateUrl: 'templates/main.html',
            controller: 'mainCtrl',
            controllerAs: 'main'
        })
        .state('yoga', {
            url: '/yoga',
            templateUrl: 'templates/yoga.html',
            controller: 'yogaCtrl',
            controllerAs: 'yoga'
        })
        .state('poses', {
            url: '/poses',
            templateUrl: 'templates/poses.html',
            controller: 'posesCtrl',
            controllerAs: 'poses'
        })
        .state('meditate', {
            url: '/meditate',
            templateUrl: 'templates/meditate.html',
            controller: 'meditateCtrl',
            controllerAs: 'meditate'
        })
        .state('studioMap', {
            url: '/studioMap',
            templateUrl: 'templates/studioMap.html',
            controller: 'mapCtrl',
            controllerAs: 'studioMap'
        });
})

//.factory('Auth', function ($firebaseObject) {
//    var auth = new Firebase('https://theyogime.firebaseio.com');
//    var currentUser = {};
//
//    return {
//
//        onAuth: function (creds) {
//            auth.onAuth(function (data) {
//                creds(updateUser(data));
//            });
//        },
//
//        fblogin: function () {
//
//            return auth.authWithOAuthPopup("facebook", function (error, authData) {
//                console.log(authData)
//                if (error) {
//                    concole.log("Login Failed!", error);
//                } else {
//                    console.log("Authenticated successfully with payload:", authData);
//                }
//            }, {
//                remember: "sessionOnly"
//            })
//        },
//
//        logout: function () {
//            auth.unauth();
//            console.log("hello")
//        },
//
//        loggedIn: function () {
//            if (auth.getAuth()) {
//                return true;
//            }
//        },
//
//        getUser: function () {
//            return currentUser;
//        }
//    };
//
//    function updateUser(authdUser) {
//        console.log(authdUser)
//        if (authdUser === null) {
//            return null;
//        }
//        console.log("")
//    }
//});