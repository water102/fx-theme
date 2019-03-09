import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import { fxLogger } from '@water102/fx-common';

import reduxStore from './redux-store';
window.reduxStore = reduxStore;

import App from './app';

class Main {
    constructor() { }

    run(pageName, el, options = {}) {
        fxLogger.fixConsole();

        fxLogger.trace('Main.run:', pageName, el, options);

        ReactDOM.render(
            <Provider store={reduxStore.store}>
                <App />
            </Provider>, document.getElementById("app-root")
        );
    }
}

export default new Main();