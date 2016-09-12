# Friends Sample App for Web/HTML

<a id="top"></a>
* [Overview](#overview)
* [Requirements](#requirements)
* [Configuration](#configuration)
* [Running the Sample](#running-the-sample)

# Overview

This repository contains the Friends app for Web/HTML. It is a sample mobile app showcasing the integration of Telerik Platform services into a web page application.

The Telerik Friends sample app showcases these features and SDKs:

- [Cloud data](http://docs.telerik.com/platform/backend-services/javascript/data/introduction) access (Telerik Backend Services)
- Working with [files](http://docs.telerik.com/platform/backend-services/javascript/files/introduction) (Telerik Backend Services)
- User [registration](http://docs.telerik.com/platform/backend-services/javascript/users/users-register) and [authentication](http://docs.telerik.com/platform/backend-services/javascript/users/users-authenticate) (Telerik Backend Services)
- Authentication with [social login](http://docs.telerik.com/platform/backend-services/javascript/users/social-login/introduction) providers (Facebook, Google, etc.) (Telerik Backend Services)
- Basic [app analytics](http://docs.telerik.com/platform/analytics/getting-started/introduction) (Telerik Analytics)
- Tracking custom events (Telerik Analytics)

To implement all the features listed above, the sample app utilizes the following Telerik products and SDKs:

- [Telerik Backend Services JavaScript SDK](http://docs.telerik.com/platform/backend-services/javascript/getting-started-javascript-sdk)&mdash;to connect the app to Telerik Platform
- [Telerik Analytics JavaScript SDK](http://docs.telerik.com/platform/analytics/sdk/js/)&mdash;to connect the app to Telerik Platform

# Requirements

Before you begin, you need to ensure that you have the following:

- **An active Telerik Platform account**
Ensure that you can log in to a Telerik Platform account. This can be a free trial account. Depending on your license you may not be able to use all app features. For more information on what is included in the different editions, check out the pricing page. All features included in the sample app work during the free trial period.
- **JavaScript/HTML Editor**
You can use any JavaScript/HTML editor to edit the app code (Notepad++, Sublime Text, etc).

# Configuration

The Friends sample app comes fully functional, but to see it in action you must link it to your own Telerik Platform account.

1. Log in to the Telerik Platform portal.
2. Create a new Hybrid or NativeScript app.<br>
	You will only use the backend of the app.
3. Click the **Data** tab and then click **Enable and populate with sample data**.<br>
	Sample content types with data required for the app to run is automatically created for you. The button also enables the **Users** service where user accounts for the app are precreated.
4. Click the **Settings** tab.
5. Take note of your **App ID**.
 
> If you happen to break the structure of the automatically generated Friends data, you can delete the app and start over.

## App ID for Telerik Platform

This is a unique string that links the sample mobile app to your Telerik Platform account where all the data is read from/saved. To set it in the app code:

1. Open the `/scripts/app/settings.js` file.
2. Replace `$TELERIK_APP_ID$` with the App ID of your Telerik Platform app.

## (Optional) Project Key for Telerik Analytics

This is a unique string that links the sample mobile app to the Analytics part of your Telerik Platform app. If you do not set this the sample will still work, but no analytics data will be collected.
	
1. In the Telerik Platform portal, go to your app.
2. Click the **Analytics** tab and then click **Enable**.
3. Go to **Analytics > Settings > Options** and take note of your **Project Key**.
4. Open the `/scripts/app/settings.js` file.
5. Replace `$EQATEC_PROJECT_KEY$` with the **Project Key** that you acquired earlier.

## (Optional) Facebook App ID
To demonstrate social login, we have preinitialized the sample to use a purpose-built Facebook app by Telerik. However, you still need to enable Facebook integration in the Telerik Platform portal:

1. In the Telerik Platform portal, go to your app.
3. Navigate to **Users > Authentication**.
4. Ensure that the **Facebook** box is checked.

> Note that if you intend to use the code for a production app you need to set up your own Facebook application and adjust the Facebook app ID as follows:
	
1. Open the `/scripts/app/settings.js` file.
2. Find the `appId: '1408629486049918'` line.
3. Replace the number with your Facebook app ID.

## (Optional) Google Client ID

To demonstrate social login, we have preinitialized the sample to use a Google Client ID owned by Telerik. However, you still need to enable Google integration in the Telerik Platform portal:

1. In the Telerik Platform portal, go to your app.
2. Navigate to **Users > Authentication**.
3. Ensure that the **Google** box is checked.

> Note that if you intend to use the code for a production app you need to set up your own Google Client ID and adjust the code as follows:

1. Open the `/scripts/app/settings.js` file.
2. Find the `clientId: '406987471724-q1sorfhhcbulk6r5r317l482u9f62ti8.apps.googleusercontent.com'` line.
3. Replace the number with your Google Client ID.
	
## (Optional) Microsoft Account

The sample app allows users to register using their Microsoft Account.

To try this integration, make the following configurations:

1. In the Telerik Platform portal, go to your app.
2. Navigate to **Users > Authentication**.
3. Ensure that the **Windows Live** box is checked.
4. Open the `/scripts/app/settings.js` file.
5. Find the `$LIVEID_CLIENT_ID$` line.
6. Replace the number with your Microsoft Account Client ID.

> **Test Windows Account login on localhost:** You can't use the name localhost for redirect domain. You need to create an alias like mydev.machine.local and map it to 127.0.0.1 using your system's HOSTS file.

## HTTPS Connections

By default the Friends Sample is configured to use HTTP. If you want to switch to HTTPS, update the `appSettings.everlive.scheme` setting in `/scripts/app/settings.js` to `https`.

# Running the Sample

This sample is a web app that cannot run directly in Telerik Platform. You need a web server such as Microsoft Internet Information Services or Apache to run it.

Once you configure the sample app, copy all project files and folders to a dedicated directory on your web server, with the exception of the following:

* .gitignore
* README.md
* frontmatter.yml
* App_Resources

Finally, configure your web server to display the sample app as you would configure any web site.
