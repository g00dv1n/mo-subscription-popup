function getGaInstance() {
    return 'ga' in window && ga.getAll()[0];
}

function fireSubscription() {
    const gaInstance = getGaInstance();

    gaInstance && gaInstance.send('event', 'subscription', 'subscribe');
}

function firePin() {
    const gaInstance = getGaInstance();

    gaInstance && gaInstance.send('event', 'pin', 'try-to-pin-after-subscription');
}

export default {
    fireSubscription,
    firePin
};