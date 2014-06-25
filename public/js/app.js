(function() {
  "use strict";
  var app;

  window.app = app = angular.module("komApp", ["ngCookies", "ngResource", "ngSanitize", "ui.router"]);

  app.constant("SERVER_URL", "http://localhost:3000");

  app.constant("GET_SCREEN", "/api/screen");

  app.constant("MOVE_SCREEN", "/api/screen/move");

  app.constant("MAKE_SCREEN", "/api/screen/make");

  app.constant("GET_SESSION", "/api/session");

  app.config([
    '$httpProvider', function($httpProvider) {
      $httpProvider.defaults.useXDomain = true;
      return delete $httpProvider.defaults.headers.common['X-Requested-With'];
    }
  ]);

}).call(this);
