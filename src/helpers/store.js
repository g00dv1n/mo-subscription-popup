import config from '../config'

function setDismiss() {
    sessionStorage.setItem(config.DISMISS_KEY, 'true');
}

function setSubscribe() {
    const now = new Date();
    now.setFullYear(now.getFullYear() + 1);
    document.cookie = `${config.SUBSCRIBE_KEY}=true; path=/; expires=${now.toString()}`
}

export default {
    setDismiss,
    setSubscribe
};