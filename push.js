var push = require('web-push')

let validKeys = {
    publicKey: 'BHyTrpQgWrYuYNPQid40xk0wcXYqRuPQWo5HJIwbG2msazKWmaGs2uLZFbaMWPlr7T2nTPb92lVRQ7G10hDQ2VM',
    privateKey: 'tMTDaLC7fZeIDCl5ivkIafyXDU3YgIgG2ofumATbETk'
  }

push.setVapidDetails('mailto:test@code.co.uk', vapidkeys.publicKey. validKeys.privateKey)

let sub = {};

push.sendNotification(sub, 'test message')
