var favorsApp = angular.module('favorsApp', ['FavorsModel', 'hmTouchevents']);


// Index: http://localhost/views/favors/index.html

favorsApp.controller('IndexCtrl', function ($scope, FavorsRestangular) {

  // Helper function for opening new webviews
  $scope.open = function(id) {
    webView = new steroids.views.WebView("/views/favors/show.html?id="+id);
    steroids.layers.push(webView);
  };

  // Fetch all objects from the local JSON (see app/models/favors.js)
  $scope.favorss = FavorsRestangular.all('favors').getList();

  // -- Native navigation
  steroids.view.navigationBar.show("Favors index");

});


// Show: http://localhost/views/favors/show.html?id=<id>

favorsApp.controller('ShowCtrl', function ($scope, $filter, FavorsRestangular) {

  // Fetch all objects from the local JSON (see app/models/favors.js)
  FavorsRestangular.all('favors').getList().then( function(favorss) {
    // Then select the one based on the view's id query parameter
    $scope.favors = $filter('filter')(favorss, {favors_id: steroids.view.params['id']})[0];
  });

  // -- Native navigation
  steroids.view.navigationBar.show("Favors: " + steroids.view.params.id );

});
