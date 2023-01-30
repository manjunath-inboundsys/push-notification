self.addEventListener('push', (e) => {
  var options = {
    body: 'This notification was generated from a push',
    icon: '',
    vibrate: [100, 50, 100],
    data: {
      dateOfArrival: Date.now(),
      primaryKey: '2',
    },
    actions: [
      { action: 'explore', title: 'Explore this new world', icon: 'http://image.ibb.co/frYOFD/tmlogo.png' },
      { action: 'close', title: 'Close', icon: 'http://image.ibb.co/frYOFD/tmlogo.png' },
    ],
  };
  e.waitUntil(self.registration.showNotification('Hello Push Service', options));
});
