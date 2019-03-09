import React, { Component } from 'react';
import { Helmet } from "react-helmet";
import {
    BrowserRouter as Router,
    Switch
} from 'react-router-dom';

import ScrollToTop from './components/scroll-to-top.jsx';

import routes from './routes';

import { DefaultLayout, EmptyLayout } from './layouts';

class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const routesForAll = routes
            .filter(i => i.layout === 'all')
            .map((item, i) => <DefaultLayout {...item} key={i.toString()} />);

        const routesWithDefaultLayout = routes
            .filter(i => i.layout === undefined)
            .map((item, i) => <DefaultLayout {...item} key={i.toString()} />);

        const routesWithEmptyLayout = routes
            .filter(i => i.layout === 'empty')
            .map((item, i) => <EmptyLayout {...item} key={i.toString()} />);

        return (
            <Router>
                <ScrollToTop>
                    <Helmet>
                        <meta charSet="utf-8" />
                        <title>BINKABI</title>
                    </Helmet>
                    <Switch>
                        {routesWithDefaultLayout}
                        {routesWithEmptyLayout}
                        {routesForAll}
                    </Switch>
                </ScrollToTop>
            </Router>
        );
    }
}

export default App;