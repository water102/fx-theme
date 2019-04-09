import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class AccordionsPage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="main-panel">
        <div className="content-wrapper">
          <div className="row">
            <div className="col-lg-6 grid-margin stretch-card">
              <div className="card">
                <div className="card-body">
                  <h4 className="card-title">Basic accordions</h4>
                  <p className="card-description">
                    Use class <code>.basic-accordion</code> for basic
                    accordion
            </p>
                  <div
                    className="accordion basic-accordion"
                    id="accordion"
                    role="tablist"
                  >
                    <div className="card">
                      <div
                        className="card-header"
                        role="tab"
                        id="headingOne"
                      >
                        <h6 className="mb-0">
                          <a
                            data-toggle="collapse"
                            href="#collapseOne"
                            aria-expanded="false"
                            aria-controls="collapseOne"
                            className="collapsed"
                          >
                            <i className="card-icon mdi mdi-checkbox-marked-circle-outline" />How
                      can I pay for an order I placed?
                          </a>
                        </h6>
                      </div>
                      <div
                        id="collapseOne"
                        className="collapse"
                        role="tabpanel"
                        aria-labelledby="headingOne"
                        data-parent="#accordion"
                        style={{}}
                      >
                        <div className="card-body">
                          <div className="row">
                            <div className="col-md-3">
                              <img
                                className="img-fluid rounded"
                                src="https://placehold.it/200x150"
                                alt="image"
                              />
                            </div>
                            <div className="col-md-9">
                              <p>
                                You can pay for the product you have
                                purchased using credit cards, debit cards,
                          or via online banking.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="card">
                      <div
                        className="card-header"
                        role="tab"
                        id="headingTwo"
                      >
                        <h6 className="mb-0">
                          <a
                            className
                            data-toggle="collapse"
                            href="#collapseTwo"
                            aria-expanded="true"
                            aria-controls="collapseTwo"
                          >
                            <i className="card-icon mdi mdi-account-multiple-outline" />I
                      can’t sign in to my account
                          </a>
                        </h6>
                      </div>
                      <div
                        id="collapseTwo"
                        className="collapse show"
                        role="tabpanel"
                        aria-labelledby="headingTwo"
                        data-parent="#accordion"
                        style={{}}
                      >
                        <div className="card-body">
                          <i className="mdi mdi-checkbox-marked-circle-outline mr-3" />If
                          while signing in to your account you see an error
                    message, you can do the following
                          <ol className="pl-3 mt-4">
                            <li>
                              Check your network connection and try again
                      </li>
                            <li>
                              Make sure your account credentials are correct
                              while signing in
                      </li>
                            <li>
                              Check whether your account is accessible in
                              your region
                      </li>
                          </ol>
                          <br />
                          <p className="text-success">
                            <i className="mdi mdi-alert-octagon mr-2" />If
                            the problem persists, you can contact our
                      support.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="card">
                      <div
                        className="card-header"
                        role="tab"
                        id="headingThree"
                      >
                        <h6 className="mb-0">
                          <a
                            className="collapsed"
                            data-toggle="collapse"
                            href="#collapseThree"
                            aria-expanded="false"
                            aria-controls="collapseThree"
                          >
                            <i className="card-icon mdi mdi-message-text-outline" />Can
                      I add money to the wallet?
                          </a>
                        </h6>
                      </div>
                      <div
                        id="collapseThree"
                        className="collapse"
                        role="tabpanel"
                        aria-labelledby="headingThree"
                        data-parent="#accordion"
                      >
                        <div className="card-body">
                          
                          You can add money to the wallet for any future
                          transaction from your bank account using
                          net-banking, or credit/debit card transaction. The
                          money in the wallet can be used for an easier and
                    faster transaction.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 grid-margin stretch-card">
              <div className="card">
                <div className="card-body">
                  <h4 className="card-title">Multi colored outline</h4>
                  <p className="card-description">
                    Use class <code>.accordion-multiple-outline</code> for
                    multiple outlined styling
            </p>
                  <div
                    className="accordion accordion-multiple-outline"
                    id="accordion-2"
                    role="tablist"
                  >
                    <div className="card">
                      <div
                        className="card-header"
                        role="tab"
                        id="headingOne-2"
                      >
                        <h6 className="mb-0">
                          <a
                            data-toggle="collapse"
                            href="#collapseOne-2"
                            aria-expanded="false"
                            aria-controls="collapseOne-2"
                            className="collapsed"
                          >
                            <i className="card-icon mdi mdi-checkbox-marked-circle-outline" />How
                      can I pay for an order I placed?
                          </a>
                        </h6>
                      </div>
                      <div
                        id="collapseOne-2"
                        className="collapse"
                        role="tabpanel"
                        aria-labelledby="headingOne-2"
                        data-parent="#accordion-2"
                        style={{}}
                      >
                        <div className="card-body">
                          <div className="row">
                            <div className="col-md-3">
                              <img
                                className="img-fluid rounded"
                                src="https://placehold.it/200x150"
                                alt="image"
                              />
                            </div>
                            <div className="col-md-9">
                              <p>
                                You can pay for the product you have
                                purchased using credit cards, debit cards,
                          or via online banking.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="card">
                      <div
                        className="card-header"
                        role="tab"
                        id="headingTwo-2"
                      >
                        <h6 className="mb-0">
                          <a
                            className="collapsed"
                            data-toggle="collapse"
                            href="#collapseTwo-2"
                            aria-expanded="false"
                            aria-controls="collapseTwo-2"
                          >
                            <i className="card-icon mdi mdi-account-multiple-outline" />I
                      can’t sign in to my account
                          </a>
                        </h6>
                      </div>
                      <div
                        id="collapseTwo-2"
                        className="collapse"
                        role="tabpanel"
                        aria-labelledby="headingTwo-2"
                        data-parent="#accordion-2"
                      >
                        <div className="card-body">
                          <p>
                            
                            If while signing in to your account you see an
                      error message, you can do the following
                          </p>
                          <ol className="pl-3">
                            <li>
                              Check your network connection and try again
                      </li>
                            <li>
                              Make sure your account credentials are correct
                              while signing in
                      </li>
                            <li>
                              Check whether your account is accessible in
                              your region
                      </li>
                          </ol>
                          <br />
                          <i className="mdi mdi-alert-octagon mr-2" />If the
                          problem persists, you can contact our support.
                  </div>
                      </div>
                    </div>
                    <div className="card">
                      <div
                        className="card-header"
                        role="tab"
                        id="headingThree-2"
                      >
                        <h6 className="mb-0">
                          <a
                            className
                            data-toggle="collapse"
                            href="#collapseThree-2"
                            aria-expanded="true"
                            aria-controls="collapseThree-2"
                          >
                            <i className="card-icon mdi mdi-message-text-outline" />How
                      can I deactivate my account?
                          </a>
                        </h6>
                      </div>
                      <div
                        id="collapseThree-2"
                        className="collapse show"
                        role="tabpanel"
                        aria-labelledby="headingThree-2"
                        data-parent="#accordion-2"
                        style={{}}
                      >
                        <div className="card-body">
                          
                          If you wish to deactivate your account, you can go
                          to the Settings page of your account. Click on
                    Account Settings and then click on Deactivate.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 grid-margin stretch-card">
              <div className="card">
                <div className="card-body">
                  <h4 className="card-title">Multi colored filled</h4>
                  <p className="card-description">
                    Use class <code>.accordion-multiple-filled</code> for
                    multiple filled styling
            </p>
                  <div
                    className="accordion accordion-multiple-filled"
                    id="accordion-3"
                    role="tablist"
                  >
                    <div className="card">
                      <div
                        className="card-header"
                        role="tab"
                        id="headingOne-3"
                      >
                        <h5 className="mb-0">
                          <a
                            data-toggle="collapse"
                            href="#collapseOne-3"
                            aria-expanded="false"
                            aria-controls="collapseOne-3"
                          >
                            
                            Can I transfer the money from the wallet to my
                      bank account?
                          </a>
                        </h5>
                      </div>
                      <div
                        id="collapseOne-3"
                        className="collapse"
                        role="tabpanel"
                        aria-labelledby="headingOne-3"
                        data-parent="#accordion-3"
                      >
                        <div className="card-body">
                          <div className="row">
                            <div className="col-md-3">
                              <img
                                className="img-fluid rounded"
                                src="https://placehold.it/200x150"
                                alt="image"
                              />
                            </div>
                            <div className="col-md-9">
                              <p>
                                You can pay for the product you have
                                purchased using credit cards, debit cards,
                          or via online banking.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="card">
                      <div
                        className="card-header"
                        role="tab"
                        id="headingTwo-3"
                      >
                        <h5 className="mb-0">
                          <a
                            className="collapsed"
                            data-toggle="collapse"
                            href="#collapseTwo-3"
                            aria-expanded="false"
                            aria-controls="collapseTwo-3"
                          >
                            
                            I forgot my account password. What should I do?
                          </a>
                        </h5>
                      </div>
                      <div
                        id="collapseTwo-3"
                        className="collapse"
                        role="tabpanel"
                        aria-labelledby="headingTwo-3"
                        data-parent="#accordion-3"
                        style={{}}
                      >
                        <div className="card-body">
                          <ol className="pl-3">
                            <li>Click on the ‘forgot password’ link.</li>
                            <li>
                              Enter your email address registered with us
                      </li>
                            <li>Click on the link sent you in the email</li>
                            <li>Reset your password</li>
                          </ol>
                        </div>
                      </div>
                    </div>
                    <div className="card">
                      <div
                        className="card-header"
                        role="tab"
                        id="headingThree-3"
                      >
                        <h5 className="mb-0">
                          <a
                            className="collapsed"
                            data-toggle="collapse"
                            href="#collapseThree-3"
                            aria-expanded="false"
                            aria-controls="collapseThree-3"
                          >
                            
                            What should I do if I need any assistance using
                      my account
                          </a>
                        </h5>
                      </div>
                      <div
                        id="collapseThree-3"
                        className="collapse"
                        role="tabpanel"
                        aria-labelledby="headingThree-3"
                        data-parent="#accordion-3"
                      >
                        <div className="card-body">
                          
                          If you need any assistance while using your
                          account, you can contact our customer support via
                          email at support@abc.com. Or you can live chat
                          with our support team. Our support team is
                    available 24*7
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 grid-margin stretch-card">
              <div className="card">
                <div className="card-body">
                  <h4 className="card-title">Inverse Accordion</h4>
                  <p className="card-description">
                    Use class <code>.accordion-inverse-*</code> for
                    <code>.card</code> for inverse styling
            </p>
                  <div
                    className="accordion"
                    id="accordion-4"
                    role="tablist"
                  >
                    <div className="card accordion-inverse-primary">
                      <div
                        className="card-header"
                        role="tab"
                        id="headingOne-4"
                      >
                        <h5 className="mb-0">
                          <a
                            data-toggle="collapse"
                            href="#collapseOne-4"
                            aria-expanded="false"
                            aria-controls="collapseOne-4"
                          >
                            
                            Can I transfer the money from the wallet to my
                      bank account?
                          </a>
                        </h5>
                      </div>
                      <div
                        id="collapseOne-4"
                        className="collapse"
                        role="tabpanel"
                        aria-labelledby="headingOne-4"
                        data-parent="#accordion-4"
                      >
                        <div className="card-body">
                          
                          You can at any time reclaim your money to your
                          bank account that you have registered with us. If
                          there are no registered account, then you can add
                    an account in the ‘Register Bank Account’ page.
                        </div>
                      </div>
                    </div>
                    <div className="card accordion-inverse-primary">
                      <div
                        className="card-header"
                        role="tab"
                        id="headingTwo-4"
                      >
                        <h5 className="mb-0">
                          <a
                            className="collapsed"
                            data-toggle="collapse"
                            href="#collapseTwo-4"
                            aria-expanded="false"
                            aria-controls="collapseTwo-4"
                          >
                            
                            I forgot my account password. What should I do?
                          </a>
                        </h5>
                      </div>
                      <div
                        id="collapseTwo-4"
                        className="collapse"
                        role="tabpanel"
                        aria-labelledby="headingTwo-4"
                        data-parent="#accordion-4"
                      >
                        <div className="card-body">
                          <ol className="pl-3">
                            <li>Click on the ‘forgot password’ link.</li>
                            <li>
                              Enter your email address registered with us
                      </li>
                            <li>Click on the link sent you in the email</li>
                            <li>Reset your password</li>
                          </ol>
                        </div>
                      </div>
                    </div>
                    <div className="card accordion-inverse-primary">
                      <div
                        className="card-header"
                        role="tab"
                        id="headingThree-4"
                      >
                        <h5 className="mb-0">
                          <a
                            className="collapsed"
                            data-toggle="collapse"
                            href="#collapseThree-4"
                            aria-expanded="false"
                            aria-controls="collapseThree-4"
                          >
                            
                            What should I do if I need any assistance using
                      my account
                          </a>
                        </h5>
                      </div>
                      <div
                        id="collapseThree-4"
                        className="collapse"
                        role="tabpanel"
                        aria-labelledby="headingThree-4"
                        data-parent="#accordion-4"
                      >
                        <div className="card-body">
                          
                          If you need any assistance while using your
                          account, you can contact our customer support via
                          email at support@abc.com. Or you can live chat
                          with our support team. Our support team is
                    available 24*7
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 grid-margin stretch-card">
              <div className="card">
                <div className="card-body">
                  <h4 className="card-title">Solid Background</h4>
                  <p className="card-description">
                    Use class <code>.accordion-solid-bg</code> for inverse
                    styling
            </p>
                  <div
                    className="accordion accordion-solid-bg"
                    id="accordion-5"
                    role="tablist"
                  >
                    <div className="card">
                      <div
                        className="card-header"
                        role="tab"
                        id="headingOne-5"
                      >
                        <h5 className="mb-0">
                          <a
                            data-toggle="collapse"
                            href="#collapseOne-5"
                            aria-expanded="false"
                            aria-controls="collapseOne-5"
                          >
                            
                            Can I transfer the money from the wallet to my
                      bank account?
                          </a>
                        </h5>
                      </div>
                      <div
                        id="collapseOne-5"
                        className="collapse"
                        role="tabpanel"
                        aria-labelledby="headingOne-5"
                        data-parent="#accordion-5"
                      >
                        <div className="card-body">
                          <div className="row">
                            <div className="col-md-3">
                              <img
                                className="img-fluid rounded"
                                src="https://placehold.it/200x150"
                                alt="image"
                              />
                            </div>
                            <div className="col-md-9">
                              <p>
                                You can pay for the product you have
                                purchased using credit cards, debit cards,
                          or via online banking.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="card">
                      <div
                        className="card-header"
                        role="tab"
                        id="headingTwo-5"
                      >
                        <h5 className="mb-0">
                          <a
                            className="collapsed"
                            data-toggle="collapse"
                            href="#collapseTwo-5"
                            aria-expanded="false"
                            aria-controls="collapseTwo-5"
                          >
                            
                            I forgot my account password. What should I do?
                          </a>
                        </h5>
                      </div>
                      <div
                        id="collapseTwo-5"
                        className="collapse"
                        role="tabpanel"
                        aria-labelledby="headingTwo-5"
                        data-parent="#accordion-5"
                      >
                        <div className="card-body">
                          <ol className="pl-3">
                            <li>Click on the ‘forgot password’ link.</li>
                            <li>
                              Enter your email address registered with us
                      </li>
                            <li>Click on the link sent you in the email</li>
                            <li>Reset your password</li>
                          </ol>
                        </div>
                      </div>
                    </div>
                    <div className="card">
                      <div
                        className="card-header"
                        role="tab"
                        id="headingThree-5"
                      >
                        <h5 className="mb-0">
                          <a
                            className="collapsed"
                            data-toggle="collapse"
                            href="#collapseThree-5"
                            aria-expanded="false"
                            aria-controls="collapseThree-5"
                          >
                            
                            What should I do if I need any assistance using
                      my account
                          </a>
                        </h5>
                      </div>
                      <div
                        id="collapseThree-5"
                        className="collapse"
                        role="tabpanel"
                        aria-labelledby="headingThree-5"
                        data-parent="#accordion-5"
                      >
                        <div className="card-body">
                          
                          If you need any assistance while using your
                          account, you can contact our customer support via
                          email at support@abc.com. Or you can live chat
                          with our support team. Our support team is
                    available 24*7
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 grid-margin stretch-card">
              <div className="card">
                <div className="card-body">
                  <h4 className="card-title">Body Filled</h4>
                  <p className="card-description">
                    Use class <code>.accordion-body-filled</code> for
                    <code>.card-header</code> for body filled styling
            </p>
                  <div
                    className="accordion accordion-body-filled"
                    id="accordion-6"
                    role="tablist"
                  >
                    <div className="card">
                      <div
                        className="card-header"
                        role="tab"
                        id="headingOne-6"
                      >
                        <h5 className="mb-0">
                          <a
                            data-toggle="collapse"
                            href="#collapseOne-6"
                            aria-expanded="false"
                            aria-controls="collapseOne-6"
                          >
                            
                            Can I transfer the money from the wallet to my
                      bank account?
                          </a>
                        </h5>
                      </div>
                      <div
                        id="collapseOne-6"
                        className="collapse"
                        role="tabpanel"
                        aria-labelledby="headingOne-6"
                        data-parent="#accordion-6"
                      >
                        <div className="card-body">
                          
                          We’ll ensure you always get the best guidance. We
                          serve a clients us every level of their
                    organization
                        </div>
                      </div>
                    </div>
                    <div className="card">
                      <div
                        className="card-header"
                        role="tab"
                        id="headingTwo-6"
                      >
                        <h5 className="mb-0">
                          <a
                            className="collapsed"
                            data-toggle="collapse"
                            href="#collapseTwo-6"
                            aria-expanded="false"
                            aria-controls="collapseTwo-6"
                          >
                            
                            I forgot my account password. What should I do?
                          </a>
                        </h5>
                      </div>
                      <div
                        id="collapseTwo-6"
                        className="collapse"
                        role="tabpanel"
                        aria-labelledby="headingTwo-6"
                        data-parent="#accordion-6"
                      >
                        <div className="card-body">
                          <ol className="pl-3">
                            <li>Click on the ‘forgot password’ link.</li>
                            <li>
                              Enter your email address registered with us
                      </li>
                            <li>Click on the link sent you in the email</li>
                            <li>Reset your password</li>
                          </ol>
                        </div>
                      </div>
                    </div>
                    <div className="card">
                      <div
                        className="card-header"
                        role="tab"
                        id="headingThree-6"
                      >
                        <h5 className="mb-0">
                          <a
                            className="collapsed"
                            data-toggle="collapse"
                            href="#collapseThree-6"
                            aria-expanded="false"
                            aria-controls="collapseThree-6"
                          >
                            
                            What should I do if I need any assistance using
                      my account
                          </a>
                        </h5>
                      </div>
                      <div
                        id="collapseThree-6"
                        className="collapse"
                        role="tabpanel"
                        aria-labelledby="headingThree-6"
                        data-parent="#accordion-6"
                      >
                        <div className="card-body">
                          
                          If you need any assistance while using your
                          account, you can contact our customer support via
                          email at support@abc.com. Or you can live chat
                          with our support team. Our support team is
                    available 24*7
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 grid-margin stretch-card">
              <div className="card">
                <div className="card-body">
                  <h4 className="card-title">Minimal Styled</h4>
                  <p className="card-description">
                    Use class <code>.accordion-minimal</code> for more
                    cleaner look
            </p>
                  <div
                    className="accordion accordion-minimal"
                    id="accordion-7"
                    role="tablist"
                  >
                    <div className="card">
                      <div
                        className="card-header"
                        role="tab"
                        id="headingOne-7"
                      >
                        <h5 className="mb-0">
                          <a
                            data-toggle="collapse"
                            href="#collapseOne-7"
                            aria-expanded="false"
                            aria-controls="collapseOne-7"
                          >
                            
                            Can I transfer the money from the wallet to my
                      bank account?
                          </a>
                        </h5>
                      </div>
                      <div
                        id="collapseOne-7"
                        className="collapse"
                        role="tabpanel"
                        aria-labelledby="headingOne-7"
                        data-parent="#accordion-7"
                      >
                        <div className="card-body">
                          
                          We’ll ensure you always get the best guidance. We
                          serve a clients us every level of their
                    organization
                        </div>
                      </div>
                    </div>
                    <div className="card">
                      <div
                        className="card-header"
                        role="tab"
                        id="headingTwo-7"
                      >
                        <h5 className="mb-0">
                          <a
                            className="collapsed"
                            data-toggle="collapse"
                            href="#collapseTwo-7"
                            aria-expanded="false"
                            aria-controls="collapseTwo-7"
                          >
                            
                            I forgot my account password. What should I do?
                          </a>
                        </h5>
                      </div>
                      <div
                        id="collapseTwo-7"
                        className="collapse"
                        role="tabpanel"
                        aria-labelledby="headingTwo-7"
                        data-parent="#accordion-7"
                      >
                        <div className="card-body">
                          <ol className="pl-3">
                            <li>Click on the ‘forgot password’ link.</li>
                            <li>
                              Enter your email address registered with us
                      </li>
                            <li>Click on the link sent you in the email</li>
                            <li>Reset your password</li>
                          </ol>
                        </div>
                      </div>
                    </div>
                    <div className="card">
                      <div
                        className="card-header"
                        role="tab"
                        id="headingThree-7"
                      >
                        <h5 className="mb-0">
                          <a
                            className="collapsed"
                            data-toggle="collapse"
                            href="#collapseThree-7"
                            aria-expanded="false"
                            aria-controls="collapseThree-7"
                          >
                            
                            What should I do if I need any assistance using
                      my account
                          </a>
                        </h5>
                      </div>
                      <div
                        id="collapseThree-7"
                        className="collapse"
                        role="tabpanel"
                        aria-labelledby="headingThree-7"
                        data-parent="#accordion-7"
                      >
                        <div className="card-body">
                          
                          If you need any assistance while using your
                          account, you can contact our customer support via
                          email at support@abc.com. Or you can live chat
                          with our support team. Our support team is
                    available 24*7
                        </div>
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
  }
}

export default AccordionsPage;