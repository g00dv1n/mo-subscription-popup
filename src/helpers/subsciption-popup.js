import config from '../config';
import Swal from 'sweetalert2/dist/sweetalert2.js';

const SubscriptionPopup = {};

const layout = `
<div class="popup-body">
    <h3 class="course-title">Subscribe for free and learn to live in harmony with Moon!</h3>
    <h4 class="course-subtitle">✨You will get:✨</h4>
    <ul style="display: block;">
        <li>24 adorable emails;</li>
        <li>30 useful articles;</li>
        <li>5 free printable infographics;</li>
        <li>2 valuable e-books;</li>
        <li>funny personality quiz.</li>
    </ul>
    <div class="popup-row">
        <input id="swal-input-name" class="swal2-input" type="text" placeholder="Your name">
        <input id="swal-input-email" class="swal2-input" type="email" placeholder="Your email">
    </div>
</div>
`;

const inputErrClass = 'swal2-inputerror';

function validateEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

SubscriptionPopup.open = () => {
    return Swal.fire({
        html: layout,
        imageUrl: config.SUBSCIPTION_IMG_URL,
        showCancelButton: false,
        showCloseButton: true,
        confirmButtonColor: '#673ab7',
        confirmButtonText: 'Subscribe',
        showClass: {
            popup: 'animated fadeIn faster'
        },
        hideClass: {
            popup: 'animated fadeOut faster'
        },
        backdrop: 'rgba(88, 85, 204, 0.5)',
        allowOutsideClick: false,
        allowEscapeKey: false,
        preConfirm: () => {
            const nameEl = document.getElementById('swal-input-name');
            const emailEl = document.getElementById('swal-input-email');

            const name = nameEl.value;
            const email = emailEl.value;

            if (name.length > 1) {
                nameEl.classList.remove(inputErrClass);
            } else {
                nameEl.classList.add(inputErrClass);
                Swal.showValidationMessage('Enter valid name.');
                return null;
            }

            if (validateEmail(email)) {
                emailEl.classList.remove(inputErrClass);
            } else {
                emailEl.classList.add(inputErrClass);
                Swal.showValidationMessage('Enter valid email.');
                return null;
            }

            return [name, email];
        }
    });
}

export default SubscriptionPopup;