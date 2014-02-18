Friends Sample App for Web/HTML
=============================
This repository contains the [Friends sample app](http://docs.telerik.com/platform/backend-services/samples/friends/friends-sample) for Web/HTML. The Friends app is a sample app showcasing the integration of Telerik Platform services into a web page appllication. To download the source code, just click on the "Download ZIP" button.

## Showcased features and SDKs

Here is a list of the features that are showcased in the Friends sample app:

- Cloud data access (Telerik Backend Services)
- Working with files (Telerik Backend Services)
- User registration and authentication (Telerik Backend Services)
- Authentication with external providers (Facebook, Google, etc.) (Telerik Backend Services)
- Basic app analytics (Telerik Analytics)
- Tracking custom events (Telerik Analytics)

To implement all the features listed above, the sample app utilizes the following Telerik products and SDKs:

- Telerik Backend Services JavaScript SDK - used to work with Telerik Backend Services.
- Telerik Analytics JavaScript SDK - used to work with Telerik Analytics.

## Requirements  

The following is a list of requirements for the sample app:

- **Active Telerik Platform account**  
To use this sample app you must have an active Telerik Platform account. Depending on your license you may not be able to use all features of the app. For more information on what is included in the different editions, please check out the pricing page for the respective product. All features included in the sample app will work in the free trial period.

- **JavaScript/Html Editor**  
You can use any javascript/html editor. (Notepad++, Sublime Text and etc)

## Configuring the sample app
The Friends sample app comes fully functional, but to see it in action you must link it to your own Telerik Platform account.

What you need to set:

- **API key for Telerik Backend Services**  
This links the sample mobile app to a project in Telerik Backend Services. When you activate Telerik Backend Services a Friends sample project is created for you automatically. It has necessary structure defined and some data pre-filled. You must use its API key.  
To set the API key open the **/scripts/app/settings.js** file and replace **$EVERLIVE_API_KEY$** with the API Key of your 'Friends' project.
> If you happen to break the structure of the automatically generated Friends sample project, you can delete it and a fresh instance will be created again for you automatically. Alternatively, you could create a new project and choose to start from a Friends template, instead of starting from a blank project.

- [optional] **API key for Telerik Analytics**  
This step is optional, it links the sample mobile app to a Telerik Analytics project in your account. If you do not set this the sample will still work, but no analytics data will collected.

- [optional] **Facebook app ID**  
The sample app allows users to register using their Facebook account. We've pre-initialized the sample to use a Facebook app created by Telerik for the purpose. If you want, you can set it to use your own Facebook application by adjusting the Facebook app ID.  
Please replace the default setting in the **/scripts/app/settings.js** file.

- [optional] **Google**  
The sample app allows users to register using their Google account.  
Please replace the default setting in the **/scripts/app/settings.js** file.

- [optional] **Windows Live**  
The sample app allows users to register using their Live account.  
Please replace the default setting in the **/scripts/app/settings.js** file.  
**Test LiveID login on localhost:** You can't use the name localhost for redirect domain. You need to create an alias like mydev.machine.local or something, which you map to 127.0.0.1 using your system's HOSTS file.

- [optional] **Active Directory Federation Services (ADFS)**  
The sample app allows users to register using ADFS.  
Please replace the default setting in the **/scripts/app/settings.js** file.  
**Note:** ADFS authentication can be done via HTTPS only.

By default the Friends Sample is configured to use HTTP. In case you wish to switch to HTTPS please update the appSettings.everlive.scheme setting in the **/scripts/app/settings.js** file to "https".

## Running the sample app
Once the app is configured as described in the previous section, you can run it on some web server. (IIS, Apache and etc.)
