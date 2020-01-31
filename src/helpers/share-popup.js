import config from '../config';
import Swal from 'sweetalert2/dist/sweetalert2.js';

const SharePopup = {};

const layout = `
<div class="popup-body">
    <h3 class="share-title">Thanks for subscribing! You have officially started your journey into the world of lunar knowledge. Let this image symbolize the beginning of a new harmonious period of your life.</h3>
</div>
`;

SharePopup.open = () => {
    return Swal.fire({
        html: layout,
        imageUrl: config.SHARE_IMG_URL,
        showCancelButton: false,
        showCloseButton: true,
        confirmButtonText: 'PIN IT',
        width: '25em',
        showClass: {
            popup: 'animated fadeIn faster'
        },
        hideClass: {
            popup: 'animated fadeOut faster'
        },
        backdrop: 'rgba(88, 85, 204, 0.5)',
        allowOutsideClick: false,
        allowEscapeKey: false,
        customClass: {
            confirmButton: 'custom-pinterest-btn'
        }
    });
}

export default SharePopup;