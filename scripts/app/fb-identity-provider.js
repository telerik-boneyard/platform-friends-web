var FacebookIdentityProvider = function (appId) {
    var that = this;

    this.init = function () {
      FB.init({
          appId: appId,
          status: true,
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
(function (doc) {
        var js, id = 'facebook-jssdk', ref = doc.getElementsByTagName('script')[0];
        if (doc.getElementById(id)) {return;}
        js = doc.createElement('script'); js.id = id; js.async = true;
        js.src = "//connect.facebook.net/en_US/all.js";
        ref.parentNode.insertBefore(js, ref);
}(document));
