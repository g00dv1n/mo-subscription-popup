import SubscriptionPopup from './helpers/subsciption-popup';
import SharePopup from './helpers/share-popup';
import Mautic from './helpers/mautic';
import store from './helpers/store';
import gaHelper from './helpers/ga';
import pinterest from './helpers/pinterest';
import config from './config';
import fire from './helpers/fire';

import 'sweetalert2/dist/sweetalert2.css';
import './index.css';

async function run() {
    
    const subs = await SubscriptionPopup.open();

    if (subs.dismiss) {
        return store.setDismiss();
    }
    const { value: [name, email] } = subs;

    try {
        await Mautic.sendSubscription(name, email);
    } catch {}

    gaHelper.fireSubscription();

    store.setSubscribe();

    const share = await SharePopup.open();

    if (!share.dismiss) {
        pinterest.share();
        gaHelper.firePin();
    }
}

if (fire.canFire()) {
    setTimeout(() => {
        run()
            .catch(err => console.warn(err))
    }, config.delay);   
}
