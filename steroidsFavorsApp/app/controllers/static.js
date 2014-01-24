 function login() {
    var webView = new steroids.views.WebView("views/favors/index.html");
    steroids.layers.push(webView);
  }

  function register() {
    var modalWebView = new steroids.views.WebView("views/static/register.html");
    steroids.modal.show(modalWebView);
  }
  
  steroids.view.navigationBar.show("Favors App");
