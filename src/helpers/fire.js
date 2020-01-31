import config from '../config'

function _getCookie(name) {
    let matches = document.cookie.match(new RegExp(
      "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
    ));
    return matches ? decodeURIComponent(matches[1]) : undefined;
  }

function checkDismiss() {
    return sessionStorage.getItem(config.DISMISS_KEY) === 'true';
}

function checkSubscribe() {
    return _getCookie(config.SUBSCRIBE_KEY) === 'true';
}

const CHECKERS = [checkDismiss, checkSubscribe];

function canFire() {
    return !CHECKERS.some(fn => fn());
}

export default {
    canFire
};