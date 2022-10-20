// Give the service worker access to Firebase Messaging.
// Note that you can only use Firebase Messaging here, other Firebase libraries
// are not available in the service worker.
importScripts('https://www.gstatic.com/firebasejs/7.6.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/7.6.1/firebase-messaging.js');

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyCBtq9rm5YVWq1T8yc9Kd_VVrwXiiAqZ74",
    authDomain: "katler-3a9ef.firebaseapp.com",
    databaseURL: "https://katler-3a9ef.firebaseio.com",
    projectId: "katler-3a9ef",
    storageBucket: "katler-3a9ef.appspot.com",
    messagingSenderId: "597614569501",
    appId: "1:597614569501:web:5d8c6e15844ae88d89fef4",
    measurementId: "G-J3ZPT4KKXZ"
  };
// Initialize Firebase
firebase.initializeApp(firebaseConfig);


// Retrieve an instance of Firebase Messaging so that it can handle background
// messages.
const messaging = firebase.messaging();

messaging.setBackgroundMessageHandler(function (payload) {
    console.log('[firebase-messaging-sw.js] Received background message ', payload);
    // Customize notification here
    const notificationTitle = 'You have new message';
    const notificationOptions = {
        body: payload.data.message,
        icon: payload.data.icon
    };

    return self.registration.showNotification(notificationTitle,
        notificationOptions);
});



