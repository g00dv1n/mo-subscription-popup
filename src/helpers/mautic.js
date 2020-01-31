import config from '../config';

function serializeData(obj) {
    if ('string' == typeof obj) {
        return obj;
    }
    return Object.keys(obj).map(function(key) {
        return encodeURIComponent(key) + '=' + encodeURIComponent(obj[key]);
    }).join('&');
}

async function sendSubscription(name, email) {
    const data = {
        'mauticform[formId]': config.MAUTIC_FORM_ID,
        'mauticform[enter_your_name]': name,
        'mauticform[enter_your_email]': email
    };

    return fetch(config.MAUTIC_URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
            'X-Requested-With': 'XMLHttpRequest',
        },
        body: serializeData(data)
    })
}

export default {
    sendSubscription
};