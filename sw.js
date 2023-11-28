self.addEventListener('push', () => {
    self.ServiceWorkerRegistration.sendNtification('test message', {})
});
