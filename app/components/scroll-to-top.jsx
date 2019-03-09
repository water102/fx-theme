import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

class ScrollToTop extends Component {
  componentDidUpdate(prevProps) {
    if (this.props.location !== prevProps.location) {
      $('body,html').animate(
        {
          scrollTop: 0
        }, 700);
    }
  }

  render() {
    return <div>{this.props.children}</div>
  }
}

export default withRouter(ScrollToTop);