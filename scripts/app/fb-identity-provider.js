var FacebookIdentityProvider = function (appId) {
    var that = this;

    this.init = function () {
      FB.init({
          appId: appId,
          version: 'v2.1',
          xfbml: true
      });
    };

    this.getAccessToken = function (callback) {
        FB.getLoginStatus(function(response) {
            if (response.status === 'connected') {
                callback(response.authResponse.accessToken);
            } else {
                that.login(function (token) {
                    callback(token);
                });
            }
        });
    };

    this.login = function(callback) {
        FB.login(function(response) {
            if (response.authResponse) {
                callback(response.authResponse.accessToken);
            } else {
                callback(false);
            }
        });
    };
};

// Async load facebook sdk
(function (d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) { return; }
    js = d.createElement(s); js.id = id;
    js.src = "//connect.facebook.net/en_US/sdk.js";
    fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));

