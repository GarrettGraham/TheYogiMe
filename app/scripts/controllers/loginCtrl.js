'use strict'

angular.module('theYogiMe')
    .controller('loginCtrl', function () {

        var self = this;
        var userInfo = new Firebase('https://theyogime.firebaseio.com');

        this.obj = $firebaseArray(userInfo);
        console.log(this.obj)

        this.userArray = {};

        this.fbLogin = Auth.fbLogin;

        Auth.onAuth(function (user) {
            self.user = user;
            if (user === null) {
                console.log('null');
            } else {
                console.log(user);
            }
        });

        this.newUser = {
            name: '',
            email: '',
            age: '',
            framwork: 'AngularJs',
        };

        this.addUser = function (user) {
            this.obj.$add(user);
            return this.newUser = {
                name: '',
                email: '',
                age: ''
            };
        }
    });