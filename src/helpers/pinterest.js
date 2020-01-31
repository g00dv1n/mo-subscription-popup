import config from '../config';

const PIN_SCRIPT_URL = '//assets.pinterest.com/js/pinit.js';

function scriptExists() {
    let res = false;
    const allScripts = document.getElementsByTagName('script');

    for(let script of allScripts) {
        if (script.src.match('assets.pinterest.com')) {
            res = true;
            break;
        }
    }

    return res;
}

function loadPinterestScript() {
    const url = PIN_SCRIPT_URL;

    const scriptTag = document.createElement('script');
    scriptTag.src = url;
    scriptTag.onload = () => {
        console.log('pinit.js loaded')
    }

    document.body.appendChild(scriptTag);
}

if (!scriptExists()) {
    loadPinterestScript();
}

function share() {
    if (window.PinUtils) {
        PinUtils.repin(config.PIN_ID);
    } else {
        console.warn('PinUtils doesnt exists');
    }
}

export default {
    share
};