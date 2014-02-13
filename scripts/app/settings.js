/**
 * Application Settings
 */

var appSettings = {

    everlive: {
        apiKey: '$EVERLIVE_API_KEY$', // Put your Backend Services API key here
        scheme: 'http'
    },

    eqatec: {
        productKey: '$EQATEC_PRODUCT_KEY$',  // Put your EQATEC product key here
        version: '1.0.0.0' // Put your application version here
    },

    facebook: {
        appId: '1408629486049918', // Put your Facebook App ID here
        redirectUri: 'https://www.facebook.com/connect/login_success.html' // Put your Facebook Redirect URI here
    },

    google: {
        clientId: '406987471724-q1sorfhhcbulk6r5r317l482u9f62ti8.apps.googleusercontent.com', // Put your Google Client ID here
        redirectUri: 'http://localhost' // Put your Google Redirect URI here
    },

    liveId: {
        clientId: '$LIVEID_CLIENT_ID$', // Put your LiveID Client ID here
        redirectUri: '$LIVEID_CLIENT_ID$' // Put your LiveID Redirect URI here
    },

    adfs: {
        adfsRealm: '$ADFS_REALM$', // Put your ADFS Realm here
        adfsEndpoint: '$ADFS_ENDPOINT$' // Put your ADFS Endpoint here
    },

    messages: {
        removeActivityConfirm: 'Are you sure you want to delete this Activity?'
    }
};
