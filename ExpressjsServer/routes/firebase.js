var express = require('express');
var router = express.Router();
var admin = require("firebase-admin");
var serviceAccount = require("../reactnativefirebasestart-729d8-firebase-adminsdk-48e03-4a6ea4bd7b.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://reactnativefirebasestart-729d8.firebaseio.com"
});

router.post('/send-notification', function (req, res) {
  // This registration token comes from the client FCM SDKs.
  var registrationToken = 'eueJJNp9ChM:APA91bGiqXrbFk4Pyr8QlqBwzESlcVs2MXmhmMG-UUCZkp7-BTOOjcn_AXd_D3R-y8JG-7-R0AShoun2SrS40tQXsd5fLrsFGGnMhxKiBOKqU-haMcnR_LyOxXLsD0lbCho8mEo4qdxcT2LmMHgqqgQvca76R4ZvdQ';

  var message = {
    notification: {
      title: 'Hello from EXPRESS ' + new Date().getTime(),
      body: 'Body',
    },
    android: {
      ttl: 3600 * 1000,
      priority: 'high',
      notification: {
        color: '#f45342',
        sound: "default",
        tag: 'android notification'
      },

    },
    data: {
      score: '850',
      time: '2:45'
    },
    token: registrationToken
  };

  // Send a message to the device corresponding to the provided
  // registration token.
  admin.messaging().send(message)
    .then((response) => {
      // Response is a message ID string.
      console.log('Successfully sent message:', response);
    })
    .catch((error) => {
      console.log('Error sending message:', error);
    });

  res.send('OK');
});


module.exports = router;