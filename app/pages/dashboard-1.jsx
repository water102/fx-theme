import React, { Component } from 'react';
import { connect } from 'react-redux';

class Dashboard1 extends Component {
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
                          $65,650
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
          </div>
          <div className="row">
            <div className="col-md-12 grid-margin">
              <div className="card">
                <div className="card-body">
                  <div className="d-flex justify-content-between align-items-center mb-4">
                    <h2 className="card-title mb-0">
                      Product Analysis
                  </h2>
                    <div className="wrapper d-flex">
                      <div className="d-flex align-items-center mr-3">
                        <span className="dot-indicator bg-success" />
                        <p className="mb-0 ml-2 text-muted">Product</p>
                      </div>
                      <div className="d-flex align-items-center">
                        <span className="dot-indicator bg-primary" />
                        <p className="mb-0 ml-2 text-muted">
                          Resources
                      </p>
                      </div>
                    </div>
                  </div>
                  <div className="chart-container">
                    <canvas id="dashboard-area-chart" height={80} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4 grid-margin stretch-card">
              <div className="card">
                <div className="card-body">
                  <h4 className="card-title">Todo</h4>
                  <div className="add-items d-flex">
                    <input
                      type="text"
                      className="form-control todo-list-input"
                      placeholder="What do you need to do today?"
                    />
                    <button className="add btn btn-primary font-weight-medium todo-list-add-btn">
                      Add
                  </button>
                  </div>
                  <div className="list-wrapper">
                    <ul className="d-flex flex-column-reverse todo-list todo-list-custom">
                      <li className="completed">
                        <div className="form-check form-check-flat">
                          <label className="form-check-label">
                            <input
                              className="checkbox"
                              type="checkbox"
                              defaultChecked
                            />
                            Call John <i className="input-helper" />
                          </label>
                        </div>
                        <i className="remove mdi mdi-close-circle-outline" />
                      </li>
                      <li>
                        <div className="form-check form-check-flat">
                          <label className="form-check-label">
                            <input className="checkbox" type="checkbox" /> Create invoice
        <i className="input-helper" />
                          </label>
                        </div>
                        <i className="remove mdi mdi-close-circle-outline" />
                      </li>
                      <li>
                        <div className="form-check form-check-flat">
                          <label className="form-check-label">
                            <input className="checkbox" type="checkbox" /> Print
        Statements <i className="input-helper" />
                          </label>
                        </div>
                        <i className="remove mdi mdi-close-circle-outline" />
                      </li>
                      <li className="completed">
                        <div className="form-check form-check-flat">
                          <label className="form-check-label">
                            <input
                              className="checkbox"
                              type="checkbox"
                              defaultChecked
                            />
                            Prepare for presentation <i className="input-helper" />
                          </label>
                        </div>
                        <i className="remove mdi mdi-close-circle-outline" />
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 grid-margin stretch-card">
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
                      <small className="text-muted ml-2">
                        London, UK
                    </small>
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
                      <div className="badge badge-warning">
                        12.30 AM
                    </div>
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
            <div className="col-md-4 grid-margin stretch-card">
              <div className="row flex-grow">
                <div className="col-12 grid-margin stretch-card">
                  <div className="card card-revenue">
                    <div className="card-body d-flex align-items-center">
                      <div className="d-flex flex-grow">
                        <div className="mr-auto">
                          <p className="highlight-text mb-0">

                            $168.90
                        </p>
                          <p> This Month </p>
                          <div className="badge badge-pill"> 18% </div>
                        </div>
                        <div className="ml-auto align-self-end">
                          <div
                            id="revenue-chart"
                            sparktype="bar"
                            sparkbarcolor="#e6ecf5"
                            barwidth={2}
                          >

                            4,3,10,9,4,3,8,6,7,8
                        </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-12 stretch-card">
                  <div className="card card-revenue-table">
                    <div className="card-body">
                      <div className="revenue-item d-flex">
                        <div className="revenue-desc">
                          <h6>Member Profit</h6>
                          <p className="font-weight-light">

                            Average Weekly Profit
                        </p>
                        </div>
                        <div className="revenue-amount">
                          <p className="text-primary"> +168.900 </p>
                        </div>
                      </div>
                      <div className="revenue-item d-flex">
                        <div className="revenue-desc">
                          <h6>Total Profit</h6>
                          <p className="font-weight-light">

                            Weekly Customer Orders
                        </p>
                        </div>
                        <div className="revenue-amount">
                          <p className="text-primary"> +6890.00 </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-6 col-md-6 col-lg-6 grid-margin stretch-card">
              <div className="card">
                <div className="card-body">
                  <div className="row">
                    <div className="col-md-5 d-flex align-items-center">
                      <canvas
                        id="UsersDoughnutChart"
                        className="400x160 mb-4 mb-md-0"
                        height={200}
                      />
                    </div>
                    <div className="col-md-7">
                      <h4 className="card-title font-weight-medium mb-0 d-none d-md-block">
                        Active Users
                    </h4>
                      <div className="wrapper mt-4">
                        <div className="d-flex justify-content-between mb-2">
                          <div className="d-flex align-items-center">
                            <p className="mb-0 font-weight-medium">
                              67,550
                          </p>
                            <small className="text-muted ml-2">
                              Email account
                          </small>
                          </div>
                          <p className="mb-0 font-weight-medium">80%</p>
                        </div>
                        <div className="progress">
                          <div
                            className="progress-bar bg-primary"
                            role="progressbar"
                            style={{ width: "88%" }}
                            aria-valuenow={88}
                            aria-valuemin={0}
                            aria-valuemax={100}
                          />
                        </div>
                      </div>
                      <div className="wrapper mt-4">
                        <div className="d-flex justify-content-between mb-2">
                          <div className="d-flex align-items-center">
                            <p className="mb-0 font-weight-medium">
                              21,435
                          </p>
                            <small className="text-muted ml-2">
                              Requests
                          </small>
                          </div>
                          <p className="mb-0 font-weight-medium">34%</p>
                        </div>
                        <div className="progress">
                          <div
                            className="progress-bar bg-success"
                            role="progressbar"
                            style={{ width: "34%" }}
                            aria-valuenow={34}
                            aria-valuemin={0}
                            aria-valuemax={100}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-md-6 col-lg-6 grid-margin stretch-card">
              <div className="card">
                <div className="card-body">
                  <div className="row">
                    <div className="col-md-7">
                      <h4 className="card-title font-weight-medium mb-3">
                        Amount Due
                    </h4>
                      <h1 className="font-weight-medium mb-0">$5998</h1>
                      <p className="text-muted">Milestone Completed</p>
                      <p className="mb-0">Payment for next week</p>
                    </div>
                    <div className="col-md-5 d-flex align-items-end mt-4 mt-md-0">
                      <canvas id="conversionBarChart" height={150} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 grid-margin stretch-card">
              <div className="card">
                <div className="card-body py-5">
                  <div className="d-flex flex-row justify-content-center align-items">
                    <i className="mdi mdi-facebook text-facebook icon-lg" />
                    <div className="ml-3">
                      <h6 className="text-facebook font-weight-semibold mb-0">
                        2.62 Subscribers
                    </h6>
                      <p className="text-muted card-text">
                        You main list growing
                    </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 grid-margin stretch-card">
              <div className="card">
                <div className="card-body py-5">
                  <div className="d-flex flex-row justify-content-center align-items">
                    <i className="mdi mdi-google-plus text-google icon-lg" />
                    <div className="ml-3">
                      <h6 className="text-google font-weight-semibold mb-0">
                        3.4k Followers
                    </h6>
                      <p className="text-muted card-text">
                        You main list growing
                    </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 grid-margin stretch-card">
              <div className="card">
                <div className="card-body py-5">
                  <div className="d-flex flex-row justify-content-center align-items">
                    <i className="mdi mdi-twitter text-twitter icon-lg" />
                    <div className="ml-3">
                      <h6 className="text-twitter font-weight-semibold mb-0">
                        3k followers
                    </h6>
                      <p className="text-muted card-text">
                        You main list growing
                    </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12 grid-margin">
              <div className="card">
                <div className="card-body">
                  <h4 className="card-title">Orders</h4>
                  <div className="table-responsive">
                    <table className="table table-striped">
                      <thead>
                        <tr>
                          <th> # </th>
                          <th> First name </th>
                          <th> Progress </th>
                          <th> Amount </th>
                          <th> Sales </th>
                          <th> Deadline </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="font-weight-medium"> 1 </td>
                          <td> Herman Beck </td>
                          <td>
                            <div className="progress">
                              <div
                                className="progress-bar bg-success progress-bar-striped"
                                role="progressbar"
                                style={{ width: "25%" }}
                                aria-valuenow={25}
                                aria-valuemin={0}
                                aria-valuemax={100}
                              />
                            </div>
                          </td>
                          <td> $ 77.99 </td>
                          <td className="text-danger">

                            53.64% <i className="mdi mdi-arrow-down" />
                          </td>
                          <td> May 15, 2015 </td>
                        </tr>
                        <tr>
                          <td className="font-weight-medium"> 2 </td>
                          <td> Messsy Adam </td>
                          <td>
                            <div className="progress">
                              <div
                                className="progress-bar bg-danger progress-bar-striped"
                                role="progressbar"
                                style={{ width: "75%" }}
                                aria-valuenow={75}
                                aria-valuemin={0}
                                aria-valuemax={100}
                              />
                            </div>
                          </td>
                          <td> $245.30 </td>
                          <td className="text-success">

                            24.56% <i className="mdi mdi-arrow-up" />
                          </td>
                          <td> July 1, 2015 </td>
                        </tr>
                        <tr>
                          <td className="font-weight-medium"> 3 </td>
                          <td> John Richards </td>
                          <td>
                            <div className="progress">
                              <div
                                className="progress-bar bg-warning progress-bar-striped"
                                role="progressbar"
                                style={{ width: "90%" }}
                                aria-valuenow={90}
                                aria-valuemin={0}
                                aria-valuemax={100}
                              />
                            </div>
                          </td>
                          <td> $138.00 </td>
                          <td className="text-danger">

                            28.76% <i className="mdi mdi-arrow-down" />
                          </td>
                          <td> Apr 12, 2015 </td>
                        </tr>
                        <tr>
                          <td className="font-weight-medium"> 4 </td>
                          <td> Peter Meggik </td>
                          <td>
                            <div className="progress">
                              <div
                                className="progress-bar bg-primary progress-bar-striped"
                                role="progressbar"
                                style={{ width: "50%" }}
                                aria-valuenow={50}
                                aria-valuemin={0}
                                aria-valuemax={100}
                              />
                            </div>
                          </td>
                          <td> $ 77.99 </td>
                          <td className="text-danger">

                            53.45% <i className="mdi mdi-arrow-down" />
                          </td>
                          <td> May 15, 2015 </td>
                        </tr>
                        <tr>
                          <td className="font-weight-medium"> 5 </td>
                          <td> Edward </td>
                          <td>
                            <div className="progress">
                              <div
                                className="progress-bar bg-danger progress-bar-striped"
                                role="progressbar"
                                style={{ width: "35%" }}
                                aria-valuenow={35}
                                aria-valuemin={0}
                                aria-valuemax={100}
                              />
                            </div>
                          </td>
                          <td> $ 160.25 </td>
                          <td className="text-success">

                            18.32% <i className="mdi mdi-arrow-up" />
                          </td>
                          <td> May 03, 2015 </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12 grid-margin">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title mb-4">Manage Tickets</h5>
                  <div className="fluid-container">
                    <div className="row ticket-card mt-3 pb-2 border-bottom pb-3 mb-3">
                      <div className="col-md-1">
                        <img
                          className="img-sm rounded-circle mb-4 mb-md-0 d-block mx-md-auto"
                          src="/assets/images/faces/face1.jpg"
                          alt="profile image"
                        />
                      </div>
                      <div className="ticket-details col-md-9">
                        <div className="d-flex">
                          <p className="text-dark font-weight-semibold mr-2 mb-0 no-wrap">
                            James :
                          </p>
                          <p className="text-primary mr-1 mb-0">
                            [#23047]
                          </p>
                          <p className="mb-0 ellipsis">
                            Donec rutrum congue leo eget malesuada.
                          </p>
                        </div>
                        <p className="text-gray ellipsis mb-2">
                          Donec rutrum congue leo eget malesuada.
                          Quisque velit nisi, pretium ut lacinia in,
                          elementum id enim vivamus.
                        </p>
                        <div className="row text-gray d-md-flex d-none">
                          <div className="col-4 d-flex">
                            <small className="mb-0 mr-2 text-muted text-muted">
                              Last responded :
                            </small>
                            <small className="Last-responded mr-2 mb-0 text-muted text-muted">
                              3 hours ago
                            </small>
                          </div>
                          <div className="col-4 d-flex">
                            <small className="mb-0 mr-2 text-muted text-muted">
                              Due in :
                            </small>
                            <small className="Last-responded mr-2 mb-0 text-muted text-muted">
                              2 Days
                            </small>
                          </div>
                        </div>
                      </div>
                      <div className="ticket-actions col-md-2">
                        <div className="btn-group dropdown">
                          <button
                            type="button"
                            className="btn btn-success dropdown-toggle btn-sm"
                            data-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false"
                          >
                            Manage
                        </button>
                          <div className="dropdown-menu">
                            <a className="dropdown-item" href="#">
                              <i className="fa fa-reply fa-fw" />Quick
                              reply
                            </a>
                            <a className="dropdown-item" href="#">
                              <i className="fa fa-history fa-fw" />Another
                              action
                            </a>
                            <div className="dropdown-divider" />
                            <a className="dropdown-item" href="#">
                              <i className="fa fa-check text-success fa-fw" />Resolve
                              Issue
                            </a>
                            <a className="dropdown-item" href="#">
                              <i className="fa fa-times text-danger fa-fw" />Close
                              Issue
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row ticket-card mt-3 pb-2 border-bottom pb-3 mb-3">
                      <div className="col-md-1">
                        <img
                          className="img-sm rounded-circle mb-4 mb-md-0 d-block mx-md-auto"
                          src="/assets/images/faces/face2.jpg"
                          alt="profile image"
                        />
                      </div>
                      <div className="ticket-details col-md-9">
                        <div className="d-flex">
                          <p className="text-dark font-weight-semibold mr-2 mb-0 no-wrap">
                            Stella :
                          </p>
                          <p className="text-primary mr-1 mb-0">
                            [#23135]
                          </p>
                          <p className="mb-0 ellipsis">
                            Curabitur aliquet quam id dui posuere
                            blandit.
                          </p>
                        </div>
                        <p className="text-gray ellipsis mb-2">
                          Pellentesque in ipsum id orci porta dapibus.
                          Sed porttitor lectus nibh. Curabitur non nulla
                          sit amet nisl.
                        </p>
                        <div className="row text-gray d-md-flex d-none">
                          <div className="col-4 d-flex">
                            <small className="mb-0 mr-2 text-muted">
                              Last responded :
                            </small>
                            <small className="Last-responded mr-2 mb-0 text-muted">
                              3 hours ago
                            </small>
                          </div>
                          <div className="col-4 d-flex">
                            <small className="mb-0 mr-2 text-muted">
                              Due in :
                            </small>
                            <small className="Last-responded mr-2 mb-0 text-muted">
                              2 Days
                            </small>
                          </div>
                        </div>
                      </div>
                      <div className="ticket-actions col-md-2">
                        <div className="btn-group dropdown">
                          <button
                            type="button"
                            className="btn btn-success dropdown-toggle btn-sm"
                            data-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false"
                          >
                            Manage
                          </button>
                          <div className="dropdown-menu">
                            <a className="dropdown-item" href="#">
                              <i className="fa fa-reply fa-fw" />Quick
                              reply
                            </a>
                            <a className="dropdown-item" href="#">
                              <i className="fa fa-history fa-fw" />Another
                              action
                            </a>
                          <div className="dropdown-divider" />
                            <a className="dropdown-item" href="#">
                              <i className="fa fa-check text-success fa-fw" />Resolve
                              Issue
                            </a>
                            <a className="dropdown-item" href="#">
                              <i className="fa fa-times text-danger fa-fw" />Close
                              Issue
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row ticket-card mt-3">
                      <div className="col-md-1">
                        <img
                          className="img-sm rounded-circle mb-4 mb-md-0 d-block mx-md-auto"
                          src="/assets/images/faces/face3.jpg"
                          alt="profile image"
                        />
                      </div>
                      <div className="ticket-details col-md-9">
                        <div className="d-flex">
                        <p className="text-dark font-weight-semibold mr-2 mb-0 no-wrap">
                          John Doe :
                        </p>
                        <p className="text-primary mr-1 mb-0">
                          [#23246]
                        </p>
                        <p className="mb-0 ellipsis">
                          Mauris blandit aliquet elit, eget tincidunt
                          nibh pulvinar.
                        </p>
                        </div>
                        <p className="text-gray ellipsis mb-2">
                          Nulla quis lorem ut libero malesuada feugiat.
                          Proin eget tortor risus. Lorem ipsum dolor sit
                          amet.
                        </p>
                        <div className="row text-gray d-md-flex d-none">
                          <div className="col-4 d-flex">
                            <small className="mb-0 mr-2 text-muted">
                              Last responded :
                          </small>
                            <small className="Last-responded mr-2 mb-0 text-muted">
                              3 hours ago
                          </small>
                          </div>
                          <div className="col-4 d-flex">
                            <small className="mb-0 mr-2 text-muted">
                              Due in :
                          </small>
                            <small className="Last-responded mr-2 mb-0 text-muted">
                              2 Days
                          </small>
                          </div>
                        </div>
                      </div>
                      <div className="ticket-actions col-md-2">
                        <div className="btn-group dropdown">
                          <button
                            type="button"
                            className="btn btn-success dropdown-toggle btn-sm"
                            data-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false"
                          >
                              Manage
                          </button>
                          <div className="dropdown-menu">
                            <a className="dropdown-item" href="#">
                              <i className="fa fa-reply fa-fw" />Quick
                              reply
                            </a>
                            <a className="dropdown-item" href="#">
                              <i className="fa fa-history fa-fw" />Another
                              action
                            </a>
                            <div className="dropdown-divider" />
                            <a className="dropdown-item" href="#">
                              <i className="fa fa-check text-success fa-fw" />Resolve
                              Issue
                            </a>
                            <a className="dropdown-item" href="#">
                              <i className="fa fa-times text-danger fa-fw" />Close
                              Issue
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
});

const mapActionToProps = {
};

export default connect(mapStateToProps, mapActionToProps)(Dashboard1);