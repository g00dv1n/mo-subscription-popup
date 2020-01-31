const gaInstance = 'ga' in window && ga.getAll()[0];

function fireSubscription() {
    gaInstance && gaInstance.send('event', 'subscription', 'subscribe');
}

function firePin() {
    gaInstance && gaInstance.send('event', 'pin', 'try-to-pin-after-subscription');
}

export default {
    fireSubscription,
    firePin
};