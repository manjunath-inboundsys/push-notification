var push = require('web-push');

var vapidKeys = {
  publicKey: 'BJPZp_9eKtdfJC9n8FCnFwSlubKQOo6_jrd0wonU2KcIWJjIGGp-TOfyUbaP2LkrSnknYT8c6AbI9XlJ03vCiHk',
  privateKey: 'ihZhO7WJZdSrcxJfH27cdnbPZBQwlGRUP6tZGl_EAng',
};

push.setVapidDetails('mailto:manjunath.c@inboundsys.com', vapidKeys.publicKey, vapidKeys.privateKey);

let subscription = {};

push.sendNotification(subscription, 'test message');
