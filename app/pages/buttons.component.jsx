import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class ButtonsPage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="main-panel">
        <div className="content-wrapper">
          <div className="row">
            <div className="col-12 grid-margin">
              <div className="card">
                <div className="row">
                  <div className="col-md-6">
                    <div className="card-body">
                      <h4 className="card-title">Normal buttons</h4>
                      <p className="card-description">
                        Use any of the available button classes to quickly
                        create a styled button.
                </p>
                      <div className="template-demo">
                        <button
                          type="button"
                          className="btn btn-primary btn-fw"
                        >
                          Primary
                  </button>
                        <button
                          type="button"
                          className="btn btn-secondary btn-fw"
                        >
                          Secondary
                  </button>
                        <button
                          type="button"
                          className="btn btn-success btn-fw"
                        >
                          Success
                  </button>
                        <button
                          type="button"
                          className="btn btn-danger btn-fw"
                        >
                          Danger
                  </button>
                        <button
                          type="button"
                          className="btn btn-warning btn-fw"
                        >
                          Warning
                  </button>
                        <button
                          type="button"
                          className="btn btn-info btn-fw"
                        >
                          Info
                  </button>
                        <button
                          type="button"
                          className="btn btn-light btn-fw"
                        >
                          Light
                  </button>
                        <button
                          type="button"
                          className="btn btn-dark btn-fw"
                        >
                          Dark
                  </button>
                        <button
                          type="button"
                          className="btn btn-link btn-fw"
                        >
                          Link
                  </button>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="card-body">
                      <h4 className="card-title">Fab Buttons</h4>
                      <p className="card-description">
                        Use <code>class="btn-icons"</code> or
                        <code>class="btn-icons btn-rounded"</code> for fab
                        styled buttons
                </p>
                      <div className="template-demo">
                        <button
                          type="button"
                          className="btn btn-icons btn-rounded btn-light"
                        >
                          <i className="mdi mdi-home-outline" />
                        </button>
                        <button
                          type="button"
                          className="btn btn-icons btn-rounded btn-secondary"
                        >
                          <i className="mdi mdi-edge" />
                        </button>
                        <button
                          type="button"
                          className="btn btn-icons btn-rounded btn-success"
                        >
                          <i className="mdi mdi-email" />
                        </button>
                        <button
                          type="button"
                          className="btn btn-icons btn-rounded btn-primary"
                        >
                          <i className="mdi mdi-star" />
                        </button>
                        <button
                          type="button"
                          className="btn btn-icons btn-rounded btn-warning"
                        >
                          <i className="mdi mdi-map-marker" />
                        </button>
                        <button
                          type="button"
                          className="btn btn-icons btn-rounded btn-info"
                        >
                          <i className="mdi mdi-code-braces" />
                        </button>
                        <br />
                        <button
                          type="button"
                          className="btn btn-icons btn-inverse-light"
                        >
                          <i className="mdi mdi-home-outline" />
                        </button>
                        <button
                          type="button"
                          className="btn btn-icons btn-inverse-secondary"
                        >
                          <i className="mdi mdi-edge" />
                        </button>
                        <button
                          type="button"
                          className="btn btn-icons btn-inverse-success"
                        >
                          <i className="mdi mdi-email" />
                        </button>
                        <button
                          type="button"
                          className="btn btn-icons btn-inverse-primary"
                        >
                          <i className="mdi mdi-star" />
                        </button>
                        <button
                          type="button"
                          className="btn btn-icons btn-inverse-warning"
                        >
                          <i className="mdi mdi-map-marker" />
                        </button>
                        <button
                          type="button"
                          className="btn btn-icons btn-inverse-info"
                        >
                          <i className="mdi mdi-code-braces" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <div className="card-body">
                      <h4 className="card-title">Outlined buttons</h4>
                      <p className="card-description">
                        Use <code>class="btn-outline-*"</code> for outlined
                        style
                </p>
                      <div className="template-demo">
                        <button
                          type="button"
                          className="btn btn-outline-primary"
                        >
                          Primary
                  </button>
                        <button
                          type="button"
                          className="btn btn-outline-secondary"
                        >
                          Secondary
                  </button>
                        <button
                          type="button"
                          className="btn btn-outline-success"
                        >
                          Success
                  </button>
                        <button
                          type="button"
                          className="btn btn-outline-danger"
                        >
                          Danger
                  </button>
                        <button
                          type="button"
                          className="btn btn-outline-warning"
                        >
                          Warning
                  </button>
                        <button
                          type="button"
                          className="btn btn-outline-info"
                        >
                          Info
                  </button>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="card-body">
                      <h4 className="card-title">Rounded Outlines</h4>
                      <p className="card-description">
                        Use <code>
                          class="btn-outline-* btn-rounded"
                  </code>
                        for rounded outlined style
                </p>
                      <div className="template-demo">
                        <button
                          type="button"
                          className="btn btn-icons btn-rounded btn-outline-light"
                        >
                          <i className="mdi mdi-home-outline" />
                        </button>
                        <button
                          type="button"
                          className="btn btn-icons btn-rounded btn-outline-secondary"
                        >
                          <i className="mdi mdi-edge" />
                        </button>
                        <button
                          type="button"
                          className="btn btn-icons btn-rounded btn-outline-success"
                        >
                          <i className="mdi mdi-email" />
                        </button>
                        <button
                          type="button"
                          className="btn btn-icons btn-rounded btn-outline-primary"
                        >
                          <i className="mdi mdi-star" />
                        </button>
                        <button
                          type="button"
                          className="btn btn-icons btn-rounded btn-outline-warning"
                        >
                          <i className="mdi mdi-map-marker" />
                        </button>
                        <button
                          type="button"
                          className="btn btn-icons btn-rounded btn-outline-info"
                        >
                          <i className="mdi mdi-code-braces" />
                        </button>
                        <br />
                        <button
                          type="button"
                          className="btn btn-icons btn-rounded btn-inverse-outline-light"
                        >
                          <i className="mdi mdi-home-outline" />
                        </button>
                        <button
                          type="button"
                          className="btn btn-icons btn-rounded btn-inverse-outline-secondary"
                        >
                          <i className="mdi mdi-edge" />
                        </button>
                        <button
                          type="button"
                          className="btn btn-icons btn-rounded btn-inverse-outline-success"
                        >
                          <i className="mdi mdi-email" />
                        </button>
                        <button
                          type="button"
                          className="btn btn-icons btn-rounded btn-inverse-outline-primary"
                        >
                          <i className="mdi mdi-star" />
                        </button>
                        <button
                          type="button"
                          className="btn btn-icons btn-rounded btn-inverse-outline-warning"
                        >
                          <i className="mdi mdi-map-marker" />
                        </button>
                        <button
                          type="button"
                          className="btn btn-icons btn-rounded btn-inverse-outline-info"
                        >
                          <i className="mdi mdi-code-braces" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <div className="card-body">
                      <h4 className="card-title">Inverse buttons</h4>
                      <p className="card-description">
                        Use <code>class="btn-inverse-*"</code> for inverse
                        styling
                </p>
                      <div className="template-demo">
                        <button
                          type="button"
                          className="btn btn-inverse-primary btn-fw"
                        >
                          Primary
                  </button>
                        <button
                          type="button"
                          className="btn btn-inverse-secondary btn-fw"
                        >
                          Secondary
                  </button>
                        <button
                          type="button"
                          className="btn btn-inverse-success btn-fw"
                        >
                          Success
                  </button>
                        <button
                          type="button"
                          className="btn btn-inverse-danger btn-fw"
                        >
                          Danger
                  </button>
                        <button
                          type="button"
                          className="btn btn-inverse-warning btn-fw"
                        >
                          Warning
                  </button>
                        <button
                          type="button"
                          className="btn btn-inverse-info btn-fw"
                        >
                          Info
                  </button>
                        <button
                          type="button"
                          className="btn btn-inverse-light btn-fw"
                        >
                          Light
                  </button>
                        <button
                          type="button"
                          className="btn btn-inverse-dark btn-fw"
                        >
                          Dark
                  </button>
                        <button
                          type="button"
                          className="btn btn-link btn-fw"
                        >
                          Link
                  </button>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="card-body">
                      <h4 className="card-title">Button Sizes</h4>
                      <p className="card-description">
                        Use class <code>"btn-lg", "btn-sm"</code> for
                        different sizing
                </p>
                      <div className="template-demo">
                        <button
                          type="button"
                          className="btn btn-light btn-lg"
                        >
                          btn-lg
                  </button>
                        <button type="button" className="btn btn-light">
                          btn-md
                  </button>
                        <button
                          type="button"
                          className="btn btn-light btn-sm"
                        >
                          btn-sm
                  </button>
                        <br />
                        <button
                          type="button"
                          className="btn btn-secondary btn-lg"
                        >
                          btn-lg
                  </button>
                        <button type="button" className="btn btn-info">
                          btn-md
                  </button>
                        <button
                          type="button"
                          className="btn btn-primary btn-sm"
                        >
                          btn-sm
                  </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 grid-margin">
              <div className="card">
                <div className="row">
                  <div className="col-md-6">
                    <div className="card-body">
                      <h4 className="card-title">Rounded filled Buttons</h4>
                      <p className="card-description">
                        Use class <code>.btn-rounded</code> for rounded
                        buttons
                </p>
                      <div className="template-demo">
                        <button
                          type="button"
                          className="btn btn-primary btn-rounded btn-fw"
                        >
                          Primary
                  </button>
                        <button
                          type="button"
                          className="btn btn-secondary btn-rounded btn-fw"
                        >
                          Secondary
                  </button>
                        <button
                          type="button"
                          className="btn btn-success btn-rounded btn-fw"
                        >
                          Success
                  </button>
                        <button
                          type="button"
                          className="btn btn-danger btn-rounded btn-fw"
                        >
                          Danger
                  </button>
                        <button
                          type="button"
                          className="btn btn-warning btn-rounded btn-fw"
                        >
                          Warning
                  </button>
                        <button
                          type="button"
                          className="btn btn-info btn-rounded btn-fw"
                        >
                          Info
                  </button>
                        <button
                          type="button"
                          className="btn btn-light btn-rounded btn-fw"
                        >
                          Light
                  </button>
                        <button
                          type="button"
                          className="btn btn-dark btn-rounded btn-fw"
                        >
                          Dark
                  </button>
                        <button
                          type="button"
                          className="btn btn-link btn-rounded btn-fw"
                        >
                          Link
                  </button>
                      </div>
                    </div>
                    <div className="card-body">
                      <h4 className="card-title">
                        Inverse Rounded buttons
                </h4>
                      <p className="card-description">
                        Use any of the available button classes to quickly
                        create a styled button.
                </p>
                      <div className="template-demo">
                        <button
                          type="button"
                          className="btn btn-inverse-primary btn-rounded btn-fw"
                        >
                          Primary
                  </button>
                        <button
                          type="button"
                          className="btn btn-inverse-secondary btn-rounded btn-fw"
                        >
                          Secondary
                  </button>
                        <button
                          type="button"
                          className="btn btn-inverse-success btn-rounded btn-fw"
                        >
                          Success
                  </button>
                        <button
                          type="button"
                          className="btn btn-inverse-danger btn-rounded btn-fw"
                        >
                          Danger
                  </button>
                        <button
                          type="button"
                          className="btn btn-inverse-warning btn-rounded btn-fw"
                        >
                          Warning
                  </button>
                        <button
                          type="button"
                          className="btn btn-inverse-info btn-rounded btn-fw"
                        >
                          Info
                  </button>
                        <button
                          type="button"
                          className="btn btn-inverse-light btn-rounded btn-fw"
                        >
                          Light
                  </button>
                        <button
                          type="button"
                          className="btn btn-inverse-dark btn-rounded btn-fw"
                        >
                          Dark
                  </button>
                        <button
                          type="button"
                          className="btn btn-inverse-link btn-rounded btn-fw"
                        >
                          Link
                  </button>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="card-body">
                      <h4 className="card-title">Rounded Outlined</h4>
                      <p className="card-description">
                        Use class <code>.btn-rounded</code> for rounded
                        style
                </p>
                      <div className="template-demo">
                        <button
                          type="button"
                          className="btn btn-outline-primary btn-rounded btn-fw"
                        >
                          Primary
                  </button>
                        <button
                          type="button"
                          className="btn btn-outline-secondary btn-rounded btn-fw"
                        >
                          Secondary
                  </button>
                        <button
                          type="button"
                          className="btn btn-outline-success btn-rounded btn-fw"
                        >
                          Success
                  </button>
                        <button
                          type="button"
                          className="btn btn-outline-danger btn-rounded btn-fw"
                        >
                          Danger
                  </button>
                        <button
                          type="button"
                          className="btn btn-outline-warning btn-rounded btn-fw"
                        >
                          Warning
                  </button>
                        <button
                          type="button"
                          className="btn btn-outline-info btn-rounded btn-fw"
                        >
                          Info
                  </button>
                        <button
                          type="button"
                          className="btn btn-outline-light btn-rounded btn-fw"
                        >
                          Light
                  </button>
                        <button
                          type="button"
                          className="btn btn-outline-dark btn-rounded btn-fw"
                        >
                          Dark
                  </button>
                        <button
                          type="button"
                          className="btn btn-outline-link btn-rounded btn-fw"
                        >
                          Link
                  </button>
                      </div>
                    </div>
                    <div className="card-body">
                      <h4 className="card-title">Button Block</h4>
                      <p className="card-description">
                        Use class <code>.btn-block</code> for full width
                        buttons
                </p>
                      <div className="template-demo">
                        <button
                          type="button"
                          className="btn btn-info btn-block"
                        >
                          Block Button
                  </button>
                        <button
                          type="button"
                          className="btn btn-light btn-block"
                        >
                          Block Button
                  </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 grid-margin">
              <div className="card">
                <div className="row">
                  <div className="col-md-6">
                    <div className="card-body">
                      <h4 className="card-title">Grouped buttons</h4>
                      <p className="card-description">
                        These are the different buttons group component
                </p>
                      <div className="template-demo">
                        <div
                          className="btn-group"
                          role="group"
                          aria-label="Basic example"
                        >
                          <button
                            type="button"
                            className="btn btn-outline-secondary"
                          >
                            1
                    </button>
                          <button
                            type="button"
                            className="btn btn-outline-secondary"
                          >
                            2
                    </button>
                          <button
                            type="button"
                            className="btn btn-outline-secondary"
                          >
                            3
                    </button>
                        </div>
                        <div
                          className="btn-group"
                          role="group"
                          aria-label="Basic example"
                        >
                          <button
                            type="button"
                            className="btn btn-outline-secondary"
                          >
                            <i className="mdi mdi-heart-outline" />
                          </button>
                          <button
                            type="button"
                            className="btn btn-outline-secondary"
                          >
                            <i className="mdi mdi-calendar" />
                          </button>
                          <button
                            type="button"
                            className="btn btn-outline-secondary"
                          >
                            <i className="mdi mdi-clock" />
                          </button>
                        </div>
                      </div>
                      <div className="template-demo">
                        <div
                          className="btn-group"
                          role="group"
                          aria-label="Basic example"
                        >
                          <button type="button" className="btn btn-primary">
                            1
                    </button>
                          <button type="button" className="btn btn-primary">
                            2
                    </button>
                          <button type="button" className="btn btn-primary">
                            3
                    </button>
                        </div>
                        <div
                          className="btn-group"
                          role="group"
                          aria-label="Basic example"
                        >
                          <button type="button" className="btn btn-primary">
                            <i className="mdi mdi-heart-outline" />
                          </button>
                          <button type="button" className="btn btn-primary">
                            <i className="mdi mdi-calendar" />
                          </button>
                          <button type="button" className="btn btn-primary">
                            <i className="mdi mdi-clock" />
                          </button>
                        </div>
                      </div>
                      <div className="template-demo">
                        <div
                          className="btn-toolbar"
                          role="toolbar"
                          aria-label="Toolbar with button groups"
                        >
                          <div
                            className="btn-group"
                            role="group"
                            aria-label="First group"
                          >
                            <button type="button" className="btn btn-light">
                              1
                      </button>
                            <button type="button" className="btn btn-light">
                              2
                      </button>
                            <button type="button" className="btn btn-light">
                              3
                      </button>
                          </div>
                          <div
                            className="btn-group"
                            role="group"
                            aria-label="Second group"
                          >
                            <button type="button" className="btn btn-light">
                              5
                      </button>
                            <button type="button" className="btn btn-light">
                              6
                      </button>
                          </div>
                          <div
                            className="btn-group"
                            role="group"
                            aria-label="Third group"
                          >
                            <button type="button" className="btn btn-light">
                              8
                      </button>
                          </div>
                        </div>
                      </div>
                      <div className="template-demo">
                        <div
                          className="btn-toolbar"
                          role="toolbar"
                          aria-label="Toolbar with button groups"
                        >
                          <div
                            className="btn-group"
                            role="group"
                            aria-label="First group"
                          >
                            <button
                              type="button"
                              className="btn btn-primary"
                            >
                              1
                      </button>
                            <button
                              type="button"
                              className="btn btn-primary"
                            >
                              2
                      </button>
                          </div>
                          <div
                            className="btn-group"
                            role="group"
                            aria-label="Second group"
                          >
                            <button
                              type="button"
                              className="btn btn-primary"
                            >
                              5
                      </button>
                            <button
                              type="button"
                              className="btn btn-primary"
                            >
                              6
                      </button>
                            <button
                              type="button"
                              className="btn btn-primary"
                            >
                              7
                      </button>
                          </div>
                          <div
                            className="btn-group"
                            role="group"
                            aria-label="Third group"
                          >
                            <button
                              type="button"
                              className="btn btn-primary"
                            >
                              8
                      </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="card-body">
                      <h4 className="card-title">Icons Buttons</h4>
                      <p className="card-description">
                        Use any of the available button classes to quickly
                        create a styled button.
                </p>
                      <div className="template-demo">
                        <button
                          type="button"
                          className="btn btn-light btn-fw"
                        >
                          <i className="mdi mdi-heart-outline" />Default
                  </button>
                        <button
                          type="button"
                          className="btn btn-primary btn-fw"
                        >
                          <i className="mdi mdi-star-outline" />Primary
                  </button>
                        <button
                          type="button"
                          className="btn btn-success btn-fw"
                        >
                          <i className="mdi mdi-check" />Success
                  </button>
                        <button
                          type="button"
                          className="btn btn-secondary btn-fw"
                        >
                          <i className="mdi mdi-file-document" />Submit
                  </button>
                        <button
                          type="button"
                          className="btn btn-dark btn-fw"
                        >
                          <i className="mdi mdi-cloud-download" />Edit
                  </button>
                        <button
                          type="button"
                          className="btn btn-danger btn-fw"
                        >
                          <i className="mdi mdi-alert-outline" />Warning
                  </button>
                        <button
                          type="button"
                          className="btn btn-info btn-fw"
                        >
                          <i className="mdi mdi-upload" />Upload
                  </button>
                        <button
                          type="button"
                          className="btn btn-success btn-fw"
                        >
                          <i className="mdi mdi-printer" />Print
                  </button>
                        <button
                          type="button"
                          className="btn btn-light btn-fw"
                        >
                          <i className="mdi mdi-refresh" />Reset
                  </button>
                      </div>
                    </div>
                    <div className="card-body">
                      <h4 className="card-title">Outline icons</h4>
                      <p className="card-description">
                        Use any of the available button classes to quickly
                        create a styled button.
                </p>
                      <div className="template-demo">
                        <button
                          type="button"
                          className="btn btn-outline-primary btn-fw"
                        >
                          <i className="mdi mdi-file-document" />Submit
                  </button>
                        <button
                          type="button"
                          className="btn btn-secondary btn-fw"
                        >
                          <i className="mdi mdi-cloud-download" />Edit
                  </button>
                        <button
                          type="button"
                          className="btn btn-outline-danger btn-fw"
                        >
                          <i className="mdi mdi-alert-outline" />Warning
                  </button>
                        <button
                          type="button"
                          className="btn btn-outline-info btn-fw"
                        >
                          <i className="mdi mdi-upload" />Upload
                  </button>
                        <button
                          type="button"
                          className="btn btn-outline-success btn-fw"
                        >
                          <i className="mdi mdi-printer" />Print
                  </button>
                        <button
                          type="button"
                          className="btn btn-outline-light btn-fw"
                        >
                          <i className="mdi mdi-refresh" />Reset
                  </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-6">
                    <div className="card-body">
                      <h4 className="card-title">Social Buttons</h4>
                      <p className="card-description">
                        use class <code>.social-btn</code> for social button
                </p>
                      <div className="template-demo">
                        <button
                          type="button"
                          className="btn social-btn btn-facebook"
                        >
                          <i className="mdi mdi-facebook" />
                        </button>
                        <button
                          type="button"
                          className="btn social-btn btn-twitter"
                        >
                          <i className="mdi mdi-twitter" />
                        </button>
                        <button
                          type="button"
                          className="btn social-btn btn-dribbble"
                        >
                          <i className="mdi mdi-dribbble" />
                        </button>
                        <button
                          type="button"
                          className="btn social-btn btn-linkedin"
                        >
                          <i className="mdi mdi-linkedin" />
                        </button>
                        <button
                          type="button"
                          className="btn social-btn btn-google"
                        >
                          <i className="mdi mdi-google-plus" />
                        </button>
                        <br />
                        <button
                          type="button"
                          className="btn social-btn btn-social-outline-facebook"
                        >
                          <i className="mdi mdi-facebook" />
                        </button>
                        <button
                          type="button"
                          className="btn social-btn btn-social-outline-twitter"
                        >
                          <i className="mdi mdi-twitter" />
                        </button>
                        <button
                          type="button"
                          className="btn social-btn btn-social-outline-dribbble"
                        >
                          <i className="mdi mdi-dribbble" />
                        </button>
                        <button
                          type="button"
                          className="btn social-btn btn-social-outline-linkedin"
                        >
                          <i className="mdi mdi-linkedin" />
                        </button>
                        <button
                          type="button"
                          className="btn social-btn btn-social-outline-google"
                        >
                          <i className="mdi mdi-google-plus" />
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="card-body">
                      <h4 className="card-title">Rounded Social Buttons</h4>
                      <p className="card-description">
                        use class <code>
                          ".social-btn", ".btn-rounded"
                  </code>
                        for social button
                </p>
                      <div className="template-demo">
                        <button
                          type="button"
                          className="btn social-btn btn-rounded btn-facebook"
                        >
                          <i className="mdi mdi-facebook" />
                        </button>
                        <button
                          type="button"
                          className="btn social-btn btn-rounded btn-twitter"
                        >
                          <i className="mdi mdi-twitter" />
                        </button>
                        <button
                          type="button"
                          className="btn social-btn btn-rounded btn-dribbble"
                        >
                          <i className="mdi mdi-dribbble" />
                        </button>
                        <button
                          type="button"
                          className="btn social-btn btn-rounded btn-linkedin"
                        >
                          <i className="mdi mdi-linkedin" />
                        </button>
                        <button
                          type="button"
                          className="btn social-btn btn-rounded btn-google"
                        >
                          <i className="mdi mdi-google-plus" />
                        </button>
                        <br />
                        <button
                          type="button"
                          className="btn social-btn btn-rounded btn-social-outline-facebook"
                        >
                          <i className="mdi mdi-facebook" />
                        </button>
                        <button
                          type="button"
                          className="btn social-btn btn-rounded btn-social-outline-twitter"
                        >
                          <i className="mdi mdi-twitter" />
                        </button>
                        <button
                          type="button"
                          className="btn social-btn btn-rounded btn-social-outline-dribbble"
                        >
                          <i className="mdi mdi-dribbble" />
                        </button>
                        <button
                          type="button"
                          className="btn social-btn btn-rounded btn-social-outline-linkedin"
                        >
                          <i className="mdi mdi-linkedin" />
                        </button>
                        <button
                          type="button"
                          className="btn social-btn btn-rounded btn-social-outline-google"
                        >
                          <i className="mdi mdi-google-plus" />
                        </button>
                      </div>
                    </div>
                  </div>
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

export default ButtonsPage;