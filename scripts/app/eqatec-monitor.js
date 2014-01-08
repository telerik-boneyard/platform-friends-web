/**
 * EQATEC monitor
 */

(function (a, win, doc) {

    // var analytics = win.analytics = win.analytics || {};

    a.isAnalytics = function () {
        return appSettings.eqatec.productKey !== '$EQATEC_PRODUCT_KEY$';
    };

    a.Start = function() {
        try {
            var settings = _eqatec.createSettings(appSettings.eqatec.productKey);
            settings.version = appSettings.eqatec.version || '1.0.0.0';
            var monitor = win._eqatecmonitor = _eqatec.createMonitor(settings);
            monitor.start();

        } catch (e) {
            console.log('EQATEC Analytics exception: ' + e.description);
        }
    };

    a.Stop = function() {
        var monitor = win._eqatecmonitor;
        monitor.stop();
    };

    a.TrackFeature = function (feature) {
        var monitor = win._eqatecmonitor;
        monitor.trackFeature(feature);
    };

    a.Monitor = function() {
        return win._eqatecmonitor;
    };

}(window.analytics = window.analytics || {}, window, document));
