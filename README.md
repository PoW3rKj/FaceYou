<p align="center">
  <img src="https://github.com/powext/FaceYou/blob/master/images/faceyou_header.jpg?raw=true" alt="Sublime's custom image"/>
</p>

[![Maintenance](https://img.shields.io/badge/Maintained%3F-no-red.svg)]()
[![Generic badge](https://img.shields.io/badge/made_with-electron-orange.svg)](https://electronjs.org/)
[![Generic badge](https://img.shields.io/badge/developed_by-pow-green.svg)](https://www.linkedin.com/in/simone-bianchin-68489a14a/)
[![Ask Me Anything !](https://img.shields.io/badge/Ask%20me-anything-1abc9c.svg)](https://GitHub.com/powext/)

🔥Introdution🔥
------

An electron app for a school project build in 1 week, git commints and branches are not well organized and the code can contains italian words

How it works❓
------
The app use Azure face recognition API to recognize faces in photos and get characteristics params and Cloudinary save photos in cloud.
To use and modify this project you need to create the related accounts in the two platforms:

* [Azure](https://azure.microsoft.com/en-us/services/cognitive-services/face/)
* [Cloudinary](https://cloudinary.com/)

API Keys❗️
------
Insert your API keys in the following rows to make your app working

**/crypto-app/index.html (187)** and **/crypto-app/login.html (147)**
```
var subscriptionKey = "SUBSCRIPTION_KEY";
var uriBase = "URL";
```
**/crypto-app/login.html (113)** and **/crypto-app/registration.html (147)**
```
cloudinary.config({
  cloud_name: 'CLOUD_NAME',
  api_key: 'API_KEY',
  api_secret: 'API_SECRET'
});
```

Usage👈
------
Run this command in the root folder to install npm dependencies

```
npm install
```

Install the electron command globally
```
npm install electron -g
```

Move to crypto-app directory and run the electron app with the command below
```
cd crypto-app
electron .
```

👥Made by👥
------
Simone Bianchin (pow)

[LinkedIn](https://www.linkedin.com/in/simone-bianchin-68489a14a/)

[Intagram](https://www.instagram.com/simo_bianchin/)
