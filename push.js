var push = require('web-push');

var vapidKeys = {
  publicKey: 'BJPZp_9eKtdfJC9n8FCnFwSlubKQOo6_jrd0wonU2KcIWJjIGGp-TOfyUbaP2LkrSnknYT8c6AbI9XlJ03vCiHk',
  privateKey: 'ihZhO7WJZdSrcxJfH27cdnbPZBQwlGRUP6tZGl_EAng',
};

push.setVapidDetails('mailto:manjunath.c@inboundsys.com', vapidKeys.publicKey, vapidKeys.privateKey);

let subscription = {
  endpoint:
    'https://fcm.googleapis.com/fcm/send/c3lwlEV3RsU:APA91bGHrcAd5Wm3lWNXMpGfCPdqX6n8W3J25gxW69whm1MMjEC97rMGzfinO2Cre7LqAw10T46zS_W4pgAJjMHfqgZbaz5T-eCW0hRUavRFGL2vY9IC_80CnL1IY6-UdoX3Lcz1IZeP',
  expirationTime: null,
  keys: {
    p256dh: 'BHjkW3AMv8rNnkbjdr12USuz3CS-irRw5C0NdJ1nEmjd2ldAHf8M84OpgpcLzihH5ggvJAltws6BHnYyXm22Oxc',
    auth: 'A7mnUlf3LdhbTTyvUBnaOQ',
  },
};

push.sendNotification(subscription, 'test message');
