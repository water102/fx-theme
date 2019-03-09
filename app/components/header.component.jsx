import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class AppHeader extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const body = $('body');
    $('[data-toggle="minimize"]').on('click', () => {
      if ((body.hasClass('sidebar-toggle-display')) || (body.hasClass('sidebar-absolute'))) {
        body.toggleClass('sidebar-hidden');
      } else {
        body.toggleClass('sidebar-icon-only');
      }
    });
  }

  render() {
    return (
      <nav className="navbar default-layout col-lg-12 col-12 p-0 fixed-top d-flex flex-row">
        <div className="text-center navbar-brand-wrapper d-flex align-items-top justify-content-center">
          <NavLink className="navbar-brand brand-logo" to="/">
            <img src="/assets/images/logo.svg" alt="logo" />
          </NavLink>
          <NavLink className="navbar-brand brand-logo-mini" to="/">
            <img src="/assets/images/logo-mini.svg" alt="logo" />
          </NavLink>
        </div>
        <div className="navbar-menu-wrapper d-flex align-items-center">
          <button
            className="navbar-toggler navbar-toggler align-self-center"
            type="button"
            data-toggle="minimize"
          >
            <span className="mdi mdi-menu" />
          </button>
          <ul className="navbar-nav navbar-nav-left header-links">
            <li className="nav-item d-none d-md-flex">
              <NavLink to="/" className="nav-link">
                Schedule
                <span className="badge badge-primary ml-1">New</span>
              </NavLink>
            </li>
            <li className="nav-item active d-none d-md-flex">
              <NavLink to="/" className="nav-link">
                <i className="mdi mdi-elevation-rise" />Reports
              </NavLink>
            </li>
            <li className="nav-item d-none d-md-flex">
              <NavLink to="/" className="nav-link">
                <i className="mdi mdi-bookmark-plus-outline" />Score
              </NavLink>
            </li>
            <li className="nav-item dropdown d-md-none">
              <a
                className="nav-link dropdown-toggle px-0"
                id="quickDropdown"
                href="#"
                data-toggle="dropdown"
                aria-expanded="false"
              >
                Quick Links
              </a>
              <div
                className="dropdown-menu dropdown-menu-right navbar-dropdown pt-3"
                aria-labelledby="quickDropdown"
              >
                <NavLink to="/" className="dropdown-item">
                  Schedule
                  <span className="badge badge-primary ml-1">New</span>
                </NavLink>
                <NavLink to="/" className="dropdown-item">
                  <i className="mdi mdi-elevation-rise" />Reports
                </NavLink>
                <NavLink to="/" className="dropdown-item">
                  <i className="mdi mdi-bookmark-plus-outline" />Score
                </NavLink>
              </div>
            </li>
          </ul>
          <ul className="navbar-nav navbar-nav-right">
            <li className="nav-item dropdown">
              <a
                className="nav-link count-indicator dropdown-toggle"
                id="messageDropdown"
                href="#"
                data-toggle="dropdown"
                aria-expanded="false"
              >
                <i className="mdi mdi-file-outline" />
                <span className="count">7</span>
              </a>
              <div
                className="dropdown-menu dropdown-menu-right navbar-dropdown preview-list pb-0"
                aria-labelledby="messageDropdown"
              >
                <a className="dropdown-item py-3">
                  <p className="mb-0 font-weight-medium float-left">
                    You have 7 unread mails
                  </p>
                  <span className="badge badge-pill badge-primary float-right">
                    View all
              </span>
                </a>
                <div className="dropdown-divider" />
                <a className="dropdown-item preview-item">
                  <div className="preview-thumbnail">
                    <img
                      src="/assets/images/faces/face10.jpg"
                      alt="image"
                      className="img-sm profile-pic"
                    />
                  </div>
                  <div className="preview-item-content flex-grow py-2">
                    <p className="preview-subject ellipsis font-weight-medium text-dark">
                      Marian Garner
                    </p>
                    <p className="font-weight-light small-text">
                      The meeting is cancelled
                    </p>
                  </div>
                </a>
                <a className="dropdown-item preview-item">
                  <div className="preview-thumbnail">
                    <img
                      src="/assets/images/faces/face12.jpg"
                      alt="image"
                      className="img-sm profile-pic"
                    />
                  </div>
                  <div className="preview-item-content flex-grow py-2">
                    <p className="preview-subject ellipsis font-weight-medium text-dark">
                      David Grey
                    </p>
                    <p className="font-weight-light small-text">
                      The meeting is cancelled
                    </p>
                  </div>
                </a>
                <a className="dropdown-item preview-item">
                  <div className="preview-thumbnail">
                    <img
                      src="/assets/images/faces/face1.jpg"
                      alt="image"
                      className="img-sm profile-pic"
                    />
                  </div>
                  <div className="preview-item-content flex-grow py-2">
                    <p className="preview-subject ellipsis font-weight-medium text-dark">
                      Travis Jenkins
                    </p>
                    <p className="font-weight-light small-text">
                      The meeting is cancelled
                    </p>
                  </div>
                </a>
              </div>
            </li>
            <li className="nav-item dropdown ml-4">
              <a
                className="nav-link count-indicator dropdown-toggle"
                id="notificationDropdown"
                href="#"
                data-toggle="dropdown"
              >
                <i className="mdi mdi-bell-outline" />
                <span className="count bg-success">4</span>
              </a>
              <div
                className="dropdown-menu dropdown-menu-right navbar-dropdown preview-list pb-0"
                aria-labelledby="notificationDropdown"
              >
                <a className="dropdown-item py-3 border-bottom">
                  <p className="mb-0 font-weight-medium float-left">
                    You have 4 new notifications
                  </p>
                  <span className="badge badge-pill badge-primary float-right">
                    View all
              </span>
                </a>
                <a className="dropdown-item preview-item py-3">
                  <div className="preview-thumbnail">
                    <i className="mdi mdi-alert m-auto text-primary" />
                  </div>
                  <div className="preview-item-content">
                    <h6 className="preview-subject font-weight-normal text-dark mb-1">
                      Application Error
                </h6>
                    <p className="font-weight-light small-text mb-0">

                      Just now
                    </p>
                  </div>
                </a>
                <a className="dropdown-item preview-item py-3">
                  <div className="preview-thumbnail">
                    <i className="mdi mdi-settings m-auto text-primary" />
                  </div>
                  <div className="preview-item-content">
                    <h6 className="preview-subject font-weight-normal text-dark mb-1">
                      Settings
                </h6>
                    <p className="font-weight-light small-text mb-0">

                      Private message
                    </p>
                  </div>
                </a>
                <a className="dropdown-item preview-item py-3">
                  <div className="preview-thumbnail">
                    <i className="mdi mdi-airballoon m-auto text-primary" />
                  </div>
                  <div className="preview-item-content">
                    <h6 className="preview-subject font-weight-normal text-dark mb-1">
                      New user registration
                </h6>
                    <p className="font-weight-light small-text mb-0">

                      2 days ago
                    </p>
                  </div>
                </a>
              </div>
            </li>
            <li className="nav-item dropdown d-none d-xl-inline-block">
              <a
                className="nav-link dropdown-toggle"
                id="UserDropdown"
                href="#"
                data-toggle="dropdown"
                aria-expanded="false"
              >
                <span className="profile-text">Richard V.Welsh !</span>
                <img
                  className="img-xs rounded-circle"
                  src="/assets/images/faces/face8.jpg"
                  alt="Profile image"
                />
              </a>
              <div
                className="dropdown-menu dropdown-menu-right navbar-dropdown"
                aria-labelledby="UserDropdown"
              >
                <a className="dropdown-item p-0">
                  <div className="d-flex border-bottom">
                    <div className="py-3 px-4 d-flex align-items-center justify-content-center">
                      <i className="mdi mdi-bookmark-plus-outline mr-0 text-gray" />
                    </div>
                    <div className="py-3 px-4 d-flex align-items-center justify-content-center border-left border-right">
                      <i className="mdi mdi-account-outline mr-0 text-gray" />
                    </div>
                    <div className="py-3 px-4 d-flex align-items-center justify-content-center">
                      <i className="mdi mdi-alarm-check mr-0 text-gray" />
                    </div>
                  </div>
                </a>
                <a className="dropdown-item mt-2"> Manage Accounts </a>
                <a className="dropdown-item"> Change Password </a>
                <a className="dropdown-item"> Check Inbox </a>
                <a className="dropdown-item"> Sign Out </a>
              </div>
            </li>
          </ul>
          <button
            className="navbar-toggler navbar-toggler-right d-lg-none align-self-center"
            type="button"
            data-toggle="offcanvas"
          >
            <span className="icon-menu" />
          </button>
        </div>
      </nav>
    );
  };
}

export default AppHeader;