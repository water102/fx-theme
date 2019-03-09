import '../style/theme/base/style.scss';
import '../style/theme/default/style.scss';

import '@babel/polyfill';

import 'jquery';
import 'bootstrap';

window.jQuery = jQuery
window.$ = jQuery;

import { fxRequest } from '@water102/fx-web';

switch (document.readyState) {
    case 'loading':
        document.addEventListener('DOMContentLoaded', _domReadyHandler, false);
        break;
    case 'interactive':
    case 'complete':
    default:
        start();
}

fxRequest.loadStyles();

async function start() {
    const { default: main } = await import('./main');
    main.run();
}

function _domReadyHandler() {
    document.removeEventListener('DOMContentLoaded', _domReadyHandler, false);
    start();
}
