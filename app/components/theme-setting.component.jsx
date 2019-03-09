import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class ThemeSetting extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                
<div className="theme-setting-wrapper">
<div id="theme-settings" className="settings-panel">
  <i className="settings-close mdi mdi-close" />
  <div className="d-flex align-items-center justify-content-between border-bottom">
    <p className="settings-heading font-weight-bold border-top-0 mb-3 pl-3 pt-0 border-bottom-0 pb-0">
      Template Skins
    </p>
  </div>
  <div
    className="sidebar-bg-options selected"
    id="sidebar-light-theme"
  >
    <div className="img-ss rounded-circle bg-light border mr-3" />Light
  </div>
  <div className="sidebar-bg-options" id="sidebar-dark-theme">
    <div className="img-ss rounded-circle bg-dark border mr-3" />Dark
  </div>
  <p className="settings-heading font-weight-bold mt-2">
    Header Skins
  </p>
  <div className="color-tiles mx-0 px-4">
    <div className="tiles primary" />
    <div className="tiles success" />
    <div className="tiles warning" />
    <div className="tiles danger" />
    <div className="tiles pink" />
    <div className="tiles info" />
    <div className="tiles dark" />
    <div className="tiles default" />
  </div>
</div>
</div>
<div id="right-sidebar" className="settings-panel">
<i className="settings-close mdi mdi-close" />
<div className="d-flex align-items-center justify-content-between border-bottom">
  <p className="settings-heading font-weight-bold border-top-0 mb-3 pl-3 pt-0 border-bottom-0 pb-0">
    Friends
  </p>
</div>
<ul className="chat-list">
  <li className="list active">
    <div className="profile">
      <img src="/assets/images/faces/face1.jpg" alt="image" />
      <span className="online" />
    </div>
    <div className="info">
      <p>Thomas Douglas</p>
      <p>Available</p>
    </div>
    <small className="text-muted my-auto">19 min</small>
  </li>
  <li className="list">
    <div className="profile">
      <img src="/assets/images/faces/face2.jpg" alt="image" />
      <span className="offline" />
    </div>
    <div className="info">
      <div className="wrapper d-flex">
        <p>Catherine</p>
      </div>
      <p>Away</p>
    </div>
    <div className="badge badge-success badge-pill my-auto mx-2">
      4
    </div>
    <small className="text-muted my-auto">23 min</small>
  </li>
  <li className="list">
    <div className="profile">
      <img src="/assets/images/faces/face3.jpg" alt="image" />
      <span className="online" />
    </div>
    <div className="info">
      <p>Daniel Russell</p>
      <p>Available</p>
    </div>
    <small className="text-muted my-auto">14 min</small>
  </li>
  <li className="list">
    <div className="profile">
      <img src="/assets/images/faces/face4.jpg" alt="image" />
      <span className="offline" />
    </div>
    <div className="info">
      <p>James Richardson</p>
      <p>Away</p>
    </div>
    <small className="text-muted my-auto">2 min</small>
  </li>
  <li className="list">
    <div className="profile">
      <img src="/assets/images/faces/face5.jpg" alt="image" />
      <span className="online" />
    </div>
    <div className="info">
      <p>Madeline Kennedy</p>
      <p>Available</p>
    </div>
    <small className="text-muted my-auto">5 min</small>
  </li>
  <li className="list">
    <div className="profile">
      <img src="/assets/images/faces/face6.jpg" alt="image" />
      <span className="online" />
    </div>
    <div className="info">
      <p>Sarah Graves</p>
      <p>Available</p>
    </div>
    <small className="text-muted my-auto">47 min</small>
  </li>
</ul>
</div>
          </div>
        );
    };
}

export default ThemeSetting;