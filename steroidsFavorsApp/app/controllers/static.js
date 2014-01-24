 function showCat() {
    var webView = new steroids.views.WebView("views/static/cat.html");
    steroids.layers.push(webView);
  }

  function showCatModal() {
    var modalWebView = new steroids.views.WebView("views/static/catModal.html");
    steroids.modal.show(modalWebView);
  }
  
  steroids.view.navigationBar.show("Favors App");
