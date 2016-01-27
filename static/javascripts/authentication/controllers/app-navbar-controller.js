
var appNavbarController = angular.module('appNavbarController', []);

appNavbarController.controller('NavbarController', ['$scope', 'Authentication', function($scope, Authentication) {
    var vm = this;

    vm.logout = logout;

    /**
    * @name logout
    * @desc Log the user out
    * @memberOf thinkster.layout.controllers.NavbarController
    */
    function logout() {
      Authentication.logout();
    }
  }]);

