/**
 * EQATEC monitor
 */

(function (a, win, doc) {

    a.isAnalytics = function () {
        return win.app.isKeySet(appSettings.eqatec.productKey);
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
