import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class WidgetsPage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="main-panel">
        <div className="content-wrapper">
          <div className="row">
            <div className="col-xl-3 col-lg-3 col-md-3 col-sm-6 grid-margin stretch-card">
              <div className="card card-statistics">
                <div className="card-body">
                  <div className="clearfix">
                    <div className="float-left">
                      <i className="mdi mdi-cube text-danger icon-lg" />
                    </div>
                    <div className="float-right">
                      <p className="mb-0 text-right">Total Revenue</p>
                      <div className="fluid-container">
                        <h3 className="font-weight-medium text-right mb-0">
                          $6,560
                  </h3>
                      </div>
                    </div>
                  </div>
                  <p className="text-muted mt-3 mb-0">
                    <i
                      className="mdi mdi-alert-octagon mr-1"
                      aria-hidden="true"
                    />
                    65% lower growth
                  </p>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-3 col-md-3 col-sm-6 grid-margin stretch-card">
              <div className="card card-statistics">
                <div className="card-body">
                  <div className="clearfix">
                    <div className="float-left">
                      <i className="mdi mdi-receipt text-warning icon-lg" />
                    </div>
                    <div className="float-right">
                      <p className="mb-0 text-right">Orders</p>
                      <div className="fluid-container">
                        <h3 className="font-weight-medium text-right mb-0">
                          3455
                  </h3>
                      </div>
                    </div>
                  </div>
                  <p className="text-muted mt-3 mb-0">
                    <i
                      className="mdi mdi-bookmark-outline mr-1"
                      aria-hidden="true"
                    />
                    Product-wise sales
                  </p>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-3 col-md-3 col-sm-6 grid-margin stretch-card">
              <div className="card card-statistics">
                <div className="card-body">
                  <div className="clearfix">
                    <div className="float-left">
                      <i className="mdi mdi-poll-box text-success icon-lg" />
                    </div>
                    <div className="float-right">
                      <p className="mb-0 text-right">Sales</p>
                      <div className="fluid-container">
                        <h3 className="font-weight-medium text-right mb-0">
                          5693
                  </h3>
                      </div>
                    </div>
                  </div>
                  <p className="text-muted mt-3 mb-0">
                    <i
                      className="mdi mdi-calendar mr-1"
                      aria-hidden="true"
                    />
                    Weekly Sales
                  </p>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-3 col-md-3 col-sm-6 grid-margin stretch-card">
              <div className="card card-statistics">
                <div className="card-body">
                  <div className="clearfix">
                    <div className="float-left">
                      <i className="mdi mdi-account-box-multiple text-info icon-lg" />
                    </div>
                    <div className="float-right">
                      <p className="mb-0 text-right">Employees</p>
                      <div className="fluid-container">
                        <h3 className="font-weight-medium text-right mb-0">
                          246
                  </h3>
                      </div>
                    </div>
                  </div>
                  <p className="text-muted mt-3 mb-0">
                    <i
                      className="mdi mdi-reload mr-1"
                      aria-hidden="true"
                    />
                    Product-wise sales
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-3 col-sm-6 grid-margin stretch-card">
              <div className="card card-statistics bg-green-gradient">
                <div className="card-body">
                  <div className="clearfix">
                    <div className="float-left">
                      <i className="mdi mdi-cube icon-lg" />
                    </div>
                    <div className="float-right">
                      <p className="mb-0 text-right">Total Revenue</p>
                      <div className="fluid-container">
                        <h3 className="font-weight-medium text-right mb-0">
                          $65,650
                  </h3>
                      </div>
                    </div>
                  </div>
                  <p className="mt-3 mb-0">
                    <i
                      className="mdi mdi-alert-octagon mr-1"
                      aria-hidden="true"
                    />
                    65% lower growth
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-3 col-sm-6 grid-margin stretch-card">
              <div className="card card-statistics bg-orange-gradient">
                <div className="card-body">
                  <div className="clearfix">
                    <div className="float-left">
                      <i className="mdi mdi-receipt icon-lg" />
                    </div>
                    <div className="float-right">
                      <p className="mb-0 text-right">Orders</p>
                      <div className="fluid-container">
                        <h3 className="font-weight-medium text-right mb-0">
                          3455
                  </h3>
                      </div>
                    </div>
                  </div>
                  <p className="mt-3 mb-0">
                    <i
                      className="mdi mdi-bookmark-outline mr-1"
                      aria-hidden="true"
                    />
                    Product-wise sales
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-3 col-sm-6 grid-margin stretch-card">
              <div className="card card-statistics bg-blue-gradient">
                <div className="card-body">
                  <div className="clearfix">
                    <div className="float-left">
                      <i className="mdi mdi-poll-box icon-lg" />
                    </div>
                    <div className="float-right">
                      <p className="mb-0 text-right">Sales</p>
                      <div className="fluid-container">
                        <h3 className="font-weight-medium text-right mb-0">
                          5693
                  </h3>
                      </div>
                    </div>
                  </div>
                  <p className="mt-3 mb-0">
                    <i
                      className="mdi mdi-calendar mr-1"
                      aria-hidden="true"
                    />
                    Weekly Sales
                  </p>
                </div>
              </div>
            </div>
            <div className="col-12 grid-margin">
              <div className="card card-statistics">
                <div className="row">
                  <div className="card-col col-xl-3 col-lg-3 col-md-3 col-6">
                    <div className="card-body">
                      <div className="d-flex align-items-center justify-content-center flex-column flex-sm-row">
                        <i className="mdi mdi-account-multiple-outline text-primary mr-0 mr-sm-4 icon-lg" />
                        <div className="wrapper text-center text-sm-left">
                          <p className="card-text mb-0">New Users</p>
                          <div className="fluid-container">
                            <h3 className="mb-0 font-weight-medium">
                              65,650
                      </h3>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="card-col col-xl-3 col-lg-3 col-md-3 col-6">
                    <div className="card-body">
                      <div className="d-flex align-items-center justify-content-center flex-column flex-sm-row">
                        <i className="mdi mdi-checkbox-marked-circle-outline text-primary mr-0 mr-sm-4 icon-lg" />
                        <div className="wrapper text-center text-sm-left">
                          <p className="card-text mb-0">New Feedbacks</p>
                          <div className="fluid-container">
                            <h3 className="mb-0 font-weight-medium">
                              32,604
                      </h3>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="card-col col-xl-3 col-lg-3 col-md-3 col-6">
                    <div className="card-body">
                      <div className="d-flex align-items-center justify-content-center flex-column flex-sm-row">
                        <i className="mdi mdi-trophy-outline text-primary mr-0 mr-sm-4 icon-lg" />
                        <div className="wrapper text-center text-sm-left">
                          <p className="card-text mb-0">Employees</p>
                          <div className="fluid-container">
                            <h3 className="mb-0 font-weight-medium">
                              17,583
                      </h3>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="card-col col-xl-3 col-lg-3 col-md-3 col-6">
                    <div className="card-body">
                      <div className="d-flex align-items-center justify-content-center flex-column flex-sm-row">
                        <i className="mdi mdi-target text-primary mr-0 mr-sm-4 icon-lg" />
                        <div className="wrapper text-center text-sm-left">
                          <p className="card-text mb-0">Total Sales</p>
                          <div className="fluid-container">
                            <h3 className="mb-0 font-weight-medium">
                              61,119
                      </h3>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-md-3 grid-margin stretch-card">
              <div className="card">
                <div className="card-body">
                  <div className="d-flex justify-content-center">
                    <i className="mdi mdi-clock icon-lg text-primary d-flex align-items-center" />
                    <div className="d-flex flex-column ml-4">
                      <span className="d-flex flex-column">
                        <p className="mb-0">Bounce rate</p>
                        <h4 className="font-weight-bold">32.16%</h4>
                      </span>
                      <small className="text-muted">
                        65.45% on average time
                </small>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-md-3 grid-margin stretch-card">
              <div className="card">
                <div className="card-body">
                  <div className="d-flex justify-content-center">
                    <i className="mdi mdi-cart-outline icon-lg text-success d-flex align-items-center" />
                    <div className="d-flex flex-column ml-4">
                      <span className="d-flex flex-column">
                        <p className="mb-0">Today sales</p>
                        <h4 className="font-weight-bold">$489,271</h4>
                      </span>
                      <small className="text-muted">
                        $489,271 before tax
                </small>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-md-3 grid-margin stretch-card">
              <div className="card">
                <div className="card-body">
                  <div className="d-flex justify-content-center">
                    <i className="mdi mdi-laptop icon-lg text-warning d-flex align-items-center" />
                    <div className="d-flex flex-column ml-4">
                      <span className="d-flex flex-column">
                        <p className="mb-0">Unique visits</p>
                        <h4 className="font-weight-bold">74.50%</h4>
                      </span>
                      <small className="text-muted">
                        80% average duration
                </small>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-md-3 grid-margin stretch-card">
              <div className="card">
                <div className="card-body">
                  <div className="d-flex justify-content-center">
                    <i className="mdi mdi-earth icon-lg text-danger d-flex align-items-center" />
                    <div className="d-flex flex-column ml-4">
                      <span className="d-flex flex-column">
                        <p className="mb-0">Today's visits</p>
                        <h4 className="font-weight-bold">6,775,440</h4>
                      </span>
                      <small className="text-muted">
                        45% higher yesterday
                </small>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 grid-margin stretch-card">
              <div className="card card-statistics social-card card-default">
                <div className="card-header header-sm">
                  <div className="d-flex align-items-center">
                    <div className="wrapper d-flex align-items-center media-info text-facebook">
                      <i className="mdi mdi-facebook icon-md" />
                      <h2 className="card-title ml-3">Facebook</h2>
                    </div>
                    <div className="wrapper ml-auto action-bar">
                      <i className="mdi mdi-share-variant mr-3" />
                      <i className="mdi mdi-heart" />
                    </div>
                  </div>
                </div>
                <div className="card-body">
                  <img
                    className="d-block img-sm rounded-circle mx-auto mb-2"
                    src="/assets/images/faces/face1.jpg"
                    alt="profile image"
                  />
                  <p className="text-center user-name">Mathilda Young</p>
                  <p className="text-center mb-2 comment">
                    Lorem ipsum dolor sit amet, consectetur adipisicing
                    elit, sed do
            </p>
                  <small className="d-block mt-4 text-center posted-date">
                    06 May 2018
            </small>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 grid-margin stretch-card">
              <div className="card card-statistics social-card card-default">
                <div className="card-header header-sm">
                  <div className="d-flex align-items-center">
                    <div className="wrapper d-flex align-items-center media-info text-linkedin">
                      <i className="mdi mdi-linkedin icon-md" />
                      <h2 className="card-title ml-3">Linkedin</h2>
                    </div>
                    <div className="wrapper ml-auto action-bar">
                      <i className="mdi mdi-share-variant mr-3" />
                      <i className="mdi mdi-heart" />
                    </div>
                  </div>
                </div>
                <div className="card-body">
                  <img
                    className="d-block img-sm rounded-circle mx-auto mb-2"
                    src="/assets/images/faces/face2.jpg"
                    alt="profile image"
                  />
                  <p className="text-center user-name">Cameron Fuller</p>
                  <p className="text-center mb-2 comment">
                    Lorem ipsum dolor sit amet, consectetur adipisicing
                    elit, sed do
            </p>
                  <small className="d-block mt-4 text-center posted-date">
                    26 Nov 2018
            </small>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 grid-margin stretch-card">
              <div className="card card-statistics social-card card-default">
                <div className="card-header header-sm">
                  <div className="d-flex align-items-center">
                    <div className="wrapper d-flex align-items-center media-info text-twitter">
                      <i className="mdi mdi-twitter icon-md" />
                      <h2 className="card-title ml-3">Twitter</h2>
                    </div>
                    <div className="wrapper ml-auto action-bar">
                      <i className="mdi mdi-share-variant mr-3" />
                      <i className="mdi mdi-heart" />
                    </div>
                  </div>
                </div>
                <div className="card-body">
                  <img
                    className="d-block img-sm rounded-circle mx-auto mb-2"
                    src="/assets/images/faces/face3.jpg"
                    alt="profile image"
                  />
                  <p className="text-center user-name">Sara Castillo</p>
                  <p className="text-center mb-2 comment">
                    Lorem ipsum dolor sit amet, consectetur adipisicing
                    elit, sed do
            </p>
                  <small className="d-block mt-4 text-center posted-date">
                    11 Jun 2018
            </small>
                </div>
              </div>
            </div>
            <div className="col-md-4 grid-margin stretch-card">
              <div className="card">
                <div className="card-body">
                  <div className="d-flex flex-row align-items-top">
                    <i className="mdi mdi-facebook text-facebook icon-md" />
                    <div className="ml-3">
                      <h6 className="text-facebook">2.62 Subscribers</h6>
                      <p className="mt-2 text-muted card-text">
                        You main list growing
                </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 grid-margin stretch-card">
              <div className="card">
                <div className="card-body">
                  <div className="d-flex flex-row align-items-top">
                    <i className="mdi mdi-linkedin text-linkedin icon-md" />
                    <div className="ml-3">
                      <h6 className="text-linkedin">5k connections</h6>
                      <p className="mt-2 text-muted card-text">
                        You main list growing
                </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 grid-margin stretch-card">
              <div className="card">
                <div className="card-body">
                  <div className="d-flex flex-row align-items-top">
                    <i className="mdi mdi-twitter text-twitter icon-md" />
                    <div className="ml-3">
                      <h6 className="text-twitter">3k followers</h6>
                      <p className="mt-2 text-muted card-text">
                        You main list growing
                </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 grid-margin stretch-card">
              <div className="card card-statistics social-card facebook-card card-colored">
                <div className="card-body">
                  <h4 className="platform-name mb-3 mt-4 font-weight-semibold user-name">
                    Facebook
            </h4>
                  <h5 className="headline font-weight-medium">
                    Internet Advertising Trends You
            </h5>
                  <p className="mb-2 comment font-weight-light">
                    Lorem ipsum dolor sit amet, consectetur adipisicing
              elit, sed do eiusmod tempor incididunt.
                    <a className="d-inline font-weight-medium" href="#">

                      Read More
              </a>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 grid-margin stretch-card">
              <div className="card card-statistics social-card twitter-card card-colored">
                <div className="card-body">
                  <h4 className="platform-name mb-3 mt-4 font-weight-semibold user-name">
                    Twitter
            </h4>
                  <h5 className="headline font-weight-medium">
                    Effective Advertising Pointers
            </h5>
                  <p className="mb-2 comment font-weight-light">
                    Lorem ipsum dolor sit amet, consectetur adipisicing
              elit, sed do eiusmod tempor incididunt.
                    <a className="d-inline font-weight-medium" href="#">

                      Read More
              </a>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 grid-margin stretch-card">
              <div className="card card-statistics social-card google-card card-colored">
                <div className="card-body">
                  <h4 className="platform-name mb-3 mt-4 font-weight-semibold user-name">
                    Google Plus
            </h4>
                  <h5 className="headline font-weight-medium">
                    How To Write Better Advertising
            </h5>
                  <p className="mb-2 comment font-weight-light">
                    Lorem ipsum dolor sit amet, consectetur adipisicing
              elit, sed do eiusmod tempor incididunt.
                    <a className="d-inline font-weight-medium" href="#">

                      Read More
              </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 grid-margin stretch-card">
              <div className="card">
                <div className="card-body">
                  <p className="text-gray">TUESDAY, APR 9, 2018</p>
                  <ul className="bullet-line-list pb-3">
                    <li>
                      <div className="d-flex align-items-center justify-content-between">
                        <div className="d-flex">
                          <img
                            className="img-xs rounded-circle"
                            src="/assets/images/faces/face9.jpg"
                            alt="profile image"
                          />
                          <div className="ml-3">
                            <h6 className="mb-0">Snapchat Hosts</h6>
                            <small className="text-muted">

                              Admin Dashboard
                            </small>
                          </div>
                        </div>
                        <div>
                          <small className="d-block mb-0">06</small>
                          <small className="text-muted d-block">pm</small>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="d-flex align-items-center justify-content-between">
                        <div className="d-flex">
                          <img
                            className="img-xs rounded-circle"
                            src="/assets/images/faces/face3.jpg"
                            alt="profile image"
                          />
                          <div className="ml-3">
                            <h6 className="mb-0">Revise Wireframes</h6>
                            <small className="text-muted">

                              Company website
                            </small>
                          </div>
                        </div>
                        <div>
                          <small className="d-block mb-0">11</small>
                          <small className="text-muted d-block">pm</small>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="d-flex align-items-center justify-content-between">
                        <div className="d-flex">
                          <img
                            className="img-xs rounded-circle"
                            src="/assets/images/faces/face4.jpg"
                            alt="profile image"
                          />
                          <div className="ml-3">
                            <h6 className="mb-0">Expert instruction</h6>
                            <small className="text-muted">

                              Profile App
                            </small>
                          </div>
                        </div>
                        <div>
                          <small className="d-block mb-0">12</small>
                          <small className="text-muted d-block">pm</small>
                        </div>
                      </div>
                    </li>
                  </ul>
                  <p className="text-gray mt-4">TUESDAY, APR 10, 2018</p>
                  <ul className="bullet-line-list">
                    <li>
                      <div className="d-flex align-items-center justify-content-between">
                        <div className="d-flex">
                          <img
                            className="img-xs rounded-circle"
                            src="/assets/images/faces/face7.jpg"
                            alt="profile image"
                          />
                          <div className="ml-3">
                            <h6 className="mb-0">Great Logo</h6>
                            <small className="text-muted">

                              admin logo
                            </small>
                          </div>
                        </div>
                        <div>
                          <small className="d-block mb-0">04</small>
                          <small className="text-muted d-block">pm</small>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="d-flex align-items-center justify-content-between">
                        <div className="d-flex">
                          <img
                            className="img-xs rounded-circle"
                            src="/assets/images/faces/face25.jpg"
                            alt="profile image"
                          />
                          <div className="ml-3">
                            <h6 className="mb-0">Branding Mockup</h6>
                            <small className="text-muted">

                              Company website
                            </small>
                          </div>
                        </div>
                        <div>
                          <small className="d-block mb-0">08</small>
                          <small className="text-muted d-block">pm</small>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="d-flex align-items-center justify-content-between">
                        <div className="d-flex">
                          <img
                            className="img-xs rounded-circle"
                            src="/assets/images/faces/face12.jpg"
                            alt="profile image"
                          />
                          <div className="ml-3">
                            <h6 className="mb-0">Awesome Mobile App</h6>
                            <small className="text-muted">

                              Profile App
                            </small>
                          </div>
                        </div>
                        <div>
                          <small className="d-block mb-0">09</small>
                          <small className="text-muted d-block">pm</small>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-6 grid-margin stretch-card">
              <div className="card">
                <div className="card-body">
                  <h4 className="card-title">Schedules</h4>
                  <div className="shedule-list d-flex align-items-center justify-content-between mb-3">
                    <h3>27 Sep 2018</h3>
                    <small>21 Events</small>
                  </div>
                  <div className="event border-bottom py-3">
                    <p className="mb-2 font-weight-medium">
                      Skype call with alex
              </p>
                    <div className="d-flex align-items-center">
                      <div className="badge badge-success">3:45 AM</div>
                      <small className="text-muted ml-2">London, UK</small>
                      <div className="image-grouped ml-auto">
                        <img
                          src="/assets/images/faces/face10.jpg"
                          alt="profile image"
                        />
                        <img
                          src="/assets/images/faces/face13.jpg"
                          alt="profile image"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="event py-3 border-bottom">
                    <p className="mb-2 font-weight-medium">
                      Data Analysing with team
              </p>
                    <div className="d-flex align-items-center">
                      <div className="badge badge-primary">12.30 AM</div>
                      <small className="text-muted ml-2">
                        San Francisco, CA
                </small>
                      <div className="image-grouped ml-auto">
                        <img
                          src="/assets/images/faces/face20.jpg"
                          alt="profile image"
                        />
                        <img
                          src="/assets/images/faces/face17.jpg"
                          alt="profile image"
                        />
                        <img
                          src="/assets/images/faces/face14.jpg"
                          alt="profile image"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="event py-3 border-bottom">
                    <p className="mb-2 font-weight-medium">
                      Data Analysing with team
              </p>
                    <div className="d-flex align-items-center">
                      <div className="badge badge-warning">12.30 AM</div>
                      <small className="text-muted ml-2">
                        San Francisco, CA
                </small>
                      <div className="image-grouped ml-auto">
                        <img
                          src="/assets/images/faces/face20.jpg"
                          alt="profile image"
                        />
                        <img
                          src="/assets/images/faces/face17.jpg"
                          alt="profile image"
                        />
                        <img
                          src="/assets/images/faces/face14.jpg"
                          alt="profile image"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="event py-3">
                    <p className="mb-2 font-weight-medium">
                      Meeting with client
              </p>
                    <div className="d-flex align-items-center">
                      <div className="badge badge-danger">4.15 AM</div>
                      <small className="text-muted ml-2">
                        San Diego, CA
                </small>
                      <div className="image-grouped ml-auto">
                        <img
                          src="/assets/images/faces/face21.jpg"
                          alt="profile image"
                        />
                        <img
                          src="/assets/images/faces/face16.jpg"
                          alt="profile image"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 grid-margin stretch-card">
              <div className="card text-center">
                <div className="card-body d-flex flex-column">
                  <div className="wrapper">
                    <img
                      src="/assets/images/faces/face10.jpg"
                      className="img-lg rounded-circle mb-2"
                      alt="profile image"
                    />
                    <h4>Elsie Reed</h4>
                    <p className="text-muted">Developer</p>
                    <p className="mt-4 card-text">

                      Lorem ipsum dolor sit amet, consectetuer adipiscing
                elit. Aenean commodo ligula eget dolor. Lorem
                    </p>
                    <button className="btn btn-rounded btn-primary btn-sm mt-3 mb-4">
                      Follow
              </button>
                  </div>
                  <div className="row border-top pt-3 mt-auto">
                    <div className="col-4">
                      <h6 className="font-weight-medium">5896</h6>
                      <p>Post</p>
                    </div>
                    <div className="col-4">
                      <h6 className="font-weight-medium">1596</h6>
                      <p>Followers</p>
                    </div>
                    <div className="col-4">
                      <h6 className="font-weight-medium">7896</h6>
                      <p>Likes</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-8 grid-margin stretch-card">
              <div className="card">
                <div className="card-header header-sm d-flex justify-content-between align-items-center">
                  <h4 className="card-title">Sales Overview</h4>
                  <div className="dropdown">
                    <button
                      className="btn btn-transparent icon-btn dropdown-toggle arrow-disabled pr-0"
                      type="button"
                      id="dropdownMenuIconButton1"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      <i className="mdi mdi-dots-vertical" />
                    </button>
                    <div
                      className="dropdown-menu"
                      aria-labelledby="dropdownMenuIconButton1"
                    >
                      <a className="dropdown-item" href="#">
                        Today
                </a>
                      <a className="dropdown-item" href="#">
                        Yesterday
                </a>
                    </div>
                  </div>
                </div>
                <div className="card-body">
                  <div className="d-flex align-items-center justify-content-between mb-4">
                    <img
                      className="img-fluid w-25"
                      src="/assets/images/logo.svg"
                      alt="brand logo"
                    />
                    <div className="wrapper">
                      <p className="mb-0 font-weight-medium">
                        WMT (NYSE) US$ 88.76
                      </p>
                      <small className="mb-0">
                        2 Aug, 4:03 PM Disclaimer
                </small>
                    </div>
                  </div>
                  <div className="table-responsive">
                    <table className="table">
                      <thead>
                        <tr className="bg-light rounded">
                          <th>Product</th>
                          <th>Progress</th>
                          <th>Sales</th>
                          <th>Amount</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>
                            <img
                              className="rounded mr-2"
                              src="/assets/images/product_images/imac.png"
                              alt="product image"
                            />
                            IMac
                          </td>
                          <td>
                            <div className="progress">
                              <div
                                className="progress-bar bg-warning"
                                role="progressbar"
                                style={{ width: "24%" }}
                                aria-valuenow={24}
                                aria-valuemin={0}
                                aria-valuemax={100}
                              />
                            </div>
                          </td>
                          <td>1307</td>
                          <td>$1346</td>
                        </tr>
                        <tr>
                          <td>
                            <img
                              className="rounded mr-2"
                              src="/assets/images/product_images/macbook-pro.png"
                              alt="product image"
                            />
                            Macbook Pro
                          </td>
                          <td>
                            <div className="progress">
                              <div
                                className="progress-bar bg-primary"
                                role="progressbar"
                                style={{ width: "57%" }}
                                aria-valuenow={57}
                                aria-valuemin={0}
                                aria-valuemax={100}
                              />
                            </div>
                          </td>
                          <td>1136</td>
                          <td>$1909</td>
                        </tr>
                        <tr>
                          <td>
                            <img
                              className="rounded mr-2"
                              src="/assets/images/product_images/iphone.png"
                              alt="product image"
                            />
                            Iphone X
                          </td>
                          <td>
                            <div className="progress">
                              <div
                                className="progress-bar bg-success"
                                role="progressbar"
                                style={{ width: "28%" }}
                                aria-valuenow={28}
                                aria-valuemin={0}
                                aria-valuemax={100}
                              />
                            </div>
                          </td>
                          <td>1141</td>
                          <td>$1345</td>
                        </tr>
                        <tr>
                          <td>
                            <img
                              className="rounded mr-2"
                              src="/assets/images/product_images/apple-watch.jpg"
                              alt="product image"
                            />
                            Apple Watch
                          </td>
                          <td>
                            <div className="progress">
                              <div
                                className="progress-bar bg-warning"
                                role="progressbar"
                                style={{ width: "74%" }}
                                aria-valuenow={74}
                                aria-valuemin={0}
                                aria-valuemax={100}
                              />
                            </div>
                          </td>
                          <td>1051</td>
                          <td>$1703</td>
                        </tr>
                        <tr>
                          <td>
                            <img
                              className="rounded mr-2"
                              src="/assets/images/product_images/magic-mouse.png"
                              alt="product image"
                            />
                            Magic Mouse
                          </td>
                          <td>
                            <div className="progress">
                              <div
                                className="progress-bar bg-danger"
                                role="progressbar"
                                style={{ width: "65%" }}
                                aria-valuenow={65}
                                aria-valuemin={0}
                                aria-valuemax={100}
                              />
                            </div>
                          </td>
                          <td>1133</td>
                          <td>$1619</td>
                        </tr>
                        <tr>
                          <td>
                            <img
                              className="rounded mr-2"
                              src="/assets/images/product_images/Homepod.png"
                              alt="product image"
                            />
                            Home Pod
                          </td>
                          <td>
                            <div className="progress">
                              <div
                                className="progress-bar bg-success"
                                role="progressbar"
                                style={{ width: "85%" }}
                                aria-valuenow={85}
                                aria-valuemin={0}
                                aria-valuemax={100}
                              />
                            </div>
                          </td>
                          <td>1303</td>
                          <td>$1387</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-7 grid-margin stretch-card">
              {/*weather card*/}
              <div className="card card-weather">
                <div className="card-body">
                  <div className="weather-date-location">
                    <h3>Monday</h3>
                    <p className="text-gray">
                      <span className="weather-date">25 October, 2016</span>
                      <span className="weather-location">London, UK</span>
                    </p>
                  </div>
                  <div className="weather-data d-flex">
                    <div className="mr-auto">
                      <h4 className="display-3">
                        21 <span className="symbol">°</span>C
                </h4>
                      <p> Mostly Cloudy </p>
                    </div>
                  </div>
                </div>
                <div className="card-body p-0">
                  <div className="d-flex weakly-weather">
                    <div className="weakly-weather-item">
                      <p className="mb-0"> Sun </p>
                      <i className="mdi mdi-weather-cloudy" />
                      <p className="mb-0"> 30° </p>
                    </div>
                    <div className="weakly-weather-item">
                      <p className="mb-1"> Mon </p>
                      <i className="mdi mdi-weather-hail" />
                      <p className="mb-0"> 31° </p>
                    </div>
                    <div className="weakly-weather-item">
                      <p className="mb-1"> Tue </p>
                      <i className="mdi mdi-weather-partlycloudy" />
                      <p className="mb-0"> 28° </p>
                    </div>
                    <div className="weakly-weather-item">
                      <p className="mb-1"> Wed </p>
                      <i className="mdi mdi-weather-pouring" />
                      <p className="mb-0"> 30° </p>
                    </div>
                    <div className="weakly-weather-item">
                      <p className="mb-1"> Thu </p>
                      <i className="mdi mdi-weather-pouring" />
                      <p className="mb-0"> 29° </p>
                    </div>
                    <div className="weakly-weather-item">
                      <p className="mb-1"> Fri </p>
                      <i className="mdi mdi-weather-snowy-rainy" />
                      <p className="mb-0"> 31° </p>
                    </div>
                    <div className="weakly-weather-item">
                      <p className="mb-1"> Sat </p>
                      <i className="mdi mdi-weather-snowy" />
                      <p className="mb-0"> 32° </p>
                    </div>
                  </div>
                </div>
              </div>
              {/*weather card ends*/}
            </div>
            <div className="col-lg-5 grid-margin stretch-card">
              <div className="card">
                <div className="card-body">
                  <h2 className="card-title text-primary mb-5">
                    Performance History
            </h2>
                  <div className="wrapper d-flex justify-content-between">
                    <div className="side-left">
                      <p className="mb-2">The best performance</p>
                      <p className="display-3 mb-4 font-weight-light">
                        +45.2%
                </p>
                    </div>
                    <div className="side-right">
                      <small className="text-muted">2017</small>
                    </div>
                  </div>
                  <div className="wrapper d-flex justify-content-between">
                    <div className="side-left">
                      <p className="mb-2">Worst performance</p>
                      <p className="display-3 mb-5 font-weight-light">
                        -35.3%
                </p>
                    </div>
                    <div className="side-right">
                      <small className="text-muted">2015</small>
                    </div>
                  </div>
                  <div className="wrapper">
                    <div className="d-flex justify-content-between">
                      <p className="mb-2">Sales</p>
                      <p className="mb-2 text-primary">88%</p>
                    </div>
                    <div className="progress">
                      <div
                        className="progress-bar bg-primary progress-bar-striped progress-bar-animated"
                        role="progressbar"
                        style={{ width: "88%" }}
                        aria-valuenow={88}
                        aria-valuemin={0}
                        aria-valuemax={100}
                      />
                    </div>
                  </div>
                  <div className="wrapper mt-4">
                    <div className="d-flex justify-content-between">
                      <p className="mb-2">Visits</p>
                      <p className="mb-2 text-success">56%</p>
                    </div>
                    <div className="progress">
                      <div
                        className="progress-bar bg-success progress-bar-striped progress-bar-animated"
                        role="progressbar"
                        style={{ width: "56%" }}
                        aria-valuenow={56}
                        aria-valuemin={0}
                        aria-valuemax={100}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-8 grid-margin stretch-card">
              <div className="card">
                <div className="card-body">
                  <div className="row">
                    <div className="col-md-8 d-flex flex-column">
                      <div className="d-flex align-items-center">
                        <h4 className="card-title mb-0">
                          Realtime Statistics
                  </h4>
                        <div className="badge badge-pill badge-lg badge-danger my-auto ml-3 d-none d-lg-block">
                          New
                  </div>
                        <small className="text-muted ml-auto d-none d-lg-block">
                          Updated at 08.32pm, Aug 2018
                  </small>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <p>Overview status</p>
                      <div className="d-flex justify-content-between py-2 border-bottom">
                        <div className="wrapper">
                          <p className="mb-0">Marketing</p>
                          <h5 className="font-weight-medium">34%</h5>
                        </div>
                        <div className="wrapper d-flex flex-column align-items-center">
                          <small className="text-muted mb-2">2018</small>
                          <div className="badge badge-pill badge-danger">
                            Mar
                    </div>
                        </div>
                      </div>
                      <div className="d-flex justify-content-between py-2 border-bottom">
                        <div className="wrapper">
                          <p className="mb-0">Develpment</p>
                          <h5 className="font-weight-medium">49%</h5>
                        </div>
                        <div className="wrapper d-flex flex-column align-items-center">
                          <small className="text-muted mb-2">2018</small>
                          <div className="badge badge-pill badge-warning">
                            DVR
                    </div>
                        </div>
                      </div>
                      <div className="d-flex justify-content-between pt-2">
                        <div className="wrapper">
                          <p className="mb-0">Human Resources</p>
                          <h5 className="font-weight-medium">75%</h5>
                        </div>
                        <div className="wrapper d-flex flex-column align-items-center">
                          <small className="text-muted mb-2">2017</small>
                          <div className="badge badge-pill badge-success">
                            H&amp;R
                    </div>
                        </div>
                      </div>
                      <div className="wrapper mt-4 d-none d-lg-block">
                        <p className="text-muted">
                          Note: These statistics are aggregates over all of
                    your application's users.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 grid-margin stretch-card">
              <div className="card">
                <div className="card-body">
                  <h4 className="card-title">Human Resources</h4>
                  <div className="aligner-wrapper">
                    <div
                      className="chartjs-size-monitor"
                      style={{
                        position: "absolute",
                        left: 0,
                        top: 0,
                        right: 0,
                        bottom: 0,
                        overflow: "hidden",
                        pointerEvents: "none",
                        visibility: "hidden",
                        zIndex: -1
                      }}
                    >
                      <div
                        className="chartjs-size-monitor-expand"
                        style={{
                          position: "absolute",
                          left: 0,
                          top: 0,
                          right: 0,
                          bottom: 0,
                          overflow: "hidden",
                          pointerEvents: "none",
                          visibility: "hidden",
                          zIndex: -1
                        }}
                      >
                        <div
                          style={{
                            position: "absolute",
                            width: 1000000,
                            height: 1000000,
                            left: 0,
                            top: 0
                          }}
                        />
                      </div>
                      <div
                        className="chartjs-size-monitor-shrink"
                        style={{
                          position: "absolute",
                          left: 0,
                          top: 0,
                          right: 0,
                          bottom: 0,
                          overflow: "hidden",
                          pointerEvents: "none",
                          visibility: "hidden",
                          zIndex: -1
                        }}
                      >
                        <div
                          style={{
                            position: "absolute",
                            width: "200%",
                            height: "200%",
                            left: 0,
                            top: 0
                          }}
                        />
                      </div>
                    </div>
                    <div className="wrapper d-flex flex-column justify-content-center absolute absolute-center">
                      <h4 className="text-center mb-0">8.234</h4>
                      <small className="d-block text-center text-muted mb-0">
                        Units
                </small>
                    </div>
                  </div>
                  <div className="wrapper mt-4">
                    <div className="d-flex align-items-center py-3 border-bottom">
                      <span className="dot-indicator bg-danger" />
                      <p className="mb-0 ml-3">Human Resources</p>
                      <p className="ml-auto mb-0 text-muted">86%</p>
                    </div>
                    <div className="d-flex align-items-center py-3 border-bottom">
                      <span className="dot-indicator bg-success" />
                      <p className="mb-0 ml-3">Manager</p>
                      <p className="ml-auto mb-0 text-muted">28%</p>
                    </div>
                    <div className="d-flex align-items-center pt-3">
                      <span className="dot-indicator bg-primary" />
                      <p className="mb-0 ml-3">Other</p>
                      <p className="ml-auto mb-0 text-muted">20%</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 grid-margin stretch-card">
              <div className="card">
                <div className="card-body">
                  <div className="d-flex flex-row">
                    <img
                      src="/assets/images/faces/face11.jpg"
                      className="img-lg rounded"
                      alt="profile image"
                    />
                    <div className="ml-3">
                      <h6>Maria</h6>
                      <p className="text-muted">maria@gmail.com</p>
                      <p className="mt-2 text-success font-weight-bold">
                        Designer
                </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 grid-margin stretch-card">
              <div className="card">
                <div className="card-body">
                  <div className="d-flex flex-row">
                    <img
                      src="/assets/images/faces/face9.jpg"
                      className="img-lg rounded"
                      alt="profile image"
                    />
                    <div className="ml-3">
                      <h6>Thomas Edison</h6>
                      <p className="text-muted">thomas@gmail.com</p>
                      <p className="mt-2 text-success font-weight-bold">
                        Developer
                </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 grid-margin stretch-card">
              <div className="card">
                <div className="card-body">
                  <div className="d-flex flex-row">
                    <img
                      src="/assets/images/faces/face12.jpg"
                      className="img-lg rounded"
                      alt="profile image"
                    />
                    <div className="ml-3">
                      <h6>Edward</h6>
                      <p className="text-muted">edward@gmail.com</p>
                      <p className="mt-2 text-success font-weight-bold">
                        Tester
                </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 grid-margin stretch-card">
              <div className="card">
                <img
                  className="card-img-top"
                  src="/assets/images/dashboard/img_1.jpg"
                  alt="card images"
                />
                <div className="card-body pb-0">
                  <p className="text-muted">
                    RAGNAROCK- Museet for pop, Roskilde, Denmark
            </p>
                  <h5>
                    It’s good to start or finish the day with delicious
                    pancakes :)
            </h5>
                  <div className="d-flex align-items-center justify-content-between text-muted border-top py-3 mt-3">
                    <p className="mb-0">Published on May 23, 2018</p>
                    <div className="wrapper d-flex align-items-center">
                      <small className="mr-2">93</small>
                      <i className="mdi mdi-heart-outline" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 grid-margin stretch-card">
              <div className="card">
                <img
                  className="card-img-top"
                  src="/assets/images/dashboard/img_2.jpg"
                  alt="card images"
                />
                <div className="card-body pb-0">
                  <p className="text-muted">
                    RAGNAROCK- Museet for pop, Roskilde, Denmark
            </p>
                  <h5>
                    It’s good to start or finish the day with delicious
                    pancakes :)
            </h5>
                  <div className="d-flex align-items-center justify-content-between text-muted border-top py-3 mt-3">
                    <p className="mb-0">Published on May 23, 2018</p>
                    <div className="wrapper d-flex align-items-center">
                      <small className="mr-2">93</small>
                      <i className="mdi mdi-heart-outline" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 grid-margin stretch-card">
              <div className="card">
                <img
                  className="card-img-top"
                  src="/assets/images/dashboard/img_3.jpg"
                  alt="card images"
                />
                <div className="card-body pb-0">
                  <p className="text-muted">
                    RAGNAROCK- Museet for pop, Roskilde, Denmark
            </p>
                  <h5>
                    It’s good to start or finish the day with delicious
                    pancakes :)
            </h5>
                  <div className="d-flex align-items-center justify-content-between text-muted border-top py-3 mt-3">
                    <p className="mb-0">Published on May 23, 2018</p>
                    <div className="wrapper d-flex align-items-center">
                      <small className="mr-2">93</small>
                      <i className="mdi mdi-heart-outline" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 grid-margin stretch-card">
              <div className="card aligner-wrapper">
                <div className="card-body">
                  <div className="absolute left top bottom h-100 v-strock-2 bg-success" />
                  <p className="text-muted mb-2">Unpaid Invoices</p>
                  <div className="d-flex align-items-center">
                    <h1 className="font-weight-medium mb-2">$2,156</h1>
                    <h5 className="font-weight-medium text-success ml-2">
                      −14.2%
              </h5>
                  </div>
                  <div className="d-flex align-items-center">
                    <div className="bg-success dot-indicator" />
                    <p className="text-muted mb-0 ml-2">
                      This month unpaid invoices $567
              </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 grid-margin stretch-card">
              <div className="card aligner-wrapper">
                <div className="card-body">
                  <div className="absolute left top bottom h-100 v-strock-2 bg-primary" />
                  <p className="text-muted mb-2">Gross volume</p>
                  <div className="d-flex align-items-center">
                    <h1 className="font-weight-medium mb-2">$1,520</h1>
                    <h5 className="font-weight-medium text-success ml-2">
                      +20.7%
              </h5>
                  </div>
                  <div className="d-flex align-items-center">
                    <div className="bg-primary dot-indicator" />
                    <p className="text-muted mb-0 ml-2">
                      Next payout -23 aug- $233
              </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 grid-margin stretch-card">
              <div className="card aligner-wrapper">
                <div className="card-body">
                  <div className="absolute left top bottom h-100 v-strock-2 bg-danger" />
                  <p className="text-muted mb-2">Average revenue</p>
                  <div className="d-flex align-items-center">
                    <h1 className="font-weight-medium mb-2">$6.60</h1>
                    <h5 className="font-weight-medium text-success ml-2">
                      +296.6%
              </h5>
                  </div>
                  <div className="d-flex align-items-center">
                    <div className="bg-danger dot-indicator" />
                    <p className="text-muted mb-0 ml-2">
                      Payout for next week $100
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-7 col-lg-7 col-md-6 col-sm-12 grid-margin stretch-card">
              <div className="card review-card">
                <div className="card-header header-sm d-flex justify-content-between align-items-center">
                  <h4 className="card-title">Reviews</h4>
                  <div className="wrapper d-flex align-items-center">
                    <p>23 New Reviews</p>
                    <div className="dropdown">
                      <button
                        className="btn btn-transparent icon-btn dropdown-toggle arrow-disabled pr-0"
                        type="button"
                        id="dropdownMenuIconButton1"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        <i className="mdi mdi-dots-vertical" />
                      </button>
                      <div
                        className="dropdown-menu"
                        aria-labelledby="dropdownMenuIconButton1"
                      >
                        <a className="dropdown-item" href="#">
                          Today
                  </a>
                        <a className="dropdown-item" href="#">
                          Yesterday
                  </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card-body no-gutter">
                  <div className="list-item">
                    <div className="preview-image">
                      <img
                        className="img-sm rounded-circle"
                        src="/assets/images/faces/face10.jpg"
                        alt="profile image"
                      />
                    </div>
                    <div className="content">
                      <div className="d-flex align-items-center">
                        <h6 className="product-name">Air Pod</h6>
                        <small className="time ml-3 d-none d-sm-block">
                          08.34 AM
                  </small>
                        <div className="ml-auto">
                          <div className="br-wrapper br-theme-css-stars">
                            <select
                              id="review-rating-1"
                              name="rating"
                              autoComplete="off"
                              style={{ display: "none" }}
                            >
                              <option value={1}>1</option>
                              <option value={2}>2</option>
                              <option value={3}>3</option>
                              <option value={4}>4</option>
                              <option value={5}>5</option>
                            </select>
                            <div className="br-widget">
                              <a
                                href="#"
                                data-rating-value={1}
                                data-rating-text={1}
                                className="br-selected"
                              />
                              <a
                                href="#"
                                data-rating-value={2}
                                data-rating-text={2}
                                className="br-selected"
                              />
                              <a
                                href="#"
                                data-rating-value={3}
                                data-rating-text={3}
                                className="br-selected"
                              />
                              <a
                                href="#"
                                data-rating-value={4}
                                data-rating-text={4}
                                className="br-selected br-current"
                              />
                              <a
                                href="#"
                                data-rating-value={5}
                                data-rating-text={5}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="d-flex align-items-center">
                        <p className="user-name">Christine :</p>
                        <p className="review-text d-block">
                          The brand apple is original !
                  </p>
                      </div>
                    </div>
                  </div>
                  <div className="list-item">
                    <div className="preview-image">
                      <img
                        className="img-sm rounded-circle"
                        src="/assets/images/faces/face13.jpg"
                        alt="profile image"
                      />
                    </div>
                    <div className="content">
                      <div className="d-flex align-items-center">
                        <h6 className="product-name">Macbook</h6>
                        <small className="time ml-3 d-none d-sm-block">
                          12.56 PM
                  </small>
                        <div className="ml-auto">
                          <div className="br-wrapper br-theme-css-stars">
                            <select
                              id="review-rating-2"
                              name="rating"
                              autoComplete="off"
                              style={{ display: "none" }}
                            >
                              <option value={1}>1</option>
                              <option value={2}>2</option>
                              <option value={3}>3</option>
                              <option value={4}>4</option>
                              <option value={5}>5</option>
                            </select>
                            <div className="br-widget">
                              <a
                                href="#"
                                data-rating-value={1}
                                data-rating-text={1}
                                className="br-selected"
                              />
                              <a
                                href="#"
                                data-rating-value={2}
                                data-rating-text={2}
                                className="br-selected"
                              />
                              <a
                                href="#"
                                data-rating-value={3}
                                data-rating-text={3}
                                className="br-selected"
                              />
                              <a
                                href="#"
                                data-rating-value={4}
                                data-rating-text={4}
                                className="br-selected"
                              />
                              <a
                                href="#"
                                data-rating-value={5}
                                data-rating-text={5}
                                className="br-selected br-current"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="d-flex align-items-center">
                        <p className="user-name">Arthur Cole :</p>
                        <p className="review-text d-block">
                          The brand apple is original also the iphone x.
                  </p>
                      </div>
                    </div>
                  </div>
                  <div className="list-item">
                    <div className="preview-image">
                      <img
                        className="img-sm rounded-circle"
                        src="/assets/images/faces/face1.jpg"
                        alt="profile image"
                      />
                    </div>
                    <div className="content">
                      <div className="d-flex align-items-center">
                        <h6 className="product-name">Apple watch</h6>
                        <small className="time ml-3 d-none d-sm-block">
                          09.24 AM
                  </small>
                        <div className="ml-auto">
                          <div className="br-wrapper br-theme-css-stars">
                            <select
                              id="review-rating-3"
                              name="rating"
                              autoComplete="off"
                              style={{ display: "none" }}
                            >
                              <option value={1}>1</option>
                              <option value={2}>2</option>
                              <option value={3}>3</option>
                              <option value={4}>4</option>
                              <option value={5}>5</option>
                            </select>
                            <div className="br-widget">
                              <a
                                href="#"
                                data-rating-value={1}
                                data-rating-text={1}
                                className="br-selected"
                              />
                              <a
                                href="#"
                                data-rating-value={2}
                                data-rating-text={2}
                                className="br-selected"
                              />
                              <a
                                href="#"
                                data-rating-value={3}
                                data-rating-text={3}
                                className="br-selected br-current"
                              />
                              <a
                                href="#"
                                data-rating-value={4}
                                data-rating-text={4}
                              />
                              <a
                                href="#"
                                data-rating-value={5}
                                data-rating-text={5}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="d-flex align-items-center">
                        <p className="user-name">James Tate :</p>
                        <p className="review-text d-block">
                          The brand apple is original.
                  </p>
                      </div>
                    </div>
                  </div>
                  <div className="list-item">
                    <div className="preview-image">
                      <img
                        className="img-sm rounded-circle"
                        src="/assets/images/faces/face11.jpg"
                        alt="profile image"
                      />
                    </div>
                    <div className="content">
                      <div className="d-flex align-items-center">
                        <h6 className="product-name">Homepod</h6>
                        <small className="time ml-3 d-none d-sm-block">
                          5.12 AM
                  </small>
                        <div className="ml-auto">
                          <div className="br-wrapper br-theme-css-stars">
                            <select
                              id="review-rating-4"
                              name="rating"
                              autoComplete="off"
                              style={{ display: "none" }}
                            >
                              <option value={1}>1</option>
                              <option value={2}>2</option>
                              <option value={3}>3</option>
                              <option value={4}>4</option>
                              <option value={5}>5</option>
                            </select>
                            <div className="br-widget">
                              <a
                                href="#"
                                data-rating-value={1}
                                data-rating-text={1}
                                className="br-selected"
                              />
                              <a
                                href="#"
                                data-rating-value={2}
                                data-rating-text={2}
                                className="br-selected"
                              />
                              <a
                                href="#"
                                data-rating-value={3}
                                data-rating-text={3}
                                className="br-selected"
                              />
                              <a
                                href="#"
                                data-rating-value={4}
                                data-rating-text={4}
                                className="br-selected br-current"
                              />
                              <a
                                href="#"
                                data-rating-value={5}
                                data-rating-text={5}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="d-flex align-items-center">
                        <p className="user-name">Clyde Parker :</p>
                        <p className="review-text d-block">
                          The brand apple is original also the iphone !!
                  </p>
                      </div>
                    </div>
                  </div>
                  <div className="list-item">
                    <div className="preview-image">
                      <img
                        className="img-sm rounded-circle"
                        src="/assets/images/faces/face12.jpg"
                        alt="profile image"
                      />
                    </div>
                    <div className="content">
                      <div className="d-flex align-items-center">
                        <h6 className="product-name">Imac</h6>
                        <small className="time ml-3 d-none d-sm-block">
                          10.00 AM
                  </small>
                        <div className="ml-auto">
                          <div className="br-wrapper br-theme-css-stars">
                            <select
                              id="review-rating-5"
                              name="rating"
                              autoComplete="off"
                              style={{ display: "none" }}
                            >
                              <option value={1}>1</option>
                              <option value={2}>2</option>
                              <option value={3}>3</option>
                              <option value={4}>4</option>
                              <option value={5}>5</option>
                            </select>
                            <div className="br-widget">
                              <a
                                href="#"
                                data-rating-value={1}
                                data-rating-text={1}
                                className="br-selected"
                              />
                              <a
                                href="#"
                                data-rating-value={2}
                                data-rating-text={2}
                                className="br-selected br-current"
                              />
                              <a
                                href="#"
                                data-rating-value={3}
                                data-rating-text={3}
                                className
                              />
                              <a
                                href="#"
                                data-rating-value={4}
                                data-rating-text={4}
                                className
                              />
                              <a
                                href="#"
                                data-rating-value={5}
                                data-rating-text={5}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="d-flex align-items-center">
                        <p className="user-name">James Tate :</p>
                        <p className="review-text d-block">
                          The brand apple is original.
                  </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-5 col-lg-5 col-md-6 col-sm-12 grid-margin stretch-card">
              <div className="row flex-grow w-100">
                <div className="col-md-12 grid-margin stretch-card">
                  <div className="card">
                    <div className="card-body">
                      <h4 className="card-title">Traffic source</h4>
                      <div className="row">
                        <div className="col-md-6 aligner-wrapper mb-4 mb-md-0" />
                        <div className="col-md-6 legend-wrapper">
                          <div className="d-flex mb-3">
                            <div className="dot-indicator bg-secondary mt-1 mr-2" />
                            <div className="d-flex flex-column justify-content-center">
                              <p className="mb-0">Google</p>
                              <small className="text-muted">
                                67,342 (78.05%)
                        </small>
                            </div>
                          </div>
                          <div className="d-flex my-3">
                            <div className="dot-indicator bg-success mt-1 mr-2" />
                            <div className="d-flex flex-column justify-content-center">
                              <p className="mb-0">Yahoo</p>
                              <small className="text-muted">
                                67,342 (78.05%)
                        </small>
                            </div>
                          </div>
                          <div className="d-flex mt-3">
                            <div className="dot-indicator bg-danger mt-1 mr-2" />
                            <div className="d-flex flex-column justify-content-center">
                              <p className="mb-0">Bing</p>
                              <small className="text-muted">
                                67,342 (78.05%)
                        </small>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-12 stretch-card">
                  <div className="card">
                    <div className="card-body">
                      <h4 className="card-title">Storage Space</h4>
                      <small className="text-muted">Used space</small>
                      <h4>45.670/50.000</h4>
                      <div className="progress grouped">
                        <div
                          className="progress-bar"
                          role="progressbar"
                          style={{ width: "15%" }}
                          aria-valuenow={15}
                          aria-valuemin={0}
                          aria-valuemax={100}
                        />
                        <div
                          className="progress-bar bg-success"
                          role="progressbar"
                          style={{ width: "30%" }}
                          aria-valuenow={30}
                          aria-valuemin={0}
                          aria-valuemax={100}
                        />
                        <div
                          className="progress-bar bg-danger"
                          role="progressbar"
                          style={{ width: "20%" }}
                          aria-valuenow={20}
                          aria-valuemin={0}
                          aria-valuemax={100}
                        />
                      </div>
                      <div className="d-flex justify-content-between border-top mt-4 pt-4">
                        <div className="d-flex">
                          <div className="dot-indicator bg-primary mt-1 mr-2" />
                          <div className="d-flex flex-column">
                            <p className="mb-0">Documents</p>
                            <small className="text-gray">18.00 GB</small>
                          </div>
                        </div>
                        <div className="d-flex">
                          <div className="dot-indicator bg-success mt-1 mr-2" />
                          <div className="d-flex flex-column">
                            <p className="mb-0">Images</p>
                            <small className="text-gray">10.00 GB</small>
                          </div>
                        </div>
                        <div className="d-flex">
                          <div className="dot-indicator bg-danger mt-1 mr-2" />
                          <div className="d-flex flex-column">
                            <p className="mb-0">Mail</p>
                            <small className="text-gray">02.00 GB</small>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 grid-margin stretch-card">
              <div className="card">
                <div className="card-body">
                  <h4 className="card-title">Sales Prediction</h4>
                  <div className="row">
                    <div className="col-md-6 aligner-wrapper">
                      <div className="wrapper d-flex flex-column justify-content-center absolute absolute-center">
                        <h4 className="d-block text-center mb-0">567</h4>
                        <small className="d-block text-center mb-2">
                          Daily average
                  </small>
                      </div>
                    </div>
                    <div className="col-md-6 legend-wrapper">
                      <div className="d-flex flex-column justify-content-center">
                        <div className="d-flex align-items-center">
                          <div className="dot-indicator bg-primary mt-1 mr-2" />
                          <h4 className="mb-0">5.34%</h4>
                        </div>
                        <small className="text-muted ml-3">
                          Admin Dashbaord
                  </small>
                      </div>
                      <div className="d-flex flex-column justify-content-center border-top border-bottom py-3 mt-3 mb-3">
                        <div className="d-flex align-items-center">
                          <div className="dot-indicator bg-warning mt-1 mr-2" />
                          <h4 className="mb-0">17%</h4>
                        </div>
                        <small className="text-muted ml-3">
                          Website Design
                  </small>
                      </div>
                      <div className="d-flex flex-column justify-content-center">
                        <div className="d-flex align-items-center">
                          <div className="dot-indicator bg-success mt-1 mr-2" />
                          <h4 className="mb-0">53%</h4>
                        </div>
                        <small className="text-muted ml-3">
                          Mobile App
                  </small>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 grid-margin stretch-card">
              <div className="card">
                <div className="card-body">
                  <h4 className="card-title">Users Info</h4>
                  <div className="row">
                    <div className="col-md-6" />
                    <div className="col-md-6 legend-wrapper">
                      <div className="d-flex flex-column justify-content-center">
                        <div className="d-flex align-items-center">
                          <div className="dot-indicator bg-primary mt-1 mr-2" />
                          <h4 className="mb-0">34.56%</h4>
                        </div>
                        <small className="text-muted ml-3">Returning</small>
                      </div>
                      <div className="d-flex flex-column justify-content-center border-top border-bottom py-3 mt-3 mb-3">
                        <div className="d-flex align-items-center">
                          <div className="dot-indicator bg-warning mt-1 mr-2" />
                          <h4 className="mb-0">09.3%</h4>
                        </div>
                        <small className="text-muted ml-3">
                          Bounce rate
                  </small>
                      </div>
                      <div className="d-flex flex-column justify-content-center">
                        <div className="d-flex align-items-center">
                          <div className="dot-indicator bg-success mt-1 mr-2" />
                          <h4 className="mb-0">25%</h4>
                        </div>
                        <small className="text-muted ml-3">New</small>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-4 grid-margin stretch-card">
              <div className="card">
                <div className="card-body">
                  <div className="d-flex justify-content-between">
                    <h4 className="card-title">Activity</h4>
                    <i className="mdi mdi-dots-vertical" />
                  </div>
                  <p className="card-description">
                    What's people doing right now
            </p>
                  <div className="list d-flex align-items-center border-bottom py-3">
                    <img
                      className="img-sm rounded-circle"
                      src="/assets/images/faces/face4.jpg"
                      alt
                    />
                    <div className="wrapper w-100 ml-3">
                      <p className="mb-0">
                        <b>Dobrick </b>posted in Material
                </p>
                      <div className="d-flex justify-content-between align-items-center">
                        <div className="d-flex align-items-center">
                          <i className="mdi mdi-clock text-muted mr-1" />
                          <p className="mb-0">That's awesome!</p>
                        </div>
                        <small className="text-muted ml-auto">
                          2 hours ago
                  </small>
                      </div>
                    </div>
                  </div>
                  <div className="list d-flex align-items-center border-bottom py-3">
                    <img
                      className="img-sm rounded-circle"
                      src="/assets/images/faces/face5.jpg"
                      alt
                    />
                    <div className="wrapper w-100 ml-3">
                      <p className="mb-0">
                        <b>Stella </b>posted in Material
                </p>
                      <div className="d-flex justify-content-between align-items-center">
                        <div className="d-flex align-items-center">
                          <i className="mdi mdi-clock text-muted mr-1" />
                          <p className="mb-0">That's awesome!</p>
                        </div>
                        <small className="text-muted ml-auto">
                          3 hours ago
                  </small>
                      </div>
                    </div>
                  </div>
                  <div className="list d-flex align-items-center border-bottom py-3">
                    <img
                      className="img-sm rounded-circle"
                      src="/assets/images/faces/face7.jpg"
                      alt
                    />
                    <div className="wrapper w-100 ml-3">
                      <p className="mb-0">
                        <b>Peter </b>posted in Material
                </p>
                      <div className="d-flex justify-content-between align-items-center">
                        <div className="d-flex align-items-center">
                          <i className="mdi mdi-clock text-muted mr-1" />
                          <p className="mb-0">That's Great!</p>
                        </div>
                        <small className="text-muted ml-auto">
                          1 hours ago
                  </small>
                      </div>
                    </div>
                  </div>
                  <div className="list d-flex align-items-center pt-3">
                    <img
                      className="img-sm rounded-circle"
                      src="/assets/images/faces/face6.jpg"
                      alt
                    />
                    <div className="wrapper w-100 ml-3">
                      <p className="mb-0">
                        <b>Nateila </b>posted in Material
                </p>
                      <div className="d-flex justify-content-between align-items-center">
                        <div className="d-flex align-items-center">
                          <i className="mdi mdi-clock text-muted mr-1" />
                          <p className="mb-0">That's awesome!</p>
                        </div>
                        <small className="text-muted ml-auto">
                          1 hours ago
                  </small>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-4 grid-margin stretch-card">
              <div className="card">
                <div className="card-body">
                  <h4 className="card-title">Recomended</h4>
                  <div className="wrapper d-flex align-items-center py-2 border-bottom">
                    <img
                      className="img-sm rounded-circle"
                      src="/assets/images/faces/face5.jpg"
                      alt="profile"
                    />
                    <div className="wrapper ml-3">
                      <h6 className="ml-1 mb-1">Stella Davidson</h6>
                      <small className="text-muted mb-0">
                        <i className="mdi mdi-map-marker-outline mr-1" />New
                        York City, USA
                </small>
                    </div>
                    <div className="badge badge-pill badge-success ml-auto px-1 py-1">
                      <i className="mdi mdi-check" />
                    </div>
                  </div>
                  <div className="wrapper d-flex align-items-center py-2 border-bottom">
                    <img
                      className="img-sm rounded-circle"
                      src="/assets/images/faces/face6.jpg"
                      alt="profile"
                    />
                    <div className="wrapper ml-3">
                      <h6 className="ml-1 mb-1">Daniel Russel</h6>
                      <small className="text-muted mb-0">
                        <i className="mdi mdi-map-marker-outline mr-1" />Florida,
                        USA
                </small>
                    </div>
                    <div className="badge badge-pill badge-success ml-auto px-1 py-1">
                      <i className="mdi mdi-plus" />
                    </div>
                  </div>
                  <div className="wrapper d-flex align-items-center py-2 border-bottom">
                    <img
                      className="img-sm rounded-circle"
                      src="/assets/images/faces/face7.jpg"
                      alt="profile"
                    />
                    <div className="wrapper ml-3">
                      <h6 className="ml-1 mb-1">Bruno King</h6>
                      <small className="text-muted mb-0">
                        <i className="mdi mdi-map-marker-outline mr-1" />Arkansas,
                        USA
                </small>
                    </div>
                    <div className="badge badge-pill badge-success ml-auto px-1 py-1">
                      <i className="mdi mdi-check" />
                    </div>
                  </div>
                  <div className="wrapper d-flex align-items-center py-2 border-bottom">
                    <img
                      className="img-sm rounded-circle"
                      src="/assets/images/faces/face8.jpg"
                      alt="profile"
                    />
                    <div className="wrapper ml-3">
                      <h6 className="ml-1 mb-1">David Moore</h6>
                      <small className="text-muted mb-0">
                        <i className="mdi mdi-map-marker-outline mr-1" />Arizon,
                        USA
                </small>
                    </div>
                    <div className="badge badge-pill badge-success ml-auto px-1 py-1">
                      <i className="mdi mdi-plus" />
                    </div>
                  </div>
                  <div className="wrapper d-flex align-items-center pt-2">
                    <img
                      className="img-sm rounded-circle"
                      src="/assets/images/faces/face9.jpg"
                      alt="profile"
                    />
                    <div className="wrapper ml-3">
                      <h6 className="ml-1 mb-1">Rafell John</h6>
                      <small className="text-muted mb-0">
                        <i className="mdi mdi-map-marker-outline mr-1" />Alaska,
                        USA
                </small>
                    </div>
                    <div className="badge badge-pill badge-success ml-auto px-1 py-1">
                      <i className="mdi mdi-plus" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 grid-margin stretch-card">
              <div className="card">
                <div className="card-body">
                  <h4 className="card-title">Updates</h4>
                  <ul className="bullet-line-list">
                    <li>
                      <h6>User confirmation</h6>
                      <p>
                        Lorem Ipsum is simply dummy text of the printing
                </p>
                      <p className="text-muted">
                        <i className="mdi mdi-clock" /> 7 months ago.
                </p>
                    </li>
                    <li>
                      <h6>Continuous evaluation</h6>
                      <p>
                        Lorem Ipsum is simply dummy text of the printing
                </p>
                      <p className="text-muted">
                        <i className="mdi mdi-clock" /> 7 months ago.
                </p>
                    </li>
                    <li>
                      <h6>Promotion</h6>
                      <p>
                        Lorem Ipsum is simply dummy text of the printing
                </p>
                      <p className="text-muted">
                        <i className="mdi mdi-clock" /> 7 months ago.
                </p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* content-wrapper ends */}
      </div>
    );
  };
}

export default WidgetsPage;