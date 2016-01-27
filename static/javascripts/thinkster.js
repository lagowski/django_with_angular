var pro_app = angular.module('pro_app', [
      'appConfig',
      'appRoutes',
      'appAuth',
      'appLayout',
      'appPosts',
      'appUtils'
    ]);

var appRoutes =  angular
    .module('appRoutes', ['ngRoute']);

var appConfig = angular
    .module('appConfig', []);

var appLayout = angular
    .module('appLayout', [
      'appLayoutController'
    ]);

var appAuth = angular
    .module('appAuth', [
      'appRegisterController',
      'appLoginController',
      'appNavbarController',
      'appAuthService'
    ]);

var appAuthService = angular.module('appAuthService', ['ngCookies']);


var appPosts = angular
    .module('appPosts', [
      'appPostsController',
      'appPostsDirective',
      'appPostDirective',
      'appPostsService',
      'appNewPostController',
      'appProfiles'
    ]);

var appPostsController =  angular
    .module('appPostsController', []);

var appPostsDirective = angular
    .module('appPostsDirective', ['ngDialog']);

var appPostDirective = angular
    .module('appPostDirective', ['ngDialog']);

var appPostsService = angular
    .module('appPostsService', []);

var appNewPostController = angular
    .module('appNewPostController', []);




pro_app.config(function config($locationProvider, $routeProvider ) {
    $locationProvider.html5Mode(true);
    $locationProvider.hashPrefix('!');

    $routeProvider
    .when('/register', {
        controller: 'RegisterController',
        controllerAs: 'vm',
        templateUrl: '/static/templates/authentication/register.html'
    })
    .when('/login', {
        controller: 'LoginController',
        controllerAs: 'vm',
        templateUrl: '/static/templates/authentication/login.html'
    })
    .when('/+:username', {
          controller: 'ProfileController',
          controllerAs: 'vm',
          templateUrl: '/static/templates/profiles/profile.html'
    })
   .when('/+:username/settings', {
          controller: 'ProfileSettingsController',
          controllerAs: 'vm',
          templateUrl: '/static/templates/profiles/settings.html'
   })
   .when('/', {
          controller: 'IndexController',
          controllerAs: 'vm',
          templateUrl: '/static/templates/layout/index.html'
   })
   .otherwise('/');
});

pro_app.run(['$http', function($http) {
    $http.defaults.xsrfHeaderName = 'X-CSRFToken';
    $http.defaults.xsrfCookieName = 'csrftoken';
  }
]);


