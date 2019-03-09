import React, { Component } from 'react';
import { Route, withRouter } from 'react-router-dom';
// import { fxAuth } from 'fx-web';
import {
  AppHeader,
  AppFooter,
  ScrollTop,
  Sidebar
} from '../components';

class DefaultLayout extends Component {
  historyUnlisten = null;

  constructor(props) {
    super(props);
  }

  // componentDidMount() {
  //   if (!fxAuth.isAuthenticated()) return;
  //   this.clearEvents();
  //   this.historyUnlisten = this.props.history.listen(() => fxAuth.onWaringIfUserHasntProfile());
  //   fxAuth.onWaringIfUserHasntProfile();
  // }

  // componentWillMount() {
  //   if (fxAuth.isAuthenticated()) return;
  //   const {
  //     requireLogin
  //   } = this.props;
  //   const isRedirectToLoginPage = requireLogin && window.location.pathname !== '/login';
  //   if (isRedirectToLoginPage)
  //     this.props.history.push(`/login?url=${document.location.href}`);
  // }

  // componentWillUnmount() {
  //   this.clearEvents();
  // }

  // clearEvents() {
  //   if (!this.historyUnlisten) return;
  //   this.historyUnlisten();
  // }

  onLoaded() {
  }

  renderPageContent(routeProps) {
    const {
      component: ComponentPage
    } = this.props;
    return (
      <div className="container-scroller">
        <AppHeader />
        <div className="container-fluid page-body-wrapper">
          <Sidebar />
          <ComponentPage {...routeProps} onLoaded={() => this.onLoaded()} />
        </div>
        <AppFooter />
        <ScrollTop />
      </div>
    )
  }

  render() {
    const {
      component,
      requireLogin,
      ...rest
    } = this.props;
    return <Route {...rest} render={props => this.renderPageContent(props)} />
  }
}

export default withRouter(DefaultLayout);