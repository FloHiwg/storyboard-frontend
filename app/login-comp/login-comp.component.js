'use strict';

angular.
  module('loginComp').
  component('loginComp', {
    templateUrl: 'login-comp/login-comp.template.html',
    controller: function(){
        this.user = {};

        this.login = function(user){
            var data = JSON.stringify({
              "username": "test",
              "password": "test"
            });

            var xhr = new XMLHttpRequest();
            xhr.withCredentials = true;

            xhr.addEventListener("readystatechange", function () {
              if (this.readyState === 4) {
                console.log(this.responseText);
              }
            });

            xhr.open("POST", "http://storyboard.floatec.de/login/");
            xhr.setRequestHeader("content-type", "application/json");
            xhr.setRequestHeader("cache-control", "no-cache");
            xhr.setRequestHeader("postman-token", "ed19d8f9-010c-b41d-198a-deb683f23b2d");

            xhr.send(data);
        }
    }
  });