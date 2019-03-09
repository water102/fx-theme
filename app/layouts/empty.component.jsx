import React, { Component } from 'react';
import { Route } from 'react-router-dom';

export default class EmptyLayout extends Component {
  constructor(props) {
    super(props);
  }

  onLoaded() {
  }

  render() {
    const {
      component: ComponentPage,
      ...rest
    } = this.props;
    return <Route {...rest} render={props => <ComponentPage {...props} onLoaded={() => this.onLoaded()} />} />
  }
}