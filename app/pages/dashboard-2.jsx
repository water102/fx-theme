import React, { Component } from 'react';
import { connect } from 'react-redux';

class Dashboard2 extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="main-panel">
        <div className="content-wrapper">
          <div className="row">
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
                            <h3 className="mb-0 font-weight-medium">65,650</h3>
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
                            <h3 className="mb-0 font-weight-medium">32,604</h3>
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
                            <h3 className="mb-0 font-weight-medium">17,583</h3>
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
                            <h3 className="mb-0 font-weight-medium">61,119</h3>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-7 grid-margin stretch-card">
              <div className="card">
                <div className="card-body">
                  <h4 className="card-title">Visitors Statistics</h4>
                  <div className="row dashboard-bar-chart-legend mt-5 mb-3">
                    <div className="col">
                      <h2>13</h2>
                      <small className="text-muted">SNOOZED</small>
                      <div className="bg" />
                    </div>
                    <div className="col">
                      <h2>45</h2>
                      <small className="text-muted">COMPLETED</small>
                      <div className="bg" />
                    </div>
                    <div className="col">
                      <h2>24</h2>
                      <small className="text-muted">OVERDUE</small>
                      <div className="bg" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-5 grid-margin stretch-card">
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
                            <small className="text-muted"> Profile App </small>
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
                            <small className="text-muted"> admin logo </small>
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
                            <small className="text-muted"> Profile App </small>
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
          </div>
          <div className="row">
            <div className="col-md-6 col-lg-4 grid-margin stretch-card">
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
                      <small className="text-muted ml-2">San Diego, CA</small>
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
                <div className="col-sm-6 col-md-12 grid-margin stretch-card">
                  <div className="card">
                    <div className="card-body">
                      <p className="font-weight-medium">Sales Statistics</p>
                      <div className="d-flex justify-content-between mt-2">
                        <small className="text-muted">Dashboard</small>
                        <small className="text-info">73%</small>
                      </div>
                      <div className="progress progress-md mt-2">
                        <div
                          className="progress-bar bg-info"
                          role="progressbar"
                          style={{ width: "73%" }}
                          aria-valuenow={73}
                          aria-valuemin={0}
                          aria-valuemax={100}
                        />
                      </div>
                      <p className="mt-4 font-weight-medium">Monthly Sales</p>
                      <div className="d-flex justify-content-between mt-2">
                        <small className="text-muted">Charts</small>
                        <small className="text-primary">30%</small>
                      </div>
                      <div className="progress progress-md mt-2">
                        <div
                          className="progress-bar bg-primary"
                          role="progressbar"
                          style={{ width: "30%" }}
                          aria-valuenow={30}
                          aria-valuemin={0}
                          aria-valuemax={100}
                        />
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

                      Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                      Aenean commodo ligula eget dolor. Lorem
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
          </div>
          <div className="row">
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
          </div>
          <div className="row">
            <div className="col-12 grid-margin">
              <div className="card">
                <div className="card-body">
                  <h4 className="card-title">Ticket Comments</h4>
                  <div className="table-responsive">
                    <table className="table table-bordered">
                      <thead>
                        <tr>
                          <th>Assigned</th>
                          <th>Latest Comment</th>
                          <th>Last reply</th>
                          <th>Impact</th>
                          <th>Status</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>
                            <div className="form-check form-check-flat">
                              <label className="form-check-label">
                                <input
                                  type="checkbox"
                                  className="form-check-input"
                                />
                                <img
                                  className="mr-2"
                                  src="/assets/images/faces/face14.jpg"
                                  alt="profile image"
                                />
                                Benjamin Bowman <i className="input-helper" />
                              </label>
                            </div>
                          </td>
                          <td>How To Write Better Advertising Copy</td>
                          <td>10-12-2018</td>
                          <td>$15,000</td>
                          <td>
                            <div className="badge badge-success" />Active
                </td>
                        </tr>
                        <tr>
                          <td>
                            <div className="form-check form-check-flat">
                              <label className="form-check-label">
                                <input
                                  type="checkbox"
                                  className="form-check-input"
                                  defaultChecked
                                />
                                <img
                                  className="mr-2"
                                  src="/assets/images/faces/face4.jpg"
                                  alt="profile image"
                                />
                                Mark Pope <i className="input-helper" />
                              </label>
                            </div>
                          </td>
                          <td>Influencing The Influencer</td>
                          <td>10-12-2018</td>
                          <td>$210,000</td>
                          <td>
                            <div className="badge badge-danger" />Closed
                </td>
                        </tr>
                        <tr>
                          <td>
                            <div className="form-check form-check-flat">
                              <label className="form-check-label">
                                <input
                                  type="checkbox"
                                  className="form-check-input"
                                />
                                <img
                                  className="mr-2"
                                  src="/assets/images/faces/face7.jpg"
                                  alt="profile image"
                                />
                                Ian Brown <i className="input-helper" />
                              </label>
                            </div>
                          </td>
                          <td>The Universe Through A Child S Eyes</td>
                          <td>10-12-2018</td>
                          <td>$543,000</td>
                          <td>
                            <div className="badge badge-warning" />Pending
                </td>
                        </tr>
                        <tr>
                          <td>
                            <div className="form-check form-check-flat">
                              <label className="form-check-label">
                                <input
                                  type="checkbox"
                                  className="form-check-input"
                                />
                                <img
                                  className="mr-2"
                                  src="/assets/images/faces/face9.jpg"
                                  alt="profile image"
                                />
                                Chase Mullins <i className="input-helper" />
                              </label>
                            </div>
                          </td>
                          <td>Trade Show Promotions</td>
                          <td>10-12-2018</td>
                          <td>$925,000</td>
                          <td>
                            <div className="badge badge-success" />Active
                </td>
                        </tr>
                      </tbody>
                    </table>
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

export default connect(mapStateToProps, mapActionToProps)(Dashboard2);